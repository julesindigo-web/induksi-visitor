/* ============================================================
   EFFECTS — Premium visual effects (counters, particles, confetti, mining scene)
   ============================================================ */

const Effects = (() => {
  function animateCounters() {
    document.querySelectorAll('.num[data-target]').forEach(el => {
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      const dur = 1400;
      const start = performance.now();
      function step(now) {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.floor(eased * target) + (t === 1 ? suffix : '');
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  function particles(n = 24) {
    const layer = document.getElementById('particles');
    if (!layer) return;
    layer.innerHTML = '';
    const colors = ['var(--amber)', 'var(--teal)', 'rgba(255,255,255,0.4)'];
    for (let i = 0; i < n; i++) {
      const p = document.createElement('div');
      p.className = 'particle' + (Math.random() > 0.6 ? ' t' : '');
      const size = 2 + Math.random() * 3;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = '-10px';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (10 + Math.random() * 16) + 's';
      p.style.animationDelay = (-Math.random() * 12) + 's';
      p.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px');
      layer.appendChild(p);
    }
  }

  function confetti(opts = {}) {
    const count = opts.count || 80;
    const colors = ['#fbbf24', '#2dd4bf', '#5b7cfa', '#f87171', '#4ade80', '#fb923c'];
    for (let i = 0; i < count; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.transform = `rotate(${Math.random() * 360}deg)`;
      const dur = 1.6 + Math.random() * 1.8;
      c.style.animationDuration = dur + 's';
      c.style.animationDelay = (Math.random() * 0.6) + 's';
      c.style.setProperty('--cx', (Math.random() * 200 - 100) + 'px');
      document.body.appendChild(c);
      setTimeout(() => c.remove(), (dur + 1) * 1000);
    }
  }

  function celebrate() {
    if (Math.random() < 0.5) confetti({ count: 40 });
  }

  function pulse(el) {
    if (!el) return;
    el.style.transition = 'transform .35s cubic-bezier(.34,1.56,.64,1)';
    el.style.transform = 'scale(1.04)';
    setTimeout(() => el.style.transform = '', 320);
  }

  function shake(el) {
    if (!el) return;
    el.classList.remove('shake');
    void el.offsetWidth;
    el.classList.add('shake');
    setTimeout(() => el.classList.remove('shake'), 600);
  }

  function toast(msg, type = '') {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.className = 'toast ' + type;
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add('show'));
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove('show'), 2400);
  }

  return { animateCounters, particles, confetti, celebrate, pulse, shake, toast };
})();
