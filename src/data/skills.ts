import type { SkillGroup } from "@/lib/types";

/**
 * Only the group names are localized. The skills themselves are technology
 * names and industry terms that are written in English in Indonesian
 * workplaces too, so translating them would read worse, not better.
 */
export const skillGroups: SkillGroup[] = [
  {
    name: { en: "Backend", id: "Backend" },
    skills: ["Laravel", "PHP", "ASP.NET Core", "C#", "FastAPI", "Python", "REST API"],
  },
  {
    name: { en: "Frontend", id: "Frontend" },
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"],
  },
  {
    name: { en: "Mobile", id: "Mobile" },
    skills: ["Flutter", "Dart", "BLoC"],
  },
  {
    name: { en: "Database", id: "Basis Data" },
    skills: ["MySQL", "SQL Server", "PostgreSQL", "Database Design"],
  },
  {
    name: { en: "Machine Learning", id: "Machine Learning" },
    skills: ["PyTorch", "CNN Transfer Learning", "YOLO"],
  },
  {
    name: { en: "Testing & QA", id: "Testing & QA" },
    skills: ["Manual Testing", "Automation Testing", "Software Quality Control"],
  },
  {
    name: { en: "Tools", id: "Tools" },
    skills: ["Git", "GitHub", "GitLab", "Swagger / OpenAPI"],
  },
];
