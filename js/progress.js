/* ============================================================
   PROGRESS — Progress tracking & visualization
   ============================================================ */

const Progress = (() => {
  function update(pct) {
    const fill = document.getElementById('progressFill');
    if (fill) fill.style.width = pct + '%';
    // Fallback: layout utama memakai #bar (index.html), bukan #progressFill.
    const bar = document.getElementById('bar');
    if (bar && !fill) bar.style.width = pct + '%';
    const text = document.getElementById('progressText');
    if (text) text.textContent = pct + '%';
    const ring = document.getElementById('progressRing');
    if (ring) {
      const c = ring.querySelector('.bar');
      if (c) {
        const C = 2 * Math.PI * 46;
        c.style.strokeDasharray = C;
        c.style.strokeDashoffset = C - (pct / 100) * C;
      }
    }
  }

  function render(pct) {
    update(pct);
  }

  return { update, render };
})();
