import { motion, useInView } from "framer-motion";
import { ArrowUpRight, CodeXml } from "lucide-react";
import { useRef } from "react";
import type { Project } from "../types";
import { Badge } from "./ui/Badge";

export function ProjectScrollCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const visible = useInView(ref, { amount: 0.35, once: true });
  const reverse = index % 2 === 1;
  return <article ref={ref} className={`project-scroll-card ${reverse ? "is-reversed" : ""}`}>
    <motion.div className="project-scroll-copy" initial={{ opacity: 0, x: reverse ? 48 : -48 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: .72, ease: [0.16, 1, .3, 1] }}>
      <span className="project-scroll-index">{project.index} / PROYECTO</span><small>{project.eyebrow}</small><h3>{project.title}</h3><p>{project.description}</p>
      <div className="badge-row">{project.stack.map((item) => <Badge key={item}>{item}</Badge>)}</div>
      <div className="project-actions"><a href={project.demo} target={project.demo.startsWith("http") ? "_blank" : undefined} rel="noreferrer">Ver proyecto <ArrowUpRight size={15} /></a>{project.github && <a href={project.github}><CodeXml size={15} /> GitHub</a>}</div>
    </motion.div>
    <motion.div className="project-glass-preview" initial={{ opacity: 0, x: reverse ? -48 : 48, scale: .96 }} animate={visible ? { opacity: 1, x: 0, scale: 1 } : {}} transition={{ duration: .8, delay: .08, ease: [0.16, 1, .3, 1] }}>
      <div className="project-glass-bar"><i /><i /><i /><span>{project.title}</span></div><div className="project-glass-frame">{project.previewUrl ? <iframe src={project.previewUrl} title={`Vista previa de ${project.title}`} loading="lazy" tabIndex={-1} /> : <div className="project-glass-placeholder" />}</div>
    </motion.div>
  </article>;
}
