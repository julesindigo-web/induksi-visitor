/* ============================================================
   SLIDES DATA — VISITOR EDITION (khusus tamu/visitor escorted)
   Fokus: visitor saja, bukan karyawan baru / operator / driver
   Durasi target: 15-20 menit, ~24 slide (vs 50 general)
   ============================================================ */

const SLIDES_DATA = [
  /* 1 · COVER VISITOR */
  {
    type: 'cover',
    mod: 'VISITOR',
    title: 'Selamat Datang — Visitor',
    render() {
      return `
        <div class="visitor-ribbon">VISITOR ONLY</div>
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
            <path d="M0 280 L200 160 L380 240 L520 180 L700 280 L880 200 L1040 260 L1200 180 L1400 280 L1400 400 L0 400 Z" fill="url(#ground)"/>
            <path d="M0 320 L180 240 L340 290 L500 250 L680 320 L840 270 L1020 320 L1200 250 L1400 320 L1400 400 L0 400 Z" fill="#0a1428" opacity="0.6"/>
            <g transform="translate(380 320)">
              <rect x="0" y="0" width="60" height="22" fill="#1e293b"/>
              <path d="M0 0 L60 0 L50 -18 L18 -18 L10 0 Z" fill="#1e293b"/>
              <rect x="5" y="-18" width="40" height="14" fill="#3b4863" rx="2"/>
              <circle cx="14" cy="24" r="6" fill="#0a1428" stroke="#475569"/>
              <circle cx="46" cy="24" r="6" fill="#0a1428" stroke="#475569"/>
            </g>
            <g transform="translate(620 310)">
              <rect x="0" y="0" width="48" height="20" fill="#1e293b"/>
              <rect x="4" y="-12" width="20" height="12" fill="#3b4863" rx="1"/>
              <path d="M28 -6 L52 -2 L48 6 L24 -2 Z" fill="#1e293b"/>
              <path d="M52 -2 L60 6 L48 8 Z" fill="#3b4863"/>
              <circle cx="12" cy="22" r="6" fill="#0a1428" stroke="#475569"/>
              <circle cx="36" cy="22" r="6" fill="#0a1428" stroke="#475569"/>
              <circle cx="24" cy="22" r="5" fill="#0a1428" stroke="#475569"/>
            </g>
            ${[120, 280, 460, 680, 920, 1180, 1320].map((x, i) => `<circle cx="${x}" cy="${60 + i * 12}" r="${0.8 + Math.random() * 1.2}" fill="#fbbf24" opacity="${0.3 + Math.random() * 0.5}"/>`).join('')}
          </svg>
        </div>
        <div class="inner">
          <div class="logo-big logo-png" style="background-image:url('assets/logo-full.png')" role="img" aria-label="PT. Sifang Mining Indonesia"></div>
          <div class="co">PT. Sifang Mining Indonesia</div>
          <h1 style="margin-top:10px">INDUKSI <em>VISITOR</em><br/>PERTAMBANGAN NIKEL OPEN PIT</h1>
          <div class="hazard" style="margin-left:auto;margin-right:auto;"></div>
          <p class="lead" style="margin:14px auto 0; text-align:center; max-width:720px">
            Selamat datang, <b>Tamu / Visitor</b>. Anda berada di area pertambangan aktif dengan risiko tinggi.
            Induksi ringkas ini <b>wajib</b> sebelum Anda masuk site — <b>selalu didampingi (escorted)</b>, dilarang bekerja/mengoperasikan alat.
          </p>
          <div class="badges">
            <span class="badge gold">★ VISITOR ONLY</span>
            <span class="badge teal">ESCORTED ACCESS</span>
            <span class="badge" style="background:var(--red-soft); border-color:var(--red-line); color:var(--red)">7-DAY PASS</span>
            <span class="badge blue">${State.get('user.name') ? `👋 ${State.get('user.name')}` : 'TAMU SITE'}</span>
          </div>
          <div class="panelbox warn" style="margin-top:18px; text-align:left; max-width:760px; margin-left:auto; margin-right:auto">
            <h3><i></i>Perbedaan Utama — Visitor vs Pekerja</h3>
            <ul style="font-size:12.5px">
              <li><b>Visitor = tamu didampingi</b> — tidak boleh bekerja, mengemudi di haul road tanpa KIMPER, atau masuk zona terlarang tanpa izin.</li>
              <li><b>Pekerja = 50 slide + 12 bulan sertifikat</b> — Visitor = <b>~24 slide ringkas + Visitor Pass 7 hari</b>.</li>
              <li>Ikuti instruksi <b>Host / Escort</b> Anda setiap saat. Jangan terpisah dari rombongan.</li>
            </ul>
          </div>
          <div class="hint">Tekan <b>Lanjut</b> atau panah keyboard untuk memulai ▸ Estimasi 15 menit</div>
        </div>
      `;
    },
    afterRender() { Effects.celebrate(); },
  },

  /* 2 · AGENDA VISITOR */
  {
    type: 'agenda',
    mod: 'VISITOR',
    title: 'Agenda Visitor',
    render() {
      return `
        <div class="inner stagger">
          <div class="kicker">Visitor — Agenda Ringkas</div>
          <h2>Agenda <em>Induksi Visitor</em> (24 Slide)</h2>
          <p class="lead">Hanya yang perlu Anda tahu sebagai tamu — tanpa materi operator/teknis berat. Tidak ada yang boleh dilewati.</p>
          <div class="cards">
            <article class="card b"><div class="ico">${Icons.get('building', { class: 'ico-svg' })}</div><h3>01 · Profil & Aturan Dasar</h3><p>Site nikel open pit, kebijakan Zero Harm, & aturan tamu (escort, badge, foto).</p></article>
            <article class="card t"><div class="ico">${Icons.get('scroll', { class: 'ico-svg' })}</div><h3>02 · Area & Batasan Akses</h3><p>Peta zona hijau-kuning-merah, area terlarang, & escort obligation.</p></article>
            <article class="card g"><div class="ico">${Icons.get('helmet', { class: 'ico-svg' })}</div><h3>03 · APD Visitor & Kesehatan</h3><p>5 APD wajib tamu, heat stress, debu, kebisingan — perlindungan minimal.</p></article>
            <article class="card r"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>04 · Bahaya Area (Ikhtisar)</h3><p>Traffic pejalan kaki, alat berat blind spot, longsor laterit — awareness, bukan operasi.</p></article>
            <article class="card"><div class="ico">${Icons.get('siren', { class: 'ico-svg' })}</div><h3>05 · Darurat & Evakuasi</h3><p>Alarm, muster point, peran Anda sebagai tamu: ikut escort, jangan heroik.</p></article>
            <article class="card t"><div class="ico">${Icons.get('bed', { class: 'ico-svg' })}</div><h3>06 · Etika & Lingkungan</h3><p>Larangan judi/intimidasi, sampah, satwa, whisperblower — jadi tamu terhormat.</p></article>
            <article class="card g"><div class="ico">${Icons.get('clipboard', { class: 'ico-svg' })}</div><h3>07 · Studi Kasus Visitor</h3><p>3 insiden nyata yang melibatkan tamu — pelajaran 30 detik menyelamatkan nyawa.</p></article>
            <article class="card"><div class="ico">${Icons.get('check', { class: 'ico-svg' })}</div><h3>08 · Evaluasi & Visitor Pass</h3><p>Pre-test, post-test 80% lulus, tanda tangan, Visitor Pass 7 hari (bukan 12 bulan).</p></article>
          </div>
          <div class="footnote">⏱ Visitor induction ≠ induction pekerja. Operator/driver/karyawan baru wajib ikut materi lengkap 50 slide terpisah.</div>
        </div>
      `;
    },
  },

  /* 3 · GROUND RULES VISITOR */
  {
    type: 'cards',
    mod: 'VISITOR',
    title: 'Tata Tertib Tamu',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Tata Tertib</div>
          <h2>Tata Tertib <em>Tamu Site</em></h2>
          <p class="lead">Anda tamu di rumah orang lain. Hormati aturan — pulang selamat adalah tujuan bersama.</p>
          <div class="cards stagger">
            <article class="card b"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>Escort Wajib</h3><p><b>Jangan pernah terpisah</b> dari Host/Escort. Tanpa escort = <b>STOP</b>, hubungi HSE. Dilarang eksplor sendiri.</p></article>
            <article class="card g"><div class="ico">${Icons.get('check', { class: 'ico-svg' })}</div><h3>Tepat Waktu & Fokus</h3><p><b>On time, stay focus.</b> Dengarkan briefing, jangan telat, jangan tinggalkan rombongan tanpa izin.</p></article>
            <article class="card"><div class="ico">${Icons.get('mute', { class: 'ico-svg' })}</div><h3>Silent Mode & No HP Saat Jalan</h3><p>HP <b>mode senyap</b>. <b>Dilarang HP saat berjalan</b> di area operasional / menyeberang haul road.</p></article>
            <article class="card t"><div class="ico">${Icons.get('eye', { class: 'ico-svg' })}</div><h3>No Foto / Drone Tanpa Izin</h3><p><b>Foto/video/drone hanya izin tertulis</b> HSE. Area kritis (pit, plant, jetty) sangat sensitif.</p></article>
            <article class="card r"><div class="ico">${Icons.get('hand', { class: 'ico-svg' })}</div><h3>Partisipasi Aktif</h3><p>Bertanya bila bingung. <b>Jika ragu, STOP & tanya escort</b> — jangan improvisasi.</p></article>
            <article class="card"><div class="ico">${Icons.get('mic', { class: 'ico-svg' })}</div><h3>Jalur Evakuasi</h3><p>Hafalkan <b>muster point ruangan induksi</b> sekarang. Saat alarm: ikuti escort, jangan bawa barang.</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>Golden Rule Visitor</h3>
            <p style="color:var(--muted); font-size:13px; margin:0"><b>“Jika tidak mengerti, jangan lanjut.”</b> Tamu yang baik adalah tamu yang berani bertanya & berani berhenti.</p>
          </div>
        </div>
      `;
    },
  },

  /* 4 · TUJUAN & RUANG LINGKUP VISITOR */
  {
    type: 'two',
    mod: 'VISITOR',
    title: 'Tujuan & Ruang Lingkup Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Mengapa Induksi Ini?</div>
          <h2>Tujuan & <em>Batasan Visitor</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Tujuan Induksi Visitor</h3>
              <ul>
                <li><b>Melindungi Anda</b> dari bahaya nikel open pit yang tidak terlihat tamu (longsor, blind spot HE, haul road, heat stress).</li>
                <li><b>Menjelaskan batasan:</b> mana boleh, mana wajib escort, mana dilarang — sebelum Anda salah langkah.</li>
                <li><b>Menyamakan prosedur darurat:</b> alarm, muster, & peran Anda (ikut escort, bukan rescue).</li>
                <li><b>Memenuhi hukum:</b> Kepmen 1827/2018 & SMKP — <b>tanpa induksi = tanpa akses</b>.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Siapa & Berapa Lama Berlaku?</h3>
              <ul>
                <li><b>Wajib:</b> tamu dinas, vendor, audit, keluarga karyawan, media, mahasiswa — semua visitor.</li>
                <li><b>Tidak termasuk:</b> karyawan baru / kontraktor / operator / driver → ikut <b>induksi pekerja 50 slide</b> terpisah.</li>
                <li><b>Visitor Pass: 7 hari, escorted only</b> (bukan 12 bulan). Kunjungan >7 hari atau repeat visit = induksi ulang.</li>
                <li><b>Tanpa induksi / tanpa escort = dilarang masuk.</b> ID Visitor wajib terlihat.</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Induksi visitor <b>tidak menggantikan</b> toolbox atau izin kerja pekerja. Anda tidak diizinkan bekerja — hanya mengamati didampingi.</div>
        </div>
      `;
    },
  },

  /* 5 · PENGETAHUAN K3 & LAMBANG */
  {
    type: 'cards',
    mod: 'VISITOR',
    title: 'Apa itu K3 & Lambang K3',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Dasar K3 Kilat</div>
          <h2>Apa itu <em>K3</em>? Mengapa Utama?</h2>
          <div class="two">
            <div class="panelbox ok">
              <h3><i></i>K3 dalam 1 Kalimat</h3>
              <p style="color:var(--muted); font-size:13.5px; line-height:1.7"><b style="color:var(--text)">K3 = upaya melindungi Anda</b> agar bebas celaka, cidera, kematian & kerusakan harta — sambil tetap produktif. <b>Produksi tidak sepadan dengan nyawa.</b></p>
              <h3 style="margin-top:16px"><i></i>Kenapa Visitor Perlu Tahu?</h3>
              <p style="color:var(--muted); font-size:13.5px; line-height:1.7">Karena <b>risiko tambang tidak seperti kantor</b>. Longsor laterit basah, dump truck 100 ton, & laterit licin saat hujan tidak ada di gedung Anda.</p>
            </div>
            <div class="panelbox">
              <h3><i></i>Lambang K3 — Harus Kenal</h3>
              <ul>
                <li><b>Roda Gigi Hijau:</b> kerja segar jasmani & rohani</li>
                <li><b>Palang Putih:</b> bebas kecelakaan & penyakit akibat kerja</li>
                <li><b>11 Gerigi:</b> 11 Bab <b>UU No.1/1970</b> (dasar hukum K3)</li>
              </ul>
              <p style="margin-top:10px; font-size:11px; color:var(--muted)">Anda lihat lambang ini di helm, rambu & seragam HSE — itu tanda aturan wajib.</p>
            </div>
          </div>
          <div class="cards stagger" style="margin-top:18px">
            <article class="card b"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>K3 = Investasi</h3><p>Zero harm = operasi lancar. Tamu yang patuh membantu site tetap aman & reputasi terjaga.</p></article>
            <article class="card t"><div class="ico">${Icons.get('hand', { class: 'ico-svg' })}</div><h3>Hak Anda sebagai Visitor</h3><p>Berhak bertanya, minta APD, minta escort, & <b>menolak masuk area</b> bila merasa tidak aman.</p></article>
            <article class="card g"><div class="ico">${Icons.get('cert', { class: 'ico-svg' })}</div><h3>Kewajiban Visitor</h3><p>Pakai APD, ikuti escort, lapor bahaya, tidak bypass rambu/barricade — tanpa kecuali.</p></article>
          </div>
        </div>
      `;
    },
  },

  /* 6 · STATS */
  {
    type: 'stats',
    mod: 'VISITOR',
    title: 'Mengapa Ini Penting',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Fakta Lapangan</div>
          <h2>Mengapa <em>Visitor Induction</em> Penting?</h2>
          <p class="lead">Bukan formalitas — statistik ini terjadi pada tamu yang mengabaikan briefing.</p>
          <div class="stats">
            <div class="stat danger">
              <div class="num" data-target="88">0</div>
              <div class="lbl">% Kecelakaan karena Tindakan Tidak Aman</div>
            </div>
            <div class="stat warn">
              <div class="num" data-target="3" data-suffix=" detik">0</div>
              <div class="lbl">Waktu Reaksi Aman di Haul Road</div>
            </div>
            <div class="stat ok">
              <div class="num" data-target="7">0</div>
              <div class="lbl">Hari Masa Berlaku Visitor Pass</div>
            </div>
            <div class="stat">
              <div class="num" data-target="100" data-suffix="%">0</div>
              <div class="lbl">Escorted — Tanpa Escort = STOP</div>
            </div>
          </div>
          <div class="bigquote" style="margin-top:32px;">
            “Sebagai tamu, tugas Anda sederhana: <b>ikuti escort, pakai APD, jangan lepas rombongan.</b> 3 hal itu menyelamatkan nyawa.”
            <small>— HSE PT. Sifang Mining Indonesia — Visitor Safety</small>
          </div>
        </div>
      `;
    },
    afterRender() { Effects.animateCounters(); },
  },

  /* PRE-TEST VISITOR */
  {
    type: 'pretest',
    mod: 'EVAL',
    title: 'Pre-Test Visitor',
    render() { return '<div id="quizContainer"></div>'; },
    afterRender() { Quiz.renderPretest(); },
  },

  /* 7 · PROFIL PERUSAHAAN VISITOR VIEW */
  {
    type: 'cards',
    mod: 'VISITOR',
    title: 'Profil Site — Kacamata Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Kenali Tempat Anda</div>
          <h2>Profil <em>PT Sifang — Open Pit Nikel</em></h2>
          <p class="lead">Anda kunjungi tambang <b>nikel laterit open pit</b> aktif — bukan museum. Karakter tanah & alat menentukan bahaya Anda sebagai tamu.</p>
          <div class="cards stagger">
            <article class="card b"><div class="ico">${Icons.get('pickup', { class: 'ico-svg' })}</div><h3>Metode & Tanah</h3><p><b>Open pit laterit</b> (limonit & saprolit). Laterit basah = <b>licin super & rawan longsor</b>. Jangan anggap seperti jalan aspal kota.</p></article>
            <article class="card"><div class="ico">${Icons.get('compass', { class: 'ico-svg' })}</div><h3>Yang Akan Anda Lihat (dari jauh, escorted)</h3><ul><li>Pit, bench, highwall, disposal</li><li>Haul road — jalur dump truck raksasa</li><li>Stockpile/crusher (bising & debu)</li><li>Workshop, fuel farm, jetty — <b>area terlarang tanpa izin khusus</b></li></ul></article>
            <article class="card t"><div class="ico">${Icons.get('refresh', { class: 'ico-svg' })}</div><h3>Jam Operasi</h3><p>Site <b>24 jam shift</b>. Anda hadir di jam yang ditentukan HSE. Malam = visibility rendah, lebih berbahaya bagi tamu.</p></article>
            <article class="card g"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>Visi: Zero Harm</h3><p><b>Setiap orang pulang selamat, setiap hari.</b> Termasuk Anda sebagai tamu — jangan jadi statistik.</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>Catatan Visitor</h3>
            <p style="margin:0; color:var(--muted); font-size:12.5px">Anda <b>tidak akan</b> diajak turun ke pit face atau disposal aktif. Jika escort menawarkan akses di luar plan, <b>tolak & lapor HSE</b>.</p>
          </div>
        </div>
      `;
    },
  },

  /* 8 · KEBIJAKAN RINGKAS VISITOR */
  {
    type: 'two',
    mod: 'VISITOR',
    title: 'Kebijakan K3L — Versi Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Kebijakan Kilat</div>
          <h2>Kebijakan <em>K3L</em> — 4 Poin Wajib Tamu</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Komitmen SMI (ringkas dari 8 → 4 untuk visitor)</h3>
              <ul>
                <li><b>Good Mining Practice:</b> operasi aman-efektif — visitor tidak mengintervensi operasi.</li>
                <li><b>Kepatuhan & perlindungan:</b> semua orang — termasuk tamu — berhak kondisi aman.</li>
                <li><b>5R & housekeeping:</b> Ringkas, Rapi, Resik, Rawat, Rajin — tamu ikut jaga kebersihan.</li>
                <li><b>Partisipasi & SDM:</b> konsultasi pekerja + tamu wajib dengar briefing.</li>
              </ul>
              <p style="margin-top:10px; font-size:11px; color:var(--muted)">Dok: STD-SO-SMI-001 (rev 0, Okt-25) — ringkasan visitor, bukan dokumen legal lengkap.</p>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Nilai yang Diharapkan dari Tamu</h3>
              <ul>
                <li><b>Integritas:</b> jujur soal kesehatan, tujuan kunjungan, & batas kemampuan.</li>
                <li><b>Hormat:</b> sopan santun, toleransi, tenggang rasa ke karyawan & masyarakat.</li>
                <li><b>Disiplin:</b> ikuti jadwal, APD, & escort tanpa debat.</li>
                <li><b>Peduli:</b> lapor near miss/unsafe condition meski Anda hanya tamu 2 jam.</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Detail 8 komitmen lengkap ada di induksi pekerja. Visitor cukup pahami 4 pilar ini + <b>Zero Harm</b>.</div>
        </div>
      `;
    },
  },

  /* 9 · ATURAN VISITOR 10 RULES */
  {
    type: 'checks',
    mod: 'VISITOR',
    title: '10 Aturan Visitor (Wajib Hafal)',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — 10 Larangan & Kewajiban</div>
          <h2>10 Aturan <em>Visitor</em> — Pelanggaran = Pass Dicabut</h2>
          <p class="lead" style="color:var(--amber)">Berlaku khusus tamu — lebih ketat dari pekerja di beberapa poin (karena Anda tidak familiar site).</p>
          <ul class="checks cols">
            <li><b>1. Escort 100%:</b> jangan pernah berjalan sendiri. Terpisah = diam di tempat, hubungi escort/HSE.</li>
            <li><b>2. ID Visitor terlihat</b> setiap saat; kembalikan saat keluar.</li>
            <li><b>3. APD visitor lengkap</b> (helm, glasses, vest, boots). Dilepas = keluar area.</li>
            <li><b>4. Dilarang mengemudi di haul road</b> tanpa KIMPER & izin; sebagai penumpang wajib seatbelt & no HP.</li>
            <li><b>5. Dilarang merokok/vape</b> kecuali smoking area bertanda; <b>Fuel Farm & B3 = zero api/HP</b>.</li>
            <li><b>6. Foto/video/drone HANYA izin tertulis</b> HSE — jangan posting medsos area kritis.</li>
            <li><b>7. Jangan sentuh</b> alat, panel listrik, valve, conveyor, atau apapun di plant/workshop.</li>
            <li><b>8. Patuhi rambu & barricade:</b> pita kuning/merah = JANGAN LEWAT tanpa otorisasi.</li>
            <li><b>9. Fit to Visit:</b> lapor bila demam, pusing, habis minum obat kantuk / alkohol — kunjungan bisa ditunda.</li>
            <li><b>10. Lapor bahaya/near miss</b> ke escort — sekecil apapun. Tamu yang lapor = tamu peduli.</li>
          </ul>
          <div class="footnote">⚠ Pelanggaran berat (masuk pit tanpa escort, lepas APD, bypass barricade) = <b>pengusiran & kunjungan dibatalkan</b>.</div>
        </div>
      `;
    },
  },

  /* 10 · PETA ZONA VISITOR */
  {
    type: 'cards',
    mod: 'VISITOR',
    title: 'Zona Akses Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Peta Akses</div>
          <h2>Zona <em>Akses Visitor</em> — Hijau • Kuning • Merah</h2>
          <p class="lead">Tidak semua area boleh Anda masuki. Hafalkan 3 warna ini — escort akan jelaskan rute hari ini.</p>
          <div class="cards stagger">
            <article class="card g" style="border-color:var(--green-line)"><div class="ico">${Icons.get('check', { class: 'ico-svg', stroke: 'var(--green)' })}</div><h3 style="color:var(--green)">HIJAU — Boleh (dengan APD)</h3><ul><li>Office, meeting room, lobby, kantin, clinic, muster point</li><li>Viewpoint aman (ditentukan HSE)</li><li>Jalur pedestrian bertanda</li></ul></article>
            <article class="card" style="border-color:var(--amber-line)"><div class="ico">${Icons.get('warn', { class: 'ico-svg', stroke: 'var(--amber)' })}</div><h3 style="color:var(--amber)">KUNING — Hanya dengan Escort</h3><ul><li>Haul road (sebagai penumpang, seatbelt, no HP)</li><li>Stockpile viewpoint, jetty (life jacket wajib)</li><li>Plant perimeter — jangan dekat moving parts</li></ul></article>
            <article class="card r" style="border-color:var(--red-line)"><div class="ico">${Icons.get('stop', { class: 'ico-svg', stroke: 'var(--red)' })}</div><h3 style="color:var(--red)">MERAH — Dilarang Total</h3><ul><li>Pit face, disposal aktif, sump, highwall dekat crest</li><li>Workshop pits, panel listrik, fuel farm, gudang B3 (tanpa izin khusus)</li><li>TSF, conveyor gallery, confined space, ketinggian</li></ul></article>
          </div>
          <div class="panelbox" style="margin-top:16px">
            <h3><i></i>Cara Tahu Zona Saya?</h3>
            <ul>
              <li>Tanya escort sebelum melangkah: <b>“Area ini zona apa?”</b></li>
              <li>Lihat rambu, barricade, & pita — <b>jangan pindahkan apapun</b>.</li>
              <li>Peta site 1:40m & jetty layout dibagikan saat briefing lapangan (bukan dihapal, cek papan info).</li>
            </ul>
          </div>
          <div class="footnote">Hari pertama wajib induksi visitor + briefing rute spesifik escort. Jangan minta “tour tambahan” di luar plan.</div>
        </div>
      `;
    },
  },

  /* 11 · PERSYARATAN MASUK VISITOR */
  {
    type: 'two',
    mod: 'VISITOR',
    title: 'Syarat Masuk Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Gate Check</div>
          <h2><em>Syarat Masuk</em> — Visitor Gate</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Checklist Visitor (wajib centang semua)</h3>
              <ul>
                <li>✅ <b>Induksi Visitor lulus</b> + Visitor Pass aktif (7 hari)</li>
                <li>✅ <b>ID Visitor</b> terpasang terlihat</li>
                <li>✅ <b>APD visitor lengkap</b>: helm, glasses, boots, vest</li>
                <li>✅ <b>Sehat & fit</b> — tidak demam, tidak pengaruh obat kantuk/alkohol</li>
                <li>✅ <b>Host/Escort hadir</b> & rute sudah briefing</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Jika Membawa Kendaraan</h3>
              <ul>
                <li>LV visitor wajib <b>lulus komisioning + stiker valid</b></li>
                <li><b>Pengemudi visitor wajib KIMPER valid</b> + seatbelt semua penumpang</li>
                <li>Isi di unit: <b>APAR 6kg, P3K, 2 cone, wheel chock</b> (jika beroda)</li>
                <li><b>Buggy whip:</b> LV 4m, dump truck TOP 1m (bila masuk area HE)</li>
                <li>Tidak punya KIMPER = <b>jangan nyetir</b> — pakai driver site.</li>
              </ul>
            </div>
          </div>
          <div class="panelbox danger" style="margin-top:16px">
            <h3><i></i>Tanpa Syarat = Tanpa Akses</h3>
            <p style="margin:0; color:var(--muted); font-size:12.5px">Gate akan menolak visitor tanpa pass atau tanpa escort — bukan mempersulit, melainkan melindungi Anda. Jangan negosiasi di gate.</p>
          </div>
        </div>
      `;
    },
  },

  /* 12 · RAMBU & ALARM */
  {
    type: 'cards',
    mod: 'VISITOR',
    title: 'Rambu & Alarm — Untuk Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Rambu & Sirene</div>
          <h2>Rambu & <em>Alarm</em> — Yang Wajib Anda Kenal</h2>
          <div class="cards stagger">
            <article class="card r" style="border-color:var(--red-line)">${Icons.get('stop', { class: 'ico-svg', stroke: 'var(--red)' })}<h3 style="color:var(--red)">Merah = Larangan</h3><p>Stop, bahaya, APAR/hydrant. <b>Barricade merah = jangan lewati</b>.</p></article>
            <article class="card" style="border-color:var(--amber-line)">${Icons.get('warn', { class: 'ico-svg', stroke: 'var(--amber)' })}<h3 style="color:var(--amber)">Kuning = Hati-hati</h3><p>Licin, longsor, alat berat. Ikuti instruksi escort.</p></article>
            <article class="card b" style="border-color:var(--blue-line)">${Icons.get('info', { class: 'ico-svg', stroke: 'var(--blue)' })}<h3 style="color:var(--blue)">Biru = Perintah</h3><p>Wajib helm, wajib vest, wajib lapor. Tamu paling sering lupa helm di viewpoint.</p></article>
            <article class="card g" style="border-color:var(--green-line)">${Icons.get('check', { class: 'ico-svg', stroke: 'var(--green)' })}<h3 style="color:var(--green)">Hijau = Aman</h3><p>Jalur evakuasi, muster point, P3K. Hafalkan di lokasi Anda berdiri sekarang.</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>Kode Sirene — Hafalkan Polanya (detail demo di slide berikutnya)</h3>
            <ul>
              <li><b>3× panjang berulang:</b> DARURAT — ikut escort ke muster point, jangan ambil barang.</li>
              <li><b>Putus-pendek:</b> SIAGA — diam, dengar radio/PA.</li>
              <li><b>1× panjang:</b> ALL CLEAR — tunggu instruksi escort, jangan jalan sendiri.</li>
            </ul>
          </div>
          <div class="footnote">Sebagai visitor, Anda <b>tidak perlu</b> hapal channel radio — escort yang akan komunikasi. Tugas Anda: <b>dengar & ikut</b>.</div>
        </div>
      `;
    },
  },

  /* 13 · APD VISITOR */
  {
    type: 'cards',
    mod: 'VISITOR',
    title: 'APD Visitor (Minimal)',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — APD</div>
          <h2>APD <em>Wajib Visitor</em> — 5 + 1</h2>
          <p class="lead">Bukan 10+ APD pekerja. Sebagai tamu Anda hanya butuh 5 minimal — tapi <b>tidak boleh kurang 1 pun</b>.</p>
          <div class="cards stagger">
            <article class="card"><div class="ico">${Icons.get('helmet', { class: 'ico-svg' })}</div><h3>Helm Safety</h3><p>SNI/ANSI, chinstrap bila angin. <b>Cek retak & kedaluwarsa</b> sebelum pakai. Pinjam di HSE bila tidak bawa.</p></article>
            <article class="card b"><div class="ico">${Icons.get('glass', { class: 'ico-svg' })}</div><h3>Kacamata Safety</h3><p>Side shield. Wajib bahkan di viewpoint — percikan debu laterit bisa terbang jauh.</p></article>
            <article class="card t"><div class="ico">${Icons.get('boot', { class: 'ico-svg' })}</div><h3>Safety Boots</h3><p>Steel toe + anti-slip. <b>Sandal/sepatu kain = ditolak gate</b>.</p></article>
            <article class="card g"><div class="ico">${Icons.get('vest', { class: 'ico-svg' })}</div><h3>High-Vis Vest</h3><p>Reflektif siang-malam agar terlihat operator HE. Jangan lepas untuk foto.</p></article>
            <article class="card"><div class="ico">${Icons.get('earp', { class: 'ico-svg' })}</div><h3>Telinga — Jika Perlu</h3><p>Di plant/crusher ≥85 dBA escort akan bagikan <b>earplug/earmuff</b>. Pakai sampai keluar area bising.</p></article>
            <article class="card" style="border-color:var(--blue-line)"><div class="ico">${Icons.get('ship', { class: 'ico-svg' })}</div><h3>+ Life Jacket (Jetty)</h3><p>Ke jetty/atas air wajib <b>life jacket</b>. Kenakan benar, jangan ditenteng.</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>Aturan APD Visitor</h3>
            <ul>
              <li>APD rusak/kotor B3 = lapor escort, <b>minta ganti</b> — jangan pakai.</li>
              <li>Jangan bawa APD pekerja spesifik (harness, SCBA, chemical suit) — Anda tidak butuh & tidak terlatih.</li>
              <li>APD bukan gaya — <b>tidak pakai = teguran & dikeluarkan dari site</b>.</li>
            </ul>
          </div>
        </div>
      `;
    },
  },

  /* 14 · KESEHATAN VISITOR */
  {
    type: 'two',
    mod: 'VISITOR',
    title: 'Kesehatan Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Sehat Selama Kunjungan</div>
          <h2><em>Kesehatan Tamu</em> — Heat, Debu & Fatigue</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Sebelum Datang — Fit to Visit</h3>
              <ul>
                <li>Istirahat cukup, <b>jangan begadang</b> sebelum kunjungan.</li>
                <li><b>Lapor</b> bila sakit/demam/minum obat kantuk — HSE bisa tunda kunjungan tanpa sanksi.</li>
                <li><b>Zero alkohol & obat terlarang</b> — tes acak berlaku, tamu pun bisa dites.</li>
                <li>Bawa obat pribadi & informasikan ke escort.</li>
              </ul>
              <h3 style="margin-top:14px"><i></i>Selama Kunjungan</h3>
              <ul>
                <li><b>Heat stress tropis:</b> minum air putih sering, hindari kafein berlebih, cari teduh saat pusing.</li>
                <li><b>Debu laterit:</b> jangan lepas glasses; tutup mulut bila berdebu (mask bila disediakan).</li>
                <li><b>Bising:</b> pakai earplug di area plant — jangan lepas untuk dengar HP.</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>Kenal Heat Stroke — Darurat Visitor</h3>
              <ul>
                <li>Gangguan: <b>kulit panas & kering, bingung, tidak berkeringat, mual</b> — bukan sekadar haus/capai.</li>
                <li>Segera: <b>lapor escort → teduh → minum air → klinik</b>. Jangan lanjut tour “sebentar lagi”.</li>
                <li>Kenakan baju <b>cerah, ringan, katun</b>; hindari sintetis tebal.</li>
                <li><b>Buddy check:</b> saling ingatkan escort & tamu lain bila terlihat pucat/lelah.</li>
              </ul>
              <h3 style="margin-top:12px"><i></i>Nikel Itch</h3>
              <ul>
                <li>Debu nikel bisa iritasi kulit (dermatitis). Jangan gosok, bilas, & ganti baju setelah kunjungan.</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Klinik site siap untuk tamu. Jangan tahan gejala — <b>lapor lebih awal lebih aman</b>.</div>
        </div>
      `;
    },
  },

  /* 15 · TRAFFIC VISITOR */
  {
    type: 'checks',
    mod: 'VISITOR',
    title: 'Traffic — Dari Kacamata Tamu',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Traffic Awareness</div>
          <h2>Traffic & <em>Haul Road</em> — Tamu Sebagai Pejalan Kaki / Penumpang</h2>
          <p class="lead">Anda <b>tidak mengemudi</b>. Tugas Anda: terlihat, tidak di blind spot, & paham prioritas.</p>
          <ul class="checks cols">
            <li><b>Hirarki 8 level (ingat 3 besar):</b> Ambulance → Pemadam → HE bermuatan → ... → LV/Bus tamu <b>paling rendah</b>. HE selalu diprioritaskan.</li>
            <li><b>Sebagai penumpang LV:</b> seatbelt wajib semua kursi, no HP, no rokok, no riding di bak.</li>
            <li><b>Sebagai pejalan kaki:</b> hanya jalur pedestrian bertanda; menyeberang <b>hanya di titik escort</b> + kontak mata dengan operator HE.</li>
            <li><b>Blind spot HE = zona mati:</b> operator dump truck/excavator <b>tidak melihat Anda</b> dalam 10-15m dekat kabin. Jangan pernah di situ.</li>
            <li><b>Komunikasi:</b> Anda tidak pegang radio — <b>escort yang call</b>. Jangan menyeberang sebelum escort bilang “clear”.</li>
            <li><b>Pre-start bukan tugas Anda</b> — tapi lihat escort cek rem, lampu, klakson sebelum jalan.</li>
          </ul>
          <div class="panelbox danger" style="margin-top:16px">
            <h3><i></i>Wet Weather — Laterit Licin = Bahaya Tamu #1</h3>
            <ul>
              <li>Hujan = laterit seperti sabun. LV tamu bisa selip mendadak — <b>jarak aman diperbesar, kecepatan turun drastis</b>.</li>
              <li>Jika escort bilang <b>STOP</b> karena traksi hilang / jalan rusak — patuhi, jangan minta “lanjut sebentar”.</li>
              <li>Anda punya <b>SWA sebagai tamu</b>: berhak minta berhenti bila merasa tidak aman — tanpa sanksi.</li>
            </ul>
          </div>
        </div>
      `;
    },
  },

  /* 16 · BAHAYA KHAS UNTUK VISITOR (ikhtisar, bukan teknis operator) */
  {
    type: 'cards',
    mod: 'VISITOR',
    title: 'Bahaya Khas — Awareness Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Kenali Bahaya (Jangan Dekati)</div>
          <h2>Bahaya <em>Khas Nikel Open Pit</em> — Untuk Tamu</h2>
          <p class="lead">Anda tidak perlu hafal SOP teknis — cukup <b>kenali, menjauh, & lapor escort</b>.</p>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>Longsor & Mudflow Laterit</h3><p><b>Tanda:</b> retakan di crest, rembesan air, suara gemuruh. Laterit basah = lumpur cair bisa telan alat. <b>Visitor: menjauh, lapor — jangan foto dekat.</b></p></article>
            <article class="card"><div class="ico">${Icons.get('truck', { class: 'ico-svg' })}</div><h3>Alat Berat — Exclusion Zone</h3><p>Jangan masuk radius swing HE. <b>Tunggu HE berhenti total</b> & operator beri sinyal baru mendekat (itupun hanya bila escort izinkan).</p></article>
            <article class="card b"><div class="ico">${Icons.get('factory', { class: 'ico-svg' })}</div><h3>Plant / Conveyor</h3><p>Moving parts (pulley, belt) = jepit/tertarik. Guard jangan dilepas. Conveyor: <b>crossing point saja</b>, jangan jalan di atas belt, kenali pull cord darurat.</p></article>
            <article class="card t"><div class="ico">${Icons.get('fire', { class: 'ico-svg' })}</div><h3>Kebakaran Unit / Fuel Farm</h3><p>Kenali APAR unit. Bau BBM menyengat / tumpahan = lapor, jangan nyalakan api/HP.</p></article>
            <article class="card"><div class="ico">${Icons.get('drop', { class: 'ico-svg' })}</div><h3>Jetty & Air (jika kunjungan ke jetty)</h3><p>Life jacket wajib, snap-back mooring line = bahaya, Grup A nikel ore risiko likuefaksi — jangan dekat tepi tanpa palang.</p></article>
            <article class="card g"><div class="ico">${Icons.get('tools', { class: 'ico-svg' })}</div><h3>Yang TIDAK Perlu Anda Kuasai (untuk pekerja)</h3><ul><li>LOTO 7 langkah, panel listrik, scaffolding, confined space gas test, hot work, lifting plan, galian shoring — <b>visitor dilarang melakukan ini</b>.</li></ul></article>
          </div>
          <div class="footnote">Prinsip visitor: <b>Lihat dari aman, jangan sentuh, jangan masuk tanpa escort.</b> Jika escort ragu, jawabannya adalah <b>TIDAK</b>.</div>
        </div>
      `;
    },
  },

  /* 17 · TANGGAP DARURAT VISITOR */
  {
    type: 'two',
    mod: 'VISITOR',
    title: 'Tanggap Darurat — Peran Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Darurat</div>
          <h2><em>Tanggap Darurat</em> — Apa yang Anda Lakukan?</h2>
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>Bila Anda Lihat/Mendengar Darurat</h3>
              <ul>
                <li><b>Jangan panik — teriak “EMERGENCY” 3×</b> & lapor escort segera.</li>
                <li><b>Jangan coba rescue sendiri</b> (jangan jadi korban kedua).</li>
                <li><b>Escort yang radio:</b> format 7 poin (Nama, Jenis, Lokasi, Korban, Kerusakan, Bantuan, Konfirmasi). Anda dengar & ikut.</li>
                <li>Bila kebakaran kecil & Anda terlatih APAR + escort izinkan — coba padamkan; bila membesar = <b>evakuasi</b>.</li>
              </ul>
            </div>
            <div class="panelbox">
              <h3><i></i>Evakuasi — Ikut Escort ke Muster Point</h3>
              <ul>
                <li><b>Ikuti escort</b> lewat jalur evakuasi bertanda hijau.</li>
                <li><b>Jangan bawa barang, jangan kembali</b> untuk ambil tas/HP.</li>
                <li><b>Diam di muster point</b> sampai <b>Warden/ERT bilang “Aman”</b>. Headcount — laporkan bila ada tamu hilang.</li>
                <li>Skenario visitor: kebakaran, longsor/mudflow, gempa, man overboard (jetty).</li>
              </ul>
            </div>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>Gempa — SOP Kilat untuk Tamu</h3>
            <ul>
              <li>Dalam ruangan: <b>keluar cepat tanpa berlari</b> atau berlindung di bawah meja kuat bila tidak sempat.</li>
              <li>Luar ruangan: menjauh dari highwall / bangunan, ke titik kumpul — waspadai aftershock & longsoran.</li>
            </ul>
          </div>
          <div class="footnote">Ingat: <b>tugas visitor saat darurat = selamatkan diri ikut escort, bukan selamatkan site.</b> Jangan heroik.</div>
        </div>
      `;
    },
  },

  /* 18 · SIRENE DEMO */
  {
    type: 'sireneDemo',
    mod: 'VISITOR',
    title: 'Demo Sirene — Hafalkan Bunyinya',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Sirene</div>
          <h2>Demo <em>Sirene Site</em> — Tamu Wajib Hafal</h2>
          <p class="lead">Tekan tombol untuk dengar pola sirene (TTS). Saat darurat nyata, Anda tidak sempat tanya — harus langsung ikut escort.</p>
          <div class="siren-demo">
            <button class="siren-btn danger" data-sirene="darurat">
              <span>🚨 DARURAT — 3× panjang</span>
              <span class="icon">🔊</span>
            </button>
            <button class="siren-btn warn" data-sirene="siaga">
              <span>⚠️ SIAGA — putus-pendek</span>
              <span class="icon">🔊</span>
            </button>
            <button class="siren-btn ok" data-sirene="allclear">
              <span>✅ ALL CLEAR — 1× panjang</span>
              <span class="icon">🔊</span>
            </button>
            <button class="siren-btn" data-sirene="blasting">
              <span>💥 BLASTING — pola peledakan</span>
              <span class="icon">🔊</span>
            </button>
          </div>
          <div class="footnote" style="margin-top:14px">Visitor: <b>3× panjang = langsung ikut escort ke muster</b>. Jangan tanya “ini latihan atau beneran?” — anggap beneran.</div>
        </div>
      `;
    },
    afterRender() { Audio.bindSirene(); },
  },

  /* 19 · P3K & PELAPORAN */
  {
    type: 'two',
    mod: 'VISITOR',
    title: 'P3K & Pelaporan Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — P3K & Lapor</div>
          <h2><em>P3K</em> & Pelaporan — Tamu</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>P3K untuk Tamu</h3>
              <ul>
                <li>Hafalkan lokasi <b>klinik, P3K kit, eyewash/shower</b> dari escort (bukan dari memori).</li>
                <li><b>Jangan pindahkan korban parah</b> — amankan diri, panggil escort/ERT, jaga TKP.</li>
                <li>Kontak kimia/debu ke mata: bilas ≥15 menit di eyewash.</li>
                <li><b>Semua cedera — termasuk lecet — wajib lapor</b> escort → klinik.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Budaya Lapor — Tamu Juga Wajib</h3>
              <ul>
                <li>Laporkan ke escort: <b>bahaya, barricade rusak, near miss, tumpahan, orang mencurigakan</b>.</li>
                <li><b>Just Culture:</b> melapor = dilindungi, tidak di-blame. Yang ditindak: sengaja sembunyikan insiden.</li>
                <li>Alur: <b>LAPOR → CATAT → PERBAIKI → BELAJAR</b>. Laporan tamu pernah mencegah insiden besar.</li>
              </ul>
            </div>
          </div>
          <div class="panelbox" style="margin-top:16px">
            <h3><i></i>Nomor Darurat — Tanya Escort Sekarang</h3>
            <p style="margin:0; color:var(--muted); font-size:12.5px">Catat di HP (setelah keluar area operasional): <b>ERT, Klinik, Security, HSE</b>. Di area operasional, <b>no HP saat jalan</b> — panggil escort langsung.</p>
          </div>
        </div>
      `;
    },
  },

  /* 20 · ETIKA VISITOR */
  {
    type: 'two',
    mod: 'VISITOR',
    title: 'Etika & Keamanan Visitor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Visitor — Etika</div>
          <h2>Keamanan, <em>Komunitas</em> & Etika Tamu</h2>
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>Keamanan Site</h3>
              <ul>
                <li><b>BRIMOB / Security:</b> hormati pemeriksaan & instruksi — mereka jaga Anda.</li>
                <li><b>Dilarang keras:</b> judi, intimidasi, bawa alkohol/narkoba, pencurian ore/BBM/aset — <b>langsung dikeluarkan & proses hukum</b>.</li>
                <li><b>Badge:</b> jangan dipinjamkan; laporkan orang tanpa badge ke escort/security.</li>
                <li>Medsos: <b>jangan sebar foto area kritis/oral internal</b> tanpa izin HSE.</li>
              </ul>
            </div>
            <div class="panelbox">
              <h3><i></i>Komunitas & Lingkungan — Tamu</h3>
              <ul>
                <li>Hormati masyarakat lokal, adat, & situs budaya — <b>jangan masuk situs sakral</b> tanpa izin.</li>
                <li><b>Sampah:</b> pisahkan <b>PLASTIC vs ORGANIC</b> (lihat poster di site), jangan buang oli/sampah ke tanah/drainase.</li>
                <li><b>5R:</b> Ringkas, Rapi, Resik, Rawat, Rajin — tamu ikut jaga kerapian.</li>
                <li><b>Whistleblower terlindungi:</b> lapor pelanggaran ke HRGA/HSE — identitas dirahasiakan.</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Jadilah tamu yang dirindukan, bukan yang tidak diundang lagi. Kesan Anda = reputasi perusahaan Anda.</div>
        </div>
      `;
    },
  },

  /* 21 · STUDI KASUS VISITOR */
  {
    type: 'scenarios',
    mod: 'VISITOR',
    title: 'Studi Kasus — Visitor',
    render() {
      const cases = [
        {
          tag: 'NEAR MISS — VISITOR',
          title: 'Tamu menyeberang haul road tanpa escort call',
          story: 'Seorang tamu audit ingin foto pit dari dekat. Ia menyeberang haul road tanpa radio call escort. Dump truck bermuatan melakukan hard brake, material tumpah, jarak akhir <1m dari tamu. Tidak ada korban — tapi kunjungan dihentikan & perusahaan tamu ditegur.',
          takeaway: 'Sebagai tamu, <b>jangan menyeberang sebelum escort bilang “clear”</b>. Jangan asumsi operator HE melihat Anda — blind spot mereka besar.',
        },
        {
          tag: 'INSIDEN TAMU',
          title: 'Tamu lepas high-vis untuk foto, tidak terlihat operator',
          story: 'Di viewpoint stockpile, tamu melepas rompi untuk foto “lebih bagus”. Operator loader tidak melihatnya saat munduran. Tamu tertabrak ringan — patah lengan. Investigasi: APD dilepas = pelanggaran visitor pass.',
          takeaway: '<b>APD visitor bukan aksesori foto.</b> Lepas vest = tidak terlihat = risiko fatal. Tetap pakai sampai bus penjemput.',
        },
        {
          tag: 'HEAT STROKE TAMU',
          title: 'Tamu paksakan tour siang tanpa hidrasi',
          story: 'Tamu VIP menolak istirahat teduh & air, ingin lanjut tour stockpile 35°C. Ia pingsan, kulit panas kering, bingung — heat stroke. Dievakuasi klinik, rawat inap 1 hari, kunjungan batal.',
          takeaway: '<b>Dengar escort soal heat.</b> Minum air sering, cari teduh, jangan “sebentar lagi”. Heat stroke tidak pilih jabatan.',
        },
      ];
      return `
        <div class="inner">
          <div class="kicker">Visitor — Belajar dari Nyata</div>
          <h2>Pelajaran dari <em>Insiden Tamu Nyata</em></h2>
          <p class="lead">3 skenario yang menimpa tamu — bukan pekerja. Renungkan: “Jika saya jadi tamu itu?”</p>
          <div class="scenarios stagger">
            ${cases.map(c => `
              <div class="scenario">
                <span class="scen-tag" style="background:var(--amber-soft); color:var(--amber); border:1px solid var(--amber-line)">${c.tag}</span>
                <h4>${c.title}</h4>
                <p>${c.story}</p>
                <div class="takeaway"><b style="color:var(--teal)">Pelajaran Tamu:</b> ${c.takeaway}</div>
              </div>`).join('')}
          </div>
          <div class="panelbox ok" style="margin-top:18px">
            <h3><i></i>Pertanyaan untuk Anda sebelum lanjut</h3>
            <p style="margin:0; color:var(--muted); font-size:13px">Jika escort bilang “area ini belum aman, kita tunggu”, apa jawaban Anda? → <b>“Siap, saya tunggu.”</b> Bukan “sebentar aja”.</p>
          </div>
        </div>
      `;
    },
  },

  /* 22 · POST-TEST VISITOR */
  {
    type: 'posttest',
    mod: 'EVAL',
    title: 'Post-Test Visitor & Visitor Pass',
    render() { return '<div id="quizContainer"></div>'; },
    afterRender() { Quiz.renderPosttest(); },
  },

  /* 23 · TANDA TANGAN VISITOR */
  {
    type: 'signature',
    mod: 'EVAL',
    title: 'Tanda Tangan Komitmen Visitor',
    render() {
      const u = State.get('user') || {};
      return `
        <div class="inner">
          <div class="kicker">Evaluasi — Visitor</div>
          <h2>Tanda Tangan <em>Komitmen Visitor</em></h2>
          <div class="bigquote">
            "Sebagai tamu, saya berkomitmen: <b>mengikuti escort, memakai APD, menghormati rambu, & tidak memasuki area terlarang.</b>
            Saya paham Visitor Pass ini hanya untuk akses didampingi & berlaku 7 hari."
            <small>— Ikrar Visitor PT. Sifang Mining Indonesia</small>
          </div>
          <ul class="checks cols" style="margin-top:22px">
            <li>Saya akan <b>selalu didampingi escort</b> & tidak terpisah dari rombongan.</li>
            <li>Saya <b>tidak akan mengoperasikan alat / mengemudi di haul road</b> tanpa izin & KIMPER.</li>
            <li>Saya akan <b>mematuhi APD visitor & rambu</b> serta melapor bahaya ke escort.</li>
            <li>Saya paham <b>Visitor Pass ≠ sertifikat pekerja</b> & wajib induksi ulang setelah 7 hari.</li>
          </ul>

          <div class="two" style="margin-top:26px">
            <div class="panelbox">
              <h3><i></i>Identitas Visitor</h3>
              <div style="display:grid; gap:10px">
                <input id="sig-name" placeholder="Nama Lengkap Visitor" value="${u.name || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-nik" placeholder="No. KTP / ID" value="${u.nik || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-pos" placeholder="Instansi / Perusahaan Asal" value="${u.position || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-dept" placeholder="Keperluan Kunjungan" value="${u.department || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-host" placeholder="Nama Host / Escort Site" value="${u.host || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--amber-line); background:var(--amber-soft); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-date" type="date" value="${u.visitDate || u.date || new Date().toISOString().slice(0,10)}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
              </div>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Tanda Tangan Digital Visitor</h3>
              <div class="sig-wrap">
                <canvas id="sigCanvas" class="sig-canvas"></canvas>
                <div class="sig-meta">
                  <span id="sigDate">— / — / —</span>
                  <span>TTD Visitor</span>
                </div>
              </div>
              <div class="sig-actions">
                <button class="navbtn" id="sigClear">Bersihkan</button>
                <button class="navbtn primary" id="sigSave" style="flex:1">Simpan Tanda Tangan</button>
              </div>
              <p style="margin-top:10px; font-size:11px; color:var(--muted); line-height:1.5">Dengan menandatangani, Anda menyetujui syarat Visitor Pass & bersedia dikeluarkan dari site bila melanggar.</p>
            </div>
          </div>

          <div style="text-align:center; margin-top:34px;">
            <p class="lead" style="text-align:center; margin:0 auto;">
              <b style="color:var(--text)">Terima kasih telah menjadi tamu yang peduli keselamatan.</b><br/>
              Nikmati kunjungan — dan pulang dengan selamat. 🙏
            </p>
          </div>
        </div>
      `;
    },
    afterRender() { Signature.init(); },
  },

  /* 24 · SERTIFIKAT VISITOR */
  {
    type: 'cert',
    mod: 'EVAL',
    title: 'Visitor Pass',
    render() { return '<div id="certContainer"></div>'; },
    afterRender() { Certificate.render(); },
  },

  /* 25 · PENUTUP VISITOR */
  {
    type: 'closing',
    mod: 'PENUTUP',
    title: 'Terima Kasih — Visitor',
    render() {
      return `
        <div class="inner" style="text-align:center; padding-top:30px">
          <div class="logo-big logo-png" style="background-image:url('assets/logo-full.png')" role="img" aria-label="PT. Sifang Mining Indonesia"></div>
          <h1 style="margin-top:14px">Terima <em>Kasih</em> — Visitor</h1>
          <div class="hazard" style="margin-left:auto;margin-right:auto;"></div>
          <p class="lead" style="margin:14px auto 0; text-align:center; max-width:680px;">
            Anda telah menyelesaikan <b>Induksi Visitor</b>. Ingat 3 kunci:
            <b style="color:var(--text)">Ikut Escort</b>, <b style="color:var(--text)">Pakai APD</b>, <b style="color:var(--text)">Jangan Lepas Rombongan</b>.
          </p>
          <div class="badges">
            <span class="badge gold">VISITOR PASS 7 HARI</span>
            <span class="badge teal">ESCORTED ONLY</span>
            <span class="badge blue">ZERO HARM</span>
            <span class="badge">BUKAN PEKERJA</span>
          </div>
          <div class="panelbox" style="margin-top:24px; text-align:left; max-width:640px; margin-left:auto; margin-right:auto">
            <h3><i></i>Sebelum Keluar — Checklist Visitor</h3>
            <ul>
              <li>✅ Screenshot / cetak <b>Visitor Pass</b> & tunjukkan di gate</li>
              <li>✅ Temui <b>Host/Escort</b> Anda — jangan jalan sendiri ke area</li>
              <li>✅ Kembalikan ID Visitor & APD pinjaman saat keluar</li>
              <li>✅ Kunjungan lagi >7 hari? <b>Induksi ulang wajib</b></li>
            </ul>
          </div>
          <div class="bigquote" style="margin-top:34px; text-align:left;">
            “Tamu terbaik bukan yang paling penting — tapi yang paling patuh pada keselamatan.”
            <small>— HSE PT. Sifang Mining Indonesia — Visitor Safety</small>
          </div>
        </div>
      `;
    },
    afterRender() { Effects.celebrate(); },
  },
];
