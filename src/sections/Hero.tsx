import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  { label: "+5 años de experiencia", className: "cinematic-card--experience" },
  { label: "UI / UX", className: "cinematic-card--ux" },
  { label: "React", className: "cinematic-card--react" },
  { label: "Frontend", className: "cinematic-card--frontend" },
  { label: "Proyectos", className: "cinematic-card--projects" },
];

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.35 });
  const imageScale = useTransform(progress, [0, 0.64], [1, 0.58]);
  const imageY = useTransform(progress, [0, 0.64], [0, 86]);
  const imageOpacity = useTransform(progress, [0.12, 0.74], [1, 0.18]);
  const imageFilter = useTransform(progress, [0.3, 0.78], ["blur(0px)", "blur(14px)"]);
  const nameScale = useTransform(progress, [0, 0.72], [1, 0.72]);
  const nameY = useTransform(progress, [0, 0.72], [0, 150]);
  const nameOpacity = useTransform(progress, [0.4, 0.82], [0.26, 0.04]);
  const copyY = useTransform(progress, [0, 0.66], [0, -74]);
  const copyOpacity = useTransform(progress, [0.42, 0.74], [1, 0]);
  const cardScale = useTransform(progress, [0, 0.64], [1, 0.76]);
  const cardOpacity = useTransform(progress, [0.38, 0.75], [1, 0]);

  return (
    <section ref={ref} id="inicio" className="cinematic-hero" aria-label="Presentación">
      <div className="cinematic-sticky">
        <div className="cinematic-grid" aria-hidden="true" />
        <motion.div className="cinematic-name" aria-hidden="true" style={{ scale: nameScale, y: nameY, opacity: nameOpacity }}>
          <span>FLORENCIA</span><span>SUEIRO</span>
        </motion.div>

        <motion.div className="cinematic-copy" style={{ y: copyY, opacity: copyOpacity }}>
          <p>PORTFOLIO · 2026</p>
          <h1>Software Engineer</h1>
          <div>Desarrolladora Frontend y Diseñadora Web. Creo experiencias claras, elegantes y humanas para productos digitales.</div>
        </motion.div>

        <motion.div className="cinematic-portrait" style={{ scale: imageScale, y: imageY, opacity: imageOpacity, filter: imageFilter }}>
          <div className="cinematic-shadow" aria-hidden="true" />
          <img src="/Perfil.png" alt="Florencia Soledad Sueiro" fetchPriority="high" />
        </motion.div>

        {cards.map((card, i) => (
          <motion.div key={card.label} className={`cinematic-card ${card.className}`} aria-hidden="true" style={{ scale: cardScale, opacity: cardOpacity }} animate={{ y: [0, i % 2 ? 10 : -10, 0] }} transition={{ duration: 4.4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}>
            <i />{card.label}
          </motion.div>
        ))}
        <motion.p className="cinematic-scroll" style={{ opacity: copyOpacity }}>SCROLL PARA DESCUBRIR</motion.p>
      </div>
    </section>
  );
}
