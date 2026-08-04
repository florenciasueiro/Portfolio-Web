import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { EXPERIENCE } from "../constants/data";
import { Section } from "../layouts/Section";

export function Experience() { return <Section id="experiencia" eyebrow="04 / RECORRIDO" title={<>Experiencia que une<br /><em>personas y tecnología.</em></>}><div className="timeline">{EXPERIENCE.map((item, i) => <Reveal key={item.company} delay={i*.08}><article><span>{String(i+1).padStart(2,"0")}</span><div><small>{item.period}</small><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.description}</p>{item.link && <a href={item.link} target="_blank" rel="noreferrer">Ver sitio <ArrowUpRight size={14} /></a>}</div></article></Reveal>)}</div><div className="education"><Reveal><span>FORMACIÓN</span><h3>Técnica Superior en Diseño y Programación Web</h3><p>Instituto Leonardo Da Vinci · Buenos Aires</p></Reveal></div></Section>; }
