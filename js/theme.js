/* ============================================================
   THEME — Dark/Light mode toggle
   ============================================================ */

const Theme = (() => {
  function apply(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    const btn = document.getElementById('btnTheme');
    if (btn) btn.innerHTML = mode === 'light'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg>';
  }

  function init() {
    const mode = State.get('settings.theme') || 'dark';
    apply(mode);
    const btn = document.getElementById('btnTheme');
    if (btn) btn.addEventListener('click', () => {
      const cur = State.get('settings.theme') || 'dark';
      const next = cur === 'dark' ? 'light' : 'dark';
      State.set('settings.theme', next);
      apply(next);
    });
  }

  return { init, apply };
})();
