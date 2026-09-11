import type { Education } from "@/lib/types";

// TODO: confirm — inferred from your coursework repositories (class "D4 IT", NRP 3122600026,
// supervising lecturer at PENS), not stated directly. Correct anything that is off.
export const education: Education[] = [
  {
    institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
    program: {
      en: "D4 Informatics Engineering (Applied Bachelor)",
      id: "D4 Teknik Informatika",
    },
    period: {
      en: "2022 — 2026",
      id: "2022 — 2026",
    },
    notes: {
      en: [
        "Final project: deep-learning classification of Gram-positive and Gram-negative bacteria from microscopy images (see Projects).",
      ],
      id: [
        "Proyek akhir: klasifikasi bakteri Gram-positif dan Gram-negatif dari citra mikroskopis menggunakan deep learning (lihat Proyek).",
      ],
    },
  },
];
