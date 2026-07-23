/* submit-results.js — Submits mock test results to the platform's Supabase backend.
   Replaces Netlify Form submission. Uploads speaking recordings to Supabase Storage.
   Requires supabase-gate.js to be loaded first (sets window.MET_SUPABASE). */
(function () {
  'use strict';

  var ANSWERS_KEY = 'met:answers:v1';

  var TIMER_KEYS = {
    reading: 'met:timer:reading',
    listening: 'met:timer:listening',
    speaking: 'met:timer:speaking',
    writing: 'met:timer:writing',
  };

  function getAnswers() {
    try { return JSON.parse(localStorage.getItem(ANSWERS_KEY) || '{}'); } catch (_) { return {}; }
  }

  function filterByPrefix(answers, prefix) {
    var out = {};
    Object.keys(answers).forEach(function (k) {
      if (k.indexOf(prefix) === 0) out[k] = answers[k];
    });
    return out;
  }

  function getCompletedSections() {
    var completed = [];
    Object.keys(TIMER_KEYS).forEach(function (sec) {
      try {
        var snap = JSON.parse(localStorage.getItem(TIMER_KEYS[sec]) || 'null');
        if (snap) completed.push(sec);
      } catch (_) {}
    });
    return completed;
  }

  window.MET_SUBMIT = {
    submit: async function () {
      var supa = window.MET_SUPABASE;
      if (!supa || !supa.isAuthenticated) {
        throw new Error('Not authenticated. Please sign in first.');
      }

      var answers = getAnswers();
      var readingAnswers = filterByPrefix(answers, 'met:timer:reading');
      var listeningAnswers = filterByPrefix(answers, 'met:timer:listening');
      var writingAnswers = filterByPrefix(answers, 'met:timer:writing');

      var readingResult = null;
      var listeningResult = null;
      try {
        readingResult = JSON.parse(localStorage.getItem('met:score:reading') || 'null');
        listeningResult = JSON.parse(localStorage.getItem('met:score:listening') || 'null');
      } catch (_) {}

      var rCor = (readingResult && readingResult.correct) || 0;
      var rTot = (readingResult && readingResult.total) || 0;
      var lCor = (listeningResult && listeningResult.correct) || 0;
      var lTot = (listeningResult && listeningResult.total) || 0;
      var totalCorrect = rCor + lCor;
      var totalPossible = rTot + lTot;
      var pct = totalPossible > 0 ? Math.round((totalCorrect / totalPossible) * 100) : 0;

      var cefrLevel = '';
      var cefrLabel = '';
      if (typeof window.METCefr !== 'undefined') {
        var cefrResult = window.METCefr.computeFinalCefr();
        if (cefrResult) {
          cefrLevel = cefrResult.level || '';
          cefrLabel = cefrResult.label || '';
        }
      }

      var studentName = '';
      var studentEmail = supa.userEmail || '';
      try {
        studentName = localStorage.getItem('met:student:name') || '';
        if (!studentName) studentName = supa.claims && supa.claims.user_metadata ? (supa.claims.user_metadata.display_name || '') : '';
      } catch (_) {}

      var completed = getCompletedSections();
      var recordId = 'mt2_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);

      var speakingRecordings = {};
      try {
        speakingRecordings = JSON.parse(localStorage.getItem('met:speaking:uploaded') || '{}');
      } catch (_) {}

      var payload = {
        id: recordId,
        studentId: supa.userId || '',
        studentName: studentName,
        studentEmail: studentEmail,
        testId: 'mock-test-2',
        testTitle: 'MET Mock Test 2',
        answers: {
          reading: readingAnswers,
          listening: listeningAnswers,
          writing: writingAnswers,
        },
        scores: {
          reading: { total: rCor, max: rTot },
          listening: { total: lCor, max: lTot },
        },
        speakingRecordings: speakingRecordings,
        cefr: cefrLevel,
        cefrLabel: cefrLabel,
        cefrPercentage: pct,
        sectionsCompleted: completed,
        submittedAt: new Date().toISOString(),
        source: 'standalone-mock-test-2',
      };

      var res = await fetch(supa.restUrl('mock_test_results'), {
        method: 'POST',
        headers: supa.buildHeaders(supa.session.access_token),
        body: JSON.stringify({
          teacher_id: supa.userId,
          student_id: supa.userId,
          test_id: 'mock-test-2',
          content: payload,
          created_at: payload.submittedAt,
        }),
      });

      if (!res.ok) {
        var errText = await res.text().catch(function () { return ''; });
        throw new Error('Supabase save failed: ' + res.status + ' ' + errText);
      }

      try { localStorage.setItem('met:mock2:submission', JSON.stringify(payload)); } catch (_) {}
      Object.keys(TIMER_KEYS).forEach(function (k) { try { localStorage.removeItem(TIMER_KEYS[k]); } catch (_) {} });
      try { localStorage.removeItem(ANSWERS_KEY); } catch (_) {}
      try { localStorage.removeItem('met:speaking:uploaded'); } catch (_) {}

      return payload;
    },
  };
})();
