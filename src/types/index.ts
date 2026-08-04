export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  demo: string;
  previewUrl?: string;
  github?: string;
  accent: string;
  index: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: string;
};
