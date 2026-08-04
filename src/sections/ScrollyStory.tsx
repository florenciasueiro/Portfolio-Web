import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowDown } from "lucide-react";

const chapters = [
  {
    number: "01",
    label: "PENSAR",
    word: "Idea",
    title: <>Todo empieza por<br /><em>entender.</em></>,
    text: "Antes de diseñar una pantalla, investigo el problema, el negocio y a las personas que van a usarla.",
    color: "#8b5cf6",
  },
  {
    number: "02",
    label: "DISEÑAR",
    word: "Forma",
    title: <>La estrategia toma<br /><em>forma.</em></>,
    text: "Convierto lo complejo en una experiencia visual clara: jerarquía, ritmo, interacción y una identidad con intención.",
    color: "#22d3ee",
  },
  {
    number: "03",
    label: "EMPRENDER",
    word: "Eterna",
    title: <>Una idea se vuelve<br /><em>empresa.</em></>,
    text: "Fundé Eterna y construí su universo completo: marca, comunicación, experiencia de cliente y operación diaria.",
    color: "#f472b6",
  },
  {
    number: "04",
    label: "CONSTRUIR",
    word: "Sodium",
    title: <>La experiencia se vuelve<br /><em>software.</em></>,
    text: "Creé Sodium Software para desarrollar productos web propios donde diseño, frontend, automatización e IA trabajan juntos.",
    color: "#a3e635",
  },
  {
    number: "05",
    label: "EVOLUCIONAR",
    word: "Impacto",
    title: <>Cada proyecto deja una<br /><em>nueva capacidad.</em></>,
    text: "No desarrollo páginas aisladas. Construyo sistemas que comunican mejor, simplifican procesos y pueden crecer con el negocio.",
    color: "#f59e0b",
  },
] as const;

function Chapter({ chapter, index, progress }: { chapter: typeof chapters[number]; index: number; progress: MotionValue<number> }) {
  const center = index / (chapters.length - 1);
  const input = index === 0 ? [0, .14, .22, 1] : index === chapters.length - 1 ? [.78, .86, 1] : [center - .12, center - .055, center + .055, center + .12];
  const opacityOutput = index === 0 ? [1, 1, 0, 0] : index === chapters.length - 1 ? [0, 1, 1] : [0, 1, 1, 0];
  const yOutput = index === 0 ? [0, 0, -70, -70] : index === chapters.length - 1 ? [70, 0, 0] : [70, 0, 0, -70];
  const blurOutput = index === 0 ? ["blur(0px)", "blur(0px)", "blur(14px)", "blur(14px)"] : index === chapters.length - 1 ? ["blur(14px)", "blur(0px)", "blur(0px)"] : ["blur(14px)", "blur(0px)", "blur(0px)", "blur(14px)"];
  const opacity = useTransform(progress, input, opacityOutput);
  const y = useTransform(progress, input, yOutput);
  const filter = useTransform(progress, input, blurOutput);
  return <motion.article className="story-chapter" style={{ opacity, y, filter }} aria-hidden={undefined}>
    <span className="story-kicker">[{chapter.number}] {chapter.label}</span>
    <h2>{chapter.title}</h2>
    <p>{chapter.text}</p>
  </motion.article>;
}

export function ScrollyStory() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const coreRotate = useTransform(scrollYProgress, [0, 1], [-18, 342]);
  const coreScale = useTransform(scrollYProgress, [0, .5, 1], [.78, 1.06, .82]);
  const coreY = useTransform(scrollYProgress, [0, .5, 1], [90, -20, -100]);
  const orbitBRotate = useTransform(scrollYProgress, [0, 1], [45, -300]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", value => {
    setActive(Math.min(chapters.length - 1, Math.round(value * (chapters.length - 1))));
  });

  if (reduced) return <section id="historia" className="story-static"><div className="container"><span>MI HISTORIA / 05 CAPÍTULOS</span>{chapters.map(chapter => <article key={chapter.number}><small>{chapter.number} / {chapter.label}</small><h2>{chapter.title}</h2><p>{chapter.text}</p></article>)}</div></section>;

  return <section id="historia" className="story" ref={ref} style={{ "--story-color": chapters[active].color } as React.CSSProperties}>
    <div className="story-sticky">
      <div className="story-meta"><span>MI HISTORIA</span><b>SCROLLYTELLING / 05</b></div>
      <div className="story-rail"><motion.i style={{ scaleY: progressScale }} />{chapters.map((chapter, index) => <span key={chapter.number} className={index === active ? "active" : ""}>{chapter.number}</span>)}</div>
      <div className="story-copy">{chapters.map((chapter, index) => <Chapter key={chapter.number} chapter={chapter} index={index} progress={scrollYProgress} />)}</div>
      <div className="story-visual" aria-hidden="true">
        <motion.div className="story-orbit orbit-a" style={{ rotate: coreRotate, scale: coreScale }} />
        <motion.div className="story-orbit orbit-b" style={{ rotate: orbitBRotate }} />
        <motion.div className="story-core" style={{ rotate: coreRotate, scale: coreScale, y: coreY }}>
          <span>{chapters[active].number}</span><strong>{chapters[active].word}</strong><i />
        </motion.div>
        <motion.span className="story-ghost-word" key={chapters[active].word} initial={{ opacity: 0, y: 50 }} animate={{ opacity: .055, y: 0 }}>{chapters[active].word}</motion.span>
      </div>
      <div className="story-cue"><ArrowDown size={13} /><span>DESLIZÁ PARA CONTINUAR</span></div>
    </div>
  </section>;
}
