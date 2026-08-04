import { motion } from "framer-motion";
import { TECHNOLOGY_GROUPS } from "../constants/data";
import { Section } from "../layouts/Section";

export function Technologies() { return <Section id="tecnologias" eyebrow="02 / HERRAMIENTAS" title={<>Un stack moderno.<br /><em>Decisiones pragmáticas.</em></>} className="tech-section"><motion.div className="tech-groups" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-8%" }} variants={{ visible: { transition: { staggerChildren: .08 } } }}>{TECHNOLOGY_GROUPS.map((group, groupIndex) => <motion.article key={group.name} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .55 }}><span className="tech-group-index">{String(groupIndex + 1).padStart(2, "0")}</span><h3>{group.name}</h3><div>{group.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></motion.article>)}</motion.div></Section>; }
