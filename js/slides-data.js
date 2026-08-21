/* ============================================================
   SLIDES DATA — All 50+ slide definitions
   Each slide is a typed object with render() handler.
   ============================================================ */

const SLIDES_DATA = [
  /* ============================================================
     1 · COVER
     ============================================================ */
  {
    type: 'cover',
    mod: 'PEMBUKA',
    title: 'Selamat Datang',
    render() {
      return `
        <div class="mining-scene" aria-hidden="true">
          <svg viewBox="0 0 1400 400" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0a1428"/>
                <stop offset="100%" stop-color="#070d1a" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#1a2a44"/>
                <stop offset="100%" stop-color="#070d1a"/>
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="1400" height="400" fill="url(#sky)"/>
            <!-- Mountains -->
            <path d="M0 280 L200 160 L380 240 L520 180 L700 280 L880 200 L1040 260 L1200 180 L1400 280 L1400 400 L0 400 Z" fill="url(#ground)"/>
            <path d="M0 320 L180 240 L340 290 L500 250 L680 320 L840 270 L1020 320 L1200 250 L1400 320 L1400 400 L0 400 Z" fill="#0a1428" opacity="0.6"/>
            <!-- Pit benches -->
            <path d="M860 400 L900 360 L920 360 L920 400 Z" fill="#243757"/>
            <path d="M900 360 L940 340 L960 340 L960 400 L920 400 Z" fill="#1a2a44"/>
            <path d="M940 340 L990 320 L1010 320 L1010 400 L960 400 Z" fill="#243757"/>
            <!-- Dump truck silhouette -->
            <g transform="translate(380 320)">
              <rect x="0" y="0" width="60" height="22" fill="#1e293b"/>
              <path d="M0 0 L60 0 L50 -18 L18 -18 L10 0 Z" fill="#1e293b"/>
              <rect x="5" y="-18" width="40" height="14" fill="#3b4863" rx="2"/>
              <circle cx="14" cy="24" r="6" fill="#0a1428" stroke="#475569"/>
              <circle cx="46" cy="24" r="6" fill="#0a1428" stroke="#475569"/>
            </g>
            <!-- Excavator silhouette -->
            <g transform="translate(620 310)">
              <rect x="0" y="0" width="48" height="20" fill="#1e293b"/>
              <rect x="4" y="-12" width="20" height="12" fill="#3b4863" rx="1"/>
              <path d="M28 -6 L52 -2 L48 6 L24 -2 Z" fill="#1e293b"/>
              <path d="M52 -2 L60 6 L48 8 Z" fill="#3b4863"/>
              <circle cx="12" cy="22" r="6" fill="#0a1428" stroke="#475569"/>
              <circle cx="36" cy="22" r="6" fill="#0a1428" stroke="#475569"/>
              <circle cx="24" cy="22" r="5" fill="#0a1428" stroke="#475569"/>
            </g>
            <!-- Stars -->
            ${[120, 280, 460, 680, 920, 1180, 1320].map((x, i) => `<circle cx="${x}" cy="${60 + i * 12}" r="${0.8 + Math.random() * 1.2}" fill="#fbbf24" opacity="${0.3 + Math.random() * 0.5}"/>`).join('')}
          </svg>
        </div>
        <div class="inner">
          <div class="logo-big logo-png" style="background-image:url('assets/logo-full.png')" role="img" aria-label="PT. Sifang Mining Indonesia"></div>
          <div class="co">PT. Sifang Mining Indonesia</div>
          <h1 style="margin-top:10px">PROGRAM INDUKSI <em>K3L</em><br/>PERTAMBANGAN NIKEL OPEN PIT</h1>
          <div class="hazard" style="margin-left:auto;margin-right:auto;"></div>
          <p class="lead" style="margin:14px auto 0; text-align:center;">
            Selamat datang, Rekrutan Baru. Keselamatan Anda adalah prioritas utama kami.
            Ikuti seluruh materi ini hingga tuntas sebelum memasuki area site.
          </p>
          <div class="badges">
            <span class="badge gold">★ ZERO HARM</span>
            <span class="badge teal">SMKP MINERBA</span>
            <span class="badge">ISO 45001:2018</span>
            <span class="badge">ISO 14001:2015</span>
            <span class="badge blue">${State.get('user.name') ? `👋 ${State.get('user.name')}` : 'PESERTA INDUKSI'}</span>
          </div>
          <div class="hint">Tekan <b>Lanjut</b> atau gunakan tombol panah keyboard untuk memulai ▸</div>
        </div>
      `;
    },
    afterRender() { Effects.celebrate(); },
  },

  /* ============================================================
     2 · AGENDA
     ============================================================ */
  {
    type: 'agenda',
    mod: 'PEMBUKA',
    title: 'Agenda Induksi',
    render() {
      return `
        <div class="inner stagger">
          <div class="kicker">Pembuka</div>
          <h2>Agenda <em>Induksi K3L</em></h2>
          <p class="lead">Sebelas blok materi yang wajib Anda kuasai. Tidak ada bagian yang boleh dilewati.</p>
          <div class="cards">
            <article class="card"><div class="ico">${Icons.get('building', { class: 'ico-svg' })}</div><h3>01 · Profil & Kebijakan</h3><p>Profil perusahaan, dasar hukum, kebijakan K3L, Life-Saving Rules, dan Stop Work Authority.</p></article>
            <article class="card t"><div class="ico">${Icons.get('scroll', { class: 'ico-svg' })}</div><h3>02 · Aturan & Perilaku</h3><p>Hak & kewajiban, aturan site, peta area, rambu, alarm, dan komunikasi radio.</p></article>
            <article class="card b"><div class="ico">${Icons.get('compass', { class: 'ico-svg' })}</div><h3>03 · Manajemen Risiko</h3><p>HIRADC, JSA, Take 5, hierarki pengendalian, izin kerja, SIMOPS & MOC.</p></article>
            <article class="card g"><div class="ico">${Icons.get('helmet', { class: 'ico-svg' })}</div><h3>04 · APD & Kesehatan</h3><p>APD wajib & spesifik, fit to work, fatigue, dan bahaya kesehatan khas nikel.</p></article>
            <article class="card r"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>05 · Risiko Kritikal Area</h3><p>Traffic & haul road, alat berat, dan geoteknik laterit open pit.</p></article>
            <article class="card"><div class="ico">${Icons.get('tools', { class: 'ico-svg' })}</div><h3>06 · Pekerjaan Berbahaya</h3><p>LOTO, listrik, ketinggian, ruang terbatas, hot work, lifting, dan galian.</p></article>
            <article class="card t"><div class="ico">${Icons.get('factory', { class: 'ico-svg' })}</div><h3>07 · Fasilitas & Lingkungan</h3><p>Bahan kimia/B3, plant & conveyor, smelter/HPAL/TSF/jetty, fuel farm, lingkungan.</p></article>
            <article class="card r"><div class="ico">${Icons.get('siren', { class: 'ico-svg' })}</div><h3>08 · Darurat & Medis</h3><p>Tanggap darurat, muster point, P3K, medevac, dan pelaporan insiden.</p></article>
            <article class="card b"><div class="ico">${Icons.get('bed', { class: 'ico-svg' })}</div><h3>09 · Penunjang</h3><p>Camp & mess, transportasi, keamanan, komunitas, dan etika kerja.</p></article>
            <article class="card m"><div class="ico">${Icons.get('clipboard', { class: 'ico-svg' })}</div><h3>10 · Studi Kasus</h3><p>Pelajaran dari insiden nyata di industri nikel — agar tidak terulang di site kita.</p></article>
            <article class="card g"><div class="ico">${Icons.get('check', { class: 'ico-svg' })}</div><h3>11 · Evaluasi & Komitmen</h3><p>Pre-test, post-test, tanda tangan komitmen, dan penerbitan sertifikat induksi.</p></article>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     3 · TUJUAN & RUANG LINGKUP
     ============================================================ */
  {
    type: 'two',
    mod: 'PEMBUKA',
    title: 'Tujuan & Ruang Lingkup',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pembuka</div>
          <h2>Tujuan & <em>Ruang Lingkup</em> Induksi</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Tujuan Induksi</h3>
              <ul>
                <li><b>Memenuhi kewajiban hukum</b> perusahaan memberikan pelatihan K3 sebelum pekerja masuk area.</li>
                <li><b>Mengenali bahaya & risiko</b> khas tambang nikel open pit sebelum terpapar.</li>
                <li><b>Memahami aturan, prosedur darurat,</b> dan konsekuensi pelanggaran.</li>
                <li><b>Membangun budaya safety:</b> saling menegur, melapor, dan berani berhenti kerja saat tidak aman.</li>
                <li><b>Menyamakan standar kompetensi</b> seluruh personel: karyawan, kontraktor, dan pengunjung.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Ruang Lingkup & Ketentuan</h3>
              <ul>
                <li><b>Wajib diikuti:</b> karyawan baru, kontraktor, subkontraktor, magang, tamu, dan vendor.</li>
                <li><b>Jenis induksi:</b> umum (site), area spesifik (pit/plant/workshop/jetty), pengunjung, dan penyegaran.</li>
                <li><b>Tanpa induksi = tanpa akses.</b> Kartu/ID induksi adalah syarat masuk site.</li>
                <li><b>Evaluasi:</b> pre-test, post-test (passing grade ≥ 80%; 100% untuk Life-Saving Rules), remedial, dan sign-off.</li>
                <li><b>Penyegaran:</b> berkala, setelah insiden, cuti panjang, atau perubahan tugas/area.</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Induksi umum tidak menggantikan induksi area spesifik dan toolbox meeting harian. Pekerjaan hanya dimulai setelah seluruh lapisan induksi selesai.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     4 · STATS / COMMITMENT INTRO
     ============================================================ */
  {
    type: 'stats',
    mod: 'PEMBUKA',
    title: 'Mengapa Ini Penting',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pembuka</div>
          <h2>Mengapa <em>Induksi K3L</em> Itu Penting?</h2>
          <p class="lead">Data keselamatan industri pertambangan global — pengingat mengapa setiap prosedur ada.</p>
          <div class="stats">
            <div class="stat danger">
              <div class="num" data-target="48">0</div>
              <div class="lbl">Kecelakaan Fatal Tambang / Tahun</div>
            </div>
            <div class="stat warn">
              <div class="num" data-target="80" data-suffix="%">0</div>
              <div class="lbl">Insiden Bisa Dicegah</div>
            </div>
            <div class="stat ok">
              <div class="num" data-target="10">0</div>
              <div class="lbl">Life-Saving Rules</div>
            </div>
            <div class="stat">
              <div class="num" data-target="42">0</div>
              <div class="lbl">Modul Induksi</div>
            </div>
          </div>
          <div class="bigquote" style="margin-top:32px;">
            “Tidak ada target produksi, target waktu, atau target biaya yang sepadan dengan nyawa manusia.”
            <small>— Komitmen Manajemen PT. Sifang Mining Indonesia</small>
          </div>
        </div>
      `;
    },
    afterRender() { Effects.animateCounters(); },
  },

  /* ============================================================
     5 · PRE-TEST
     ============================================================ */
  {
    type: 'pretest',
    mod: 'EVAL',
    title: 'Pre-Test',
    render() { return '<div id="quizContainer"></div>'; },
    afterRender() { Quiz.renderPretest(); },
  },
  {
    type: 'cards',
    mod: 'PROFIL',
    title: 'Profil Perusahaan',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan</div>
          <h2>Profil <em>PT. Sifang Mining Indonesia</em></h2>
          <p class="lead">Kenali tempat Anda bekerja: karakteristik site menentukan bahaya yang akan Anda hadapi setiap hari.</p>
          <div class="cards stagger">
            <article class="card b"><div class="ico">${Icons.get('pickup', { class: 'ico-svg' })}</div><h3>Komoditas & Metode</h3><p>Pertambangan <b>nikel laterit</b> (limonit & saprolit) dengan metode <b>open pit</b> (terrace/strip mining). Laterit sangat sensitif terhadap air — licin dan rawan longsor saat hujan.</p></article>
            <article class="card"><div class="ico">${Icons.get('compass', { class: 'ico-svg' })}</div><h3>Area Operasional</h3><ul><li>Pit, bench, highwall, disposal, pit sump</li><li>Haul road & jalur LV/HE</li><li>Stockpile, crusher/conveyor plant</li><li>Workshop, warehouse, fuel farm, gudang B3</li><li>Kantor, klinik, camp/mess, muster point</li></ul></article>
            <article class="card t"><div class="ico">${Icons.get('refresh', { class: 'ico-svg' })}</div><h3>Sistem Kerja</h3><p>Shift/roster dengan kerja siang–malam. Manajemen kelelahan (<i>fatigue management</i>) diterapkan ketat: laporkan kondisi tidak fit sebelum memulai shift.</p></article>
            <article class="card g"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>Visi Keselamatan</h3><p><b>Zero Harm</b> — setiap orang harus pulang dalam kondisi sehat dan selamat, setiap hari. Produksi tidak pernah lebih penting dari nyawa.</p></article>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     6 · DASAR HUKUM
     ============================================================ */
  {
    type: 'cards',
    mod: 'PROFIL',
    title: 'Dasar Hukum & Standar',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan</div>
          <h2>Dasar Hukum & <em>Standar K3L</em></h2>
          <p class="lead">Seluruh aturan di site ini berlandaskan regulasi nasional dan standar internasional berikut.</p>
          <div class="cards stagger">
            <article class="card"><div class="ico">${Icons.get('scroll', { class: 'ico-svg' })}</div><h3>UU No. 1 Tahun 1970</h3><p>Undang-Undang Keselamatan Kerja: kewajiban melindungi setiap pekerja dan orang di tempat kerja.</p></article>
            <article class="card b"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>UU No. 3/2020 & PP 96/2021</h3><p>Rezim pertambangan minerba: kewajiban penerapan kaidah teknik pertambangan yang baik, termasuk K3 dan KO pertambangan.</p></article>
            <article class="card"><div class="ico">${Icons.get('doc', { class: 'ico-svg' })}</div><h3>Kepmen ESDM 1827.K/30/MEM/2018</h3><p>Pedoman pelaksanaan kaidah pertambangan yang baik — memuat <b>SMKP Minerba</b> (Sistem Manajemen Keselamatan Pertambangan) yang wajib diterapkan dan diaudit.</p></article>
            <article class="card g"><div class="ico">${Icons.get('cert', { class: 'ico-svg' })}</div><h3>PP 50/2012 & ISO 45001:2018</h3><p>Sistem Manajemen K3 (SMK3) dan standar internasional K3: partisipasi pekerja, identifikasi bahaya, perbaikan berkelanjutan.</p></article>
            <article class="card t"><div class="ico">${Icons.get('globe', { class: 'ico-svg' })}</div><h3>ISO 14001:2015 & IMSBC Code</h3><p>Manajemen lingkungan; serta kode IMO untuk keamanan kargo curah (nikel ore) pada pengapalan — bahaya likuefaksi.</p></article>
          </div>
          <div class="footnote">Kepatuhan bukan pilihan: pelanggaran aturan K3 dapat berakibat sanksi disiplin, hukum, dan yang terpenting — cedera atau kematian.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     7 · KEBIJAKAN K3L
     ============================================================ */
  {
    type: 'checks',
    mod: 'PROFIL',
    title: 'Kebijakan K3L',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan</div>
          <h2>Kebijakan <em>K3L</em> Perusahaan</h2>
          <ul class="checks cols">
            <li><b>Zero Harm:</b> tidak ada pekerjaan yang layak dibayar dengan cedera, kematian, atau kerusakan lingkungan.</li>
            <li><b>Kepatuhan hukum:</b> memenuhi seluruh peraturan K3, lingkungan, dan pertambangan yang berlaku.</li>
            <li><b>Kepemimpinan:</b> setiap pemimpin bertanggung jawab atas keselamatan timnya; keselamatan dievaluasi setara produksi.</li>
            <li><b>Partisipasi pekerja:</b> setiap orang wajib terlibat dalam identifikasi bahaya, pelaporan, dan perbaikan.</li>
            <li><b>Pengendalian risiko:</b> pekerjaan berisiko tinggi hanya dilakukan dengan izin, kompetensi, dan pengendalian yang valid.</li>
            <li><b>Perlindungan lingkungan:</b> mencegah pencemaran, mengelola limbah, dan menjaga keanekaragaman hayati.</li>
            <li><b>Perbaikan berkelanjutan:</b> audit, inspeksi, investigasi, dan pembelajaran dari setiap insiden.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     8 · LIFE-SAVING RULES
     ============================================================ */
  {
    type: 'rules',
    mod: 'PROFIL',
    title: 'Life-Saving Rules',
    render() {
      const items = [
        { n: 1, t: 'Fit for Work', d: 'Dilarang bekerja di bawah pengaruh alkohol, narkoba, atau obat yang menurunkan kesadaran.' },
        { n: 2, t: 'Seatbelt & Batas Kecepatan', d: 'Selalu pakai seatbelt; patuhi batas kecepatan dan aturan traffic site.' },
        { n: 3, t: 'Komunikasi Radio', d: 'Masuk area operasional wajib lapor & komunikasi positif di channel yang ditetapkan.' },
        { n: 4, t: 'Hormati Exclusion Zone', d: 'Dilarang masuk zona buta alat berat, area blasting, atau area ber-barricade.' },
        { n: 5, t: 'LOTO Sebelum Maintenance', d: 'Isolasi dan kunci seluruh sumber energi sebelum servis/perbaikan.' },
        { n: 6, t: 'Harness di Ketinggian', d: 'Wajib fall protection pada kerja ≥ 1,8 m dengan anchor tersertifikasi.' },
        { n: 7, t: 'Permit Ruang Terbatas', d: 'Dilarang masuk confined space tanpa permit, gas test, dan attendant.' },
        { n: 8, t: 'Jangan Bypass Pengaman', d: 'Dilarang melepas/menonaktifkan guard, interlock, alarm, atau perangkat keselamatan.' },
        { n: 9, t: 'Permit Hot Work', d: 'Pekerjaan panas wajib permit, pembersihan area, dan fire watch.' },
        { n: 10, t: 'Stop Work', d: 'Wajib menghentikan pekerjaan yang tidak aman — tanpa takut sanksi.' },
      ];
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan</div>
          <h2><em>Life-Saving Rules</em> — 100% Wajib Dipahami</h2>
          <p class="lead">Sepuluh aturan penyelamat nyawa. Nilai post-test bagian LSR harus <b style="color:var(--amber)">100%</b> untuk lulus induksi.</p>
          <div class="rules stagger">
            ${items.map(r => `
              <div class="rule">
                <div class="n">${r.n}</div>
                <div><b>${r.t}</b><span>${r.d}</span></div>
              </div>`).join('')}
          </div>
          <div class="footnote">⚠ Pelanggaran terhadap Life-Saving Rules dapat berakibat <b>pemutusan hubungan kerja</b> dan, yang lebih penting, <b>kematian</b>.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     9 · STOP WORK AUTHORITY
     ============================================================ */
  {
    type: 'flow',
    mod: 'PROFIL',
    title: 'Stop Work Authority',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan</div>
          <h2><em>Stop Work Authority</em> (SWA)</h2>
          <p class="lead">Setiap orang — dari level terendah hingga manajemen — memiliki <b>hak dan kewajiban</b> menghentikan pekerjaan yang dianggap tidak aman. Perusahaan menjamin <b>tidak ada retaliasi</b> bagi penghentian kerja yang beritikad baik.</p>
          <div class="flow">
            <div class="step" style="border-color:var(--red-line); background:var(--red-soft); color:var(--red)">🛑 STOP</div>
            <div class="arr">➜</div>
            <div class="step" style="border-color:var(--amber-line); background:var(--amber-soft); color:var(--amber)">📢 LAPOR</div>
            <div class="arr">➜</div>
            <div class="step" style="border-color:var(--blue-line); background:var(--blue-soft); color:#9db4ff">🔧 PERBAIKI</div>
            <div class="arr">➜</div>
            <div class="step" style="border-color:var(--green-line); background:var(--green-soft); color:var(--green)">✅ LANJUT AMAN</div>
          </div>
          <h3 style="margin-top:30px; font-size:14px; color:var(--amber); letter-spacing:.1em; text-transform:uppercase;">Contoh Situasi Wajib SWA:</h3>
          <ul class="checks danger cols" style="margin-top:14px">
            <li>Hujan membuat haul road licin dan traksi hilang.</li>
            <li>Terlihat retakan (<i>tension crack</i>) pada lereng atau highwall.</li>
            <li>Alat berat tanpa alarm mundur / lampu / rem berfungsi.</li>
            <li>Tidak ada permit untuk pekerjaan panas / ruang terbatas / ketinggian.</li>
            <li>APD tidak sesuai atau rusak untuk tugas yang akan dilakukan.</li>
            <li>Rekan kerja menunjukkan tanda kelelahan berat atau tidak fit.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     10 · HAK & KEWAJIBAN
     ============================================================ */
  {
    type: 'two',
    mod: 'ATURAN',
    title: 'Hak & Kewajiban',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Hak & <em>Kewajiban</em> Anda</h2>
          <div class="two">
            <div class="panelbox ok">
              <h3><i></i>HAK Pekerja</h3>
              <ul>
                <li>Mengetahui bahaya, risiko, APD, dan prosedur aman di area kerja.</li>
                <li>Menolak pekerjaan tidak aman yang belum terkendali.</li>
                <li>Melapor bahaya/insiden tanpa takut disalahkan.</li>
                <li>Mendapat pelatihan, induksi, dan penyegaran.</li>
                <li>Mendapat pertolongan medis dan pelindungan kesehatan.</li>
                <li>Terlibat dalam konsultasi K3 (P2K3/safety committee).</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>KEWAJIBAN Pekerja</h3>
              <ul>
                <li>Mematuhi peraturan, SOP, JSA, permit, rambu, dan instruksi petugas.</li>
                <li>Memakai dan merawat APD sesuai ketentuan.</li>
                <li>Tidak merusak/menonaktifkan perangkat keselamatan.</li>
                <li>Menegur rekan yang bekerja tidak aman.</li>
                <li>Melaporkan setiap bahaya, near miss, cedera, dan tumpahan.</li>
                <li>Mengikuti briefing, toolbox meeting, dan evaluasi kompetensi.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     11 · ATURAN SITE
     ============================================================ */
  {
    type: 'checks',
    mod: 'ATURAN',
    title: 'Aturan Site & Perilaku',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Aturan Site & <em>Perilaku Wajib</em></h2>
          <ul class="checks cols">
            <li><b>ID Badge</b> wajib dipakai dan terlihat; ikuti aturan akses & escort.</li>
            <li><b>Narkoba & alkohol</b> dilarang total; tes acak diberlakukan.</li>
            <li><b>Merokok/vape</b> hanya di designated smoking area.</li>
            <li><b>HP</b> dilarang saat mengemudi, berjalan di area alat berat, atau kerja kritis.</li>
            <li><b>Foto/video/drone</b> hanya dengan izin tertulis.</li>
            <li><b>Kekerasan, pelecehan, bullying, diskriminasi</b> = pelanggaran berat.</li>
            <li><b>Pencurian</b> ore/BBM/aset dan aktivitas ilegal = pemecatan & proses hukum.</li>
            <li><b>Housekeeping:</b> jaga area kerja rapi dan bebas tumpahan.</li>
            <li><b>Suap/gratifikasi</b> dan laporan palsu dilarang keras.</li>
            <li><b>Hormati masyarakat lokal,</b> situs budaya, dan aturan komunitas.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     12 · PETA AREA
     ============================================================ */
  {
    type: 'cards',
    mod: 'ATURAN',
    title: 'Peta & Area Site',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Kenali <em>Area Site</em></h2>
          <p class="lead">Peta site terkini, jalur evakuasi, dan lokasi fasilitas darurat dibagikan saat induksi lapangan dan dipasang di papan informasi setiap area.</p>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>Pit & Disposal</h3><p>Area berisiko tinggi: alat berat, lereng, sump. Akses hanya dengan izin & komunikasi radio.</p></article>
            <article class="card"><div class="ico">${Icons.get('truck', { class: 'ico-svg' })}</div><h3>Haul Road</h3><p>Jalur alat berat & LV. Patuhi right of way, batas kecepatan, dan jarak aman.</p></article>
            <article class="card t"><div class="ico">${Icons.get('tools', { class: 'ico-svg' })}</div><h3>Workshop & Warehouse</h3><p>Bahaya mekanik, listrik, lifting, bahan kimia. APD spesifik wajib.</p></article>
            <article class="card"><div class="ico">${Icons.get('flammable', { class: 'ico-svg' })}</div><h3>Fuel Farm & Gudang B3</h3><p>Area mudah terbakar: larangan api/HP, grounding, spill kit wajib tersedia.</p></article>
            <article class="card b"><div class="ico">${Icons.get('factory', { class: 'ico-svg' })}</div><h3>Plant / Stockpile / Jetty<span class="tag cond">JIKA ADA</span></h3><p>Crusher, conveyor, smelter/HPAL, TSF, dan pengapalan — modul khusus berlaku.</p></article>
            <article class="card g"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>Klinik, Camp & Muster Point</h3><p>Ketahui lokasi klinik, titik kumpul, APAR, eyewash, dan jalur evakuasi area Anda.</p></article>
          </div>
          <div class="footnote">Hari pertama Anda di area mana pun wajib didampingi: ikuti <b>induksi area spesifik</b> dari supervisor setempat sebelum bekerja.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     13 · RAMBU & ALARM
     ============================================================ */
  {
    type: 'cards',
    mod: 'ATURAN',
    title: 'Rambu, Warna & Alarm',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Rambu, Warna & <em>Alarm</em></h2>
          <div class="cards stagger">
            <article class="card r" style="border-color:var(--red-line)">${Icons.get('stop', { class: 'ico-svg', stroke: 'var(--red)' })}<h3 style="color:var(--red)">Merah</h3><p>Larangan, bahaya, berhenti; peralatan pemadam kebakaran (APAR, hydrant).</p></article>
            <article class="card" style="border-color:var(--amber-line)">${Icons.get('warn', { class: 'ico-svg', stroke: 'var(--amber)' })}<h3 style="color:var(--amber)">Kuning</h3><p>Peringatan: hati-hati, area berisiko, batas kecepatan, alat berat beroperasi.</p></article>
            <article class="card b" style="border-color:var(--blue-line)">${Icons.get('info', { class: 'ico-svg', stroke: 'var(--blue)' })}<h3 style="color:var(--blue)">Biru</h3><p>Perintah/kewajiban: wajib helm, wajib kacamata, wajib lapor, jalur pejalan kaki.</p></article>
            <article class="card g" style="border-color:var(--green-line)">${Icons.get('check', { class: 'ico-svg', stroke: 'var(--green)' })}<h3 style="color:var(--green)">Hijau</h3><p>Kondisi aman: jalur evakuasi, muster point, P3K, pintu darurat.</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>Kode Sirene & Alarm Site</h3>
            <ul>
              <li><b>Sirene panjang berulang (3× panjang):</b> DARURAT — hentikan kerja, amankan diri, menuju muster point.</li>
              <li><b>Sirene putus-putus pendek:</b> SIAGA — bersiap, dengarkan instruksi radio/PA system.</li>
              <li><b>Satu bunyi panjang:</b> ALL CLEAR — situasi terkendali, kembali dengan instruksi supervisor.</li>
              <li><b>Sirene peledakan (jika ada):</b> 3× pendek = persiapan; panjang = ledakan; 1 panjang akhir = aman.</li>
            </ul>
          </div>
          <div class="footnote">Barricade, safety line, dan tag bahaya = larangan melintas. Dilarang memindahkan pengaman apa pun tanpa otorisasi.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     14 · KOMUNIKASI RADIO
     ============================================================ */
  {
    type: 'two',
    mod: 'ATURAN',
    title: 'Komunikasi & Radio',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Komunikasi & <em>Radio Site</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Etika Radio & Positive Communication</h3>
              <ul>
                <li>Gunakan <b>channel sesuai peruntukan</b> (Operasi / Maintenance / Darurat-ERT).</li>
                <li>Sebut <b>callsign & posisi</b> sebelum berbicara; pastikan pesan dijawab (closed loop).</li>
                <li>Konfirmasi setiap instruksi kritis: "diterima, diulang…"</li>
                <li>Dilarang bercanda/memenuhi channel; utamakan panggilan darurat.</li>
                <li>Area blank spot = wajib prosedur khusus / tidak masuk tanpa izin.</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>Format Laporan Darurat (5 Poin)</h3>
              <ul>
                <li><b>LOKASI</b> — sebut area / patokan yang jelas.</li>
                <li><b>KEJADIAN</b> — jenis insiden (kebakaran, longsor, korban…).</li>
                <li><b>KORBAN</b> — jumlah & kondisi.</li>
                <li><b>TINDAKAN</b> yang sudah dilakukan.</li>
                <li><b>NAMA</b> pelapor & callsign.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     15 · MANAJEMEN RISIKO
     ============================================================ */
  {
    type: 'cards',
    mod: 'RISIKO',
    title: 'Manajemen Risiko',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>Manajemen <em>Risiko</em> di Lapangan</h2>
          <div class="cards stagger">
            <article class="card"><div class="ico">${Icons.get('compass', { class: 'ico-svg' })}</div><h3>HIRADC</h3><p>Daftar bahaya & pengendalian resmi site. Pelajari HIRADC area Anda sebelum bekerja.</p></article>
            <article class="card b"><div class="ico">${Icons.get('clipboard', { class: 'ico-svg' })}</div><h3>JSA (Job Safety Analysis)</h3><p>Uraian langkah kerja, bahaya, dan pengendalian per tugas. Dibaca & ditandatangani seluruh kru sebelum kerja.</p></article>
            <article class="card t"><div class="ico">${Icons.get('hand', { class: 'ico-svg' })}</div><h3>Take 5 / SLAM</h3><p><b>S</b>top, <b>L</b>ihat, <b>A</b>nalisis, <b>M</b>anage: penilaian risiko dinamis 5 menit sebelum setiap tugas.</p></article>
            <article class="card g"><div class="ico">${Icons.get('mic', { class: 'ico-svg' })}</div><h3>Toolbox Meeting</h3><p>Briefing awal shift: tugas, cuaca, perubahan area, kesiapan orang & alat.</p></article>
          </div>
          <div class="panelbox" style="margin-top:16px">
            <h3><i></i>Hierarki Pengendalian Risiko (urutan wajib)</h3>
            <ul>
              <li><b>1. Eliminasi</b> → hapus bahaya. <b>2. Substitusi</b> → ganti dengan yang lebih aman.</li>
              <li><b>3. Rekayasa teknik</b> → guard, ventilasi, barricade, sensor.</li>
              <li><b>4. Administratif</b> → SOP, permit, rambu, pelatihan, rotasi.</li>
              <li><b>5. APD</b> → pertahanan TERAKHIR, bukan yang pertama.</li>
            </ul>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     16 · RISK MATRIX (Interactive)
     ============================================================ */
  {
    type: 'riskMatrix',
    mod: 'RISIKO',
    title: 'Matriks Risiko (5×5)',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>Matriks <em>Risiko 5×5</em> (Interaktif)</h2>
          <p class="lead">Klik sel untuk melihat contoh bahaya pada kombinasi tingkat kemungkinan (L) dan keparahan (K) tersebut.</p>
          <div class="risk-matrix" id="riskMatrix">
            <div class="rm-axis-x">
              <span></span>
              <span>Rendah</span><span>Sedang</span><span>Tinggi</span><span>Sangat Tinggi</span><span>Ekstrem</span>
            </div>
            ${[
              { k: 'Sangat Tinggi', cells: ['l5','l5','l4','l3','l2'] },
              { k: 'Tinggi',        cells: ['l5','l4','l3','l2','l1'] },
              { k: 'Sedang',        cells: ['l4','l3','l2','l1','l1'] },
              { k: 'Rendah',        cells: ['l3','l2','l1','l1','l1'] },
              { k: 'Jarang',        cells: ['l2','l1','l1','l1','l1'] },
            ].map(row => `
              <div class="rm-row">
                <span class="rm-label-y">${row.k}</span>
                ${row.cells.map(c => `<div class="rm-cell ${c}" data-level="${c}">${c === 'l5' ? 'STOP' : c === 'l4' ? 'TINGGI' : c === 'l3' ? 'SEDANG' : c === 'l2' ? 'RENDAH' : 'R'}"></div>`).join('')}
              </div>`).join('')}
            <div class="rm-axis-x">
              <span style="font-size:10px;color:var(--muted);text-align:right;padding-right:8px">→ Kemungkinan (L)</span>
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
            </div>
          </div>
          <div class="footnote" style="margin-top:14px"><b>Cara pakai:</b> Tentukan nilai <b>Kemungkinan</b> dan <b>Keparahan</b>, lalu lihat level di perpotongannya. Level L4/L5 = pekerjaan tidak boleh dimulai tanpa pengendalian tambahan.</div>
        </div>
      `;
    },
    afterRender() { Quiz.bindRiskMatrix(); },
  },

  /* ============================================================
     17 · IZIN KERJA
     ============================================================ */
  {
    type: 'checks',
    mod: 'RISIKO',
    title: 'Izin Kerja (PTW)',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>Izin Kerja <em>(Permit to Work)</em></h2>
          <ul class="checks cols">
            <li><b>Hot Work</b> — pengelasan, cutting, grinding, pekerjaan berpercikan api.</li>
            <li><b>Confined Space Entry</b> — tangki, hopper, sump, vessel, pipa.</li>
            <li><b>Work at Height</b> — kerja ≥ 1,8 m tanpa pengaman permanen.</li>
            <li><b>Excavation/Trenching</b> — galian dengan risiko utilitas & longsor.</li>
            <li><b>Critical Lifting</b> — beban besar, tandem lift, area kritis.</li>
            <li><b>Electrical Work / Isolation (LOTO)</b> — kerja listrik & isolasi energi.</li>
          </ul>
          <div class="footnote">Prinsip emas: <b>tidak ada pekerjaan berisiko tanpa permit yang valid.</b> Permit berhenti berlaku bila kondisi berubah, shift berganti tanpa serah terima, atau pekerjaan terhenti lama.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     18 · SIMOPS & MOC
     ============================================================ */
  {
    type: 'two',
    mod: 'RISIKO',
    title: 'SIMOPS & MOC',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>SIMOPS & <em>Management of Change</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>SIMOPS — Operasi Simultan</h3>
              <ul>
                <li>Beberapa pekerjaan di satu area = risiko saling membahayakan (crane + hot work + traffic).</li>
                <li>Wajib <b>koordinasi antar-penanggung jawab</b>, pembagian zona, dan komunikasi bersama.</li>
                <li>Tetapkan urutan kerja dan batas zona eksklusi yang disepakati.</li>
                <li>Hentikan SIMOPS bila komunikasi terputus atau kondisi berubah.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>MOC — Management of Change</h3>
              <ul>
                <li>Setiap <b>perubahan</b> (alat, metode, bahan, desain, personel kunci, kondisi darurat) wajib dinilai risikonya <b>sebelum</b> diterapkan.</li>
                <li>Dilarang improvisasi prosedur di lapangan tanpa otorisasi.</li>
                <li>Perubahan sementara tetap wajib MOC dan batas waktu jelas.</li>
                <li>Dokumen, JSA, dan pelatihan diperbarui mengikuti perubahan.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     19 · APD WAJIB
     ============================================================ */
  {
    type: 'cards',
    mod: 'APD',
    title: 'APD Wajib',
    render() {
      return `
        <div class="inner">
          <div class="kicker">APD & Kesehatan</div>
          <h2>APD <em>Wajib</em> di Seluruh Area Site</h2>
          <div class="cards stagger">
            <article class="card"><div class="ico">${Icons.get('helmet', { class: 'ico-svg' })}</div><h3>Helm Safety</h3><p>Sesuai standar (SNI/ANSI/EN); chinstrap terpasang bila diperlukan; ganti setelah benturan.</p></article>
            <article class="card b"><div class="ico">${Icons.get('glass', { class: 'ico-svg' })}</div><h3>Kacamata Safety</h3><p>Wajib di seluruh area operasional; side shield untuk perlindungan samping.</p></article>
            <article class="card t"><div class="ico">${Icons.get('boot', { class: 'ico-svg' })}</div><h3>Safety Boots</h3><p>Pelindung jari (steel/composite toe), sol anti-slip & tahan tusukan; wajib di area operasional.</p></article>
            <article class="card g"><div class="ico">${Icons.get('vest', { class: 'ico-svg' })}</div><h3>High-Visibility</h3><p>Rompi/pakaian reflektif agar terlihat oleh operator alat berat, siang dan malam.</p></article>
            <article class="card"><div class="ico">${Icons.get('glove', { class: 'ico-svg' })}</div><h3>Sarung Tangan</h3><p>Sesuai tugas: cut-resistant, chemical, anti-getaran, atau umum.</p></article>
          </div>
          <div class="footnote">APD adalah pertahanan terakhir. Jika APD saja tidak cukup untuk mengendalikan risiko, pekerjaan tidak boleh dimulai.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     20 · APD INTERACTIVE SELECTOR
     ============================================================ */
  {
    type: 'apdSelector',
    mod: 'APD',
    title: 'Pemilihan APD (Interaktif)',
    render() {
      const tasks = [
        { id: 'las', name: 'Pengelasan (Welding)', items: ['helmet','glass','glove','boot','vest','leather-apron'] },
        { id: 'chem', name: 'Penanganan Asam Sulfat', items: ['helmet','glass','chem-suit','chem-glove','chem-boot','vest'] },
        { id: 'h', name: 'Kerja di Ketinggian', items: ['helmet','glass','harness','boot','vest'] },
        { id: 'noise', name: 'Area Bising (Plant)', items: ['helmet','glass','earp','boot','vest'] },
        { id: 'dust', name: 'Area Berdebu', items: ['helmet','glass','mask','boot','vest'] },
        { id: 'weld-grind', name: 'Grinding / Cutting', items: ['helmet','face-shield','glass','glove','boot','vest'] },
        { id: 'elec', name: 'Pekerjaan Listrik', items: ['helmet','glass','elec-glove','boot','arc-suit'] },
        { id: 'water', name: 'Di Atas Air (Jetty)', items: ['helmet','glass','vest','boot','life-jacket'] },
      ];

      const apdLib = {
        'helmet':     { name: 'Helm Safety', sub: 'SNI/ANSI, chinstrap' },
        'glass':      { name: 'Kacamata Safety', sub: 'Side shield' },
        'glove':      { name: 'Sarung Tangan Umum', sub: 'Cut-resistant' },
        'boot':       { name: 'Safety Boots', sub: 'Steel toe + anti-slip' },
        'vest':       { name: 'High-Vis Vest', sub: 'Reflektif' },
        'leather-apron': { name: 'Apron Kulit', sub: 'Tahan percikan api' },
        'chem-suit':  { name: 'Chemical Suit', sub: 'Tahan asam' },
        'chem-glove': { name: 'Sarung Tangan Kimia', sub: 'Nitrile/butyl' },
        'chem-boot':  { name: 'Boots Tahan Kimia', sub: 'PVC/rubber' },
        'harness':    { name: 'Full Body Harness', sub: 'Double lanyard' },
        'earp':       { name: 'Earplug/Earmuff', sub: '≥85 dBA' },
        'mask':       { name: 'Respirator', sub: 'Fit-tested' },
        'face-shield':{ name: 'Face Shield', sub: 'Full face' },
        'elec-glove': { name: 'Sarung Tangan Isolasi', sub: 'Class sesuai tegangan' },
        'arc-suit':   { name: 'Arc Flash Suit', sub: 'CAT 2+' },
        'life-jacket':{ name: 'Life Jacket', sub: 'Auto-inflate' },
      };

      return `
        <div class="inner">
          <div class="kicker">APD & Kesehatan</div>
          <h2>Pemilihan <em>APD</em> — Alat Bantu Interaktif</h2>
          <p class="lead">Pilih tugas, lalu cek APD yang dibutuhkan. Sistem akan memberi tahu bila APD Anda belum lengkap.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:8px; margin-top:14px" id="apdTaskBtns">
            ${tasks.map(t => `<button class="iconbtn apd-task" data-task="${t.id}" style="width:auto; padding:10px 14px; font-size:12px; height:auto; letter-spacing:.04em;">${t.name}</button>`).join('')}
          </div>
          <div id="apdList" class="apd-selector" style="margin-top:18px"></div>
          <div id="apdResult"></div>
        </div>
      `;
    },
    afterRender() { Quiz.bindAPDSelector(); },
  },

  /* ============================================================
     21 · APD SPESIFIK
     ============================================================ */
  {
    type: 'two',
    mod: 'APD',
    title: 'APD Spesifik & Pengelolaan',
    render() {
      return `
        <div class="inner">
          <div class="kicker">APD & Kesehatan</div>
          <h2>APD <em>Spesifik Tugas</em> & Pengelolaan</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>APD Sesuai Tugas</h3>
              <ul>
                <li><b>Earplug/earmuff</b> — area bising ≥ 85 dBA (plant, workshop, dekat HE).</li>
                <li><b>Respirator</b> — area berdebu/uap; wajib fit test; ganti filter berkala.</li>
                <li><b>Full body harness</b> — kerja ketinggian; inspeksi sebelum pakai.</li>
                <li><b>Face shield</b> — grinding, chemical handling, area percikan.</li>
                <li><b>Chemical suit/apron/boots</b> — penanganan asam & B3.</li>
                <li><b>APD tahan panas</b> — area smelter/molten (jika ada).</li>
                <li><b>Life jacket</b> — jetty, barge, kerja di atas air.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Pengelolaan APD</h3>
              <ul>
                <li>Inspeksi sebelum pakai: retak, aus, kedaluwarsa, kontaminasi.</li>
                <li>Bersihkan & simpan benar; APD terkontaminasi B3 dikelola khusus.</li>
                <li>APD rusak = tag & ganti; dilarang memakai APD tidak layak.</li>
                <li>Tidak memakai APD wajib = pelanggaran & sanksi disiplin.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     22 · FIT TO WORK
     ============================================================ */
  {
    type: 'two',
    mod: 'KESEHATAN',
    title: 'Fit to Work & Fatigue',
    render() {
      return `
        <div class="inner">
          <div class="kicker">APD & Kesehatan</div>
          <h2><em>Fit to Work</em> & Manajemen Kelelahan</h2>
          <div class="two">
            <div class="panelbox ok">
              <h3><i></i>Syarat Fit to Work Harian</h3>
              <ul>
                <li>Sehat, sadar penuh, tidak demam/nyeri berat.</li>
                <li>Tidak terpengaruh alkohol/narkoba/obat kantuk (laporkan obat yang dikonsumsi).</li>
                <li>Tidur cukup sebelum shift; tidak kelelahan ekstrem.</li>
                <li>MCU awal & berkala sesuai risiko pekerjaan.</li>
                <li>Lapor supervisor/klinik bila merasa TIDAK FIT — tanpa sanksi.</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>Waspadai Fatigue & Microsleep</h3>
              <ul>
                <li>Tanda: menguap terus, mata berat, sulit fokus, reaksi lambat, hampir tertidur.</li>
                <li>Pengendalian: istirahat cukup, hidrasi, rotasi tugas, istirahat terjadwal, batas jam kerja.</li>
                <li>Operator HE: wajib lapor dispatcher bila mengantuk — berhenti di tempat aman.</li>
                <li>Rekan kerja wajib saling memantau (buddy system).</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     23 · BAHAYA KESEHATAN NIKEL
     ============================================================ */
  {
    type: 'cards',
    mod: 'KESEHATAN',
    title: 'Bahaya Kesehatan Nikel',
    render() {
      return `
        <div class="inner">
          <div class="kicker">APD & Kesehatan</div>
          <h2>Bahaya <em>Kesehatan</em> Khas Nikel</h2>
          <div class="cards stagger">
            <article class="card"><div class="ico">${Icons.get('mask', { class: 'ico-svg' })}</div><h3>Debu Tambang</h3><p>Debu laterit/ore, silika & debu batubara (jika ada smelter/PLTU). Risiko gangguan pernapasan jangka panjang. Kendali: penyiraman, ventilasi, respirator, medical surveillance.</p></article>
            <article class="card b"><div class="ico">${Icons.get('earp', { class: 'ico-svg' })}</div><h3>Kebisingan</h3><p>Alat berat, crusher, genset, furnace. Area ≥ 85 dBA = wajib pelindung telinga + program konservasi pendengaran (audiometri berkala).</p></article>
            <article class="card t"><div class="ico">${Icons.get('refresh', { class: 'ico-svg' })}</div><h3>Getaran</h3><p>Whole-body vibration (operator HE) & hand-arm (alat genggam). Kendali: rotasi, perawatan unit, kursi suspensi, istirahat.</p></article>
            <article class="card r"><div class="ico">${Icons.get('fire', { class: 'ico-svg' })}</div><h3>Heat Stress</h3><p>Iklim tropis + area panas (smelter). Kenali heat cramps → heat exhaustion → <b>heat stroke (darurat medis)</b>. Hidrasi elektrolit, work-rest cycle, area teduh.</p></article>
            <article class="card"><div class="ico">${Icons.get('dropper', { class: 'ico-svg' })}</div><h3>Dermatitis Nikel</h3><p><i>"Nickel itch"</i> — alergi kulit akibat kontak debu/lumpur nikel. Kendali: sarung tangan, pakaian kerja tertutup, mandi & ganti baju sebelum ke camp, pisahkan cucian pakaian kerja.</p></article>
            <article class="card g"><div class="ico">${Icons.get('info', { class: 'ico-svg' })}</div><h3>Biologis & Ergonomi</h3><p>Nyamuk (malaria/DBD), ular, hewan liar; serta cedera otot akibat manual handling. Kendali: repellent, sepatu boots, teknik angkat benar, alat bantu mekanis.</p></article>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     24 · TRAFFIC
     ============================================================ */
  {
    type: 'checks',
    mod: 'AREA',
    title: 'Traffic & Haul Road',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Risiko Kritikal Area</div>
          <h2>Keselamatan <em>Traffic & Haul Road</em></h2>
          <ul class="checks cols">
            <li><b>Right of way:</b> alat berat (HE) &gt; light vehicle (LV) &gt; pejalan kaki; kendaraan menanjak diprioritaskan.</li>
            <li><b>Batas kecepatan</b> sesuai rambu/TMP site (contoh umum: LV ± 40 km/j haul road, lebih rendah saat hujan/malam).</li>
            <li><b>Seatbelt</b> wajib untuk semua penumpang; dilarang HP saat mengemudi.</li>
            <li><b>Jarak aman</b> antar kendaraan (minimal ± 50 m di haul road atau sesuai TMP site).</li>
            <li><b>Blind spot:</b> jangan pernah berada di zona buta HE; pastikan kontak mata/komunikasi dengan operator.</li>
            <li><b>Radio & positive communication</b> wajib sebelum masuk/menyilang jalur operasional.</li>
            <li><b>Pre-start check</b> harian: rem, ban, lampu, wiper, klakson, radio, APAR, seatbelt.</li>
            <li><b>Parkir aman:</b> tanah datar, parking brake, wheel chock, hindari tepi lereng/sump.</li>
            <li><b>Pejalan kaki:</b> hanya di jalur pedestrian; menyeberang di titik yang ditetapkan.</li>
          </ul>
          <div class="panelbox danger" style="margin-top:16px">
            <h3><i></i>Wet Weather Protocol — KHUSUS LATERIT</h3>
            <ul>
              <li>Jalan laterit menjadi <b>sangat licin</b> saat hujan; traksi dapat hilang mendadak.</li>
              <li>Kurangi kecepatan, nyalakan lampu, perbesar jarak aman.</li>
              <li>Bila traksi hilang / jalan rusak berat: <b>STOP</b> di tempat aman, lapor dispatcher. SWA berlaku penuh.</li>
            </ul>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     25 · ALAT BERAT
     ============================================================ */
  {
    type: 'cards',
    mod: 'AREA',
    title: 'Alat Berat',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Risiko Kritikal Area</div>
          <h2>Keselamatan <em>Alat Berat (HE)</em></h2>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('truck', { class: 'ico-svg' })}</div><h3>Exclusion Zone</h3><p>Dilarang masuk radius operasi/swing HE tanpa izin & komunikasi positif dengan operator. Unit berhenti total sebelum orang mendekat.</p></article>
            <article class="card"><div class="ico">${Icons.get('truck', { class: 'ico-svg' })}</div><h3>Loading & Dumping</h3><p>LV dilarang berada dekat excavator saat loading; posisi dump truck aman. Saat dumping: perhatikan berm/windrow & kestabilan ground.</p></article>
            <article class="card b"><div class="ico">${Icons.get('search', { class: 'ico-svg' })}</div><h3>Pre-Start & Walk-Around</h3><p>Periksa track/ban, hidrolik, attachment, rem, steering, fire suppression, alarm mundur. Unit tidak layak = tag & lapor.</p></article>
            <article class="card t"><div class="ico">${Icons.get('fire', { class: 'ico-svg' })}</div><h3>Kebakaran Unit</h3><p>Kenali lokasi APAR & sistem fire suppression unit; prosedur shutdown–evakuasi–lapor bila terjadi kebakaran.</p></article>
          </div>
          <ul class="checks danger" style="margin-top:16px">
            <li>Dilarang <b>riding</b> di bak/attachment; dilarang bekerja di bawah dump body tanpa prop/stand sah.</li>
            <li>Isolasi/LOTO wajib sebelum pembersihan, servis, atau perbaikan apa pun.</li>
            <li>Waspadai tekanan hidrolik: <b>fluid injection</b> (semburan oli bertekanan) dapat melukai fatal.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     26 · GEOTEKNIK
     ============================================================ */
  {
    type: 'checks',
    mod: 'AREA',
    title: 'Geoteknik & Pit',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Risiko Kritikal Area</div>
          <h2>Geoteknik & <em>Open Pit Laterit</em></h2>
          <p class="lead">Laterit yang jenuh air berperilaku seperti lumpur cair. Ini bahaya nomor satu di pit nikel.</p>
          <ul class="checks danger cols">
            <li><b>Highwall/lowwall:</b> dilarang bekerja/parkir di bawah material menggantung atau lereng tanpa inspeksi geotek.</li>
            <li><b>Tanda bahaya longsor:</b> retakan (tension crack) di crest, rembesan air, suara tanah, amblasan.</li>
            <li><b>Mudflow/liquefaction:</b> material basah dapat mengalir menelan alat — hormati jarak aman dari toe lereng & disposal.</li>
            <li><b>Pit sump:</b> dilarang parkir/dumping dekat tepi sump yang tidak stabil; waspadai pompa & pipa.</li>
            <li><b>Trigger hujan:</b> setelah hujan deras, area rawan ditutup sampai inspeksi geoteknik menyatakan aman.</li>
            <li><b>Barricade & rambu</b> geoteknik = larangan mutlak; dilarang memindahkan tanpa otorisasi.</li>
            <li><b>Scaling</b> hanya oleh personel berkompeten dengan metode & pengawasan yang disetujui.</li>
            <li>Lihat retakan atau aliran lumpur? <b>STOP WORK → lapor dispatcher/geotek segera.</b></li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     27 · LOTO
     ============================================================ */
  {
    type: 'flow',
    mod: 'KERJA',
    title: 'LOTO',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>LOTO</em> — Lock Out Tag Out</h2>
          <div class="flow">
            <div class="step">1 · PERSIAPAN</div><div class="arr">➜</div>
            <div class="step">2 · SHUTDOWN</div><div class="arr">➜</div>
            <div class="step">3 · ISOLASI</div><div class="arr">➜</div>
            <div class="step">4 · LOCK & TAG</div><div class="arr">➜</div>
            <div class="step">5 · LEPAS ENERGI SISA</div><div class="arr">➜</div>
            <div class="step">6 · VERIFIKASI NOL ENERGI</div><div class="arr">➜</div>
            <div class="step">7 · BEKERJA & PELEPASAN</div>
          </div>
          <ul class="checks cols" style="margin-top:22px">
            <li>Sumber energi: <b>listrik, mekanik, hidrolik, pneumatik, gravitasi, panas, kimia, energi tersimpan</b> (akumulator, pegas, beban, tekanan).</li>
            <li><b>One person – one lock – one key.</b> Group LOTO memakai lockbox/hasp dengan prosedur jelas.</li>
            <li>Dilarang melepas lock/tag orang lain tanpa prosedur otorisasi khusus.</li>
            <li>Verifikasi nol energi: coba start, ukur tegangan/tekanan/suhu, pastikan tidak ada gerakan.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     28 · LISTRIK
     ============================================================ */
  {
    type: 'checks',
    mod: 'KERJA',
    title: 'Keselamatan Listrik',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2>Keselamatan <em>Listrik</em></h2>
          <ul class="checks cols">
            <li>Hanya <b>teknisi berwenang</b> yang membuka panel/melakukan kerja listrik.</li>
            <li>LOTO listrik wajib; verifikasi tegangan nol sebelum menyentuh konduktor.</li>
            <li>Waspadai <b>arc flash</b>: APD listrik & jarak aman sesuai batas kerja.</li>
            <li>Alat portable: inspeksi kabel/steker; gunakan <b>RCD/GFCI</b>; dilarang alat rusak.</li>
            <li>Jaga jarak aman dari <b>jaringan overhead</b> untuk crane/alat/tangga; koordinasikan pemadaman bila perlu.</li>
            <li>Deteksi <b>utilitas bawah tanah</b> sebelum menggali.</li>
            <li>Kabel rusak/terkelupas = tag, laporkan, jangan sentuh; area genangan air = risiko ganda.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     29 · KETINGGIAN
     ============================================================ */
  {
    type: 'checks',
    mod: 'KERJA',
    title: 'Kerja di Ketinggian',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2>Kerja di <em>Ketinggian</em></h2>
          <ul class="checks cols">
            <li>Batas wajib fall protection: <b>≥ 1,8 m</b> (atau sesuai standar site) + permit.</li>
            <li><b>Full body harness + double lanyard</b> pada anchor tersertifikasi; inspeksi sebelum pakai.</li>
            <li>Scaffolding hanya dengan <b>tag aman</b>; dilarang mengubah struktur scaffold.</li>
            <li>MEWP/scissor lift: operator kompeten, harness terikat, permukaan stabil.</li>
            <li>Tangga: 3 titik kontak, dikaitkan, sudut benar, inspeksi rutin.</li>
            <li>Cegah <b>falling object</b>: tool lanyard, toe board, barricade area bawah.</li>
            <li>Wajib <b>rescue plan</b> (evakuasi korban tergantung — cegah suspension trauma).</li>
            <li>Berhenti saat angin kencang, hujan licin, atau petir.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     30 · CONFINED SPACE
     ============================================================ */
  {
    type: 'two',
    mod: 'KERJA',
    title: 'Ruang Terbatas',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Ruang Terbatas</em> (Confined Space)</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Contoh & Bahaya</h3>
              <ul>
                <li>Tangki BBM, bin, hopper, sump, vessel, autoclave, pipa besar, conveyor gallery.</li>
                <li>Bahaya: kekurangan O₂, gas beracun (CO, H₂S, SO₂), gas mudah terbakar, material menimbun, suhu ekstrem.</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>Syarat Masuk Mutlak</h3>
              <ul>
                <li><b>Permit</b> confined space berlaku.</li>
                <li><b>Isolasi/LOTO + blanking</b> seluruh energi & material.</li>
                <li><b>Gas test:</b> O₂ 19,5–23,5%; gas mudah terbakar &lt; 5% LEL (0% untuk hot work); toksik di bawah NAB. Monitoring berkelanjutan.</li>
                <li><b>Ventilasi</b> paksa; <b>attendant</b> siaga di luar dengan komunikasi terus-menerus.</li>
                <li><b>Peralatan rescue</b> (tripod, winch, SCBA) siap; <b>dilarang rescue improvisasi</b>.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     31 · HOT WORK & APAR
     ============================================================ */
  {
    type: 'two',
    mod: 'KERJA',
    title: 'Hot Work & APAR',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Hot Work</em> & Pencegahan Kebakaran</h2>
          <div class="two">
            <div class="panelbox warn">
              <h3><i></i>Aturan Hot Work</h3>
              <ul>
                <li>Permit hot work wajib; area dibersihkan dari bahan mudah terbakar atau dilindungi fire blanket.</li>
                <li><b>Fire watch</b> siaga selama kerja dan ± 30–60 menit setelah selesai.</li>
                <li>Gas test bila dekat fuel/chemical/area berpotensi gas.</li>
                <li>APAR sesuai kelas api tersedia di titik kerja.</li>
                <li>Khusus area fuel farm/chemical: isolasi & otorisasi tambahan mutlak.</li>
              </ul>
            </div>
            <div class="panelbox">
              <h3><i></i>APAR & Kelas Kebakaran</h3>
              <ul>
                <li><b>Kelas A</b> padat (kayu, kertas) — air/foam/powder.</li>
                <li><b>Kelas B</b> cair (BBM, oli) — foam/powder/CO₂.</li>
                <li><b>Kelas C</b> gas — powder/CO₂ (isolasi sumber).</li>
                <li><b>Kelas D</b> logam — powder khusus.</li>
                <li><b>Listrik:</b> CO₂/powder — jangan air.</li>
                <li>Teknik <b>PASS</b>: Pull, Aim, Squeeze, Sweep.</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Api membesar? Jangan heroik. Evakuasi, bunyikan alarm, hubungi ERT.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     32 · LIFTING
     ============================================================ */
  {
    type: 'checks',
    mod: 'KERJA',
    title: 'Lifting & Rigging',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Lifting</em> & Rigging</h2>
          <ul class="checks cols">
            <li>Operator crane/forklift, rigger, dan signaler wajib <b>kompeten & berwenang</b>.</li>
            <li>Patuhi <b>load chart</b>; dilarang overload; ketahui berat beban sebelum angkat.</li>
            <li>Inspeksi lifting gear (sling, shackle, hook, chain block) — <b>tag & singkirkan</b> yang rusak.</li>
            <li><b>Exclusion zone:</b> dilarang berada di bawah beban tergantung atau jalur swing.</li>
            <li>Gunakan <b>tagline</b>; satu komando signaler; komunikasi radio bila pandangan terhalang.</li>
            <li><b>Critical lift</b> (beban besar/tandem/bentuk tak stabil) wajib lifting plan terotorisasi.</li>
            <li>Outrigger penuh pada ground stabil; waspadai jarak <b>jaringan listrik</b>.</li>
            <li>Berhenti saat angin kencang/petir.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     33 · GALIAN
     ============================================================ */
  {
    type: 'checks',
    mod: 'KERJA',
    title: 'Galian & Parit',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Galian</em> & Parit (Excavation)</h2>
          <ul class="checks cols">
            <li>Permit excavation wajib; <b>deteksi utilitas bawah tanah</b> (kabel, pipa) sebelum menggali.</li>
            <li>Pengendalian runtuh: <b>sloping/benching/shoring/shielding</b> sesuai kedalaman & jenis tanah (laterit jenuh = sangat rawan).</li>
            <li>Barricade + rambu di sekeliling galian; penerangan bila malam.</li>
            <li>Jalur masuk/keluar aman (tangga) setiap jarak tertentu; dilarang melompat masuk.</li>
            <li>Spoil pile & alat berat berjarak aman dari tepi galian.</li>
            <li>Inspeksi ulang setelah hujan, getaran, atau perubahan kondisi.</li>
            <li>Dilarang bekerja sendirian di dalam parit.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     34 · KIMIA & B3
     ============================================================ */
  {
    type: 'checks',
    mod: 'FASILITAS',
    title: 'Bahan Kimia & B3',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2>Bahan <em>Kimia & B3</em></h2>
          <ul class="checks cols">
            <li><b>SDS (Safety Data Sheet)</b> wajib tersedia & dipahami untuk setiap bahan kimia.</li>
            <li>Wadah wajib <b>berlabel</b>; dilarang memindahkan ke wadah tanpa label.</li>
            <li><b>Segregasi</b> bahan incompatible (asam–basa, oksidator–flammable) + secondary containment/bunding.</li>
            <li><b>Asam sulfat</b> (jika ada HPAL/laboratorium): korosif & eksotermik — chemical suit, face shield, gloves khusus; tahu lokasi <b>eyewash & safety shower</b> (bilas ≥ 15 menit).</li>
            <li>Tabung gas: posisi tegak terikat, cap terpasang, jauh dari panas; segregasi oksigen–bahan bakar.</li>
            <li><b>Spill kit</b>: ketahui lokasi & cara pakai; tumpahan besar = evakuasi & lapor.</li>
            <li>Limbah B3 (oli bekas, filter, baterai, kemasan kimia, limbah medis) → tempat berlabel, dilarang buang sembarangan.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     35 · PLANT & CONVEYOR
     ============================================================ */
  {
    type: 'checks',
    mod: 'FASILITAS',
    title: 'Plant & Conveyor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2><em>Plant</em>, Crusher & Conveyor</h2>
          <ul class="checks cols">
            <li><b>Moving parts</b> (crusher, screen, pulley, roller, coupling) = bahaya jepit/tertarik; <b>guarding wajib</b>, dilarang melepas guard/interlock.</li>
            <li>Conveyor: gunakan <b>crossing point</b>; dilarang riding/berjalan di atas belt; kenali <b>pull cord</b> darurat.</li>
            <li>Membersihkan jam/chute/hopper = <b>LOTO wajib</b> sebelum tangan/alat masuk.</li>
            <li>Debu & bising: APD wajib; sistem dust suppression & housekeeping rutin.</li>
            <li>Waspada confined space di hopper/bin/thickener/sump plant.</li>
            <li>Hot work di area plant = permit + fire watch (risiko debu/belt terbakar).</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     36 · SMELTER / HPAL / TSF / JETTY
     ============================================================ */
  {
    type: 'cards',
    mod: 'FASILITAS',
    title: 'Smelter / HPAL / TSF / Jetty',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2>Fasilitas Khusus <span class="tag cond">SESUAI KONFIGURASI SITE</span></h2>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('fire', { class: 'ico-svg' })}</div><h3>Smelter / RKEF</h3><ul><li>Molten metal & slag: <b>dilarang ada air/genangan</b> di area tapping/slag (ledakan uap).</li><li>Radiant heat: APD tahan panas, work-rest, hidrasi.</li><li>Coal yard: spontaneous combustion & debu mudah terbakar.</li><li>Gas CO/SO₂: detektor gas & ventilasi.</li></ul></article>
            <article class="card"><div class="ico">${Icons.get('dropper', { class: 'ico-svg' })}</div><h3>HPAL / Hydrometallurgy</h3><ul><li>Asam sulfat pekat + sistem <b>bertekanan tinggi</b> (autoclave, pipa).</li><li>Oxygen enrichment: material kompatibel, bebas oli/grease.</li><li>Shower/eyewash, SCBA/escape set, alarm gas.</li></ul></article>
            <article class="card b"><div class="ico">${Icons.get('drop', { class: 'ico-svg' })}</div><h3>TSF (Tailings)</h3><ul><li>Akses terbatas; dilarang berenang/memancing.</li><li>Bahaya liquefaction & kegagalan bendungan; kenali tanda rembesan/retakan.</li><li>Kenali <b>Emergency Action Plan</b> & jalur evakuasi hilir.</li></ul></article>
            <article class="card t"><div class="ico">${Icons.get('ship', { class: 'ico-svg' })}</div><h3>Jetty & Barge (DSO)</h3><ul><li><b>Life jacket</b> wajib; kenali snap-back zone mooring line.</li><li>Nikel ore = kargo Grup A (IMSBC): bahaya <b>likuefaksi</b> bila kadar air melebihi TML.</li><li>Man overboard: alarm, life ring, rescue boat.</li><li>Batas cuaca: gelombang/angin/arus.</li></ul></article>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     37 · FUEL FARM
     ============================================================ */
  {
    type: 'checks',
    mod: 'FASILITAS',
    title: 'Fuel Farm',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2><em>Fuel Farm</em> & Bahan Mudah Terbakar</h2>
          <ul class="checks cols">
            <li>Larangan api terbuka, rokok, HP; hot work hanya dengan permit + isolasi.</li>
            <li><b>Grounding & bonding</b> saat transfer BBM untuk mencegah listrik statis.</li>
            <li>Refueling unit: mesin mati, posisi aman, APAR siap, dilarang overfill.</li>
            <li>Bunding/secondary containment wajib; spill kit & pemisah oli-air berfungsi.</li>
            <li>APAR & sistem pemadam tersedia dan tidak terhalang.</li>
            <li>Kebocoran/bau BBM menyengat = lapor segera; tangani dengan prosedur spill.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     38 · LINGKUNGAN
     ============================================================ */
  {
    type: 'checks',
    mod: 'FASILITAS',
    title: 'Perlindungan Lingkungan',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2>Perlindungan <em>Lingkungan</em></h2>
          <ul class="checks cols">
            <li><b>Zero uncontrolled spill:</b> cegah & laporkan tumpahan BBM/oli/kimia sekecil apa pun.</li>
            <li>Pilah sampah: domestik, scrap, dan <b>limbah B3</b> ke wadah berlabel.</li>
            <li>Dilarang membuang limbah/oli ke tanah, drainase, atau badan air.</li>
            <li>Hormati <b>settling pond & sistem drainase</b> site; jangan mengubah aliran air tanpa izin.</li>
            <li>Kendalikan erosi & sedimentasi sesuai rencana pengelolaan lingkungan.</li>
            <li><b>Satwa & flora dilindungi:</b> dilarang berburu, menangkap, memetik, atau mengganggu.</li>
            <li>Temuan benda/situs budaya = hentikan kerja area setempat & lapor.</li>
            <li>Keluhan masyarakat terkait debu/bising/air diteruskan ke fungsi lingkungan.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     39 · TANGGAP DARURAT
     ============================================================ */
  {
    type: 'cards',
    mod: 'DARURAT',
    title: 'Tanggap Darurat',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Darurat & Medis</div>
          <h2><em>Tanggap Darurat</em> & Evakuasi</h2>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('siren', { class: 'ico-svg' })}</div><h3>Saat Alarm Berbunyi</h3><p>Hentikan pekerjaan dengan aman → matikan peralatan bila memungkinkan → menuju <b>muster point</b> lewat jalur evakuasi → lapor untuk headcount → tunggu instruksi. Jangan kembali sebelum ALL CLEAR.</p></article>
            <article class="card"><div class="ico">${Icons.get('user', { class: 'ico-svg' })}</div><h3>Organisasi Darurat</h3><p>Kenali peran: Incident Commander, <b>ERT</b> (Emergency Response Team), kontrol room, klinik, security, muster officer. Nomor darurat site dipasang di setiap area & kendaraan.</p></article>
            <article class="card b"><div class="ico">${Icons.get('list', { class: 'ico-svg' })}</div><h3>Skenario Utama Site</h3><ul><li>Kebakaran unit/plant/area vegetasi</li><li>Kecelakaan alat berat / korban terjepit</li><li>Longsor & mudflow; banjir pit</li><li>Tumpahan/paparan bahan kimia</li><li>Man overboard (jetty)</li><li>Heat stroke & medical emergency</li><li>Gempa, badai, petir</li></ul></article>
            <article class="card t"><div class="ico">${Icons.get('flag', { class: 'ico-svg' })}</div><h3>Prinsip Evakuasi</h3><p>Evakuasi menyilang arah angin untuk risiko gas/asap; shelter-in-place bila diperintahkan; drill darurat wajib diikuti seluruh personel tanpa kecuali.</p></article>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     40 · SIRENE DEMO (Interactive)
     ============================================================ */
  {
    type: 'sireneDemo',
    mod: 'DARURAT',
    title: 'Demo Sirene Site',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Darurat & Medis</div>
          <h2>Demo <em>Sirene Site</em> — Kenali Bunyinya</h2>
          <p class="lead">Tekan tombol di bawah untuk mendengarkan bunyi sirene (TTS Web Speech). Hafalkan polanya — ini bisa menyelamatkan nyawa.</p>
          <div class="siren-demo">
            <button class="siren-btn danger" data-sirene="darurat">
              <span>🚨 DARURAT — 3× panjang</span>
              <span class="icon">▶</span>
            </button>
            <button class="siren-btn warn" data-sirene="siaga">
              <span>⚠ SIAGA — putus-putus pendek</span>
              <span class="icon">▶</span>
            </button>
            <button class="siren-btn ok" data-sirene="allclear">
              <span>✅ ALL CLEAR — 1× panjang</span>
              <span class="icon">▶</span>
            </button>
            <button class="siren-btn" data-sirene="blasting">
              <span>💥 BLASTING — pola peledakan</span>
              <span class="icon">▶</span>
            </button>
          </div>
        </div>
      `;
    },
    afterRender() { Audio.bindSirene(); },
  },

  /* ============================================================
     41 · P3K & MEDIS
     ============================================================ */
  {
    type: 'checks',
    mod: 'DARURAT',
    title: 'P3K & Medis',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Darurat & Medis</div>
          <h2><em>P3K</em> & Layanan Medis</h2>
          <ul class="checks cols">
            <li>Ketahui lokasi <b>klinik, P3K kit, AED (jika ada), stretcher, eyewash & shower</b> di area Anda.</li>
            <li>Prinsip: <b>aman diri → aman lingkungan → aman korban</b>. Jangan jadi korban kedua.</li>
            <li><b>Jangan memindahkan korban</b> dugaan cedera tulang belakang kecuali ada bahaya mendesak (api/air).</li>
            <li>Kontak asam/kimia: bilas air mengalir ≥ 15 menit sambil melepas pakaian terkontaminasi.</li>
            <li>Heat stroke (bingung, kulit panas, tidak sadar) = <b>darurat</b>: dinginkan & panggil medis segera.</li>
            <li><b>Semua cedera — sekecil apa pun — wajib dilaporkan</b> dan dicatat, termasuk first aid case.</li>
            <li>Prosedur medevac: klinik → rumah sakit rujukan sesuai rencana darurat site.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     42 · PELAPORAN & JUST CULTURE
     ============================================================ */
  {
    type: 'two',
    mod: 'DARURAT',
    title: 'Pelaporan & Just Culture',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Darurat & Medis</div>
          <h2>Pelaporan & <em>Just Culture</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Wajib Dilaporkan</h3>
              <ul>
                <li>Bahaya / kondisi tidak aman (unsafe condition).</li>
                <li>Perilaku tidak aman (unsafe act).</li>
                <li><b>Near miss</b> (hampir celaka) — sumber pembelajaran terbaik.</li>
                <li>Insiden, cedera, penyakit akibat kerja, kerusakan properti.</li>
                <li>Insiden lingkungan & keamanan.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Just Culture</h3>
              <ul>
                <li>Melapor = dilindungi; <b>tidak ada blame</b> untuk kesalahan yang jujur.</li>
                <li>Yang ditindak tegas: pelanggaran disengaja, sabotase, menyembunyikan insiden.</li>
                <li>TKP dijaga & bukti aman untuk investigasi; saksi dilindungi.</li>
                <li>Hasil investigasi → tindakan perbaikan → <b>safety alert</b> agar tidak terulang.</li>
              </ul>
            </div>
          </div>
          <div class="flow">
            <div class="step">LAPOR SEGERA</div><div class="arr">➜</div>
            <div class="step">CATAT & INVESTIGASI</div><div class="arr">➜</div>
            <div class="step">TINDAK PERBAIKAN</div><div class="arr">➜</div>
            <div class="step">BELAJAR BERSAMA</div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     43 · CAMP & TRANSPORTASI
     ============================================================ */
  {
    type: 'two',
    mod: 'PENUNJANG',
    title: 'Camp & Transportasi',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Penunjang</div>
          <h2><em>Camp, Mess</em> & Transportasi</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Aturan Camp & Mess</h3>
              <ul>
                <li>Kenali jalur evakuasi, muster point, APAR, dan penerangan darurat camp.</li>
                <li>Larangan memasak di kamar; listrik aman (tanpa kabel rusak/overload).</li>
                <li>Higiene makanan & air minum; kelola sampah; jaga kebersihan bersama.</li>
                <li>Alkohol/narkoba/judi dilarang di camp; tamu wajib izin.</li>
                <li>Istirahat cukup — kualitas tidur = keselamatan di shift berikutnya.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Journey Management</h3>
              <ul>
                <li>Perjalanan site hanya dengan kendaraan terinspeksi & pengemudi berwenang.</li>
                <li>Seatbelt wajib; larangan HP; rencana rute + check-in/check-out.</li>
                <li>Perjalanan laut: <b>life jacket</b>, perhatikan cuaca; perjalanan malam dibatasi sesuai aturan site.</li>
                <li>Kendaraan dilengkapi P3K, APAR, dan alat komunikasi.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     44 · KEAMANAN & ETIKA
     ============================================================ */
  {
    type: 'checks',
    mod: 'PENUNJANG',
    title: 'Keamanan & Etika',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Penunjang</div>
          <h2>Keamanan, <em>Komunitas</em> & Etika</h2>
          <ul class="checks cols">
            <li>Patuhi akses & badge system; laporkan orang tak dikenal ke security.</li>
            <li>Dilarang pencurian ore/aset, penambangan ilegal, dan penyelundupan.</li>
            <li>Hormati masyarakat sekitar: budaya, adat, situs sakral, dan mata pencaharian.</li>
            <li>Tidak ada kekerasan, pelecehan seksual, bullying, dan diskriminasi dalam bentuk apa pun.</li>
            <li>Anti suap & gratifikasi; tolak dan laporkan setiap penawaran tidak sah.</li>
            <li><b>Whistleblowing:</b> saluran pelaporan pelanggaran dijamin kerahasiaan & perlindungannya.</li>
            <li>Media sosial: dilarang menyebarkan informasi rahasia site atau foto area kritis tanpa izin.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     45 · STUDI KASUS
     ============================================================ */
  {
    type: 'scenarios',
    mod: 'KASUS',
    title: 'Studi Kasus',
    render() {
      const cases = [
        {
          tag: 'INSIDEN FATAL',
          title: 'Longsor dinding pit saat hujan',
          story: 'Seorang operator dump truck melanjutkan loading di area pit padahal hujan deras mulai turun dan rambu "Slippery / Geotech Watch" sudah terpasang. Lereng highwall mengalami mudflow dan menelan unit. Operator tidak sempat keluar.',
          takeaway: 'Tanda bahaya di pit bukan pajangan. Setelah hujan, <b>STOP</b> dan tunggu inspeksi geoteknik — tidak ada ore yang senilai nyawa.',
        },
        {
          tag: 'NEAR MISS',
          title: 'Tabrakan LV vs dump truck di persimpangan haul road',
          story: 'Sebuah light vehicle menyeberang tanpa radio call di haul road aktif. Dump truck dengan muatan penuh melakukan hard brake; material tumpah dan nyaris menabrak LV. Tidak ada korban, namun keduanya berjarak &lt; 1 m saat berhenti.',
          takeaway: 'Selalu <b>radio call + kontak mata</b> sebelum memasuki/menyeberangi haul road. Jangan asumsi operator HE "pasti melihat Anda".',
        },
        {
          tag: 'INCIDENT',
          title: 'Heat stroke di area stockpile siang hari',
          story: 'Pekerja contract mengalami pusing, kebingungan, dan kulit panas setelah 4 jam kerja di stockpile terbuka. Rekan kerja membawanya ke area teduh dan menghubungi klinik — diagnosa: heat stroke. Pemulihan total setelah rawat inap 3 hari.',
          takeaway: '<b>Kenali tanda heat stroke</b>: bingung, kulit kering & panas, tidak berkeringat. Hidrasi, rotasi, dan buddy check menyelamatkan nyawa.',
        },
        {
          tag: 'KECELAKAAN',
          title: 'Tangan terjepit conveyor karena bypass interlock',
          story: 'Untuk mempercepat pembersihan chute, seorang pekerja menonaktifkan interlock safety dan memasukkan tangan ke area moving part. Tangan kanan terjepit pulley; amputasi dua jari.',
          takeaway: '<b>Jangan bypass safety devices.</b> LOTO wajib — tidak peduli seberapa "sederhana" tugasnya.',
        },
      ];
      return `
        <div class="inner">
          <div class="kicker">Studi Kasus</div>
          <h2>Pelajaran dari <em>Insiden Nyata</em></h2>
          <p class="lead">Empat skenario industri nikel — dipelajari agar tidak terulang di site kita. Baca pelan-pelan, renungkan: "Apa yang akan saya lakukan?"</p>
          <div class="scenarios stagger">
            ${cases.map(c => `
              <div class="scenario">
                <span class="scen-tag">${c.tag}</span>
                <h4>${c.title}</h4>
                <p>${c.story}</p>
                <div class="takeaway"><b style="color:var(--teal)">Pelajaran:</b> ${c.takeaway}</div>
              </div>`).join('')}
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     46 · POST-TEST
     ============================================================ */
  {
    type: 'posttest',
    mod: 'EVAL',
    title: 'Post-Test & Sertifikasi',
    render() { return '<div id="quizContainer"></div>'; },
    afterRender() { Quiz.renderPosttest(); },
  },

  /* ============================================================
     47 · TANDA TANGAN
     ============================================================ */
  {
    type: 'signature',
    mod: 'EVAL',
    title: 'Tanda Tangan Komitmen',
    render() {
      const u = State.get('user') || {};
      return `
        <div class="inner">
          <div class="kicker">Evaluasi</div>
          <h2>Tanda Tangan <em>Komitmen K3L</em></h2>
          <div class="bigquote">
            "Saya berkomitmen: bekerja selamat, menjaga rekan saya, dan tidak pernah mengabaikan bahaya.
            Tidak ada target produksi yang sebanding dengan nyawa manusia."
            <small>— Ikrar Rekrutan Baru PT. Sifang Mining Indonesia</small>
          </div>
          <ul class="checks cols" style="margin-top:22px">
            <li>Saya akan memakai APD, mematuhi prosedur, dan menghormati setiap rambu.</li>
            <li>Saya akan melapor setiap bahaya dan near miss — hari ini dan seterusnya.</li>
            <li>Saya akan menggunakan Stop Work Authority tanpa ragu.</li>
            <li>Saya akan pulang selamat — dan memastikan rekan saya juga demikian.</li>
          </ul>

          <div class="two" style="margin-top:26px">
            <div class="panelbox">
              <h3><i></i>Identitas Peserta</h3>
              <div style="display:grid; gap:10px">
                <input id="sig-name" placeholder="Nama Lengkap" value="${u.name || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-nik" placeholder="NIK / ID Karyawan" value="${u.nik || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-pos" placeholder="Jabatan / Posisi" value="${u.position || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-dept" placeholder="Departemen / Kontraktor" value="${u.department || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
              </div>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Tanda Tangan Digital</h3>
              <div class="sig-wrap">
                <canvas id="sigCanvas" class="sig-canvas"></canvas>
                <div class="sig-meta">
                  <span id="sigDate">— / — / —</span>
                  <span>TTD Peserta</span>
                </div>
              </div>
              <div class="sig-actions">
                <button class="navbtn" id="sigClear">Bersihkan</button>
                <button class="navbtn primary" id="sigSave" style="flex:1">Simpan Tanda Tangan</button>
              </div>
            </div>
          </div>

          <div style="text-align:center; margin-top:34px;">
            <p class="lead" style="text-align:center; margin:0 auto;">
              <b style="color:var(--text)">Selamat bergabung di keluarga besar PT. Sifang Mining Indonesia.</b><br/>
              Selamat bekerja — dan pulang dengan selamat, setiap hari. 🤝
            </p>
          </div>
        </div>
      `;
    },
    afterRender() { Signature.init(); },
  },

  /* ============================================================
     48 · SERTIFIKAT
     ============================================================ */
  {
    type: 'cert',
    mod: 'EVAL',
    title: 'Sertifikat Induksi',
    render() { return '<div id="certContainer"></div>'; },
    afterRender() { Certificate.render(); },
  },

  /* ============================================================
     49 · PENUTUP / TERIMA KASIH
     ============================================================ */
  {
    type: 'closing',
    mod: 'PENUTUP',
    title: 'Terima Kasih',
    render() {
      return `
        <div class="inner" style="text-align:center; padding-top:30px">
          <div class="logo-big logo-png" style="background-image:url('assets/logo-full.png')" role="img" aria-label="PT. Sifang Mining Indonesia"></div>
          <h1 style="margin-top:14px">Terima <em>Kasih</em></h1>
          <div class="hazard" style="margin-left:auto;margin-right:auto;"></div>
          <p class="lead" style="margin:14px auto 0; text-align:center; max-width:680px;">
            Anda telah menyelesaikan induksi K3L. Bawa pulang tiga hal:
            <b style="color:var(--text)">Komitmen</b>, <b style="color:var(--text)">Kompetensi</b>, dan <b style="color:var(--text)">Kewaspadaan</b>.
          </p>
          <div class="badges">
            <span class="badge gold">ZERO HARM</span>
            <span class="badge teal">SAFETY FIRST</span>
            <span class="badge blue">LIFE-SAVING RULES</span>
            <span class="badge">INDUKSI LULUS</span>
          </div>
          <div class="bigquote" style="margin-top:34px; text-align:left;">
            “Pulang selamat hari ini, kembali bekerja besok hari. Itu satu-satunya target yang benar.”
            <small>— HSE Departemen, PT. Sifang Mining Indonesia</small>
          </div>
        </div>
      `;
    },
    afterRender() { Effects.celebrate(); },
  },
];
