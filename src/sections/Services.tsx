import { Code2, Layers3, Search, Sparkles, Wand2, Workflow } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SERVICES } from "../constants/data";
import { Section } from "../layouts/Section";
const icons = [Sparkles, Code2, Layers3, Workflow, Search, Wand2];
export function Services() { return <Section id="servicios" eyebrow="05 / SERVICIOS" title={<>De la estrategia<br /><em>al producto final.</em></>}><div className="service-grid">{SERVICES.map(([name, text], i) => { const Icon=icons[i]; return <Reveal key={name} delay={i*.05}><article><Icon size={22}/><span>0{i+1}</span><h3>{name}</h3><p>{text}</p></article></Reveal>; })}</div></Section>; }
