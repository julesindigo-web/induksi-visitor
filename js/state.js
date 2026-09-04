/* ============================================================
   STATE — Centralized application state
   ============================================================ */

const State = (() => {
  const initial = {
    idx: 0,
    visited: [],
    bookmarks: [],
    notes: {},
    quiz: {
      answers: {},
      submitted: false,
      score: 0,
    },
    pretest: {
      answers: {},
      submitted: false,
      score: 0,
    },
    posttest: {
      answers: {},
      submitted: false,
      score: 0,
    },
    signature: null,
    user: {
      name: '',
      nik: '',
      position: '',      // untuk visitor: instansi / perusahaan asal
      department: '',    // untuk visitor: keperluan kunjungan
      host: '',          // pendamping / sponsor site
      visitDate: '',
      site: 'Site Utama — Nikel Open Pit',
      date: '',
    },
    settings: {
      theme: 'dark',          // 'dark' | 'light'
      lang: 'id',             // 'id' | 'en'
      audio: false,
      audioRate: 1.0,
      reducedMotion: false,
    },
    progress: 0,
    certified: false,
    certifiedAt: null,
    certId: null,
  };

  let data = deepMerge(clone(initial), Storage.get('state', {}));

  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  function deepMerge(a, b) {
    if (!b || typeof b !== 'object') return a;
    for (const k in b) {
      if (Array.isArray(b[k])) a[k] = b[k].slice();
      else if (b[k] && typeof b[k] === 'object') a[k] = deepMerge(a[k] || {}, b[k]);
      else a[k] = b[k];
    }
    return a;
  }

  function persist() { Storage.set('state', data); }

  return {
    get all() { return data; },
    get(path) { return path.split('.').reduce((o, k) => (o ? o[k] : undefined), data); },
    set(path, value) {
      const keys = path.split('.');
      let cur = data;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!cur[keys[i]] || typeof cur[keys[i]] !== 'object') cur[keys[i]] = {};
        cur = cur[keys[i]];
      }
      cur[keys[keys.length - 1]] = value;
      persist();
    },
    update(path, fn) {
      const cur = this.get(path);
      this.set(path, fn(cur));
    },
    save() { persist(); },
    reset() {
      data = clone(initial);
      persist();
    },
    softReset() {
      data.idx = 0;
      data.visited = [];
      data.progress = 0;
      data.quiz = { answers: {}, submitted: false, score: 0 };
      data.pretest = { answers: {}, submitted: false, score: 0 };
      data.posttest = { answers: {}, submitted: false, score: 0 };
      data.certified = false;
      data.certifiedAt = null;
      data.signature = null;
      persist();
    },
  };
})();
