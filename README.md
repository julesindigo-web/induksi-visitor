# Induksi K3L — PT. Sifang Mining Indonesia

> **Program Induksi Keselamatan, Kesehatan Kerja, dan Lingkungan (K3L)**
> Pertambangan Nikel Open Pit • Edisi Interaktif Premium

Platform pembelajaran interaktif berbasis web untuk inducti HSE pekerja baru,
kontraktor, dan tamu di area operasional pertambangan nikel open pit PT. Sifang
Mining Indonesia.

![Stack](https://img.shields.io/badge/Stack-HTML%20%2F%20CSS%20%2F%20JS-2b3990)
![Slides](https://img.shields.io/badge/Slides-50-fbbf24)
![Quiz](https://img.shields.io/badge/Quiz-2dd4bf)
![Certificate](https://img.shields.io/badge/Certificate-Auto%20Generated-fb923c)

---

## � Fitur Utama

### 🎓 Konten & Pembelajaran
- **50 slide** materi induksi terstruktur dalam 11 modul
- **Animasi transisi** slide dengan motion premium
- **Animated SVG mining scene** sebagai cover backdrop
- **Particle effects** (debu, percikan, ambient glow)
- **Confetti celebration** saat lulus / sertifikat terbit
- **Counter animasi** untuk statistik kunci

### 🧠 Interaktif (Non-Static)
- ✅ **Pre-Test** (5 soal) — baseline check
- ✅ **Risk Matrix 5×5** interaktif (klik sel untuk contoh bahaya)
- ✅ **APD Selector** — pilih APD sesuai tugas, sistem validasi
- ✅ **Sirene Demo** — bunyikan pola alarm darurat via TTS
- ✅ **Post-Test** 2 bagian: **LSR (wajib 100%)** + Pengetahuan Umum (≥80%)
- ✅ **Digital Signature Pad** (canvas-based)
- ✅ **Studi Kasus** industri nikel

### 💼 Profesional
- 🖋 **Tanda tangan digital** di canvas
- 📜 **Sertifikat otomatis** dengan nomor unik, masa berlaku 12 bulan
- 📊 **Progress tracking** otomatis (tersimpan di browser)
- � **Bookmark** slide untuk review ulang
- 📝 **Notes** per slide (planned)
- 🔍 **Full-text search** seluruh materi
- 📖 **Glosarium K3L** 80+ istilah dengan pencarian

### 🎨 Visual & UX
- 🌗 **Dark/Light theme** toggle (data-theme)
- 🔤 **Premium typography** (Space Grotesk + Manrope + JetBrains Mono)
- 📱 **Responsive** (mobile-first; swipe gesture)
- 🖨 **Print-ready** (handout + sertifikat A4)
- 🔊 **Audio narasi** Bahasa Indonesia (Web Speech API)
- ⌨ **Keyboard shortcuts** lengkap

---

## 📁 Struktur Project

```
18. INDUKSI/
├── index.html               ← Entry point
├── README.md                ← Anda di sini
│
├── assets/
│   ├── logo.svg             ← Logo symbol (icon only)
│   ├── logo-full.png        ← Logo PT. SMI lengkap dengan nama perusahaan
│   └── favicon.svg          ← Browser tab icon
│
├── css/
│   ├── tokens.css           ← Design system (warna, tipografi, spacing)
│   ├── base.css             ← Reset & base typography
│   ├── layout.css           ← App shell, topbar, botbar, stage
│   ├── components.css       ← Cards, buttons, panels, badges
│   ├── slides.css           ← Slide variants (cover, stats, matrix, APD, dll)
│   ├── effects.css          ← Particles, glassmorphism, shimmer
│   ├── responsive.css       ← Media queries
│   └── print.css            ← Print + certificate stylesheet
│
├── js/
│   ├── icons.js             ← 85+ SVG icon (custom mining/HSE themed)
│   ├── storage.js           ← LocalStorage wrapper
│   ├── state.js             ← Centralized app state
│   ├── effects.js           ← Particles, confetti, counters, toast
│   ├── progress.js          ← Progress tracking
│   ├── theme.js             ← Dark/light mode
│   ├── audio.js             ← TTS narration + sirene demo
│   ├── slides-data.js       ← 50 slide definitions (data-driven)
│   ├── renderer.js          ← Dynamic DOM rendering
│   ├── navigation.js        ← Slide navigation (keyboard + touch)
│   ├── menu.js              ← TOC drawer
│   ├── glossary.js          ← Searchable glossary
│   ├── search.js            ← Full-text search
│   ├── bookmarks.js         ← Bookmark manager
│   ├── help.js              ← Keyboard shortcuts help
│   ├── quiz.js              ← Quiz engine (pretest, posttest, matrix, APD)
│   ├── signature.js         ← Canvas signature pad
│   ├── certificate.js       ← Auto-generate certificate
│   └── app.js               ← Bootstrap & orchestration
│
└── data/
    ├── quiz.json            ← Bank soal pretest + posttest
    └── glossary.json        ← 80+ HSE terms
```

---

## 🚀 Cara Menjalankan

### Cara 1 — Langsung Buka di Browser
```bash
# Buka file index.html dengan browser modern (Chrome/Edge/Firefox)
# Beberapa fitur (fetch, audio) butuh protokol http:// atau https://
```

### Cara 2 — Local HTTP Server (Recommended)
```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx http-server -p 8000

# PHP
php -S localhost:8000

# Lalu buka: http://localhost:8000
```

### Cara 3 — Live Deploy
Upload folder ini ke static host: **Netlify**, **Vercel**, **GitHub Pages**, **Cloudflare Pages**, atau shared hosting biasa.

---

## ⌨ Pintasan Keyboard

| Tombol | Aksi |
|--------|------|
| `→` / `PageDown` / `Space` | Slide berikutnya |
| `←` / `PageUp` | Slide sebelumnya |
| `Home` / `End` | Slide pertama / terakhir |
| `M` | Buka / tutup menu |
| `F` | Toggle fullscreen |
| `T` | Toggle tema (dark / light) |
| `A` | Toggle audio narasi |
| `?` | Buka panduan pintasan |
| Swipe kiri / kanan | Navigasi di mobile |

---

## 📚 Daftar Modul

| # | Modul | Topik Utama |
|---|-------|-------------|
| 1 | PEMBUKA | Cover, Agenda, Tujuan, Statistik |
| 2 | PROFIL | Profil, Hukum, Kebijakan, LSR, SWA |
| 3 | ATURAN | Hak-Kewajiban, Aturan Site, Area, Rambu, Radio |
| 4 | RISIKO | Manajemen Risiko, Risk Matrix, Permit, SIMOPS/MOC |
| 5 | APD | APD Wajib, APD Spesifik, **APD Selector** |
| 6 | KESEHATAN | Fit to Work, Bahaya Nikel |
| 7 | AREA | Traffic, Alat Berat, Geoteknik |
| 8 | KERJA | LOTO, Listrik, Ketinggian, Confined, Hot Work, Lifting, Galian |
| 9 | FASILITAS | Kimia/B3, Plant, Smelter/HPAL/TSF/Jetty, Fuel, Lingkungan |
| 10 | DARURAT | Tanggap Darurat, **Sirene Demo**, P3K, Pelaporan |
| 11 | PENUNJANG | Camp, Keamanan, Etika |
| 12 | KASUS | Studi Kasus Industri Nikel |
| 13 | EVAL | **Pre-Test**, **Post-Test**, **TTD Digital**, **Sertifikat** |

---

## ✅ Alur Penggunaan

```
Cover
  ↓
Materi (50 slide)
  ↓
Pre-Test (baseline)
  ↓
Lanjut ke Materi Inti
  ↓
...
  ↓
Post-Test
  ├─ LULUS (LSR 100% + Umum ≥80%)
  │     ↓
  │   Tanda Tangan Digital
  │     ↓
  │   Sertifikat Otomatis (No. SMI-K3L-...)
  │     ↓
  │   Unduh / Cetak
  │
  └─ BELUM LULUS
        ↓
      Pelajari ulang & Remedial
```

---

## 🔒 Penyimpanan Data

Semua progres disimpan **lokal di browser** (localStorage):

| Key | Isi |
|-----|-----|
| `k3l_smi_induction_v1` | `{ state: { idx, visited, bookmarks, quiz, signature, user, settings, ... } }` |

Untuk **reset total**:
1. Buka DevTools (F12)
2. Console: `__APP__.State.reset(); location.reload()`
3. Atau bersihkan localStorage untuk domain ini

---

## 🛠 Tech Stack

- **HTML5** semantic markup
- **CSS3** modern (custom properties, grid, flexbox, animations, backdrop-filter)
- **Vanilla JavaScript (ES6+)** — tidak ada framework dependency
- **Web APIs**: localStorage, Canvas, Web Speech API, Fullscreen API
- **SVG** untuk ilustrasi, ikon, dan animasi (no emoji icons)

---

## 📋 Browser Support

| Browser | Status |
|---------|--------|
| Chrome / Edge 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Mobile Safari iOS 14+ | ✅ Full |
| Chrome Android 90+ | ✅ Full |

---

## 📝 Lisensi & Atribusi

© 2026 PT. Sifang Mining Indonesia — HSE Department.
Materi internal untuk inducti K3L. Tidak untuk distribusi publik.

Font: **Space Grotesk**, **Manrope**, **JetBrains Mono** (SIL Open Font License via Fontsource CDN).

---

## � Dukungan

Pertanyaan atau masalah teknis:
- HSE Department PT. Sifang Mining Indonesia
- Email: hse@sifangmining.co.id

> **"Tidak ada target produksi yang sebanding dengan nyawa manusia."**
