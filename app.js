// 1. Data Soal (10 Soal Data Engineering)
const quizData = [
  {
    question: "Format file mana yang menggunakan tipe penyimpanan berbasis kolom (column-oriented storage) dan sangat optimal untuk OLAP query?",
    options: ["CSV", "JSON", "Apache Parquet", "XML"],
    correct: 2
  },
  {
    question: "Manakah dari teknologi berikut yang berfungsi sebagai distributed event streaming platform untuk pemrosesan data real-time?",
    options: ["Apache Kafka", "PostgreSQL", "Apache Hive", "MongoDB"],
    correct: 0
  },
  {
    question: "Dalam konsep basis data analitis, skema apakah yang memisahkan data menjadi Fact Table dan Dimension Tables?",
    options: ["Graph Schema", "Star Schema", "Document Schema", "Key-Value Schema"],
    correct: 1
  },
  {
    question: "Proses transformasi data yang mana yang melakukan pembersihan dan komputasi data sebelum dimasukkan ke dalam Target Storage/Data Lakehouse?",
    options: ["ELT", "ETL", "CDC", "OLTP"],
    correct: 1
  },
  {
    question: "Dalam CAP Theorem, dua properti manakah yang umumnya diprioritaskan oleh sistem basis data terdistribusi pada kondisi Network Partition?",
    options: ["Consistency & Availability", "Consistency & Partition Tolerance", "Durability & Atomicity", "Isolation & Speed"],
    correct: 1
  },
  {
    question: "Tool orchestration open-source manakah yang dikembangkan oleh Airbnb untuk mengelola workflow data pipeline berbasis Directed Acyclic Graph (DAG)?",
    options: ["Apache Spark", "Apache Airflow", "dbt", "Docker"],
    correct: 1
  },
  {
    question: "Apa fungsi utama dari CDC (Change Data Capture) dalam arsitektur Data Engineering?",
    options: [
      "Menghapus data duplikat di Data Warehouse",
      "Mengompres file CSV menjadi Parquet",
      "Merekam dan mereplikasi perubahan data pada database sumber secara real-time",
      "Menjalankan query SQL secara paralel"
    ],
    correct: 2
  },
  {
    question: "Manakah komputasi engine yang menyimpan intermediate data di dalam RAM (in-memory processing) untuk kecepatan analisis skala besar?",
    options: ["Apache Hadoop MapReduce", "Apache Spark", "MySQL Engine", "SQLite"],
    correct: 1
  },
  {
    question: "Prinsip pemodelan data mana yang paling tepat membedakan OLTP dan OLAP?",
    options: [
      "OLTP untuk analisis historis, OLAP untuk transaksi cepat",
      "OLTP dioptimalkan untuk baca/tulis transaksi cepat, OLAP dioptimalkan untuk query analitis kompleks",
      "OLTP tidak memerlukan indeks, OLAP wajib mengggunakan relational key",
      "OLTP hanya menggunakan data un-structured, OLAP menggunakan data structured"
    ],
    correct: 1
  },
  {
    question: "Apa istilah arsitektur modern yang menggabungkan fleksibilitas & low-cost storage dari Data Lake dengan fitur ACID transaction & manajemen data dari Data Warehouse?",
    options: ["Data Mart", "Data Mesh", "Data Lakehouse", "Data Vault"],
    correct: 2
  }
];

// 2. State Aplikasi
let currentQuestion = 0;
let score = 0;

// 3. Selection Elemen DOM
const questionEl = document.querySelector('#question');
const optionsEl = document.querySelector('#options');
const nextBtn = document.querySelector('#nextBtn');
const progressEl = document.querySelector('#progress');
const resultEl = document.querySelector('#result');
const scoreEl = document.querySelector('#score');
const highScoreEl = document.querySelector('#highScore');
const restartBtn = document.querySelector('#restartBtn');
const quizContentEl = document.querySelector('.quiz-content');

// 4. Render Soal & Opsi (Aman XSS via textContent & createElement)
function renderQuestion() {
  const q = quizData[currentQuestion];

  // Update Progress & Question Text
  progressEl.textContent = `STAGE ${String(currentQuestion + 1).padStart(2, '0')}/${String(quizData.length).padStart(2, '0')}`;
  questionEl.textContent = q.question;

  // Bersihkan Opsi Lama secara efisien
  optionsEl.replaceChildren();

  // Render Opsi Baru
  q.options.forEach((optionText, index) => {
    const btn = document.createElement('button');
    btn.textContent = optionText;
    btn.classList.add('option-btn');
    btn.dataset.index = index;
    optionsEl.append(btn);
  });

  // Sembunyikan Tombol Next saat Soal Baru Tampil
  nextBtn.classList.add('hidden');
}

// 5. Event Delegation pada Container Opsi Jawaban
optionsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.option-btn');
  if (!btn) return;

  const selectedIndex = Number(btn.dataset.index);
  const correctIndex = quizData[currentQuestion].correct;

  // Disable semua tombol agar tidak bisa klik ulang
  const allButtons = optionsEl.querySelectorAll('.option-btn');
  allButtons.forEach(button => {
    button.disabled = true;
  });

  // Evaluasi Jawaban & Beri Feedback Visual
  if (selectedIndex === correctIndex) {
    btn.classList.add('correct');
    score++;
  } else {
    btn.classList.add('wrong');
    const correctBtn = optionsEl.querySelector(`[data-index="${correctIndex}"]`);
    if (correctBtn) correctBtn.classList.add('correct');
  }

  nextBtn.classList.remove('hidden');
});

// 6. Navigasi Next Button
nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    renderQuestion();
  } else {
    showResult();
  }
});

// 7. Tampilkan Hasil & Simpan High Score ke LocalStorage
function showResult() {
  const total = quizData.length;
  const percentage = Math.round((score / total) * 100);

  scoreEl.textContent = `${score} / ${total} (${percentage}%)`;

  const savedHighScore = Number(localStorage.getItem('quizHighScore')) || 0;

  if (percentage > savedHighScore) {
    localStorage.setItem('quizHighScore', percentage);
    highScoreEl.textContent = `${percentage}% 🎉 Record Baru!`;
  } else {
    highScoreEl.textContent = `${savedHighScore}%`;
  }

  // Tampilkan screen hasil
  quizContentEl.classList.add('hidden');
  resultEl.classList.remove('hidden');
}

// 8. Restart Quiz
restartBtn.addEventListener('click', () => {
  currentQuestion = 0;
  score = 0;

  resultEl.classList.add('hidden');
  quizContentEl.classList.remove('hidden');

  renderQuestion();
});

// Inisialisasi Aplikasi
renderQuestion();