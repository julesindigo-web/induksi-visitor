/* ============================================================
   HELP — Keyboard shortcuts and tips overlay
   ============================================================ */

const Help = (() => {
  function open() {
    const overlay = ensureOverlay();
    overlay.innerHTML = `
      <div class="overlay-header">
        <div class="overlay-title">${I18N.t('help.title')}</div>
        <div class="overlay-actions">
          <button class="iconbtn" id="helpClose" aria-label="${I18N.t('btn.close')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
      <div style="max-width:var(--menu-max); margin:0 auto;">
        <div class="cards">
          <div class="card">
            <h3 style="color:var(--amber)">⌨ Pintasan Keyboard</h3>
            <table style="width:100%; border-collapse:collapse; margin-top:10px">
              <tr><td style="padding:6px 0; color:var(--muted)">→ / PageDown / Spasi</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>Next slide</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">← / PageUp</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>Previous slide</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">Home / End</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>First / Last slide</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">M</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>Open menu</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">F</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>Fullscreen</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">T</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>Toggle theme (dark/light)</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">A</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>Toggle audio narration</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">?</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>Buka panduan ini</code></td></tr>
            </table>
          </div>
          <div class="card t">
            <h3 style="color:var(--teal)">📱 Sentuh (Mobile)</h3>
            <ul style="color:var(--muted); font-size:13px; line-height:1.7; padding-left:18px; margin-top:8px">
              <li><b>Swipe kiri</b> → Slide berikutnya</li>
              <li><b>Swipe kanan</b> → Slide sebelumnya</li>
              <li>Tap tombol di topbar untuk menu, bookmark, dll.</li>
            </ul>
          </div>
          <div class="card g">
            <h3 style="color:var(--green)">💾 Progress Tersimpan</h3>
            <p style="color:var(--muted); font-size:13px; line-height:1.7; margin-top:8px">
              Semua progres — visited, quiz score, signature, sertifikat — tersimpan otomatis di browser ini.
              Bookmark membantu Anda menandai slide yang ingin di-review ulang.
            </p>
          </div>
          <div class="card b">
            <h3 style="color:var(--blue)">🖨 Cetak</h3>
            <p style="color:var(--muted); font-size:13px; line-height:1.7; margin-top:8px">
              Tekan <code>Ctrl/Cmd + P</code> atau gunakan tombol cetak di sertifikat untuk mencetak handout / sertifikat A4.
            </p>
          </div>
        </div>
        <div class="footnote" style="margin-top:14px">Induksi ini hanya alat bantu. Induksi area spesifik & toolbox meeting harian tetap WAJIB dilakukan di lapangan.</div>
      </div>
    `;
    overlay.classList.add('open');
    document.getElementById('helpClose').addEventListener('click', close);
  }

  function ensureOverlay() {
    let o = document.getElementById('helpOverlay');
    if (!o) {
      o = document.createElement('div');
      o.id = 'helpOverlay';
      o.className = 'overlay';
      document.body.appendChild(o);
    }
    return o;
  }

  function close() {
    const o = document.getElementById('helpOverlay');
    if (o) o.classList.remove('open');
  }

  return { open, close };
})();
