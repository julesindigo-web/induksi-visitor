/* ============================================================
   STORAGE — localStorage wrapper with safe fallback
   ============================================================ */

const Storage = (() => {
  const KEY = 'k3l_smi_visitor_v1';
  let memFallback = {};

  const hasLS = (() => {
    try {
      const t = '__t__';
      localStorage.setItem(t, t);
      localStorage.removeItem(t);
      return true;
    } catch (e) { return false; }
  })();

  function read() {
    if (!hasLS) return memFallback;
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function write(data) {
    if (!hasLS) { memFallback = data; return; }
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) { /* quota or disabled */ }
  }

  function get(key, fallback = null) {
    const data = read();
    return data[key] !== undefined ? data[key] : fallback;
  }

  function set(key, value) {
    const data = read();
    data[key] = value;
    write(data);
    return value;
  }

  function update(key, fn) {
    const cur = get(key);
    const next = fn(cur);
    set(key, next);
    return next;
  }

  function remove(key) {
    const data = read();
    delete data[key];
    write(data);
  }

  function clear() {
    if (!hasLS) { memFallback = {}; return; }
    try { localStorage.removeItem(KEY); } catch (e) {}
  }

  return { get, set, update, remove, clear, hasLS };
})();
