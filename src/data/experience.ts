import type { Experience } from "@/lib/types";

export const experience: Experience[] = [
  {
    company: "Shelter Indonesia",
    position: {
      en: "Frontend Developer Intern",
      id: "Magang Frontend Developer",
    },
    period: {
      en: "Aug 2025 — Sep 2026",
      id: "Agu 2025 — Sep 2026",
    },
    summary: {
      en: "Worked on an internal platform that consolidates several previously separate applications into one centralized application.",
      id: "Mengerjakan platform internal yang menyatukan beberapa aplikasi yang sebelumnya terpisah menjadi satu aplikasi terpusat.",
    },
    responsibilities: {
      en: [
        "Built the frontend of the unified internal application, bringing features from separate existing tools into a single consistent interface.",
      ],
      id: [
        "Membangun frontend aplikasi internal terpadu, menyatukan fitur dari beberapa aplikasi yang sudah ada ke dalam satu antarmuka yang konsisten.",
      ],
    },
    technologies: ["React", "TypeScript"],
    highlights: { en: [], id: [] },
  },
  {
    company: "Panasonic", // TODO: confirm the full entity name, e.g. "PT Panasonic Manufacturing Indonesia"
    position: {
      en: "Software Developer Intern (Full-stack & Mobile)",
      id: "Magang Software Developer (Full-stack & Mobile)",
    },
    period: {
      en: "Jan 2025 — Jun 2025",
      id: "Jan 2025 — Jun 2025",
    },
    summary: {
      en: "Built e-Inspector, a machine-inspection reporting system covering the factory's inspection and maintenance needs.",
      id: "Membangun e-Inspector, sistem pelaporan inspeksi mesin yang mencakup kebutuhan inspeksi dan perawatan di pabrik.",
    },
    responsibilities: {
      en: [
        "Developed the Flutter mobile app used for field inspections: scan a machine's QR/barcode, open its check sheet, and record results per inspection item.",
        "Built the ASP.NET Core 8 web application for managing business units, machines, inspection items, and check sheets, and for reviewing inspection results.",
        "Structured the web backend in Domain / Application / Infrastructure layers with repositories, services, and facades over SQL Server, with cookie-based authentication and hashed credentials.",
      ],
      id: [
        "Mengembangkan aplikasi mobile Flutter untuk inspeksi di lapangan: memindai QR/barcode mesin, membuka check sheet-nya, dan mencatat hasil untuk setiap item inspeksi.",
        "Membangun aplikasi web ASP.NET Core 8 untuk mengelola business unit, mesin, item inspeksi, dan check sheet, sekaligus meninjau hasil inspeksi.",
        "Menyusun backend web dalam lapisan Domain / Application / Infrastructure dengan repository, service, dan facade di atas SQL Server, dengan autentikasi berbasis cookie dan kata sandi yang di-hash.",
      ],
    },
    technologies: ["Flutter", "Dart", "BLoC", "ASP.NET Core", "C#", "SQL Server", "REST API"],
    highlights: { en: [], id: [] },
  },
];
