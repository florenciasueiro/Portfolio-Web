import { ScrollFillText, ScrollFillTitle } from "../components/ScrollFillTitle";
import { Section } from "../layouts/Section";

export function About() { return <Section id="sobre-mi" eyebrow="01 / SOBRE MÍ" title={<ScrollFillTitle />}>
  <div className="about-grid"><p className="about-lead"><ScrollFillText text="Transformo necesidades complejas en experiencias que se sienten simples." /></p><div className="about-copy"><p><ScrollFillText text="Soy Técnica Superior en Diseño y Programación Web, emprendedora y creadora de dos empresas. Primero fundé Eterna, un centro de estética integral, y luego Sodium Software, donde desarrollo proyectos web propios." /></p><p><ScrollFillText text="Mi enfoque combina visión de negocio, pensamiento visual, experiencia de usuario y desarrollo frontend. Trabajo con curiosidad, criterio y obsesión por el detalle para crear soluciones que funcionan tan bien como se ven." /></p><div className="values"><span><ScrollFillText text="Emprendimiento" /></span><span><ScrollFillText text="Producto" /></span><span><ScrollFillText text="Calidad" /></span><span><ScrollFillText text="Innovación" /></span></div></div></div>
</Section>; }
