import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { PROJECTS } from "../constants/data";
import { Section } from "../layouts/Section";

export function Projects() { return <Section id="proyectos" eyebrow="03 / TRABAJO SELECCIONADO" title={<>Proyectos que convierten<br /><em>ideas en resultados.</em></>}><div className="project-list">{PROJECTS.map((p, i) => <Reveal key={p.title} delay={i * .08}><ProjectCard project={p} /></Reveal>)}</div></Section>; }
