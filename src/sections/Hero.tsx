import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, .25], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, .18], [1, 0]);
  return <section id="inicio" className="hero"><div className="hero-glow" />
    <motion.div className="hero-inner container" style={{ y, opacity }}>
      <motion.p className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}><i /> Disponible para oportunidades</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 60, filter: "blur(16px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>Flor<br /><em>Software Engineer</em></motion.h1>
      <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }}><p>Desarrolladora Frontend y Diseñadora Web. Creo experiencias claras, elegantes y humanas para productos digitales.</p><div className="hero-buttons"><Button asChild><a href="#proyectos">Explorar proyectos <ArrowDown size={16} /></a></Button><Button asChild variant="ghost"><a href="#contacto">Hablemos <ArrowUpRight size={16} /></a></Button></div></motion.div>
    </motion.div><span className="hero-index">Buenos Aires · 2026</span>
  </section>;
}
