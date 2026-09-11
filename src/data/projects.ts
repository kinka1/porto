import type { Project } from "@/lib/types";

/**
 * Portfolio projects. Adding a project = adding an entry here; the listing,
 * home page, case-study route, and sitemap all derive from this array.
 *
 * Entries were seeded from the public repositories at github.com/kinka1.
 * Every description is grounded in that repo's code and docs; fields that
 * could not be verified are marked TODO. Never invent metrics — leave
 * `results` empty when nothing measurable exists.
 *
 * Prose fields carry both languages (`{ en, id }`); product names, technology
 * names, and slugs are shared. Screenshots live in /public/projects/<slug>/.
 */

const GH = "https://github.com/kinka1";

export const projects: Project[] = [
  {
    id: "e-inspector",
    slug: "e-inspector-machine-inspection",
    name: "e-Inspector — Machine Inspection System",
    summary: {
      en: "Mobile and web system for reporting factory machine inspections: operators run check sheets from a Flutter app, supervisors manage machines and review results on the web.",
      id: "Sistem mobile dan web untuk pelaporan inspeksi mesin pabrik: operator menjalankan check sheet lewat aplikasi Flutter, supervisor mengelola mesin dan meninjau hasilnya lewat web.",
    },
    description: {
      en: "e-Inspector digitises machine-inspection reporting for a manufacturing plant. Operators open a machine's check sheet by scanning its QR/barcode in the mobile app and record a result for every inspection item; the web application manages business units, machines, inspection items, and check sheets, and gives supervisors a place to review results. Built during a software developer internship at Panasonic.",
      id: "e-Inspector mendigitalkan pelaporan inspeksi mesin di sebuah pabrik manufaktur. Operator membuka check sheet sebuah mesin dengan memindai QR/barcode-nya lewat aplikasi mobile, lalu mencatat hasil untuk setiap item inspeksi; aplikasi web mengelola business unit, mesin, item inspeksi, dan check sheet, sekaligus menjadi tempat supervisor meninjau hasil. Dibangun saat magang sebagai software developer di Panasonic.",
    },
    role: {
      en: "Full-stack & Mobile Developer",
      id: "Full-stack & Mobile Developer",
    },
    contribution: {
      en: "I built both halves of the system: the Flutter mobile app (navigation, scanning, check-sheet forms, API integration) and the ASP.NET Core 8 web application, including its layered backend, SQL Server data access, authentication, and the management and results screens.",
      id: "Saya membangun kedua sisi sistem ini: aplikasi mobile Flutter (navigasi, pemindaian, formulir check sheet, integrasi API) dan aplikasi web ASP.NET Core 8, termasuk backend berlapisnya, akses data SQL Server, autentikasi, serta halaman pengelolaan dan hasil inspeksi.",
    },
    category: "Full-Stack",
    technologies: [
      "Flutter",
      "Dart",
      "flutter_bloc",
      "auto_route",
      "Dio",
      "ASP.NET Core 8",
      "C#",
      "SQL Server",
      "BCrypt",
    ],
    problem: {
      en: "Inspections were recorded manually, so supervisors had no timely visibility into machine condition, and inspection history was hard to search, audit, or compare over time.",
      id: "Inspeksi dicatat secara manual, sehingga supervisor tidak memiliki gambaran kondisi mesin secara tepat waktu, dan riwayat inspeksi sulit dicari, diaudit, maupun dibandingkan dari waktu ke waktu.",
    },
    solution: {
      en: "A mobile app for the inspection itself and a web application for everything around it. The app scans the machine, loads its check sheet, and submits a result per item; the web app holds the master data (business units, machines, inspection items, check sheets) and presents results and detail views for review.",
      id: "Aplikasi mobile untuk proses inspeksinya sendiri, dan aplikasi web untuk semua hal di sekitarnya. Aplikasi memindai mesin, memuat check sheet-nya, dan mengirim hasil per item; aplikasi web menyimpan data master (business unit, mesin, item inspeksi, check sheet) serta menampilkan hasil dan tampilan detail untuk ditinjau.",
    },
    features: {
      en: [
        "QR/barcode scanning to open the correct machine check sheet",
        "Check-sheet forms with a result per inspection item and gauge-style status display",
        "Master data management for business units, machines, and inspection items",
        "Check-sheet composition: assign inspection items (with reference images) to machines",
        "Inspection results and detail views for supervisors, filterable by check sheet",
        "Role-based login with cookie authentication and hashed passwords",
      ],
      id: [
        "Pemindaian QR/barcode untuk membuka check sheet mesin yang tepat",
        "Formulir check sheet dengan hasil per item inspeksi dan tampilan status bergaya gauge",
        "Pengelolaan data master untuk business unit, mesin, dan item inspeksi",
        "Penyusunan check sheet: menetapkan item inspeksi (beserta gambar acuan) ke setiap mesin",
        "Hasil inspeksi dan tampilan detail untuk supervisor, dapat difilter per check sheet",
        "Login berbasis peran dengan autentikasi cookie dan kata sandi yang di-hash",
      ],
    },
    architecture: {
      en: [
        "Mobile: Flutter with flutter_bloc for state, auto_route for typed navigation, freezed/json_serializable models, Dio for the HTTP layer, and environment config via flutter_dotenv",
        "Web: ASP.NET Core 8 MVC organised into Domain (entities, repository interfaces), Application (DTOs, services, facades), and Infrastructure (SQL Server repositories, auth and image helpers)",
        "Repository pattern over Microsoft.Data.SqlClient, with all services registered through the built-in DI container",
        "Cookie-based authentication with BCrypt password hashing and a current-user helper for authorisation",
      ],
      id: [
        "Mobile: Flutter dengan flutter_bloc untuk state, auto_route untuk navigasi bertipe, model freezed/json_serializable, Dio sebagai lapisan HTTP, dan konfigurasi environment lewat flutter_dotenv",
        "Web: ASP.NET Core 8 MVC yang disusun ke dalam Domain (entitas, antarmuka repository), Application (DTO, service, facade), dan Infrastructure (repository SQL Server, helper autentikasi dan gambar)",
        "Pola repository di atas Microsoft.Data.SqlClient, dengan seluruh service terdaftar melalui DI container bawaan",
        "Autentikasi berbasis cookie dengan hashing kata sandi BCrypt dan helper current-user untuk otorisasi",
      ],
    },
    // TODO: add a real technical challenge and how you solved it — the section is hidden while this is empty.
    challenges: { en: [], id: [] },
    results: { en: [], id: [] }, // TODO: Add measurable project impact if any exists.
    screenshots: [],
    repositories: [
      {
        label: { en: "Mobile App (Flutter)", id: "Aplikasi Mobile (Flutter)" },
        url: `${GH}/inspector-flutter`,
      },
      {
        label: { en: "Web App (ASP.NET Core)", id: "Aplikasi Web (ASP.NET Core)" },
        url: `${GH}/webInspection`,
      },
    ],
    status: "Completed",
    year: 2025,
    featured: true,
  },
  {
    id: "fnb-pos-platform",
    slug: "fnb-pos-platform",
    name: "F&B Point-of-Sale & Operations Platform",
    summary: {
      en: "Multi-store restaurant/café platform: cashier POS, QR table ordering for customers, inventory with recipes and stock opname, employees and attendance, and QRIS / e-wallet payments.",
      id: "Platform restoran/kafe multi-outlet: POS kasir, pemesanan pelanggan lewat QR meja, inventori dengan resep dan stock opname, karyawan dan absensi, serta pembayaran QRIS / e-wallet.",
    },
    description: {
      en: "A back-office and point-of-sale platform for food-and-beverage businesses. A React admin and cashier app covers the POS, orders, products and modifiers, stock, purchasing, employees, and revenue reporting; a public page lets customers order from a table's QR code and follow their payment status. A Laravel 12 REST API backs both, with per-store access control, cashier sessions, stock deduction from recipes, and payment-gateway integrations.",
      id: "Platform back-office sekaligus point-of-sale untuk usaha makanan dan minuman. Aplikasi admin dan kasir berbasis React mencakup POS, order, produk dan modifier, stok, pembelian, karyawan, dan laporan pendapatan; sebuah halaman publik memungkinkan pelanggan memesan dari QR meja dan memantau status pembayarannya. Keduanya ditopang REST API Laravel 12 dengan kontrol akses per outlet, sesi kasir, pengurangan stok berdasarkan resep, dan integrasi payment gateway.",
    },
    // TODO: confirm — both repositories are under your account; change to "Frontend Developer" if you only built the frontend.
    role: {
      en: "Full-stack Developer",
      id: "Full-stack Developer",
    },
    contribution: {
      en: "I built the React + TypeScript frontend (admin dashboard, cashier POS, order management, product / category / stock / employee CRUD, reports, and the customer QR-ordering page) and the Laravel REST API behind it, including the POS order services, stock availability and deduction, and the BNI QRIS, Xendit, and Midtrans payment integrations.",
      id: "Saya membangun frontend React + TypeScript (dashboard admin, POS kasir, pengelolaan order, CRUD produk / kategori / stok / karyawan, laporan, dan halaman pemesanan QR untuk pelanggan) serta REST API Laravel di belakangnya, termasuk service order POS, ketersediaan dan pengurangan stok, dan integrasi pembayaran BNI QRIS, Xendit, serta Midtrans.",
    },
    category: "Full-Stack",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "TanStack Query",
      "Axios",
      "Laravel 12",
      "PHP",
      "Laravel Sanctum",
      "L5 Swagger",
      "BNI QRIS",
      "Xendit",
      "Midtrans",
    ],
    problem: {
      en: "Running a café or restaurant across several outlets means juggling separate tools for the cashier, stock, purchasing, staff, and payments — with no single view of orders, ingredient usage, or revenue per store.",
      id: "Mengelola kafe atau restoran dengan beberapa outlet berarti menggunakan banyak alat terpisah untuk kasir, stok, pembelian, karyawan, dan pembayaran — tanpa satu pun tampilan menyeluruh atas order, pemakaian bahan, maupun pendapatan per outlet.",
    },
    solution: {
      en: "One platform with a store-scoped API. Cashiers ring up dine-in or takeaway orders with modifiers and discounts inside a cashier session; customers order from a table QR and pay by cash or QRIS; stock is deducted from recipes automatically and reconciled through opname and adjustments; admins manage products, suppliers, purchase orders, employees, attendance, and revenue reports per store.",
      id: "Satu platform dengan API yang dibatasi per outlet. Kasir mencatat order dine-in maupun takeaway lengkap dengan modifier dan diskon di dalam sebuah sesi kasir; pelanggan memesan lewat QR meja dan membayar tunai atau QRIS; stok berkurang otomatis berdasarkan resep lalu direkonsiliasi lewat opname dan penyesuaian; admin mengelola produk, pemasok, purchase order, karyawan, absensi, dan laporan pendapatan per outlet.",
    },
    features: {
      en: [
        "Cashier POS with category filters, SKU search, item modifiers and notes, discounts, cash change calculation, and cashier sessions with cash movements",
        "Public QR table ordering with a live payment-status page and email receipts",
        "Payments: cash, BNI QRIS, Xendit, and Midtrans with webhook confirmation",
        "Inventory: stock transactions, stock cards, low-stock alerts, opname, adjustments, product batches, and ingredient / menu import",
        "Recipes linking menu items to ingredients, with stock availability checks and automatic deduction on order",
        "Purchasing: suppliers and purchase orders",
        "Employees, roles, per-store access, and attendance clock-in / clock-out",
        "Admin dashboard and revenue reports with Excel export",
        "Audit trail on data changes",
      ],
      id: [
        "POS kasir dengan filter kategori, pencarian SKU, modifier dan catatan per item, diskon, perhitungan kembalian, serta sesi kasir beserta pergerakan kasnya",
        "Pemesanan publik lewat QR meja dengan halaman status pembayaran langsung dan struk via email",
        "Pembayaran: tunai, BNI QRIS, Xendit, dan Midtrans dengan konfirmasi lewat webhook",
        "Inventori: transaksi stok, kartu stok, peringatan stok menipis, opname, penyesuaian, batch produk, serta impor bahan / menu",
        "Resep yang menghubungkan item menu dengan bahan, disertai pengecekan ketersediaan stok dan pengurangan otomatis saat order",
        "Pembelian: pemasok dan purchase order",
        "Karyawan, peran, akses per outlet, dan absensi clock-in / clock-out",
        "Dashboard admin dan laporan pendapatan dengan ekspor Excel",
        "Audit trail untuk setiap perubahan data",
      ],
    },
    architecture: {
      en: [
        "Frontend: React 19 + TypeScript on Vite, React Router for pages, TanStack Query for server state with cache invalidation after mutations, and a typed Axios client with all endpoints defined in one module",
        "Backend: Laravel 12 REST API with Sanctum token auth, an EnsureStoreAccess middleware scoping each request to the caller's current store, and OpenAPI docs via L5 Swagger",
        "Domain services under App\\Services\\Pos (cashier and QR order creation, order totals, stock availability and deduction, receipt email) keep controllers thin",
        "One payment service per provider (BNI QRIS, Xendit, Midtrans) plus per-provider webhook controllers; a public payment-status endpoint is polled by the customer page",
        "Eloquent models for orders, carts, modifiers, payments, stock, purchasing, recipes, employees, attendance, stores, and audit trail",
      ],
      id: [
        "Frontend: React 19 + TypeScript di atas Vite, React Router untuk halaman, TanStack Query untuk server state dengan invalidasi cache setelah mutasi, dan klien Axios bertipe dengan seluruh endpoint terdefinisi dalam satu modul",
        "Backend: REST API Laravel 12 dengan autentikasi token Sanctum, middleware EnsureStoreAccess yang membatasi setiap request pada outlet aktif pemanggil, dan dokumentasi OpenAPI lewat L5 Swagger",
        "Service domain di App\\Services\\Pos (pembuatan order kasir dan QR, perhitungan total, ketersediaan dan pengurangan stok, email struk) menjaga controller tetap ramping",
        "Satu service pembayaran per penyedia (BNI QRIS, Xendit, Midtrans) beserta controller webhook masing-masing; endpoint status pembayaran publik di-polling oleh halaman pelanggan",
        "Model Eloquent untuk order, keranjang, modifier, pembayaran, stok, pembelian, resep, karyawan, absensi, outlet, dan audit trail",
      ],
    },
    challenges: {
      en: [
        {
          problem:
            "Orders can be paid by cash at the counter or by BNI QRIS, Xendit, or Midtrans from the customer's phone — three providers with different APIs, each confirming asynchronously.",
          solution:
            "Isolated each provider behind its own payment service and webhook controller so the order flow never depends on provider specifics. Webhooks update the order's payment status, and the customer page polls a public status endpoint by order number, so a customer sees confirmation without the frontend ever talking to a gateway directly.",
        },
      ],
      id: [
        {
          problem:
            "Order dapat dibayar tunai di kasir atau lewat BNI QRIS, Xendit, dan Midtrans dari ponsel pelanggan — tiga penyedia dengan API berbeda yang masing-masing mengonfirmasi secara asinkron.",
          solution:
            "Setiap penyedia diisolasi di balik service pembayaran dan controller webhook-nya sendiri, sehingga alur order tidak pernah bergantung pada detail penyedia tertentu. Webhook memperbarui status pembayaran order, dan halaman pelanggan melakukan polling ke endpoint status publik berdasarkan nomor order, sehingga pelanggan melihat konfirmasi tanpa frontend perlu berkomunikasi langsung dengan gateway.",
        },
      ],
    },
    results: { en: [], id: [] }, // TODO: Add measurable impact if any exists (stores live, orders/day, …).
    screenshots: [],
    repositories: [
      {
        label: { en: "Backend API (Laravel)", id: "API Backend (Laravel)" },
        url: `${GH}/be-cm`,
      },
      {
        label: { en: "Frontend (React)", id: "Frontend (React)" },
        url: `${GH}/fe-cm`,
      },
    ],
    status: "In Development",
    year: 2026,
    featured: true,
  },
  {
    id: "gram-bacteria-classification",
    slug: "gram-bacteria-classification",
    name: "Gram Bacteria Classification System",
    summary: {
      en: "Deep-learning system that classifies Gram-positive and Gram-negative bacteria from microscopy images, served through a FastAPI backend with patient, doctor, and analysis workflows.",
      id: "Sistem deep learning yang mengklasifikasikan bakteri Gram-positif dan Gram-negatif dari citra mikroskopis, disajikan lewat backend FastAPI dengan alur kerja pasien, dokter, dan analisis.",
    },
    description: {
      en: "Final-year project: an end-to-end system for classifying bacteria in Gram-stained microscopy images. Eight CNN architectures were trained and compared (custom CNN, EfficientNet-B0/B3, ResNet-50/101, VGG-16/19, DenseNet-121) across scenarios with and without augmentation, transfer learning, and fine-tuning. The best model is served by a FastAPI API with authentication, patient records, doctor and admin roles, analysis history, and reports, backed by PostgreSQL.",
      id: "Proyek akhir: sistem end-to-end untuk mengklasifikasikan bakteri pada citra mikroskopis hasil pewarnaan Gram. Delapan arsitektur CNN dilatih dan dibandingkan (CNN kustom, EfficientNet-B0/B3, ResNet-50/101, VGG-16/19, DenseNet-121) pada berbagai skenario dengan dan tanpa augmentasi, transfer learning, serta fine-tuning. Model terbaik disajikan melalui API FastAPI dengan autentikasi, rekam pasien, peran dokter dan admin, riwayat analisis, dan laporan, dengan PostgreSQL sebagai basis datanya.",
    },
    role: {
      en: "Developer & Researcher",
      id: "Developer & Peneliti",
    },
    contribution: {
      en: "I did the whole project: dataset preparation from two annotated sources, the experiment pipeline and model comparison, the FastAPI service and PostgreSQL schema, the role-based API (auth, patients, doctors, admin, reports), and a lightweight web frontend.",
      id: "Saya mengerjakan keseluruhan proyek: penyiapan dataset dari dua sumber beranotasi, pipeline eksperimen dan perbandingan model, layanan FastAPI dan skema PostgreSQL, API berbasis peran (autentikasi, pasien, dokter, admin, laporan), serta frontend web ringan.",
    },
    category: "AI / Machine Learning",
    technologies: [
      "Python",
      "PyTorch",
      "torchvision",
      "YOLO",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker Compose",
    ],
    problem: {
      en: "Gram staining is a fundamental, low-cost microbiology test that guides initial antibiotic choice, but reading it manually needs trained staff, is slow, and is prone to inter-observer error — especially in resource-limited labs where it may be the only microbiology test available.",
      id: "Pewarnaan Gram adalah uji mikrobiologi mendasar dan murah yang menjadi dasar pemilihan antibiotik awal, tetapi pembacaannya secara manual menuntut tenaga terlatih, memakan waktu, dan rentan perbedaan penilaian antarpengamat — terutama di laboratorium dengan sumber daya terbatas, tempat uji ini mungkin satu-satunya yang tersedia.",
    },
    solution: {
      en: "A classifier trained on annotated microscopy images (COCO- and LabelMe-format datasets at 640×640), selected by comparing architectures and training strategies on accuracy, precision, recall, F1, Cohen's kappa, and AUC-ROC. It is wrapped in an API so a doctor can upload an image for a patient, get a Gram-positive / Gram-negative prediction, and keep the result in the patient's analysis history.",
      id: "Model klasifikasi yang dilatih pada citra mikroskopis beranotasi (dataset format COCO dan LabelMe beresolusi 640×640), dipilih dengan membandingkan arsitektur dan strategi pelatihan berdasarkan akurasi, presisi, recall, F1, Cohen's kappa, dan AUC-ROC. Model tersebut dibungkus dalam API sehingga dokter dapat mengunggah citra untuk seorang pasien, memperoleh prediksi Gram-positif / Gram-negatif, dan menyimpan hasilnya dalam riwayat analisis pasien.",
    },
    features: {
      en: [
        "Image upload and Gram-positive / Gram-negative prediction",
        "Patient records and per-patient analysis history",
        "Doctor and admin roles with token-based auth, password reset, and an admin area for managing AI models",
        "Reports endpoints and a simple web frontend",
        "Reproducible experiment scripts per scenario and architecture, with metrics saved per run",
        "Interactive API docs via OpenAPI (Swagger / ReDoc)",
      ],
      id: [
        "Unggah citra dan prediksi Gram-positif / Gram-negatif",
        "Rekam pasien dan riwayat analisis per pasien",
        "Peran dokter dan admin dengan autentikasi berbasis token, reset kata sandi, dan area admin untuk mengelola model AI",
        "Endpoint laporan dan frontend web sederhana",
        "Skrip eksperimen yang dapat direproduksi untuk tiap skenario dan arsitektur, dengan metrik tersimpan per proses pelatihan",
        "Dokumentasi API interaktif lewat OpenAPI (Swagger / ReDoc)",
      ],
    },
    architecture: {
      en: [
        "PyTorch + torchvision models behind a shared architecture module (SimpleCNN, EfficientNet-B0/B3, ResNet-50/101, VGG-16/19, DenseNet-121); a YOLO model is trained alongside the classifiers",
        "Experiment scenarios comparing augmentation on/off, transfer learning, and fine-tuning depth; the best run is selected by validation accuracy and reported on a held-out test split (70 / 15 / 15)",
        "FastAPI service with an access-token middleware, routers for auth, patients, doctors, analysis, admin, and reports, and Pydantic schemas",
        "PostgreSQL via SQLAlchemy, run with Docker Compose, with migration scripts for schema changes",
        "Model weights and a metrics summary stored with the service, so the served model is traceable to its evaluation",
      ],
      id: [
        "Model PyTorch + torchvision di balik satu modul arsitektur bersama (SimpleCNN, EfficientNet-B0/B3, ResNet-50/101, VGG-16/19, DenseNet-121); sebuah model YOLO dilatih berdampingan dengan model klasifikasi",
        "Skenario eksperimen yang membandingkan augmentasi aktif/nonaktif, transfer learning, dan kedalaman fine-tuning; proses terbaik dipilih berdasarkan akurasi validasi dan dilaporkan pada data uji terpisah (70 / 15 / 15)",
        "Layanan FastAPI dengan middleware access token, router untuk autentikasi, pasien, dokter, analisis, admin, dan laporan, serta skema Pydantic",
        "PostgreSQL lewat SQLAlchemy, dijalankan dengan Docker Compose, disertai skrip migrasi untuk perubahan skema",
        "Bobot model dan ringkasan metrik disimpan bersama layanan, sehingga model yang disajikan dapat ditelusuri ke hasil evaluasinya",
      ],
    },
    challenges: {
      en: [
        {
          problem:
            "The data is imbalanced (roughly 3.5 : 1 between classes in the test split) and comes from two datasets with different annotation formats and imaging conditions.",
          solution:
            "Unified both sources into one labelled set, then ran a scenario matrix instead of a single training run — augmentation on/off, from-scratch vs. transfer learning, and how many layers to fine-tune — evaluating with class-aware metrics (precision, recall, F1, kappa, AUC-ROC) rather than accuracy alone. The selected model is ResNet-50 with transfer learning and the last five layers fine-tuned.",
        },
      ],
      id: [
        {
          problem:
            "Data tidak seimbang (sekitar 3,5 : 1 antarkelas pada data uji) dan berasal dari dua dataset dengan format anotasi serta kondisi pencitraan yang berbeda.",
          solution:
            "Kedua sumber disatukan menjadi satu himpunan berlabel, lalu dijalankan matriks skenario alih-alih satu kali pelatihan — augmentasi aktif/nonaktif, pelatihan dari awal vs transfer learning, dan berapa lapis yang di-fine-tune — dengan evaluasi memakai metrik yang peka kelas (presisi, recall, F1, kappa, AUC-ROC), bukan akurasi semata. Model yang dipilih adalah ResNet-50 dengan transfer learning dan lima lapis terakhir di-fine-tune.",
        },
      ],
    },
    results: {
      en: [
        "Best model (ResNet-50, transfer learning + fine-tuning): 93.9% test accuracy, 94.1% precision, 93.9% recall, 0.939 F1, 0.829 Cohen's kappa, and 0.979 AUC-ROC on 1,774 held-out test images",
        "Exceeded the project's 90% accuracy target; best validation accuracy 95.2% at epoch 14",
      ],
      id: [
        "Model terbaik (ResNet-50, transfer learning + fine-tuning): akurasi uji 93,9%, presisi 94,1%, recall 93,9%, F1 0,939, Cohen's kappa 0,829, dan AUC-ROC 0,979 pada 1.774 citra uji terpisah",
        "Melampaui target akurasi 90% yang ditetapkan proyek; akurasi validasi terbaik 95,2% pada epoch 14",
      ],
    },
    screenshots: [],
    githubUrl: `${GH}/repo_model_AI`,
    status: "Completed",
    year: 2026,
    featured: true,
  },
  {
    id: "fareno-mitra-nusantara-profile",
    slug: "fareno-mitra-nusantara-company-profile",
    name: "Fareno Mitra Nusantara — Company Profile",
    summary: {
      en: "Company profile website for a construction and procurement firm: services, construction, procurement, about, and contact pages, deployed on GitHub Pages under a custom domain.",
      id: "Situs company profile untuk perusahaan konstruksi dan pengadaan: halaman layanan, konstruksi, pengadaan, tentang, dan kontak, yang di-deploy di GitHub Pages dengan domain kustom.",
    },
    description: {
      en: "A static multi-page company profile for Fareno Mitra Nusantara covering the company's services, construction work, procurement offering, an about page, and a contact page. Built with plain HTML, CSS, and JavaScript on Bootstrap and deployed via GitHub Pages with a custom domain.",
      id: "Company profile statis multi-halaman untuk Fareno Mitra Nusantara yang mencakup layanan perusahaan, pekerjaan konstruksi, penawaran pengadaan, halaman tentang, dan halaman kontak. Dibangun dengan HTML, CSS, dan JavaScript biasa di atas Bootstrap, lalu di-deploy lewat GitHub Pages dengan domain kustom.",
    },
    role: {
      en: "Web Developer",
      id: "Web Developer",
    },
    contribution: {
      en: "I built and deployed the whole site: page structure and content layout, responsive styling on Bootstrap, and GitHub Pages hosting with the custom domain.",
      id: "Saya membangun dan men-deploy keseluruhan situs: struktur halaman dan tata letak konten, penataan responsif dengan Bootstrap, serta hosting GitHub Pages dengan domain kustom.",
    },
    category: "Web Application",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Font Awesome", "GitHub Pages"],
    problem: {
      en: "The company needed a simple, professional web presence that explains what it does and how to get in touch.",
      id: "Perusahaan membutuhkan kehadiran web yang sederhana dan profesional untuk menjelaskan bidang usahanya dan cara menghubunginya.",
    },
    solution: {
      en: "A fast static site with one page per offering (services, construction, procurement), plus about and contact, served straight from GitHub Pages.",
      id: "Situs statis yang cepat dengan satu halaman untuk tiap penawaran (layanan, konstruksi, pengadaan), ditambah halaman tentang dan kontak, disajikan langsung dari GitHub Pages.",
    },
    features: {
      en: [
        "Home, About, Services, Construction, Procurement, and Contact pages",
        "Responsive layout on Bootstrap",
        "Custom domain via GitHub Pages",
      ],
      id: [
        "Halaman Beranda, Tentang, Layanan, Konstruksi, Pengadaan, dan Kontak",
        "Tata letak responsif dengan Bootstrap",
        "Domain kustom lewat GitHub Pages",
      ],
    },
    architecture: {
      en: [
        "Static HTML / CSS / JS with no build step",
        "GitHub Pages with a CNAME custom domain",
      ],
      id: [
        "HTML / CSS / JS statis tanpa proses build",
        "GitHub Pages dengan domain kustom melalui CNAME",
      ],
    },
    challenges: { en: [], id: [] },
    results: { en: [], id: [] },
    screenshots: [],
    githubUrl: `${GH}/web-profile-FMN`,
    // demoUrl intentionally unset: farenomitranusantara.my.id no longer resolves (checked Sep 2026).
    // Add `demoUrl: "https://farenomitranusantara.my.id"` back when the domain is renewed.
    status: "Completed",
    year: 2025,
  },
  {
    id: "skinrec",
    slug: "skinrec-skincare-recommendation",
    name: "Skinrec — Skincare Recommendation",
    summary: {
      en: "Laravel web app that recommends skincare products from a catalogue based on product type, skin type, skin problems, and the effects the user wants.",
      id: "Aplikasi web Laravel yang merekomendasikan produk skincare dari sebuah katalog berdasarkan jenis produk, jenis kulit, masalah kulit, dan efek yang diinginkan pengguna.",
    },
    description: {
      en: "Skinrec lets a user pick a product category, their skin types (sensitive, combination, oily, dry, normal), skin problems (acne, dullness, dark spots, large pores, fine lines, …), and the effects they want (brightening, moisturising, oil control, UV protection, …), then returns matching products with price, rating, and description from a catalogue of brands and categories.",
      id: "Skinrec memungkinkan pengguna memilih kategori produk, jenis kulitnya (sensitif, kombinasi, berminyak, kering, normal), masalah kulit (jerawat, kulit kusam, flek hitam, pori-pori besar, garis halus, …), dan efek yang diinginkan (mencerahkan, melembapkan, mengontrol minyak, perlindungan UV, …), lalu menampilkan produk yang cocok beserta harga, rating, dan deskripsinya dari katalog merek dan kategori.",
    },
    role: {
      en: "Developer",
      id: "Developer",
    },
    contribution: {
      en: "I built the app end to end: the product / brand / category / skin-type / skin-problem data model, the recommendation service that matches user attributes against product attributes, the controllers and Blade views, and a search endpoint.",
      id: "Saya membangun aplikasi ini dari hulu ke hilir: model data produk / merek / kategori / jenis kulit / masalah kulit, service rekomendasi yang mencocokkan atribut pengguna dengan atribut produk, controller dan tampilan Blade, serta endpoint pencarian.",
    },
    category: "Web Application",
    technologies: ["Laravel 11", "PHP", "Blade", "Laravel Query Builder"],
    problem: {
      en: "Choosing skincare means cross-referencing product claims against your own skin type and concerns, which is tedious across a large catalogue.",
      id: "Memilih skincare berarti mencocokkan klaim produk dengan jenis kulit dan keluhan sendiri, dan itu melelahkan ketika katalognya besar.",
    },
    solution: {
      en: "Encode skin types, problems, and effects as attributes on both the user's input and each product, and recommend by matching the two in the database.",
      id: "Menyandikan jenis kulit, masalah, dan efek sebagai atribut baik pada masukan pengguna maupun pada tiap produk, lalu memberi rekomendasi dengan mencocokkan keduanya di basis data.",
    },
    features: {
      en: [
        "Multi-select input for skin types, skin problems, and desired effects",
        "Attribute-matching recommendations with price, rating, and description",
        "Brand, category, and product management",
        "Product search",
      ],
      id: [
        "Masukan pilihan ganda untuk jenis kulit, masalah kulit, dan efek yang diinginkan",
        "Rekomendasi berbasis pencocokan atribut lengkap dengan harga, rating, dan deskripsi",
        "Pengelolaan merek, kategori, dan produk",
        "Pencarian produk",
      ],
    },
    architecture: {
      en: [
        "Laravel 11 MVC with a dedicated Skinrec service class holding the recommendation logic",
        "Attribute flags stored per skin type, problem, and effect, matched with the Query Builder",
        "Blade views for the input form and results",
      ],
      id: [
        "MVC Laravel 11 dengan kelas service Skinrec khusus yang memuat logika rekomendasi",
        "Penanda atribut disimpan per jenis kulit, masalah, dan efek, lalu dicocokkan dengan Query Builder",
        "Tampilan Blade untuk formulir masukan dan hasil",
      ],
    },
    challenges: { en: [], id: [] },
    results: { en: [], id: [] },
    screenshots: [],
    githubUrl: `${GH}/Skinrec-laravel`,
    status: "Completed",
    year: 2024,
  },
];
