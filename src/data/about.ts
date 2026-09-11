import type { Localized } from "@/i18n/config";
import type { FocusArea } from "@/lib/types";

/**
 * About-section copy. Kept out of the component so wording can change
 * without touching UI. Keep it professional and concise.
 */
export const about: {
  paragraphs: Localized<string[]>;
  focusAreas: Localized<FocusArea[]>;
} = {
  paragraphs: {
    en: [
      "I'm a software developer working across the full delivery path of an application: backend services and REST APIs, web and mobile frontends, and the databases behind them.",
      "My work so far spans factory machine-inspection tooling built during an internship at Panasonic, a multi-store F&B point-of-sale platform with QR table ordering and payment-gateway integration, and a deep-learning classifier for clinical microscopy images. Across all of them I care about clear data models, maintainable architecture, and testing what actually breaks.",
    ],
    id: [
      "Saya seorang software developer yang bekerja di sepanjang alur pengembangan aplikasi: layanan backend dan REST API, frontend web dan mobile, serta basis data di belakangnya.",
      "Pekerjaan saya sejauh ini mencakup sistem pelaporan inspeksi mesin pabrik yang dibangun saat magang di Panasonic, platform point-of-sale F&B multi-outlet dengan pemesanan lewat QR meja dan integrasi payment gateway, serta model deep learning untuk klasifikasi citra mikroskopis klinis. Pada semuanya, saya menaruh perhatian pada model data yang jelas, arsitektur yang mudah dirawat, dan pengujian pada bagian yang benar-benar rawan.",
    ],
  },
  /** What kinds of work the developer takes on, in the visitor's language. */
  focusAreas: {
    en: [
      {
        title: "Backend & REST APIs",
        description:
          "Designing and implementing APIs, authentication, and data models with Laravel, ASP.NET Core, and FastAPI.",
      },
      {
        title: "Web & Mobile Frontends",
        description:
          "Building web interfaces with React and TypeScript, and cross-platform mobile apps with Flutter.",
      },
      {
        title: "Databases",
        description:
          "Relational schema design and query work in MySQL, SQL Server, and PostgreSQL.",
      },
      {
        title: "Testing & QA",
        description:
          "Manual and automated testing, backed by a BNSP Software Quality Control Tester certification.",
      },
    ],
    id: [
      {
        title: "Backend & REST API",
        description:
          "Merancang dan mengimplementasikan API, autentikasi, dan model data dengan Laravel, ASP.NET Core, dan FastAPI.",
      },
      {
        title: "Frontend Web & Mobile",
        description:
          "Membangun antarmuka web dengan React dan TypeScript, serta aplikasi mobile lintas platform dengan Flutter.",
      },
      {
        title: "Basis Data",
        description:
          "Perancangan skema relasional dan pengolahan query di MySQL, SQL Server, dan PostgreSQL.",
      },
      {
        title: "Testing & QA",
        description:
          "Pengujian manual dan otomatis, didukung sertifikasi Software Quality Control Tester dari BNSP.",
      },
    ],
  },
};
