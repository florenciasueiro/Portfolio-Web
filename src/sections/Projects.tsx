import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProjectScrollCard } from "../components/ProjectScrollCard";
import { PROJECTS } from "../constants/data";
import { Section } from "../layouts/Section";
import "../project-scroll-story.css";

export function Projects() { const ref = useRef<HTMLDivElement | null>(null); const { scrollYProgress } = useScroll({ target: ref, offset: ["start 72%", "end 72%"] }); const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 }); const scaleY = useTransform(progress, [0, 1], [0, 1]); return <Section id="proyectos" eyebrow="03 / TRABAJO SELECCIONADO" title={<>Proyectos que convierten<br /><em>ideas en resultados.</em></>}><div ref={ref} className="projects-scroll-story"><div className="projects-scroll-rail" aria-hidden="true"><motion.i style={{ scaleY }} /></div>{PROJECTS.map((project, index) => <ProjectScrollCard key={project.title} project={project} index={index} />)}</div></Section>; }
