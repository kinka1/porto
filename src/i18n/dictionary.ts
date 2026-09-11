import type { Locale } from "@/i18n/config";
import type { ProjectCategory, ProjectStatus } from "@/lib/types";

/**
 * UI strings — labels, headings, and button text that belong to the interface
 * rather than to portfolio content. Content lives in `src/data/`.
 *
 * `en` defines the shape; `id` is typed against it, so a missing or misspelled
 * key in the Indonesian dictionary is a type error rather than a silent gap.
 */
const en = {
  a11y: {
    skipToContent: "Skip to content",
    primaryNav: "Primary",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeSuffix: "home",
    languageSwitcher: "Change language",
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    workingWith: "Working with",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    downloadCv: "Download CV",
  },
  about: {
    eyebrow: "01 — About",
    title: "What I do",
  },
  skills: {
    eyebrow: "02 — Skills",
    title: "Technical skills",
    description:
      "Grouped by where they fit in a system, from the API down to the database.",
  },
  featured: {
    eyebrow: "03 — Projects",
    title: "Selected projects",
    description:
      "Real systems I have built, with the problem, my role, and the engineering decisions behind each one.",
    allProjects: "All projects",
  },
  experience: {
    eyebrow: "04 — Experience",
    title: "Professional experience",
  },
  education: {
    eyebrow: "05 — Education",
    title: "Education",
  },
  certifications: {
    eyebrow: "06 — Certifications",
    title: "Certifications",
    viewCredential: "View credential",
  },
  contact: {
    eyebrow: "07 — Contact",
    title: "Let's work together",
    description:
      "Open to full-time roles, contract work, and collaboration on web, backend, and mobile projects. The fastest way to reach me is email.",
    sendEmail: "Send an email",
    basedIn: "Based in",
  },
  projectCard: {
    role: "Role:",
    technologies: "Technologies",
    viewCaseStudy: "View case study",
    placeholderAlt: "placeholder thumbnail",
  },
  projectsPage: {
    eyebrow: "Projects",
    title: "All projects",
    description:
      "Each project opens into a case study covering the problem, my role, the architecture, and the technical challenges.",
    metaDescription:
      "Case studies of web, backend, and mobile systems I have built — the problem, my role, the stack, and the engineering decisions.",
  },
  caseStudy: {
    allProjects: "All projects",
    overview: "Overview",
    problem: "Problem",
    solution: "Solution",
    myRole: "My role",
    architecture: "Architecture",
    keyFeatures: "Key features",
    challenges: "Technical challenges",
    challenge: "Challenge",
    engineeringDecision: "Engineering decision",
    screenshots: "Screenshots",
    results: "Results",
    techStack: "Tech stack",
    role: "Role",
    year: "Year",
    status: "Status",
    category: "Category",
    noScreenshots: "TODO: Add screenshots for this project.",
  },
  projectLinks: {
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    apiDocs: "API Docs",
  },
  category: {
    "Web Application": "Web Application",
    "Backend / API": "Backend / API",
    "Mobile Application": "Mobile Application",
    "Full-Stack": "Full-Stack",
    "AI / Machine Learning": "AI / Machine Learning",
    DevOps: "DevOps",
    "Testing / QA": "Testing / QA",
  } satisfies Record<ProjectCategory, string>,
  status: {
    Production: "Production",
    Completed: "Completed",
    "In Development": "In Development",
    Archived: "Archived",
  } satisfies Record<ProjectStatus, string>,
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist or has moved.",
    backHome: "Back to home",
  },
};

export type Dictionary = typeof en;

const id: Dictionary = {
  a11y: {
    skipToContent: "Lompat ke konten",
    primaryNav: "Utama",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    homeSuffix: "beranda",
    languageSwitcher: "Ganti bahasa",
  },
  nav: {
    about: "Tentang",
    skills: "Keahlian",
    projects: "Proyek",
    experience: "Pengalaman",
    contact: "Kontak",
  },
  hero: {
    workingWith: "Teknologi yang saya gunakan",
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    downloadCv: "Unduh CV",
  },
  about: {
    eyebrow: "01 — Tentang",
    title: "Apa yang saya kerjakan",
  },
  skills: {
    eyebrow: "02 — Keahlian",
    title: "Keahlian teknis",
    description:
      "Dikelompokkan berdasarkan posisinya dalam sebuah sistem, dari API hingga basis data.",
  },
  featured: {
    eyebrow: "03 — Proyek",
    title: "Proyek pilihan",
    description:
      "Sistem nyata yang pernah saya bangun, lengkap dengan permasalahannya, peran saya, dan keputusan teknis di baliknya.",
    allProjects: "Semua proyek",
  },
  experience: {
    eyebrow: "04 — Pengalaman",
    title: "Pengalaman profesional",
  },
  education: {
    eyebrow: "05 — Pendidikan",
    title: "Pendidikan",
  },
  certifications: {
    eyebrow: "06 — Sertifikasi",
    title: "Sertifikasi",
    viewCredential: "Lihat kredensial",
  },
  contact: {
    eyebrow: "07 — Kontak",
    title: "Mari bekerja sama",
    description:
      "Terbuka untuk posisi penuh waktu, pekerjaan kontrak, dan kolaborasi pada proyek web, backend, maupun mobile. Cara tercepat menghubungi saya adalah lewat email.",
    sendEmail: "Kirim email",
    basedIn: "Berbasis di",
  },
  projectCard: {
    role: "Peran:",
    technologies: "Teknologi",
    viewCaseStudy: "Lihat studi kasus",
    placeholderAlt: "gambar sementara",
  },
  projectsPage: {
    eyebrow: "Proyek",
    title: "Semua proyek",
    description:
      "Setiap proyek terbuka menjadi studi kasus yang membahas permasalahan, peran saya, arsitektur, dan tantangan teknisnya.",
    metaDescription:
      "Studi kasus sistem web, backend, dan mobile yang pernah saya bangun — permasalahan, peran saya, teknologi, dan keputusan teknisnya.",
  },
  caseStudy: {
    allProjects: "Semua proyek",
    overview: "Ringkasan",
    problem: "Permasalahan",
    solution: "Solusi",
    myRole: "Peran saya",
    architecture: "Arsitektur",
    keyFeatures: "Fitur utama",
    challenges: "Tantangan teknis",
    challenge: "Tantangan",
    engineeringDecision: "Keputusan teknis",
    screenshots: "Tangkapan layar",
    results: "Hasil",
    techStack: "Teknologi",
    role: "Peran",
    year: "Tahun",
    status: "Status",
    category: "Kategori",
    noScreenshots: "TODO: Tambahkan tangkapan layar untuk proyek ini.",
  },
  projectLinks: {
    liveDemo: "Demo Langsung",
    sourceCode: "Kode Sumber",
    apiDocs: "Dokumentasi API",
  },
  category: {
    "Web Application": "Aplikasi Web",
    "Backend / API": "Backend / API",
    "Mobile Application": "Aplikasi Mobile",
    "Full-Stack": "Full-Stack",
    "AI / Machine Learning": "AI / Machine Learning",
    DevOps: "DevOps",
    "Testing / QA": "Testing / QA",
  },
  status: {
    Production: "Produksi",
    Completed: "Selesai",
    "In Development": "Dalam Pengembangan",
    Archived: "Diarsipkan",
  },
  notFound: {
    title: "Halaman tidak ditemukan",
    description: "Halaman yang Anda cari tidak ada atau telah dipindahkan.",
    backHome: "Kembali ke beranda",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, id };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
