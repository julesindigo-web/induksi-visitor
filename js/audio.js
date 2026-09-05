/* ============================================================
   AUDIO — Web Speech API narration (Indonesian)
   ============================================================ */

const Audio = (() => {
  let enabled = false;
  let rate = 1.0;
  let lastUtter = null;
  let voicesLoaded = false;
  let idVoice = null;

  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return;
    idVoice = voices.find(v => v.lang === 'id-ID' || v.lang.startsWith('id'))
           || voices.find(v => v.lang.startsWith('en'))
           || voices[0];
    voicesLoaded = true;
  }

  function init() {
    if (!('speechSynthesis' in window)) {
      const btn = document.getElementById('btnAudio');
      if (btn) btn.style.display = 'none';
      return;
    }
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    enabled = State.get('settings.audio') || false;
    rate = State.get('settings.audioRate') || 1.0;
    syncButton();

    const btn = document.getElementById('btnAudio');
    if (btn) btn.addEventListener('click', () => {
      enabled = !enabled;
      State.set('settings.audio', enabled);
      syncButton();
      Effects.toast(enabled ? I18N.t('audio.on') : I18N.t('audio.off'), enabled ? 'ok' : '');
      if (!enabled) stop();
    });
  }

  function syncButton() {
    const btn = document.getElementById('btnAudio');
    if (!btn) return;
    btn.innerHTML = enabled
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10v4h4l5 4V6L7 10z"/><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10v4h4l5 4V6L7 10z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>';
  }

  function speak(text) {
    if (!enabled || !('speechSynthesis' in window)) return;
    stop();
    const u = new SpeechSynthesisUtterance(text);
    const isCN = (typeof I18N !== 'undefined' && I18N.getLang() === 'cn');
    u.lang = isCN ? 'zh-CN' : 'id-ID';
    u.rate = rate;
    u.pitch = 1;
    if (!isCN && idVoice) u.voice = idVoice;
    lastUtter = u;
    window.speechSynthesis.speak(u);
  }

  function stop() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }

  function narrateSlide(idx, slide) {
    if (!enabled || !slide) return;
    const lines = [];
    if (slide.title) lines.push(slide.title + '.');
    if (slide.render) {
      const html = slide.render();
      const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const summary = text.slice(0, 320);
      lines.push(summary);
    }
    speak(lines.join(' '));
  }

  function bindSirene() {
    const lines = {
      darurat: I18N.t('sirene.darurat'),
      siaga: I18N.t('sirene.siaga'),
      allclear: I18N.t('sirene.allclear'),
      blasting: I18N.t('sirene.blasting'),
    };
    document.querySelectorAll('[data-sirene]').forEach(btn => {
      btn.addEventListener('click', () => {
        const k = btn.dataset.sirene;
        if (!lines[k]) return;
        btn.classList.add('playing');
        // Use direct speech (independent of narration toggle) — sirene demo is standalone
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(lines[k]);
          const isCN = (typeof I18N !== 'undefined' && I18N.getLang() === 'cn');
          u.lang = isCN ? 'zh-CN' : 'id-ID';
          u.rate = rate;
          u.pitch = 1;
          if (!isCN && idVoice) u.voice = idVoice;
          window.speechSynthesis.speak(u);
        }
        setTimeout(() => btn.classList.remove('playing'), 2200);
      });
    });
  }

  return { init, speak, stop, narrateSlide, bindSirene };
})();
