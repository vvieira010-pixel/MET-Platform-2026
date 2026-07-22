import { useState, useEffect } from 'react';
import {
  signInWithPassword,
  storeSupabaseSession, getSupabaseConfig,
  resetPasswordForEmail,
} from '../lib/supabase-storage.js';
import { Icon } from '../components/shared.jsx';

export default function LoginScreen({ onSignIn }) {
  const [mode, setMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const supabaseReady = getSupabaseConfig().isConfigured;
  const isReset = mode === 'reset';

  useEffect(() => {
    try {
      const notice = localStorage.getItem('vv:auth_notice');
      if (notice) { setError(notice); localStorage.removeItem('vv:auth_notice'); }
    } catch { }
  }, []);

  const switchMode = (next) => {
    if (loading) return;
    setError('');
    setResetSent(false);
    setMode(next);
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setEmailError('Enter your email address.');
    } else if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (!password.trim()) {
      setPasswordError('Enter your password.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setError('');

    if (isReset) {
      if (!email.trim()) { setError('Enter your email address.'); return; }
      if (!supabaseReady) { setError("Access isn't set up yet. Contact your teacher to get started."); return; }
      setLoading(true);
      try {
        await resetPasswordForEmail(email.trim(), window.location.origin + window.location.pathname);
        setResetSent(true);
      } catch (err) {
        setError(err.message || 'Could not send reset link. Try again or contact your teacher.');
      }
      setLoading(false);
      return;
    }

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.');
      return;
    }
    if (!supabaseReady) {
      setError("Access isn't set up yet. Contact your teacher to get started.");
      return;
    }
    setLoading(true);
    try {
      const session = await signInWithPassword(email.trim(), password);
      storeSupabaseSession(session);
      if (onSignIn) onSignIn(session);
    } catch (err) {
      const msg = err.message || '';
      if (msg.toLowerCase().includes('rate limit')) {
        setError('Too many attempts. Please wait a few minutes before trying again.');
      } else if (msg.toLowerCase().includes('not configured')) {
        setError('System configuration error. Please contact your teacher or support.');
      } else if (msg.toLowerCase().includes('invalid') || msg.toLowerCase().includes('incorrect')) {
        setError('Incorrect email or password. Try again or contact your teacher.');
      } else {
        setError(msg || 'An unexpected error occurred. Please try again.');
      }
      setLoading(false);
    }
  };

const renderSignInPanel = () => {
    if (isReset && resetSent) {
      return (
        <section className="lp-signin-panel" aria-label="Sign in">
          <div className="lp-signin-card">
            <div className="lp-signin-header">
              <h2>Check your inbox.</h2>
              <p>We sent a sign-in link to <em>{email}</em>. Open it to access your account. The link expires in 1 hour.</p>
            </div>
            <div className="lp-toggle">
              <button type="button" onClick={() => switchMode('signin')} disabled={loading}>
                Back to sign in
              </button>
            </div>
            <div className="lp-footer">
              MET Proficiency Mastery · Your English learning workspace
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="lp-signin-panel" aria-label="Sign in">
        <div className="lp-signin-card">
          <div className="lp-signin-header">
            <div className="lp-signin-title">
              <h2>{isReset ? 'Reset password' : 'Welcome back'}</h2>
              <p>{isReset ? "Enter your email and we'll send you a sign-in link." : 'Please enter your credentials.'}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="lp-signin-form">
            <div className="lp-field lp-entrance lp-entrance--4">
              <label className="lp-label" htmlFor="lp-email">Email</label>
              <input
                id="lp-email"
                className={`lp-input${emailError ? ' lp-input--error' : ''}`}
                type="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setEmailError(''); }}
                onBlur={handleEmailBlur}
                disabled={loading}
                autoFocus
              />
              {emailError && (
                <span className="lp-field-error" role="alert">{emailError}</span>
              )}
            </div>

            {!isReset && (
              <div className="lp-field lp-entrance lp-entrance--4">
                <label className="lp-label" htmlFor="lp-password">Password</label>
                <div className="secret-input">
                  <input
                    id="lp-password"
                    className={`lp-input${passwordError ? ' lp-input--error' : ''}`}
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setPasswordError(''); }}
                    onBlur={handlePasswordBlur}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className={`secret-toggle${showPassword ? ' active' : ''}`}
                    onClick={() => setShowPassword(v => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <Icon.eye size={16} />
                  </button>
                </div>
                {passwordError && (
                  <span className="lp-field-error" role="alert">{passwordError}</span>
                )}
              </div>
            )}

            {!isReset && (
              <label className="lp-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                <span>Remember me</span>
              </label>
            )}

            {error && (
              <div className="lp-error" role="alert" aria-live="polite">{error}</div>
            )}

            <div className="lp-entrance lp-entrance--5">
              <button
                type="submit"
                className={`lp-submit${loading ? ' lp-submit--loading' : ''}`}
                disabled={loading}
              >
                {loading ? <><span className="lp-spinner" />{isReset ? 'Sending...' : 'Signing in...'}</> : (isReset ? 'Send link' : 'Sign in')}
              </button>
            </div>
          </form>

          {!isReset && (
            <div className="lp-forgot">
              <button type="button" onClick={() => switchMode('reset')} disabled={loading}>
                Forgot password?
              </button>
            </div>
          )}

          {!isReset && (
            <div className="lp-signup-hint">
              Don't have an account? Contact your teacher to get started.
            </div>
          )}

          {isReset && (
            <div className="lp-toggle">
              Remember it?
              <button type="button" onClick={() => switchMode('signin')} disabled={loading}>
                Back to sign in
              </button>
            </div>
          )}

          <div className="lp-footer">
            MET Proficiency Mastery · Your English learning workspace
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="lp-root bg-grain">
      <div className="lp-signin-wrapper">
        {renderSignInPanel()}
      </div>
    </div>
  );
}