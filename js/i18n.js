/* ============================================================
   I18N — Bilingual ID ↔ Simplified CN (toggle, reload-safe)
   covers UI chrome, toasts, TTS lines, abbreviations.
   Slides/quiz/glossary content lives in parallel CN files.
   ============================================================ */

const I18N = (() => {
  const ABBR = {
    'APD': { id: 'Alat Pelindung Diri', cn: '个人防护装备' },
    'APAR': { id: 'Alat Pemadam Api Ringan', cn: '便携式灭火器' },
    'B3': { id: 'Bahan Berbahaya dan Beracun', cn: '危险化学品（有毒有害物质）' },
    'HE': { id: 'Heavy Equipment (Alat Berat)', cn: '重型设备' },
    'LV': { id: 'Light Vehicle (Kendaraan Ringan)', cn: '轻型车辆' },
    'K3': { id: 'Keselamatan dan Kesehatan Kerja', cn: '职业安全健康' },
    'K3L': { id: 'Keselamatan, Kesehatan Kerja dan Lingkungan', cn: '安全、健康与环境（HSE）' },
    'HSE': { id: 'Health, Safety, Environment', cn: '安全健康环保部' },
    'LSR': { id: 'Life-Saving Rules (Aturan Penyelamat Nyawa)', cn: '保命规则' },
    'SWA': { id: 'Stop Work Authority (Wewenang Menghentikan Pekerjaan)', cn: '停止作业授权' },
    'KIMPER': { id: 'Surat Izin Mengemudi Perusahaan', cn: '公司内部驾驶证' },
    'SIMPER': { id: 'Surat Izin Mengemudi Perusahaan', cn: '公司内部驾驶证' },
    'ERT': { id: 'Emergency Response Team (Tim Tanggap Darurat)', cn: '应急救援队' },
    'P3K': { id: 'Pertolongan Pertama Pada Kecelakaan', cn: '急救' },
    'SOP': { id: 'Standard Operating Procedure (Prosedur Operasi Standar)', cn: '标准作业程序' },
    'TKP': { id: 'Tempat Kejadian Perkara', cn: '事故现场' },
    'HRGA': { id: 'Human Resources & General Affairs', cn: '人事行政部' },
    'TSF': { id: 'Tailings Storage Facility (Tailing)', cn: '尾矿库' },
    '5R': { id: 'Ringkas, Rapi, Resik, Rawat, Rajin', cn: '整理、整顿、清扫、清洁、素养（5S）' },
    'dBA': { id: 'desibel-A (satuan kebisingan)', cn: '分贝（A计权噪声单位）' },
    'SCBA': { id: 'Self-Contained Breathing Apparatus', cn: '正压式空气呼吸器' },
    'PTW': { id: 'Permit to Work (Izin Kerja)', cn: '作业许可证' },
  };

  const STR = {
    id: {
      'doc.title': 'Induksi Visitor K3L — PT. Auxin & PT. Sifang Mining | Visitor Only',
      'doc.desc': 'Induksi Visitor K3L PT. Auxin Development Indonesia & PT. Sifang Mining Indonesia — Khusus Tamu/Visitor escorted. 26 tampilan, Visitor Pass 7 hari.',
      'brand.pill': 'VISITOR INDUCTION • ESCORTED ONLY • 7-DAY PASS',
      'menu.title': 'DAFTAR MATERI INDUKSI',
      'nav.prev': 'Sebelumnya',
      'nav.next': 'Lanjut',
      'btn.bookmark': 'Bookmark slide ini',
      'btn.search': 'Cari materi',
      'btn.glossary': 'Glosarium K3L',
      'btn.audio': 'Audio narasi (A)',
      'btn.theme': 'Tema terang/gelap (T)',
      'btn.help': 'Panduan (?)',
      'btn.bookmarks': 'Lihat bookmark',
      'btn.menu': 'Daftar materi (M)',
      'btn.full': 'Layar penuh (F)',
      'btn.close': 'Tutup',
      'btn.lang': '中文',
      'welcome': 'Tekan ? untuk panduan atau M untuk daftar materi',
      'search.title': '🔎 Pencarian Materi',
      'search.ph': 'Cari kata kunci (mis. APD, longsor, escort, sirene)',
      'search.empty': 'Ketik untuk mencari…',
      'search.none': 'Tidak ditemukan. Coba kata kunci lain.',
      'gloss.title': '📖 Glosarium K3L',
      'gloss.ph': 'Cari istilah... (mis. APD, escort, muster)',
      'gloss.none': 'Tidak ada istilah ditemukan.',
      'help.title': '⌨ Panduan & Pintasan',
      'bm.title': '🔖 Bookmark',
      'bm.lead': 'Slide yang Anda tandai untuk dipelajari ulang nanti. Klik untuk melompat ke slide.',
      'bm.empty': 'Belum ada bookmark. Tekan ikon 🔖 di topbar untuk menambah.',
      'bm.added': '🔖 Slide di-bookmark',
      'bm.removed': 'Bookmark dihapus',
      'audio.on': '🔊 Narasi aktif',
      'audio.off': '🔇 Narasi nonaktif',
      'sirene.darurat': 'Tanda bahaya! Tanda bahaya! Tanda bahaya! Hentikan semua pekerjaan. Menuju muster point. Mengulang, menuju muster point.',
      'sirene.siaga': 'Siaga. Bersiaplah. Dengarkan instruksi selanjutnya.',
      'sirene.allclear': 'All clear. Situasi terkendali. Kembali bekerja atas instruksi supervisor.',
      'sirene.blasting': 'Tanda peledakan. Peledakan. All clear.',
      'quiz.pretest.kicker': 'Evaluasi Awal',
      'quiz.pretest.title': 'Pre-Test — Cek Pemahaman Awal',
      'quiz.pretest.lead': '5 pertanyaan singkat. Hasil tidak menggagalkan kelulusan — tetapi membantu kami memahami baseline pengetahuan Anda.',
      'quiz.pretest.submit': 'Kirim Jawaban',
      'quiz.pretest.continue': 'Lanjut ke Materi',
      'quiz.pretest.done': 'Pre-test selesai — lanjut ke materi inti.',
      'quiz.posttest.kicker': 'Evaluasi Akhir',
      'quiz.posttest.title': 'Post-Test — Sertifikasi Induksi',
      'quiz.posttest.secA': 'Bagian A — Life-Saving Rules',
      'quiz.posttest.secB': 'Bagian B — Pengetahuan Umum',
      'quiz.posttest.submit': 'Kirim & Nilai',
      'quiz.posttest.continue': 'Lanjut ke Tanda Tangan',
      'quiz.posttest.retry': 'Reset & Coba Lagi',
      'quiz.pass': '✅ LULUS — lanjut ke tanda tangan & sertifikat.',
      'quiz.fail': '❌ Belum lulus. Pelajari ulang materi & coba remedial.',
      'quiz.qno': 'Soal ',
      'quiz.ok': '✓ Benar.',
      'quiz.bad': '✗ Kurang tepat.',
      'sig.empty': 'Tanda tangan kosong — silakan tanda tangani dulu',
      'sig.cleared': 'Tanda tangan dihapus',
      'sig.needName': 'Lengkapi nama & NIK sebelum simpan',
      'sig.saved': '✓ Tanda tangan disimpan',
      'cert.issued': '🎉 Sertifikat diterbitkan!',
      'cert.download': '⬇ Unduh / Cetak Visitor Pass',
      'cert.share': '📤 Bagikan',
    },
    cn: {
      'doc.title': 'K3L 访客入场培训 — PT Auxin × 印尼四方矿业 | 仅限访客',
      'doc.desc': 'PT Auxin Development Indonesia与印尼四方矿业K3L访客入场培训——仅限陪同访客，共26页，7天访客证。',
      'brand.pill': '访客培训 • 须全程陪同 • 7天通行证',
      'menu.title': '培训目录',
      'nav.prev': '上一页',
      'nav.next': '下一页',
      'btn.bookmark': '收藏本页',
      'btn.search': '搜索内容',
      'btn.glossary': '安全术语表',
      'btn.audio': '语音讲解 (A)',
      'btn.theme': '浅色/深色 (T)',
      'btn.help': '帮助 (?)',
      'btn.bookmarks': '查看收藏',
      'btn.menu': '目录 (M)',
      'btn.full': '全屏 (F)',
      'btn.close': '关闭',
      'btn.lang': 'ID',
      'welcome': '按 ? 查看帮助，或按 M 打开目录',
      'search.title': '🔎 内容搜索',
      'search.ph': '输入关键词（如 APD、滑坡、陪同、警报）',
      'search.empty': '请输入关键词…',
      'search.none': '未找到，请换个关键词。',
      'gloss.title': '📖 安全术语表',
      'gloss.ph': '搜索术语…（如 APD、陪同、集合点）',
      'gloss.none': '未找到相关术语。',
      'help.title': '⌨ 帮助与快捷键',
      'bm.title': '🔖 我的收藏',
      'bm.lead': '您收藏的页面，点击可直接跳转。',
      'bm.empty': '暂无收藏，点击顶部🔖即可添加。',
      'bm.added': '🔖 已收藏',
      'bm.removed': '已取消收藏',
      'audio.on': '🔊 语音讲解已开启',
      'audio.off': '🔇 语音讲解已关闭',
      'sirene.darurat': '紧急情况！紧急情况！紧急情况！请立即停止作业，跟随陪同人员前往集合点。重复，前往集合点。',
      'sirene.siaga': '请注意。做好准备，收听下一步指令。',
      'sirene.allclear': '警报解除。情况已受控，请听从主管指令返回。',
      'sirene.blasting': '爆破警报。爆破作业。警报解除。',
      'quiz.pretest.kicker': '课前测评',
      'quiz.pretest.title': '课前测试 — 了解基础',
      'quiz.pretest.lead': '共5道简答题，不影响最终成绩，仅用于了解您的安全基础。',
      'quiz.pretest.submit': '提交答案',
      'quiz.pretest.continue': '进入正课',
      'quiz.pretest.done': '课前测试完成 — 请继续学习正课。',
      'quiz.posttest.kicker': '结业考核',
      'quiz.posttest.title': '结业考试 — 培训认证',
      'quiz.posttest.secA': '第一部分 — 保命规则（须满分）',
      'quiz.posttest.secB': '第二部分 — 通用知识',
      'quiz.posttest.submit': '提交并评分',
      'quiz.posttest.continue': '前往签名',
      'quiz.posttest.retry': '重置并重考',
      'quiz.pass': '✅ 通过 — 请继续签名并领取证件。',
      'quiz.fail': '❌ 未通过，请复习后补考。',
      'quiz.qno': '第 ',
      'quiz.ok': '✓ 回答正确。',
      'quiz.bad': '✗ 回答有误。',
      'sig.empty': '签名为空 — 请先签名',
      'sig.cleared': '签名已清除',
      'sig.needName': '请先填写姓名与证件号',
      'sig.saved': '✓ 签名已保存',
      'cert.issued': '🎉 证件已签发！',
      'cert.download': '⬇ 下载 / 打印访客证',
      'cert.share': '📤 分享',
    }
  };

  function getLang() {
    try {
      const v = (typeof State !== 'undefined' && State.get('settings.lang')) || 'id';
      return v === 'cn' ? 'cn' : 'id';
    } catch (e) { return 'id'; }
  }

  function t(key) {
    const l = getLang();
    if (STR[l] && STR[l][key] !== undefined) return STR[l][key];
    if (STR.id[key] !== undefined) return STR.id[key];
    return key;
  }

  function L(idText, cnText) { return getLang() === 'cn' ? cnText : idText; }

  function abbr(short) {
    const e = ABBR[short];
    if (!e) return short;
    const title = short + ' — ' + e.id + ' / ' + e.cn;
    return '<abbr class="abbr" tabindex="0" title="' + title.replace(/"/g, '&quot;') + '">' + short + '</abbr>';
  }

  function full(short) {
    const e = ABBR[short];
    if (!e) return short;
    return getLang() === 'cn' ? short + '（' + e.cn + '）' : short + '（' + e.id + '）';
  }

  function quizPath() { return getLang() === 'cn' ? 'data/quiz-cn.json' : 'data/quiz.json'; }
  function glossPath() { return getLang() === 'cn' ? 'data/glossary-cn.json' : 'data/glossary.json'; }
  function activeSlides() {
    if (getLang() === 'cn' && typeof SLIDES_DATA_CN !== 'undefined') return SLIDES_DATA_CN;
    return (typeof SLIDES_DATA !== 'undefined') ? SLIDES_DATA : [];
  }

  function setLang(lang) {
    const v = lang === 'cn' ? 'cn' : 'id';
    try { State.set('settings.lang', v); } catch (e) {}
    try { document.documentElement.setAttribute('lang', v === 'cn' ? 'zh-CN' : 'id'); } catch (e) {}
    return v;
  }

  function toggle() {
    const next = getLang() === 'cn' ? 'id' : 'cn';
    setLang(next);
    try { location.reload(); } catch (e) {}
    return next;
  }

  function applyStatic() {
    const l = getLang();
    try { document.documentElement.setAttribute('lang', l === 'cn' ? 'zh-CN' : 'id'); } catch (e) {}
    try { document.title = t('doc.title'); } catch (e) {}
    try {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute('content', t('doc.desc'));
    } catch (e) {}
    const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
    const setHTML = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
    try {
      const pill = document.querySelector('.brand .visitor-pill');
      if (pill) pill.innerHTML = '<i></i> ' + t('brand.pill');
      const menuH = document.querySelector('#menu h3');
      if (menuH) menuH.textContent = t('menu.title');
      const prev = document.querySelector('#btnPrev .label-full');
      if (prev) prev.textContent = t('nav.prev');
      const next = document.querySelector('#btnNext .label-full');
      if (next) next.textContent = t('nav.next');
      const langBtn = document.getElementById('btnLang');
      if (langBtn) {
        langBtn.textContent = t('btn.lang');
        langBtn.setAttribute('aria-label', l === 'cn' ? '切换到印尼语' : 'Ganti ke Bahasa Mandarin');
        langBtn.setAttribute('title', l === 'cn' ? 'Ganti ke Bahasa Indonesia' : '切换到中文');
      }
      const map = [
        ['btnBookmark', 'btn.bookmark'], ['btnSearch', 'btn.search'],
        ['btnGlossary', 'btn.glossary'], ['btnAudio', 'btn.audio'],
        ['btnTheme', 'btn.theme'], ['btnHelp', 'btn.help'],
        ['btnBookmarks', 'btn.bookmarks'], ['btnMenu', 'btn.menu'],
        ['btnFull', 'btn.full'], ['btnClose', 'btn.close'],
      ];
      map.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) { el.setAttribute('aria-label', t(key)); el.setAttribute('title', t(key)); }
      });
      set('modLabel', '');
    } catch (e) {}
  }

  return { ABBR, STR, getLang, t, L, abbr, full, quizPath, glossPath, activeSlides, setLang, toggle, applyStatic };
})();
