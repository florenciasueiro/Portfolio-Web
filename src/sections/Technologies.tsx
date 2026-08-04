import { motion } from "framer-motion";
import { TECHNOLOGIES } from "../constants/data";
import { Section } from "../layouts/Section";

export function Technologies() { return <Section id="tecnologias" eyebrow="02 / HERRAMIENTAS" title={<>Un stack moderno.<br /><em>Decisiones pragmáticas.</em></>} className="tech-section"><motion.div className="tech-cloud" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: .045 } } }}>{TECHNOLOGIES.map((item, i) => <motion.span key={item} variants={{ hidden: { opacity: 0, scale: .8, filter: "blur(8px)" }, visible: { opacity: 1, scale: 1, filter: "blur(0px)" } }} className={i % 4 === 0 ? "accent" : ""}>{item}</motion.span>)}</motion.div></Section>; }
