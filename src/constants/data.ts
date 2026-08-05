import type { ExperienceItem, Project } from "../types";

export const NAV_ITEMS = ["Historia", "Sobre mí", "Proyectos", "Experiencia", "Contacto"] as const;

export const TECHNOLOGY_GROUPS = [
  { name: "Frontend", tools: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Sass", "Bootstrap", "Framer Motion"] },
  { name: "Backend & APIs", tools: ["Node.js", "Express", "Java", "Spring Boot", "PHP", "Laravel", "REST APIs", "GraphQL", "WebSockets"] },
  { name: "Datos", tools: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"] },
  { name: "Cloud & DevOps", tools: ["Git", "GitHub", "Docker", "Linux", "GitHub Actions", "AWS", "Google Cloud", "Vercel", "Cloudflare"] },
  { name: "Testing", tools: ["Jest", "Vitest", "Playwright", "Cypress"] },
  { name: "Diseño & Producto", tools: ["Figma", "UI / UX", "Responsive Design", "Accesibilidad", "SEO / SEM", "WordPress"] },
  { name: "IA & Automatización", tools: ["ChatGPT", "OpenAI API", "Claude", "Gemini", "GitHub Copilot", "Cursor", "LangChain", "RAG", "AI Agents", "MCP", "Prompt Engineering", "n8n"] },
] as const;

export const PROJECTS: Project[] = [
  {
    index: "01", eyebrow: "Producto propio · Software", title: "Sodium Software",
    description: "Estudio y laboratorio digital donde diseño y desarrollo productos web, automatizaciones y soluciones potenciadas con inteligencia artificial.",
    stack: ["React", "TypeScript", "Automatización", "IA"], demo: "https://sodium.ghisoni.com.ar/", previewUrl: "https://sodium.ghisoni.com.ar/", accent: "#8b5cf6",
  },
  {
    index: "02", eyebrow: "Emprendimiento propio · Wellness", title: "Eterna",
    description: "Experiencia digital para un centro de estética integral, creada para comunicar servicios, fortalecer la marca y facilitar el contacto con clientes.",
    stack: ["Diseño web", "UI / UX", "Responsive", "Marca"], demo: "https://eterna.ghisoni.com.ar/", previewUrl: "https://eterna.ghisoni.com.ar/", accent: "#f472b6",
  },
  {
    index: "03", eyebrow: "Proyecto real · Real Estate", title: "Grupo Asset",
    description: "Sitio institucional para presentar Homy 1, sus unidades, amenities, recorridos 360° y canales de contacto comercial.",
    stack: ["WordPress", "Responsive", "SEO"], demo: "https://grupo-asset.com/", accent: "#8b5cf6",
  },
  {
    index: "04", eyebrow: "Producto · Frontend", title: "Panel comercial",
    description: "Experiencia centralizada para visualizar ventas, asistencia y rendimiento de equipos con información accionable.",
    stack: ["React", "TypeScript", "Data UI"], demo: "#contacto", accent: "#22d3ee",
  },
  {
    index: "05", eyebrow: "Automatización · Operaciones", title: "Hiring Flow",
    description: "Sistema para organizar postulantes, generar contactos y simplificar la coordinación de entrevistas a escala.",
    stack: ["Apps Script", "Sheets", "UX"], demo: "#contacto", accent: "#f59e0b",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  { role: "Fundadora y directora", company: "Eterna", period: "Emprendimiento propio · Lomas de Zamora", description: "Creación y dirección de un centro de estética integral: identidad de marca, estrategia digital, comunicación, captación de clientes y gestión operativa.", link: "https://eterna.ghisoni.com.ar/" },
  { role: "Fundadora & Software Engineer", company: "Sodium Software", period: "Emprendimiento propio · Actualidad", description: "Creación y desarrollo de proyectos web personales, combinando producto, diseño UX/UI, frontend, automatización e inteligencia artificial.", link: "https://sodium.ghisoni.com.ar/" },
  { role: "Desarrolladora web", company: "Grupo Asset", period: "Proyecto institucional", description: "Diseño y desarrollo de una experiencia digital comercial para Asset Real Estate.", link: "https://grupo-asset.com/" },
  { role: "Desarrollo web & automatización", company: "Independiente", period: "Actualidad", description: "Interfaces, sitios y flujos digitales orientados a resolver problemas reales de negocio." },
  { role: "Gestión de RR. HH. y operaciones", company: "ZellGo", period: "Buenos Aires", description: "Coordinación de procesos, equipos y automatizaciones internas en un entorno comercial." },
];

export const SERVICES = [
  ["Diseño web", "Interfaces claras, memorables y orientadas a conversión."],
  ["Frontend", "Productos rápidos y accesibles con React y TypeScript."],
  ["UI / UX", "Sistemas visuales coherentes basados en necesidades reales."],
  ["Automatización", "Procesos más simples, confiables y escalables."],
  ["SEO", "Bases técnicas y de contenido para mejorar visibilidad."],
  ["Consultoría", "Diagnóstico y dirección para experiencias digitales."],
] as const;
