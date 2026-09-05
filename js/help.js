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
            <h3 style="color:var(--amber)">${I18N.getLang() === 'cn' ? '⌨ 键盘快捷键' : '⌨ Pintasan Keyboard'}</h3>
            <table style="width:100%; border-collapse:collapse; margin-top:10px">
              <tr><td style="padding:6px 0; color:var(--muted)">→ / PageDown / ${I18N.getLang() === 'cn' ? '空格' : 'Spasi'}</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18N.t('nav.next')}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">← / PageUp</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18N.t('nav.prev')}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">Home / End</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18N.getLang() === 'cn' ? '首页 / 末页' : 'First / Last slide'}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">M</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18N.getLang() === 'cn' ? '打开目录' : 'Open menu'}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">F</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18N.getLang() === 'cn' ? '全屏' : 'Fullscreen'}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">T</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18N.getLang() === 'cn' ? '浅色/深色' : 'Toggle theme (dark/light)'}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">A</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18N.getLang() === 'cn' ? '语音讲解开关' : 'Toggle audio narration'}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">?</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18N.getLang() === 'cn' ? '打开本帮助' : 'Buka panduan ini'}</code></td></tr>
            </table>
          </div>
          <div class="card t">
            <h3 style="color:var(--teal)">${I18N.getLang() === 'cn' ? '📱 触屏（手机）' : '📱 Sentuh (Mobile)'}</h3>
            <ul style="color:var(--muted); font-size:13px; line-height:1.7; padding-left:18px; margin-top:8px">
              <li><b>${I18N.getLang() === 'cn' ? '左滑' : 'Swipe kiri'}</b> → ${I18N.getLang() === 'cn' ? '下一页' : 'Slide berikutnya'}</li>
              <li><b>${I18N.getLang() === 'cn' ? '右滑' : 'Swipe kanan'}</b> → ${I18N.getLang() === 'cn' ? '上一页' : 'Slide sebelumnya'}</li>
              <li>${I18N.getLang() === 'cn' ? '点顶部按钮打开目录、收藏等。' : 'Tap tombol di topbar untuk menu, bookmark, dll.'}</li>
            </ul>
          </div>
          <div class="card g">
            <h3 style="color:var(--green)">${I18N.getLang() === 'cn' ? '💾 进度自动保存' : '💾 Progress Tersimpan'}</h3>
            <p style="color:var(--muted); font-size:13px; line-height:1.7; margin-top:8px">
              ${I18N.getLang() === 'cn'
                ? '学习进度、测验分数、签名、证件均自动保存在本浏览器，收藏可标记需复习的页面。'
                : 'Semua progres — visited, quiz score, signature, sertifikat — tersimpan otomatis di browser ini. Bookmark membantu Anda menandai slide yang ingin di-review ulang.'}
            </p>
          </div>
          <div class="card b">
            <h3 style="color:var(--blue)">${I18N.getLang() === 'cn' ? '🖨 打印' : '🖨 Cetak'}</h3>
            <p style="color:var(--muted); font-size:13px; line-height:1.7; margin-top:8px">
              ${I18N.getLang() === 'cn'
                ? '按 <code>Ctrl/Cmd + P</code> 或用证件上的打印按钮打印讲义/A4证件。'
                : 'Tekan <code>Ctrl/Cmd + P</code> atau gunakan tombol cetak di sertifikat untuk mencetak handout / sertifikat A4.'}
            </p>
          </div>
        </div>
        <div class="footnote" style="margin-top:14px">${I18N.getLang() === 'cn'
          ? '本培训仅为辅助，到现场仍须参加区域安全交底与每日班前会。'
          : 'Induksi ini hanya alat bantu. Induksi area spesifik & toolbox meeting harian tetap WAJIB dilakukan di lapangan.'}</div>
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
