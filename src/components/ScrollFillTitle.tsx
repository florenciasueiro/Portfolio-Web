import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Character({ character, index, total, progress }: { character: string; index: number; total: number; progress: MotionValue<number> }) {
  const start = (index / total) * 0.82;
  const end = Math.min(start + 0.18, 1);
  const opacity = useTransform(progress, [start, end], [0.16, 1]);

  return <motion.span aria-hidden="true" style={{ opacity }}>{character === " " ? "\u00a0" : character}</motion.span>;
}

export function ScrollFillTitle() {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "end 38%"],
  });
  const lines = ["Código con intención.", "Diseño con propósito."];
  const total = lines.join("").length;
  let characterIndex = 0;

  return (
    <span ref={ref} className="scroll-fill-title" aria-label={lines.join(" ")}>
      {lines.map((line, lineIndex) => {
        const content = Array.from(line).map((character) => {
          const index = characterIndex++;
          return reducedMotion
            ? <span key={index} aria-hidden="true">{character === " " ? "\u00a0" : character}</span>
            : <Character key={index} character={character} index={index} total={total} progress={scrollYProgress} />;
        });

        return lineIndex === 0
          ? <span className="scroll-fill-line" key={line}>{content}</span>
          : <em className="scroll-fill-line" key={line}>{content}</em>;
      })}
    </span>
  );
}
