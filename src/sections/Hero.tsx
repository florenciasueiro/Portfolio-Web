import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";

const roles = ["Software Engineer", "Full Stack Developer", "UI Enthusiast", "Problem Solver"];
const details = [
  { label: "Disponibilidad", value: "Abierta a oportunidades", className: "hero-glass--availability" },
  { label: "Ubicación", value: "Buenos Aires, AR", className: "hero-glass--location" },
  { label: "Stack", value: "React · TypeScript · IA", className: "hero-glass--stack" },
  { label: "Perfil", value: "GitHub + LinkedIn", className: "hero-glass--profile" },
];

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, .28], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, .22], [1, 0]);
  const [role, setRole] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setRole((value) => (value + 1) % roles.length), 2600); return () => window.clearInterval(timer); }, []);
  return <section id="inicio" className="hero hero-premium"><div className="hero-glow" /><div className="hero-orbit hero-orbit--one" /><div className="hero-orbit hero-orbit--two" />
    <motion.div className="hero-inner container" style={{ y, opacity }}>
      <div className="hero-name" aria-hidden="true"><span>FLOR</span></div>
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
        <p className="availability"><i /> Disponible para oportunidades</p>
        <div className="role-rotator"><AnimatePresence mode="wait"><motion.h1 key={roles[role]} initial={{ opacity: 0, y: 16, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -16, filter: "blur(8px)" }} transition={{ duration: .45 }}>{roles[role]}</motion.h1></AnimatePresence></div>
        <p>Diseño y construyo productos digitales claros, rápidos y centrados en las personas.</p>
        <Button asChild><a href="#proyectos">Ver proyectos <ArrowDown size={16} /></a></Button>
      </motion.div>
      <motion.div className="hero-portrait" initial={{ opacity: 0, scale: .94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: .12, ease: [0.16, 1, .3, 1] }}><img src="/Perfil.png" alt="Florencia Sueiro, Software Engineer" fetchPriority="high" /></motion.div>
      {details.map((detail, index) => <motion.div key={detail.label} className={`hero-glass ${detail.className}`} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1, y: [0, index % 2 ? 8 : -8, 0] }} transition={{ opacity: { delay: .3 + index * .08 }, scale: { delay: .3 + index * .08 }, y: { duration: 4.5 + index * .3, repeat: Infinity, ease: "easeInOut" } }}><small>{detail.label}</small><strong>{detail.value}</strong></motion.div>)}
    </motion.div>
  </section>;
}
