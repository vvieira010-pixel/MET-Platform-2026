/* supabase-gate.js — Reads Supabase session from SPA's localStorage and validates it.
   Redirects to the SPA login if no valid session is found.
   Exposes window.MET_SUPABASE for use by other scripts. */
(function () {
  'use strict';

  var SESSION_KEY = 'vv:supabase_session';
  var SPA_ORIGIN = (function () {
    try { return localStorage.getItem('met:spa:origin') || window.location.origin.replace(/:\d+/, ''); } catch (_) { return window.location.origin; }
  })();
  var SPA_LOGIN_URL = SPA_ORIGIN + '/';

  var SUPABASE_URL = 'https://grnzzgzqizoxfcbflnwq.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdybnp6Z3pxaXpveGZjYmZsbndxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1ODQ0MzcsImV4cCI6MjA5NjE2MDQzN30.5T7xFRlbJ9GQX9WvhJ5o2nIDgp3T99fJeGk5wCpuVnI';

  function readSession() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      var session = JSON.parse(raw);
      if (!session || !session.access_token) return null;
      if (session.expires_at && session.expires_at <= Math.floor(Date.now() / 1000)) {
        localStorage.removeItem(SESSION_KEY);
        return null;
      }
      return session;
    } catch (_) { return null; }
  }

  function parseJwt(token) {
    try {
      var payload = token.split('.')[1];
      var padded = payload.replace(/-/g, '+').replace(/_/g, '/');
      while (padded.length % 4) padded += '=';
      return JSON.parse(atob(padded));
    } catch (_) { return null; }
  }

  function buildHeaders(accessToken) {
    return {
      apikey: SUPABASE_ANON_KEY,
      Authorization: 'Bearer ' + (accessToken || SUPABASE_ANON_KEY),
      'Content-Type': 'application/json',
    };
  }

  var session = readSession();
  var claims = session ? parseJwt(session.access_token) : null;
  var userEmail = (session && session.user && session.user.email) || (claims && claims.email) || '';
  var userId = (session && session.user && session.user.id) || (claims && claims.sub) || '';
  var isAuthenticated = Boolean(session && claims && claims.role === 'authenticated');

  window.MET_SUPABASE = {
    session: session,
    claims: claims,
    userEmail: userEmail,
    userId: userId,
    isAuthenticated: isAuthenticated,
    supabaseUrl: SUPABASE_URL,
    anonKey: SUPABASE_ANON_KEY,
    buildHeaders: buildHeaders,
    restUrl: function (path) { return SUPABASE_URL + '/rest/v1/' + path; },
    storageUrl: function (bucket, path) { return SUPABASE_URL + '/storage/v1/object/' + bucket + '/' + path; },
  };

  if (!isAuthenticated) {
    var redirect = SPA_LOGIN_URL + '#mock-test-2';
    try { localStorage.setItem('met:auth:redirect', window.location.href); } catch (_) {}
    window.location.replace(redirect);
  }
})();
