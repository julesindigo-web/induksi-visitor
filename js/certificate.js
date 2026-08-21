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
    const passed = post.submitted && (post.score || 0) >= 80;

    if (!passed) {
      c.innerHTML = `
        <div class="inner">
          <div class="kicker">Sertifikat</div>
          <h2>Sertifikat <em>Belum Tersedia</em></h2>
          <div class="panelbox danger" style="margin-top:14px">
            <h3><i></i>Belum Memenuhi Syarat</h3>
            <p style="color:var(--text); line-height:1.7">
              Untuk menerbitkan sertifikat induksi, Anda harus lulus <b>Post-Test</b> dengan skor ≥ 80% (dan 100% pada bagian Life-Saving Rules).<br/>
              Status post-test saat ini: <b>${post.submitted ? (post.score + '%') : 'belum dikerjakan'}</b>.
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
    const date = u.date || new Date().toISOString().slice(0, 10);
    const expiry = addMonths(date, 12);

    const wasCertified = State.get('certified');
    if (!wasCertified) {
      State.set('certified', true);
      State.set('certifiedAt', new Date().toISOString());
    }

    c.innerHTML = `
      <div class="inner">
        <div class="kicker">Penutup</div>
        <h2>Sertifikat <em>Induksi K3L</em></h2>
        <p class="lead">Selamat! Anda telah lulus program induksi K3L. Sertifikat ini sah sebagai bukti kompetensi awal masuk site.</p>

        <div class="cert" id="certPrint">
          <div class="cert-header">
            <div class="left">
              <div class="logo-mark">${Icons.get('shield', { size: 32, stroke: '#2b3990', sw: 1.5 })}</div>
              <h3>PT. Sifang Mining Indonesia<small>Occupational Safety, Health & Environment Induction Program</small></h3>
            </div>
            <div class="right">
              <b style="color:#1e293b">No. Sertifikat</b><br/>
              ${certId}
            </div>
          </div>
          <div class="cert-body">
            <div class="cert-sub">Sertifikat Kelulusan</div>
            <div class="cert-title">Program Induksi K3L</div>
            <p class="cert-statement">Dengan ini menyatakan bahwa:</p>
            <div class="cert-name">${escapeHtml(u.name || '— Nama Peserta —')}</div>
            <p class="cert-id">NIK: ${escapeHtml(u.nik || '—')} · ${escapeHtml(u.position || '—')} · ${escapeHtml(u.department || '—')}</p>

            <p class="cert-statement" style="margin-top:14px">
              telah menyelesaikan dan lulus Program Induksi Keselamatan, Kesehatan Kerja, dan Lingkungan (K3L)
              untuk operasional pertambangan nikel open pit, dengan skor post-test:
              <b style="color:var(--brand-indigo)">${post.score}%</b>
            </p>

            <div class="cert-details">
              <div class="cert-detail"><div class="lbl">Tanggal Terbit</div><div class="val">${formatDate(date)}</div></div>
              <div class="cert-detail"><div class="lbl">Berlaku Sampai</div><div class="val">${formatDate(expiry)}</div></div>
              <div class="cert-detail"><div class="lbl">Status</div><div class="val">AKTIF · ZERO HARM</div></div>
            </div>
          </div>
          <div class="cert-footer">
            <div class="cert-sig">
              <div class="line">${u.name || ''}</div>
              <small>Peserta Induksi</small>
            </div>
            <div class="cert-sig">
              <div class="line">HSE Department</div>
              <small>Disahkan oleh</small>
            </div>
          </div>
        </div>

        <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-top:14px">
          <button class="navbtn primary" id="certDownload">⬇ Unduh / Cetak Sertifikat</button>
          <button class="navbtn" id="certShare">📤 Bagikan</button>
        </div>

        <div class="footnote" style="margin-top:14px">Sertifikat ini wajib diperlihatkan saat memasuki site. Masa berlaku 12 bulan — penyegaran wajib setelahnya.</div>
      </div>
    `;

    document.getElementById('certDownload').addEventListener('click', download);
    document.getElementById('certShare').addEventListener('click', share);
    // Only fire confetti + toast on first issuance
    if (!wasCertified) {
      Effects.confetti({ count: 100 });
      Effects.toast('🎉 Sertifikat diterbitkan!', 'ok');
    }
  }

  function generateCertId(u) {
    const yr = new Date().getFullYear();
    const r = (u.nik || '').replace(/\D/g, '').slice(-4) || '0000';
    const n = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    return `SMI-K3L-${yr}-${r}-${n}`;
  }

  function addMonths(dateStr, m) {
    const d = new Date(dateStr);
    d.setMonth(d.getMonth() + m);
    return d.toISOString().slice(0, 10);
  }

  function formatDate(s) {
    if (!s) return '—';
    const d = new Date(s);
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
    const text = `Saya ${u.name || ''} (${u.nik || ''}) telah lulus Program Induksi K3L PT. Sifang Mining Indonesia! Skor post-test: ${State.get('posttest').score}%. #ZeroHarm #SafetyFirst`;
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
