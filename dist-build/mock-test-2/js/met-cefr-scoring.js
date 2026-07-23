(function () {
  'use strict';

  var CEFR_BANDS = [
    { min: 68, max: 80, level: 'C1', label: 'Proficient user', desc: 'Can understand subtle meaning, complex detail, and more demanding texts across different genres and contexts.' },
    { min: 58, max: 67, level: 'B2 strong (target)', label: 'Strong independent user', desc: 'Can handle most B2 tasks with confidence and begin to manage more complex inference, global meaning, and multi-step evidence, but is not yet fully C1.' },
    { min: 40, max: 57, level: 'B2', label: 'Independent user', desc: 'Can understand main ideas, detail, and many inference questions, but may still miss subtle language or more complex connections.' },
    { min: 21, max: 39, level: 'B1', label: 'Starting independent user', desc: 'Can handle everyday language, simple details, and familiar topics, but still struggles with deeper inference and complex ideas.' },
    { min: 0,  max: 20, level: 'A2', label: 'Basic user', desc: 'Can understand simple, familiar information and answer clear, direct questions.' }
  ];

  function collectResults(sectionKey) {
    var storageKey = 'met:answers:v1';
    var raw;
    try { raw = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (_) { raw = {}; }

    var pages = document.querySelectorAll('[data-is-question="true"]');
    var correct = 0, total = 0;

    pages.forEach(function (page) {
      var qNum = page.dataset.metPage;
      var answerKey = sectionKey + '__p' + qNum;
      var studentAnswer = raw[answerKey] || '';
      var options = page.querySelectorAll('.met-option');
      var correctOption = null;
      options.forEach(function (opt) {
        if (opt.dataset.correct === 'true') correctOption = opt.textContent.trim();
      });
      if (!correctOption) return;
      total++;
      if (studentAnswer && correctOption && studentAnswer === correctOption) correct++;
    });

    return { correct: correct, total: total, sectionKey: sectionKey };
  }

  function computeFinalCefr() {
    var reading, listening;
    try { reading = JSON.parse(localStorage.getItem('met:score:reading')); } catch (_) {}
    try { listening = JSON.parse(localStorage.getItem('met:score:listening')); } catch (_) {}
    var rCor = (reading && reading.correct) || 0;
    var rTot = (reading && reading.total) || 0;
    var lCor = (listening && listening.correct) || 0;
    var lTot = (listening && listening.total) || 0;
    var totalCorrect = rCor + lCor;
    var totalPossible = rTot + lTot;
    if (totalPossible === 0) return null;

    var band = CEFR_BANDS.find(function (b) { return totalCorrect >= b.min && totalCorrect <= b.max; });
    if (!band) band = CEFR_BANDS[CEFR_BANDS.length - 1];

    return {
      readingCorrect: rCor,
      readingTotal: rTot,
      listeningCorrect: lCor,
      listeningTotal: lTot,
      totalCorrect: totalCorrect,
      totalPossible: totalPossible,
      percentage: Math.round((totalCorrect / totalPossible) * 100),
      level: band.level,
      label: band.label,
      description: band.desc
    };
  }

  function showFinalModal(result) {
    var existing = document.getElementById('met-cefr-modal');
    if (existing) existing.remove();

    var overlay = document.createElement('div');
    overlay.id = 'met-cefr-modal';
    overlay.className = 'met-modal-overlay active';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    overlay.innerHTML =
      '<div class="met-modal" style="max-width:480px">' +
        '<div class="met-modal__header">MET Mock Test 2 — CEFR Assessment</div>' +
        '<div class="met-modal__body" style="text-align:center">' +
          '<p style="font-size:2rem;font-weight:800;color:#014c47;margin:0 0 0.25rem">' + result.level + '</p>' +
          '<p style="font-size:1rem;color:#4a5568;margin:0 0 0.75rem">' + result.label + '</p>' +
          '<p style="font-size:0.95rem;color:#444;line-height:1.55;margin:0 0 1rem;text-align:left">' + result.description + '</p>' +
          '<div style="background:#e0e0e0;border-radius:20px;overflow:hidden;height:16px;margin:0 0 1rem">' +
            '<div style="height:100%;width:' + result.percentage + '%;background:#2e7d32;border-radius:20px;transition:width .5s"></div>' +
          '</div>' +
          '<p style="font-size:1.05rem;font-weight:700;color:#014c47;margin:0">' + result.totalCorrect + ' / ' + result.totalPossible + ' (' + result.percentage + '%)</p>' +
          '<p style="font-size:0.85rem;color:#5a6a7a;margin:0.5rem 0 0">Reading: ' + result.readingCorrect + '/' + result.readingTotal + ' &middot; Listening: ' + result.listeningCorrect + '/' + result.listeningTotal + '</p>' +
        '</div>' +
        '<div class="met-modal__btns" style="justify-content:center">' +
          '<button class="met-modal-btn met-modal-btn--yes" id="met-cefr-close" data-close-modal>OK</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    var closeBtn = document.getElementById('met-cefr-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () { overlay.classList.remove('active'); setTimeout(function () { overlay.remove(); }, 300); });
    }
  }

  window.METCefr = {
    collectResults: collectResults,
    computeFinalCefr: computeFinalCefr,
    showFinalModal: showFinalModal
  };

})();
