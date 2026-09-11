import type { Certification } from "@/lib/types";

export const certifications: Certification[] = [
  {
    name: {
      en: "Software Quality Control Tester — Information and Communication Technology Competency Certification",
      id: "Sertifikasi Kompetensi Teknologi Informasi dan Komunikasi — Software Quality Control Tester",
    },
    // TODO: confirm issuer. You wrote "Badan Nasional Sertifikasi Nasional"; the national body that
    // issues competency certificates is Badan Nasional Sertifikasi Profesi (BNSP).
    issuer: {
      en: "Badan Nasional Sertifikasi Profesi (BNSP) — Indonesian National Professional Certification Agency",
      id: "Badan Nasional Sertifikasi Profesi (BNSP)",
    },
    date: {
      en: "Nov 2025 — Nov 2026",
      id: "Nov 2025 — Nov 2026",
    },
    credentialUrl: undefined, // TODO: add a credential link if one exists
  },
];
