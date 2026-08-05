import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/Button";

const roles = ["Software Engineer", "Full Stack Developer", "UI Enthusiast", "Problem Solver"];
const details = [
  { label: "Disponibilidad", value: "Abierta a oportunidades", className: "hero-glass--availability" },
  { label: "Ubicación", value: "Buenos Aires, AR", className: "hero-glass--location" },
  { label: "Stack", value: "React · TypeScript · IA", className: "hero-glass--stack" },
  { label: "Perfil", value: "GitHub + LinkedIn", className: "hero-glass--profile" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const imageScale = useTransform(scrollYProgress, [0, .72], [1, 1.08]);
  const imageBlur = useTransform(scrollYProgress, [0, .82], ["blur(0px)", "blur(32px)"]);
  const imageOpacity = useTransform(scrollYProgress, [0, .74, 1], [1, 1, 0]);
  const [role, setRole] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setRole((value) => (value + 1) % roles.length), 2600); return () => window.clearInterval(timer); }, []);
  return <section ref={heroRef} id="inicio" className="hero hero-premium"><div className="hero-glow" /><div className="hero-orbit hero-orbit--one" /><div className="hero-orbit hero-orbit--two" />
    <motion.div className="hero-inner container" style={{ y }}>
      <motion.div className="hero-name" aria-hidden="true" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .14 } } }}>
        {"FLOR".split("").map((letter, index) => <motion.span key={`${letter}-${index}`} variants={{ hidden: { opacity: 0, y: "18%", filter: "blur(14px)" }, visible: { opacity: .15, y: 0, filter: "blur(0px)", transition: { duration: .58, ease: [0.16, 1, .3, 1] } } }}>{letter}</motion.span>)}
      </motion.div>
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 18, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: .8, delay: 1.05 }}>
        <p className="availability"><i /> Disponible para oportunidades</p>
        <div className="role-rotator"><AnimatePresence mode="wait"><motion.h1 key={roles[role]} initial={{ opacity: 0, y: 16, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -16, filter: "blur(8px)" }} transition={{ duration: .45 }}>{roles[role]}</motion.h1></AnimatePresence></div>
        <p>Diseño y construyo productos digitales claros, rápidos y centrados en las personas.</p>
        <Button asChild><a href="#proyectos">Ver proyectos <ArrowDown size={16} /></a></Button>
      </motion.div>
      <motion.div className="hero-portrait" initial={{ opacity: 0, scale: .94, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 1.28, ease: [0.16, 1, .3, 1] }} style={{ scale: imageScale, filter: imageBlur, opacity: imageOpacity }}><img src="/Perfil.png" alt="Florencia Sueiro, Software Engineer" fetchPriority="high" /></motion.div>
      {details.map((detail, index) => <motion.div key={detail.label} className={`hero-glass ${detail.className}`} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1, y: [0, index % 2 ? 8 : -8, 0] }} transition={{ opacity: { delay: 1.7 + index * .1 }, scale: { delay: 1.7 + index * .1 }, y: { delay: 1.7 + index * .1, duration: 4.5 + index * .3, repeat: Infinity, ease: "easeInOut" } }}><small>{detail.label}</small><strong>{detail.value}</strong></motion.div>)}
    </motion.div>
  </section>;
}
