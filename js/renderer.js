/* ============================================================
   RENDERER — Dynamic slide rendering from data
   ============================================================ */

const Renderer = (() => {
  let pendingHide = null;
  let pendingShow = null;
  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function buildSlide(slide, index) {
    const el = document.createElement('section');
    el.className = 'slide';
    el.id = 'slide-' + index;
    el.setAttribute('data-mod', slide.mod || '');
    el.setAttribute('data-title', slide.title || '');
    el.setAttribute('data-type', slide.type || '');
    el.setAttribute('data-idx', index);
    el.innerHTML = (slide.render ? slide.render() : '');
    return el;
  }

  function mount(slides) {
    const stage = document.getElementById('stage');
    if (!stage) return;
    stage.innerHTML = '';
    const frag = document.createDocumentFragment();
    slides.forEach((s, i) => frag.appendChild(buildSlide(s, i)));
    stage.appendChild(frag);
  }

  function show(i, slides) {
    const all = document.querySelectorAll('.slide');
    const prev = document.querySelector('.slide.active');
    const next = all[i];
    if (!next) return;
    // Batalkan transisi tertunda agar navigasi cepat tidak salah menonaktifkan slide baru.
    if (pendingHide) { clearTimeout(pendingHide); pendingHide = null; }
    if (pendingShow) { clearTimeout(pendingShow); pendingShow = null; }
    if (prev && prev !== next) {
      prev.classList.add('leaving');
      pendingHide = setTimeout(() => prev.classList.remove('leaving', 'active'), 240);
    }
    pendingShow = setTimeout(() => {
      // Jangan aktifkan bila user sudah pindah ke slide lain sebelum timeout jalan.
      if (!document.contains(next)) return;
      next.classList.add('active');
      const s = slides[i];
      if (s && typeof s.afterRender === 'function') {
        try { s.afterRender(); } catch (e) { console.warn('afterRender fail', e); }
      }
    }, prev && prev !== next ? 60 : 0);

    const stage = document.getElementById('stage');
    if (stage) stage.scrollTop = 0;
  }

  return { mount, show };
})();
