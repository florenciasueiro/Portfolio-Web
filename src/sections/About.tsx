import { Reveal } from "../components/Reveal";
import { Section } from "../layouts/Section";

export function About() { return <Section id="sobre-mi" eyebrow="01 / SOBRE MÍ" title={<>Código con intención.<br /><em>Diseño con propósito.</em></>}>
  <div className="about-grid"><Reveal><p className="about-lead">Transformo necesidades complejas en experiencias que se sienten simples.</p></Reveal><div className="about-copy"><Reveal delay={.1}><p>Soy Técnica Superior en Diseño y Programación Web. Mi enfoque combina pensamiento visual, experiencia de usuario y desarrollo frontend para crear soluciones que funcionan tan bien como se ven.</p></Reveal><Reveal delay={.2}><p>Trabajo con curiosidad, criterio y obsesión por el detalle. Antes de diseñar, entiendo el problema; antes de animar, defino qué aporta valor.</p></Reveal><div className="values"><span>Claridad</span><span>Curiosidad</span><span>Calidad</span><span>Colaboración</span></div></div></div>
</Section>; }
