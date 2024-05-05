export const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export type Section = (typeof sections)[number];
export type SectionId = (typeof sections)[number]["id"];
