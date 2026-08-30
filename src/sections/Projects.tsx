import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ProjectScrollCard } from "../components/ProjectScrollCard";
import { PROJECTS } from "../constants/data";
import { Section } from "../layouts/Section";
import "../project-scroll-story.css";
import "../projects-horizontal.css";

export function Projects() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [horizontalDistance, setHorizontalDistance] = useState(0);

  useEffect(() => {
    const updateDistance = () => {
      const viewport = scrollRef.current?.clientWidth ?? 0;
      const track = trackRef.current?.scrollWidth ?? 0;
      setHorizontalDistance(Math.max(0, track - viewport));
    };

    updateDistance();
    const observer = new ResizeObserver(updateDistance);
    if (scrollRef.current) observer.observe(scrollRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const x = useTransform(progress, [0, 1], [0, -horizontalDistance]);

  return <Section id="proyectos" eyebrow="03 / TRABAJO SELECCIONADO" title={<>Proyectos que convierten<br /><em>ideas en resultados.</em></>}>
    <div ref={scrollRef} className="projects-horizontal-scroll" style={{ height: `calc(100svh + ${horizontalDistance}px)` }}>
      <div className="projects-horizontal-viewport">
        <motion.div ref={trackRef} className="projects-horizontal-track" style={{ x }}>
          {PROJECTS.map((project, index) => <ProjectScrollCard key={project.title} project={project} index={index} />)}
        </motion.div>
      </div>
    </div>
  </Section>;
}
