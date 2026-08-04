import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, CodeXml } from "lucide-react";
import type { MouseEvent } from "react";
import type { Project } from "../types";
import { Badge } from "./ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  const mx = useMotionValue(.5); const my = useMotionValue(.5);
  const rx = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 180, damping: 24 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 180, damping: 24 });
  const move = (event: MouseEvent<HTMLElement>) => { const r = event.currentTarget.getBoundingClientRect(); mx.set((event.clientX-r.left)/r.width); my.set((event.clientY-r.top)/r.height); };
  const reset = () => { mx.set(.5); my.set(.5); };
  return <motion.article className="project-card" onMouseMove={move} onMouseLeave={reset} style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}>
    <div className="project-visual" style={{ "--accent": project.accent } as React.CSSProperties}>
      <span>{project.index}</span><div className="project-window"><i /><i /><i /><div className="window-grid"><b /><b /><b /></div></div>
    </div>
    <div className="project-content"><small>{project.eyebrow}</small><h3>{project.title}</h3><p>{project.description}</p>
      <div className="badge-row">{project.stack.map(item => <Badge key={item}>{item}</Badge>)}</div>
      <div className="project-actions"><a href={project.demo} target={project.demo.startsWith("http") ? "_blank" : undefined} rel="noreferrer">Demo <ArrowUpRight size={15} /></a>{project.github && <a href={project.github}><CodeXml size={15} /> GitHub</a>}</div>
    </div>
  </motion.article>;
}
