/* ============================================================
   met-speaking.js — MET Speaking Section Shared Engine
   Handles: prompt auto-play, prep/speak countdowns, mic,
   MediaRecorder, waveform, task flow
   ============================================================ */
(function () {
  'use strict';

  var SPEAKING_PROMPT_DELAY_MS = 3000;
  var micStream = null;
  var activeRecorder = null;
  var activeRecordTimeout = null;
  var activeRecordingTask = null;
  var activeStoppedByTimeout = false;
  var beginCueTimeout = null;
  var recordingChunks = {};
  var _onTimerEnded = null;
  var _micRequested = false;

  function getTaskTiming(taskIndex) {
    if (taskIndex === 4 || taskIndex === 5) return { prepSeconds: 0, speakSeconds: 90 };
    return { prepSeconds: 0, speakSeconds: 60 };
  }

  function autoPlayPrompt(pageIdxOrEl, onEnded) {
    var page = (typeof pageIdxOrEl === 'object') ? pageIdxOrEl : document.querySelector('[data-met-page="' + pageIdxOrEl + '"]');
    if (!page) return false;
    var audio = page.querySelector('audio');
    if (!audio) return false;

    var done = false;
    var audioPlaying = false;

    function fireOnEnded() {
      if (done) return;
      done = true;
      audioPlaying = false;
      audio.removeEventListener('ended', onAudioEnded);
      if (typeof onEnded === 'function') onEnded();
    }

    function onAudioEnded() {
      if (!audioPlaying) return;
      audioPlaying = false;
      fireOnEnded();
    }

    function warmMic() {
      // Pre-warm mic at the earliest user gesture point so it's cached
      // when startTaskRecording needs it (which runs from a setTimeout).
      if (!micStream) ensureMicPermission().catch(function () {});
    }

    function showPlayPrompt() {
      if (done) return;
      var existing = page.querySelector('.met-speaking-play-prompt');
      if (existing) return;
      var btn = document.createElement('button');
      btn.className = 'met-speaking-play-prompt';
      btn.textContent = '▶ Play Prompt';
      btn.setAttribute('aria-label', 'Play the audio prompt for this task');
      btn.onclick = function () {
        btn.remove();
        warmMic();
        audioPlaying = true;
        audio.addEventListener('ended', onAudioEnded);
        audio.currentTime = 0;
        audio.play().catch(function () { fireOnEnded(); });
      };
      var label = page.querySelector('.met-task-label, .met-question-text');
      if (label) {
        label.parentNode.insertBefore(btn, label.nextSibling);
      } else {
        page.insertBefore(btn, page.firstChild);
      }
    }

    audio.addEventListener('ended', onAudioEnded);
    audioPlaying = true;
    audio.currentTime = 0;
    audio.play().then(warmMic).catch(function () {
      // Autoplay blocked by browser — show a clickable play button
      audioPlaying = false;
      showPlayPrompt();
    });

    // Safety timeout — proceed after ~10s even if audio never played/ended
    setTimeout(function () {
      warmMic();
      fireOnEnded();
    }, SPEAKING_PROMPT_DELAY_MS + 7000);
    return true;
  }

  function setRecordingStatus(taskIndex, labelText) {
    var panel = document.getElementById('spk-capture-panel-' + taskIndex);
    if (!panel) return;
    var label = panel.querySelector('.met-recording-label');
    if (label) label.textContent = labelText;
  }

  async function ensureMicPermission() {
    if (micStream) return micStream;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('Microphone recording is not supported in this browser.');
    }
    // Allow retry if previous attempt failed (no need to show permission dialog again —
    // browser remembers the grant). micStream will be null if it failed before.
    if (!_micRequested) {
      _micRequested = true;
      try {
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (e) {
        _micRequested = false; // reset so next call can retry
        throw e;
      }
    } else {
      // Already attempted once but stream is null — browser may have auto-granted by now
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    }
    return micStream;
  }

  function stopActiveRecording() {
    if (activeRecordTimeout) { clearTimeout(activeRecordTimeout); activeRecordTimeout = null; }
    if (activeRecorder && activeRecorder.state !== 'inactive') activeRecorder.stop();
    activeRecorder = null; activeRecordingTask = null; activeStoppedByTimeout = false;
  }

  function _autoAdvanceSpeaking(taskIndex) {
    var nextBtn = document.getElementById('met-btn-next');
    if (!nextBtn || nextBtn.disabled) return;

    var pauseLink = document.querySelector('[data-next-section][data-pause]');
    if (pauseLink) {
      var overlay = document.getElementById('met-speaking-break');
      if (overlay) overlay.style.display = 'flex';
    } else {
      setTimeout(function () { if (!nextBtn.disabled) nextBtn.click(); }, 2000);
    }
  }

  async function startTaskRecording(taskIndex, seconds) {
    stopActiveRecording();
    try {
      var stream = await ensureMicPermission();
      var chunks = [];
      var recorder = new MediaRecorder(stream);
      activeRecorder = recorder; activeRecordingTask = taskIndex; activeStoppedByTimeout = false;
      setRecordingStatus(taskIndex, 'Recording');
      recorder.ondataavailable = function (e) {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };
      recorder.onstop = function () {
        recordingChunks[taskIndex] = chunks;
        if (typeof uploadSpeakingRecording === 'function') uploadSpeakingRecording(taskIndex, chunks);
        if (activeStoppedByTimeout) {
          setRecordingStatus(taskIndex, 'Recording finished (time up)');
          setTimeout(function () { setRecordingStatus(taskIndex, 'Saved'); _autoAdvanceSpeaking(taskIndex); }, 450);
        } else {
          setRecordingStatus(taskIndex, 'Saved');
        }
      };
      recorder.start();
      activeRecordTimeout = setTimeout(function () {
        if (activeRecorder === recorder && recorder.state !== 'inactive') {
          activeStoppedByTimeout = true; recorder.stop();
        }
      }, seconds * 1000);
    } catch (error) {
      console.error('Microphone permission/recording error:', error);
      var panel = document.getElementById('spk-capture-panel-' + taskIndex);
      if (panel) panel.style.display = '';
      setRecordingStatus(taskIndex, 'Microphone access denied — allow mic and reload the page.');
    }
  }

  function startSpeakingTask(taskIndex) {
    var timing = getTaskTiming(taskIndex);
    var begin = document.getElementById('spk-begin-' + taskIndex);
    if (beginCueTimeout) { clearTimeout(beginCueTimeout); beginCueTimeout = null; }

    function startSpeakPhase() {
      if (begin) begin.style.display = '';
      METShell.startSpeakingTimer(timing.speakSeconds, 'spk-countdown-bar-' + taskIndex, 'spk-countdown-label-' + taskIndex);
      var panel = document.getElementById('spk-capture-panel-' + taskIndex);
      setTimeout(function () {
        if (panel) panel.style.display = '';
        METShell.startWaveform('spk-waveform-' + taskIndex);
        startTaskRecording(taskIndex, timing.speakSeconds);
      }, 2000);
    }

    if (timing.prepSeconds > 0) {
      METShell.startSpeakingPrepThenTimer(
        timing.prepSeconds, timing.speakSeconds,
        'spk-prep-bar-' + taskIndex, 'spk-prep-label-' + taskIndex,
        'spk-countdown-bar-' + taskIndex, 'spk-countdown-label-' + taskIndex,
        startSpeakPhase
      );
    } else {
      startSpeakPhase();
    }
  }

  function getTaskNumFromPage(pageEl) {
    if (!pageEl) return NaN;
    return parseInt(pageEl.dataset.metPage, 10);
  }

  function isTaskNum(taskNum) {
    return Number.isInteger(taskNum) && taskNum >= 1 && taskNum <= 5;
  }

  function triggerTaskFlow(page, taskNum) {
    if (!page || !isTaskNum(taskNum) || page.dataset.autoStarted === '1') return;
    page.dataset.autoStarted = '1';
    var timing = getTaskTiming(taskNum);
    if (timing.prepSeconds > 0) {
      var prepMsg = page.querySelector('.spk-prepare-msg');
      if (prepMsg) prepMsg.style.display = '';
    }
    var promptStarted = autoPlayPrompt(page, function () { startSpeakingTask(taskNum); });
    if (!promptStarted) startSpeakingTask(taskNum);
  }

  function onPageChanged(e) {
    var idx = e.detail && e.detail.pageIndex;
    var pages = document.querySelectorAll('[data-met-page]');
    var page = pages[idx] || null;
    var taskNum = getTaskNumFromPage(page);
    if (beginCueTimeout) { clearTimeout(beginCueTimeout); beginCueTimeout = null; }
    if (!isTaskNum(taskNum)) { stopActiveRecording(); return; }
    triggerTaskFlow(page, taskNum);
  }

  function showTimeUpModal() {
    var modal = document.getElementById('met-modal-loading');
    if (modal) {
      var header = modal.querySelector('.met-modal__header');
      var body = modal.querySelector('.met-modal__body p');
      var spinner = modal.querySelector('.met-loading-spinner');
      if (header) header.textContent = 'Time is up!';
      if (body) body.textContent = 'Your speaking section has ended.';
      if (spinner) spinner.style.display = 'none';
      modal.style.display = '';
    }
  }

  function onTimerEnded() {
    if (typeof _onTimerEnded === 'function') {
      _onTimerEnded();
    } else {
      showTimeUpModal();
    }
  }

  window.METSpeaking = {
    init: function (opts) {
      opts = opts || {};
      _onTimerEnded = opts.onTimerEnded || null;
      document.addEventListener('METPageChanged', onPageChanged);
      document.addEventListener('METTimerEnded', onTimerEnded);
      var pages = document.querySelectorAll('[data-met-page]');
      if (pages.length > 0) {
        var page = pages[0];
        var taskNum = getTaskNumFromPage(page);
        if (isTaskNum(taskNum)) triggerTaskFlow(page, taskNum);
      }
    },
    startSpeakingTask: startSpeakingTask,
    ensureMicPermission: ensureMicPermission,
    startTaskRecording: startTaskRecording,
    setRecordingStatus: setRecordingStatus,
    stopActiveRecording: stopActiveRecording,
    autoPlayPrompt: autoPlayPrompt
  };
})();
