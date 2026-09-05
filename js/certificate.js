/* ============================================================
   CERTIFICATE — Generate, render, and download certificate
   ============================================================ */

const Certificate = (() => {
  function render() {
    const c = document.getElementById('certContainer');
    if (!c) return;
    const u = State.get('user') || {};
    const post = State.get('posttest') || {};
    const sig = State.get('signature');
    // Fail-closed: LSR wajib 100% (lsrPass) + umum lulus (umPass) + skor >=80.
    // State lama tanpa flag dianggap belum valid dan wajib remedial.
    const lsrOk = post.lsrPass === true;
    const umOk = post.umPass === true;
    const passed = post.submitted === true && lsrOk && umOk && (post.score || 0) >= 80;

    if (!passed) {
      c.innerHTML = `
        <div class="inner">
          <div class="kicker">Sertifikat</div>
          <h2>Sertifikat <em>Belum Tersedia</em></h2>
          <div class="panelbox danger" style="margin-top:14px">
            <h3><i></i>Belum Memenuhi Syarat</h3>
            <p style="color:var(--text); line-height:1.7">
              Untuk menerbitkan sertifikat induksi, Anda harus lulus <b>Post-Test</b> dengan skor ≥ 80% (dan 100% pada bagian Life-Saving Rules).<br/>
              Status post-test saat ini: <b>${post.submitted ? (post.score + '%') : 'belum dikerjakan'}</b><br/>
              <span style="font-size:12.5px; color:var(--muted)">LSR: ${post.submitted ? (post.lsrPass ? '✅ 100%' : '❌ belum 100%') : '—'} · Umum: ${post.submitted ? (post.umPass ? '✅ lulus' : '❌ belum lulus') : '—'}</span>
            </p>
          </div>
          <p class="lead" style="margin-top:14px">Silakan kembali ke slide sebelumnya dan selesaikan post-test terlebih dahulu.</p>
        </div>
      `;
      return;
    }

    if (!sig) {
      c.innerHTML = `
        <div class="inner">
          <div class="kicker">Sertifikat</div>
          <h2>Sertifikat <em>Menunggu Tanda Tangan</em></h2>
          <div class="panelbox warn" style="margin-top:14px">
            <h3><i></i>Belum Ditandatangani</h3>
            <p style="color:var(--text); line-height:1.7">
              Anda lulus post-test, tetapi belum menandatangani komitmen K3L. Sertifikat baru diterbitkan setelah tanda tangan digital tersimpan.
            </p>
          </div>
          <p class="lead" style="margin-top:14px">Silakan kembali ke slide Tanda Tangan Komitmen.</p>
        </div>
      `;
      return;
    }

    const certId = State.get('certId') || generateCertId(u);
    State.set('certId', certId);
    const date = u.date || u.visitDate || new Date().toISOString().slice(0, 10);
    const expiry = addDays(date, 7);

    const wasCertified = State.get('certified');
    if (!wasCertified) {
      State.set('certified', true);
      State.set('certifiedAt', new Date().toISOString());
    }

    c.innerHTML = `
      <div class="inner">
        <div class="dual-logos mini" style="max-width:520px; margin-bottom:6px">
          <div class="logo-card">
            <img src="assets/logo-auxin.png" alt="${I18N.getLang() === 'cn' ? 'PT Auxin Development Indonesia 标志' : 'Logo PT. Auxin Development Indonesia'}" loading="lazy"/>
            <small>Auxin</small>
          </div>
          <div class="logo-card">
            <img src="assets/logo-sifang.png" alt="${I18N.getLang() === 'cn' ? '印尼四方矿业标志' : 'Logo PT. Sifang Mining Indonesia'}" loading="lazy"/>
            <small>${I18N.getLang() === 'cn' ? '四方' : 'Sifang'}</small>
          </div>
        </div>
        <div class="kicker">${I18N.getLang() === 'cn' ? '结尾 · 访客证' : 'Penutup · VISITOR PASS'}</div>
        <h2>${I18N.getLang() === 'cn' ? '访客证 <em>K3L</em> — Auxin × 四方矿业' : 'Visitor Pass <em>K3L</em> — Auxin × Sifang'}</h2>
        <p class="lead">${I18N.getLang() === 'cn'
          ? '恭喜！您已通过<b>访客培训</b>，本证参观期间须随身携带，仅限陪同参观。'
          : 'Selamat! Anda telah lulus <b>Induksi Visitor</b>. Pass ini wajib dibawa selama kunjungan dan hanya berlaku untuk akses didampingi (escorted).'}</p>

        <div class="cert visitor" id="certPrint" style="border-top:4px solid var(--amber)">
          <div class="cert-header">
            <div class="left">
              <div class="logo-mark">${Icons.get('shield', { size: 32, stroke: '#2b3990', sw: 1.5 })}</div>
              <h3>Auxin × Sifang Mining<small>VISITOR SAFETY INDUCTION PASS · Nikel Open Pit</small></h3>
            </div>
            <div class="right">
              <b style="color:#1e293b">No. Visitor Pass</b><br/>
              ${certId}<br/><span style="font-size:10px; color:var(--amber); letter-spacing:.08em">VISITOR — ESCORTED ACCESS ONLY</span>
            </div>
          </div>
          <div class="cert-body">
            <div class="cert-sub">${I18N.getLang() === 'cn' ? '访客证 — 安全培训' : 'Visitor Pass — Safety Induction'}</div>
            <div class="cert-title">${I18N.getLang() === 'cn' ? '访客安全培训' : 'Induksi Keselamatan Visitor'}</div>
            <p class="cert-statement">${I18N.getLang() === 'cn' ? '兹证明：' : 'Dengan ini menyatakan bahwa:'}</p>
            <div class="cert-name">${escapeHtml(u.name || (I18N.getLang() === 'cn' ? '— 访客姓名 —' : '— Nama Visitor —'))}</div>
            <p class="cert-id">${I18N.getLang() === 'cn'
              ? '证件：' + escapeHtml(u.nik || '—') + ' · 单位：' + escapeHtml(u.position || '—') + ' · 事由：' + escapeHtml(u.department || '—') + (u.host ? ' · 陪同：' + escapeHtml(u.host) : '')
              : 'ID: ' + escapeHtml(u.nik || '—') + ' · Instansi: ' + escapeHtml(u.position || '—') + ' · Keperluan: ' + escapeHtml(u.department || '—') + (u.host ? ' · Pendamping: ' + escapeHtml(u.host) : '')}</p>

            <p class="cert-statement" style="margin-top:14px">
              ${I18N.getLang() === 'cn'
                ? '已完成并通过访客安全培训（简明访客版），得分：<b style="color:var(--brand-indigo)">' + post.score + '%</b>，仅限<b>陪同参观</b>，非员工资格。'
                : 'telah menyelesaikan dan lulus Program Induksi Visitor K3L (ringkas, fokus visitor) dengan skor: <b style="color:var(--brand-indigo)">' + post.score + '%</b>. Berlaku <b>terbatas sebagai tamu didampingi</b>, bukan sebagai pekerja.'}
            </p>

            <div class="cert-details">
              <div class="cert-detail"><div class="lbl">${I18N.getLang() === 'cn' ? '签发日期' : 'Tanggal Terbit'}</div><div class="val">${formatDate(date)}</div></div>
              <div class="cert-detail"><div class="lbl">${I18N.getLang() === 'cn' ? '有效期至（7天）' : 'Berlaku Sampai (7 hari)'}</div><div class="val">${formatDate(expiry)}</div></div>
              <div class="cert-detail"><div class="lbl">${I18N.getLang() === 'cn' ? '状态' : 'Status'}</div><div class="val">VISITOR · ESCORTED · ZERO HARM</div></div>
            </div>
            <p style="text-align:center; margin-top:10px; font-size:11px; color:var(--muted); line-height:1.5">
              ${I18N.getLang() === 'cn'
                ? '⚠️ <b>访客禁令：</b>无陪同禁入采坑/选厂/车间 · 运输路禁自驾 · 禁操作设备 · 无许可禁拍/飞无人机 · 吸烟区外禁烟'
                : '⚠️ <b>Visitor dilarang:</b> masuk pit / plant / workshop tanpa escort · mengemudi sendiri di haul road · mengoperasikan alat · foto/drone tanpa izin · merokok di luar smoking area'}
            </p>
          </div>
          <div class="cert-footer">
            <div class="cert-sig">
              <div class="line">${u.name || ''}</div>
              <small>${I18N.getLang() === 'cn' ? '访客' : 'Visitor'}</small>
            </div>
            <div class="cert-sig">
              <div class="line">HSE Department</div>
              <small>${I18N.getLang() === 'cn' ? '签发 · 陪同：' + escapeHtml(u.host || '—') : 'Disahkan oleh · Host: ' + escapeHtml(u.host || '—')}</small>
            </div>
          </div>
        </div>

        <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-top:14px">
          <button class="navbtn primary" id="certDownload">${I18N.t('cert.download')}</button>
          <button class="navbtn" id="certShare">${I18N.t('cert.share')}</button>
        </div>

        <div class="footnote" style="margin-top:14px">${I18N.getLang() === 'cn'
          ? '访客证<b>非员工证书</b>，<b>最长7天</b>须陪同，下次来访须重训。禁操作重型设备/禁入禁区。'
          : 'Visitor Pass <b>bukan sertifikat pekerja</b>. Berlaku <b>maks. 7 hari</b> & wajib didampingi. Untuk kunjungan berikutnya wajib induksi ulang. Dilarang mengoperasikan alat berat / masuk area terlarang.'}</div>
      </div>
    `;

    document.getElementById('certDownload').addEventListener('click', download);
    document.getElementById('certShare').addEventListener('click', share);
    // Only fire confetti + toast on first issuance
    if (!wasCertified) {
      Effects.confetti({ count: 100 });
      Effects.toast(I18N.t('cert.issued'), 'ok');
    }
  }

  function generateCertId(u) {
    const yr = new Date().getFullYear();
    const r = (u.nik || '').replace(/\D/g, '').slice(-4) || '0000';
    const n = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    return `SMI-VIS-${yr}-${r}-${n}`;
  }

  function addDays(dateStr, days) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  }

  function formatDate(s) {
    if (!s) return '—';
    const d = new Date(s);
    if (typeof I18N !== 'undefined' && I18N.getLang() === 'cn') {
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    }
    const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  function escapeHtml(s) {
    return (s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function download() {
    window.print();
  }

  async function share() {
    const u = State.get('user') || {};
    const text = I18N.getLang() === 'cn'
      ? `我${u.name || ''}（${u.nik || ''}）已通过 Auxin × 四方矿业访客培训！得分：${State.get('posttest').score}% · 7天访客证 · #ZeroHarm`
      : `Saya ${u.name || ''} (${u.nik || ''}) telah lulus Induksi Visitor PT. Auxin × Sifang Mining! Skor: ${State.get('posttest').score}% · Visitor Pass 7 hari · #ZeroHarm #VisitorSafety`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Sertifikat Induksi K3L', text });
      } catch (e) {}
    } else {
      try {
        await navigator.clipboard.writeText(text);
        Effects.toast('Teks disalin ke clipboard', 'ok');
      } catch (e) {
        Effects.toast('Salin manual: ' + text, 'warn');
      }
    }
  }

  return { render };
})();
