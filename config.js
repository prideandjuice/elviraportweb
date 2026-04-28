// ============================================================
//  ✏️  EDIT BAGIAN INI UNTUK PERSONALISASI PORTFOLIO KAMU
// ============================================================
const CONFIG = {
  name: "Elvira Rahmadewi",
  logo: "assets/elvira.png", // ganti dengan nama file logo kamu di folder assets
  roles: ["Web Developer", "UI/UX Designer", "Digital Marketing"],
  bio: "A junior developer with a background in information systems major and hands-on experience in digital marketing. I enjoy building websites while also understanding the user and business side behind digital products. Currently focused on web development & UI/UX also mobile development",
  photo: "assets/potoku.jpg",
  cvLink: "#",
  biod: "Hi, I'm Elvira! I am an Information Systems student with a deep fascination for how technology can solve real-world problems. A curious and adaptable person who always looking for opportunities to develop myself and love to explore new challenges. Fun fact : I love meeting new peeps and adapting quickly & enjoy working in fast-pace environment",


  stats: [
    { label: "Projects Done",    value: "7" },
    { label: "Years Experience", value: "3"  },
  ],

  socials: [
    { icon: "fab fa-github",    url: "https://github.com/prideandjuice",    label: "GitHub"    },
    { icon: "fab fa-linkedin",  url: "https://www.linkedin.com/in/elvira-rhmadewi/",  label: "LinkedIn"  },
    { icon: "fab fa-instagram", url: "https://www.instagram.com/elviraaraaa/", label: "Instagram" },
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  // Wajib: title, desc, category ("it"/"nonit"), tags, link
  // Opsional: cover (URL gambar), year, role, duration, highlights (array), gallery (array URL)
  projects: [
    {
      title: "Mochi Time - Dessert Catalog Website",
      desc: "Sebuah projek yang dikembangkan untuk tugas akhir 'belajar Dasar Pemrograman Web' dari Dicoding, Website ini merupakan landing page katalog produk makanan (mochi) yang dirancang untuk memberikan pengalaman visual yang menarik sekaligus fungsional bagi calon pelanggan.",
      category: "it",
      tags: ["HTML", "CSS", "Javascript"],
      link: "https://mochi-time.vercel.app/",
      cover: "assets/mochi time.png",           // URL gambar cover, kosongkan jika tidak ada
      year: "2024",
      role: "Full-stack Developer",
      duration: "1 Bulan",
      highlights: [
        "Membangun REST API backend dengan Node.js & SQLite",
        "Membuat halaman admin untuk manajemen data",
        "Desain UI frontend dengan CSS Custom",
        "Integrasi database lokal",
      ],
      gallery: [],         // Array URL gambar tambahan
    },
    {
      title: "SKAP (Sistem Keamanan Anak & Perempuan) - UI Design",
      desc: "Aplikasi keamanan wanita yang lengkap dengan fitur SOS darurat, berita seputar wanita, dan pelaporan langsung ke layanan bantuan hukum wanita.",
      category: "it",
      tags: ["Figma"],
      link: "#",
      cover: "assets/skap.png",
      year: "2024",
      role: "UI Designer",
      duration: "2 minggu",
      highlights: [
  "Desain fitur SOS darurat dengan UI yang mudah diakses saat panik",
  "Halaman berita seputar isu dan keamanan wanita",
  "Alur pelaporan langsung ke layanan bantuan hukum wanita",
  "Riset UX berbasis kebutuhan pengguna wanita",
],
      gallery: [],
    },
    {
      title: "Generation Girl Medan - Company profile website",
      desc: "Website company profile untuk organisasi Generation Girl Medan, dibangun menggunakan HTML, CSS, dan JavaScript dengan tampilan responsif untuk mobile dan desktop.",
      category: "it",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "https://prideandjuice.github.io/Generation-Girl-Medan/index.html#profile",
      cover: "assets/genG.png",
      year: "2025",
      role: "Web Developer",
      duration: "4 hari",
      highlights: [
  "Mengembangkan website company profile sebagai media informasi organisasi",
  "Merancang tampilan responsif yang optimal di perangkat mobile maupun desktop",
  "Dibangun menggunakan HTML, CSS, dan JavaScript murni tanpa framework",
],

      gallery: [],
    },
    {
      title: "Shiny day Out - Event with Emina",
      desc: "Kolaborasi Emina x Generation Girl Medan — event edukatif seputar self-care dan teknologi. Sebagai Head of Marketing & Design, aku mengelola branding, strategi komunikasi, dan engagement peserta dari awal hingga akhir acara.",
      category: "nonit",
      tags: ["Event Management", "Marketing", "Branding", "Design", "Communication"],
      link: "https://www.instagram.com/reel/DMt3GYsJiON/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      cover: "assets/emina.png",
      year: "2025",
      role: "Head of Marketing & Design",
      duration: "1 hari",
      highlights: [
  "Memimpin keseluruhan branding dan strategi komunikasi acara",
  "Mengelola engagement peserta sebagai contact person utama",
  "Mengkoordinasikan kelas beauty, workshop DIY charm, dan sesi web dasar",
  "Menyeimbangkan tanggung jawab kreatif dan komunikasi peserta",
],

      gallery: [
        "assets/emina.png",
  "assets/emina2.jpeg",
  "assets/posteremina.png",
      ],
    },
    {
      title: "Sarapan Pagi MasBro - Website",
      desc: "Website pemesanan makanan dengan fitur search, cart, dan promo. Didesain responsif dengan fokus pada kemudahan dan kenyamanan pengguna.",
      category: "it",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://prideandjuice.github.io/Sarapan-Pagi-Medan/",
      cover: "assets/sarpagg.png",
      year: "2025",
      role: "Web Developer",
      duration: "2 Minggu",
      highlights: [
        "Membangun fitur search menu makanan secara real-time",
  "Mengimplementasikan sistem cart untuk pemesanan",
  "Menampilkan promo dengan desain yang menarik perhatian",
  "Merancang UI responsif yang nyaman di mobile maupun desktop",
      ],
      gallery: [],
    },
    {
      title: "Money Tracker App - Mobile",
     desc: "Aplikasi pencatatan keuangan sederhana berbasis mobile menggunakan Apache Cordova, dengan fitur tracking pemasukan dan pengeluaran yang intuitif.",
      category: "it",
      tags: ["Apache Cordova", "HTML", "CSS", "JavaScript"],
      link: "#",
      cover: "assets/money (2).png",
      year: "2026",
      role: "Mobile Developer",
      duration: "1 minggu",
      highlights: [
         "Membangun aplikasi mobile cross-platform menggunakan Apache Cordova",
  "Merancang fitur tracking pemasukan dan pengeluaran harian",
  "Mendesain user flow yang intuitif untuk kemudahan pencatatan",
  "Menyimpan data keuangan secara lokal di perangkat pengguna",
      ],
      gallery: [],
    },
  {
      title: "Electives: Goes to School – SMA Santo Thomas 1 Medan",
    desc: "Berperan sebagai MC, organizer, dan head of marketing & design dalam program Electives: Goes to School bersama Generation Girl Medan di SMA Santo Thomas 1 Medan. Memandu jalannya acara, menginisiasi konsep desain materi visual, serta memimpin tim kreatif untuk memastikan konsistensi branding acara.",
      category: "nonit",
      tags: ["MC", "Event Organizing", "Branding", "Design", "Public Speaking"],
      link: "#",
      cover: "assets/egs.JPG",
      year: "2025",
      role: "Head of Marketing & Design",
      duration: "1 bulan",
      highlights: [
  "Menjadi MC bersama co-host dalam memandu jalannya acara",
  "Menginisiasi dan mengarahkan konsep desain MC card, lanyard, poster, dan ID card panitia",
  "Memimpin tim kreatif dan memberikan arahan desain kepada volunteer",
  "Memastikan konsistensi visual dan branding sesuai tema acara",
],
      gallery: [
         "assets/mc-cue-card.png",
  "assets/mc.png",
      ],
    },
  ],

  skills: [
    { name: "HTML",            level: 85, icon: "fab fa-html5"        },
    { name: "CSS",             level: 80, icon: "fab fa-css3-alt"     },
    { name: "JavaScript",      level: 75, icon: "fab fa-js"           },
    { name: "Figma",           level: 85, icon: "fab fa-figma"        },
    { name: "Responsive Design",level: 80, icon: "fas fa-mobile-alt"  },
    { name: "Apache Cordova",  level: 60, icon: "fas fa-mobile"       },
    { name: "Branding & Design",level: 82, icon: "fas fa-pen-nib"     },
    { name: "Event Management",level: 78, icon: "fas fa-calendar-alt" },
    { name: "Marketing",       level: 75, icon: "fas fa-bullhorn"     },
    { name: "Public Speaking", level: 72, icon: "fas fa-microphone"   },
  ],

  experience: [
    {
      role: "Digital Marketing Operation intern",
      company: "PT. Telkom Indonesia, Tbk. (Regional 1) ",
      period: "Oktober 2025 - Februari 2026",
     desc: "Mengelola kampanye komunikasi pemasaran terintegrasi melalui koordinasi 50 KOL, mengoptimalkan performa Meta ODP, memproduksi konten Twitter harian, serta mengelola engagement komunitas online untuk memperkuat brand storytelling dan visibilitas.",
    },
    {
      role: "Head of Marketing & Design ",
      company: "Generation Girl Medan",
      period: "Februari - Agustus 2025",
      desc: "Mengelola pemasaran dan desain visual workshop, mendesain materi promosi dan aset branding digital, mengoptimalkan jangkauan acara melalui strategi marketing, serta berkolaborasi dengan tim untuk memastikan konsistensi pesan.",
    },
    
  ],
};
