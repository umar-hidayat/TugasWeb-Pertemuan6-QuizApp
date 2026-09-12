
# 🚀 Data Engineering Interactive Quiz App

Aplikasi kuis interaktif berbasis web (*Single Page Application*) yang dirancang untuk menguji pengetahuan seputar arsitektur **Data Engineering** (SQL/NoSQL, Data Pipeline, Apache Kafka, Spark, Airflow, Data Lakehouse, dan CAP Theorem)[cite: 1]. 

Proyek ini dibangun sebagai penyelesaian **Tugas Rutin 6 - Mata Kuliah Pemrograman Web** (Semester Ganjil 2026/2027, Universitas Negeri Medan)[cite: 1].

---

## 🛠️ Fitur Utama

- **Single Page Application (SPA):** Transisi antar soal dan visualisasi hasil tanpa *reload* halaman[cite: 1].
- **Event Delegation Pattern:** Penanganan interaksi tombol jawaban terpusat menggunakan `e.target.closest()` untuk efisiensi memori[cite: 1].
- **XSS Prevention:** Seluruh manipulasi konten DOM menggunakan `textContent` dan `createElement` (bebas dari bahaya `innerHTML` pada data dinamis)[cite: 1].
- **Persistent High Score:** Menyimpan rekor nilai tertinggi ke penyimpanan lokal browser menggunakan `localStorage` API (`JSON`/`Number` parsing)[cite: 1].
- **Visual Feedback System:** Indikator warna hijau (benar) dan merah (salah) yang responsif seketika jawaban dipilih[cite: 1].
- **DE Terminal UI Theme:** Tampilan antarmuka berestetika *Dark Mode Pipeline Monitoring Dashboard*.

---

## 📸 Preview UI

| Quiz Interface | Result & High Score |
| :---: | :---: |
| *Tampilan Stage Soal & Opsi Jawaban* | *Tampilan Skor Akhir & Record LocalStorage* |

---

## 📂 Struktur Proyek

```text
TugasWeb-Pertemuan6-QuizApp/
├── index.html       # Semantik markup UI & container komponen
├── style.css        # Styling UI, layout grid, & kelas status visual
├── app.js           # Logika DOM, Event Delegation, & LocalStorage state
├── .gitignore       # Konfigurasi pengabaian file sampah OS/IDE
└── README.md        # Dokumentasi proyek

```

---

## ⚡ Teknologi yang Digunakan

* **HTML5:** Struktur dokumen web semantik.


* **CSS3:** Flexbox, CSS Grid, Custom Properties (Variables), & Animations.


* **JavaScript (ES6+):** DOM Manipulation, Event Handling, Event Delegation, & LocalStorage API.



---

## 📖 Cara Menjalankan Proyek

1. **Clone Repository ini:**
```bash
git clone [https://github.com/USERNAME_KAMU/TugasWeb-Pertemuan6-QuizApp.git](https://github.com/USERNAME_KAMU/TugasWeb-Pertemuan6-QuizApp.git)

```


2. **Buka Proyek:**
Buka folder proyek dan jalankan file `index.html` langsung di browser favoritmu (atau gunakan ekstensi *Live Server* di VS Code).

---

## 🎯 Pemenuhan Indikator Tugas Rutin 6

| Requirement / Indikator Slide | Status | Implementasi |
| --- | --- | --- |
| Minimal 5 Pertanyaan Pilihan Ganda | ✅ | 10 Soal Pengetahuan Data Engineering

 |
| Render DOM dengan `createElement` & `textContent` | ✅ | Aman dari XSS attack di `app.js`<br> |
| Event Delegation pada Opsi Jawaban | ✅ | Menggunakan `optionsEl.addEventListener` & `closest()`<br> |
| Skor Otomatis di Akhir Quiz | ✅ | Kalkulasi akurat saat stage soal berakhir

 |
| High Score di `localStorage` | ✅ | Disimpan & dibaca via `localStorage.setItem/getItem`<br> |
| Navigasi Tanpa Reload (SPA) | ✅ | Manipulasi kelas CSS `.hidden` pada container

 |
| Feedback Visual Jawaban | ✅ | Kelas `.correct` (hijau) & `.wrong` (merah)

 |
| Tombol Restart Quiz | ✅ | Reset state `score` & `currentQuestion` ke `0`<br> |

