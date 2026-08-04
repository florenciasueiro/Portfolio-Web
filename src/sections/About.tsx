import { Reveal } from "../components/Reveal";
import { ScrollFillTitle } from "../components/ScrollFillTitle";
import { Section } from "../layouts/Section";

export function About() { return <Section id="sobre-mi" eyebrow="01 / SOBRE MÍ" title={<ScrollFillTitle />}>
  <div className="about-grid"><Reveal><p className="about-lead">Transformo necesidades complejas en experiencias que se sienten simples.</p></Reveal><div className="about-copy"><Reveal delay={.1}><p>Soy Técnica Superior en Diseño y Programación Web, emprendedora y creadora de dos empresas. Primero fundé Eterna, un centro de estética integral, y luego Sodium Software, donde desarrollo proyectos web propios.</p></Reveal><Reveal delay={.2}><p>Mi enfoque combina visión de negocio, pensamiento visual, experiencia de usuario y desarrollo frontend. Trabajo con curiosidad, criterio y obsesión por el detalle para crear soluciones que funcionan tan bien como se ven.</p></Reveal><div className="values"><span>Emprendimiento</span><span>Producto</span><span>Calidad</span><span>Innovación</span></div></div></div>
</Section>; }
