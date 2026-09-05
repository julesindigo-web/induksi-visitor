# Induksi Visitor K3L — PT. Sifang Mining Indonesia (VISITOR ONLY)

> **Induksi Keselamatan Khusus TAMU / VISITOR (Escorted Access Only)**
> Pertambangan Nikel Open Pit • Edisi Visitor Ringkas

Versi **fork** dari repo `17. INDUKSI` (50 slide general) yang **difokuskan 100% untuk VISITOR** — bukan untuk karyawan baru, operator, atau driver.
Durasi **15-20 menit**, **±24 slide**, **Visitor Pass 7 hari** (bukan sertifikat pekerja 12 bulan).

![Stack](https://img.shields.io/badge/Stack-HTML%20%2F%20CSS%20%2F%20JS-2b3990)
![Slides](https://img.shields.io/badge/Slides-24%20Visitor-fbbf24)
![Quiz](https://img.shields.io/badge/Quiz-Visitor%205%2B16-2dd4bf)
![Pass](https://img.shields.io/badge/Visitor%20Pass-7%20Hari-fb923c)

---

## 🎯 Perbedaan vs Induksi General (50 slide)

| Aspek | General (Pekerja) | **Visitor Edition** |
|-------|-------------------|---------------------|
| **Target** | Karyawan baru, kontraktor, magang, operator, driver | **Hanya TAMU / VISITOR escorted** |
| **Jumlah slide** | 50 | **24 (cover s/d terima kasih)** |
| **Durasi** | 45-60 menit | **15-20 menit** |
| **Sertifikat** | SMI-K3L, 12 bulan | **SMI-VIS-*, 7 hari, ESCORTED ONLY** |
| **Storage key** | `k3l_smi_induction_v1` | **`k3l_smi_visitor_v1` (terpisah)** |
| **Materi teknis berat** | LOTO 7 langkah, listrik, scaffolding, confined gas test, hot work, lifting, galian, HPAL/TSF detail, SIMPER/KIMPER deep | **Dihilangkan / diringkas jadi awareness** (“jangan dekati, lapor escort”) |
| **Fokus visitor** | — | Escort wajib, zona hijau/kuning/merah, APD minimal 5, traffic sebagai penumpang/pejalan kaki, blind spot, wet laterit, darurat ikut escort |
| **Quiz** | LSR 5 (100%) + 20 umum | **LSR Visitor 5 (100%) + 11 umum (80%) — konteks tamu** |
| **TTD** | Nama/NIK/Jabatan/Dept | **+ Host/Escort + Tgl Kunjungan (wajib)** |
| **Pass note** | “Penyegaran 12 bulan” | **“Bukan pekerja. Dilarang operasikan alat / masuk area merah”** |

---

## 📚 Daftar Slide Visitor (24)

| # | Modul | Judul | Fokus Visitor |
|---|-------|-------|---------------|
| 1 | VISITOR | Cover Visitor | Welcome escorted, beda pekerja vs tamu |
| 2 | VISITOR | Agenda Ringkas | 8 blok visitor vs 11 pekerja |
| 3 | VISITOR | Tata Tertib Tamu | Escort, no HP jalan, no foto tanpa izin |
| 4 | VISITOR | Tujuan & Batasan | Siapa visitor, 7-day pass, tanpa pass = tanpa akses |
| 5 | VISITOR | K3 Kilat & Lambang | Definisi 1 kalimat + lambang |
| 6 | VISITOR | Mengapa Penting | Stats visitor (88% tindakan, 3 detik, 7 hari) |
| 7 | EVAL | **Pre-Test Visitor (5)** | Baseline awareness |
| 8 | VISITOR | Profil Site — Kacamata Visitor | Open pit laterit, yang akan dilihat (jauh, escorted) |
| 9 | VISITOR | Kebijakan Kilat | 4 poin ringkas + nilai tamu |
| 10 | VISITOR | **10 Aturan Visitor** | Escort 100%, APD, no driving haul, no foto, barricade |
| 11 | VISITOR | Zona Akses | HIJAU/KUNING/MERAH |
| 12 | VISITOR | Syarat Masuk Gate | Checklist 5 + kendaraan visitor |
| 13 | VISITOR | Rambu & Alarm | Merah/kuning/biru/hijau + 3× panjang = darurat |
| 14 | VISITOR | APD Minimal 5+1 | Helm, glasses, boots, vest, earplug + life jacket |
| 15 | VISITOR | Kesehatan Tamu | Fit to Visit, heat stroke, debu, nikel itch |
| 16 | VISITOR | Traffic Tamu | Penumpang/pejalan kaki, blind spot, wet laterit |
| 17 | VISITOR | Bahaya Khas — Awareness | Longsor, HE exclusion, plant, jetty — kenali & menjauh |
| 18 | VISITOR | Tanggap Darurat Tamu | Teriak EMERGENCY 3×, ikut escort ke muster |
| 19 | VISITOR | **Demo Sirene** | TTS 4 pola |
| 20 | VISITOR | P3K & Lapor | Lapor escort, jangan pindah korban |
| 21 | VISITOR | Etika & Keamanan | BRIMOB, no judi, sampah PLASTIC/ORGANIC, whistleblower |
| 22 | VISITOR | **Studi Kasus Visitor (3)** | Crossing haul, lepas vest, heat stroke tamu |
| 23 | EVAL | **Post-Test Visitor (16)** | 5 kritis 100% + 11 umum 80% |
| 24 | EVAL | TTD Komitmen Visitor | + Host/Escort |
| 25 | EVAL | **Visitor Pass** | SMI-VIS-*, 7 hari, ESCORTED |
| 26 | PENUTUP | Terima Kasih Visitor | Checklist keluar |

> Catatan: counter otomatis menampilkan `01 / 26` karena implementasi 26 objek (termasuk pre/post). Versi pekerja menampilkan `50`.

---

## 🗂️ Struktur Folder (Visitor Clone)

```
17. INDUKSI-VISITOR/  ← clone dari 17. INDUKSI
├── index.html               ← title/meta visitor, badge ESCORTED
├── README.md                ← Anda di sini (visitor)
├── css/                     ← sama (tokens, slides, print)
├── js/
│   ├── slides-data.js       ← **REWRITE TOTAL visitor (26 entry)**
│   ├── state.js             ← + host, visitDate
│   ├── storage.js           ← key baru k3l_smi_visitor_v1
│   ├── certificate.js       ← SMI-VIS-*, addDays(7), wording visitor
│   ├── signature.js         ← + host & date
│   └── ... (sisa sama: icons, app, navigation, quiz, etc)
├── data/
│   ├── quiz.json            ← **REWRITE visitor (5 + 5+11)**
│   └── glossary.json        ← **FILTER visitor (41 istilah tamu)**
└── assets/                  ← logo, favicon
```

---

## 🚀 Cara Menjalankan Visitor Edition

### Lokal (recommended — fetch butuh http)
```bash
cd "17. INDUKSI-VISITOR"
python -m http.server 8000
# atau npx http-server -p 8000
# buka http://localhost:8000
```

### Deploy Vercel / Netlify / GitHub Pages
Upload folder `17. INDUKSI-VISITOR` apa adanya — static, no build step. `vercel.json` sudah ada (copy dari induk).

---

## 🔐 Penyimpanan Data (terpisah dari induksi pekerja)

| Key | Isi |
|-----|-----|
| `k3l_smi_visitor_v1` | `{ state: { idx, visited, user{host,visitDate}, quiz, signature, certId, certified } }` |
| `k3l_smi_induction_v1` | Tetap untuk versi pekerja (tidak bentrok) |

Reset visitor:
```js
__APP__.State.reset(); location.reload()
// atau localStorage.removeItem('k3l_smi_visitor_v1')
```

---

## ✅ Alur Visitor

```
Cover Visitor (escorted warning)
  ↓
Agenda 8 blok
  ↓
Tata Tertib + Tujuan/Batasan
  ↓
Pre-Test 5 (baseline)
  ↓
Materi inti 14 slide (profil s/d etika) + Demo Sirene
  ↓
Studi Kasus Visitor
  ↓
Post-Test
  ├─ LULUS (5 kritis 100% + umum ≥80%)
  │     ↓
  │   TTD Visitor (+ host)
  │     ↓
  │   Visitor Pass SMI-VIS-* (7 hari)
  │     ↓
  │   Cetak / screenshot → tunjukkan di gate
  │
  └─ BELUM LULUS → remedial
```

---

## 🛡️ Prinsip Desain Visitor

1. **Escorted only** — setiap slide mengulang “jangan lepas escort”.
2. **Awareness, bukan kompetensi operasi** — tamu tidak diajari LOTO/ketinggian/confined; cukup “jangan dekati & lapor”.
3. **Larangan eksplisit** — 10 aturan visitor, zona merah, foto, HP, rokok.
4. **Durasi pendek** — 15 menit, bahasa tamu (bukan teknisi).
5. **Pass terbatas** — 7 hari edukasi bahwa visitor pass ≠ sertifikat kerja.

---

## 🧪 Validasi

- [x] `js/slides-data.js` syntax OK (26 types)
- [x] `data/quiz.json` valid (pretest 5, lsr 5, umum 11)
- [x] `data/glossary.json` visitor 41 items
- [x] Storage key terpisah
- [x] Certificate SMI-VIS + 7 days
- [ ] Manual click-through 26 slide di browser (disarankan)
- [ ] Cetak Visitor Pass A4

---

## 📝 Lisensi & Atribusi

© 2026 PT. Sifang Mining Indonesia — HSE Department.
Fork visitor untuk tamu escorted. Tidak untuk operator/pekerja — mereka wajib induksi general 50 slide.

> “Tamu terbaik bukan yang paling penting — tapi yang paling patuh pada keselamatan.”
