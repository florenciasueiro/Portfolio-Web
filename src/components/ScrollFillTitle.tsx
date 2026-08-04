import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Character({ character, index, total, progress }: { character: string; index: number; total: number; progress: MotionValue<number> }) {
  const start = (index / total) * 0.82;
  const end = Math.min(start + 0.18, 1);
  const opacity = useTransform(progress, [start, end], [0.16, 1]);

  return <motion.span aria-hidden="true" style={{ opacity }}>{character === " " ? "\u00a0" : character}</motion.span>;
}

function Word({ word, index, total, progress }: { word: string; index: number; total: number; progress: MotionValue<number> }) {
  const start = (index / total) * 0.82;
  const end = Math.min(start + 0.22, 1);
  const opacity = useTransform(progress, [start, end], [0.16, 1]);

  return <motion.span aria-hidden="true" style={{ opacity }}>{word}</motion.span>;
}

export function ScrollFillText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 92%", "end 48%"] });
  const words = text.split(/(\s+)/).filter(Boolean);
  const total = words.filter((word) => !/^\s+$/.test(word)).length;
  let wordIndex = 0;

  return <span ref={ref} className="scroll-fill-text" aria-label={text}>{words.map((word, index) => {
    if (/^\s+$/.test(word)) return <span className="scroll-fill-space" aria-hidden="true" key={index}>{"\u00a0"}</span>;
    const currentIndex = wordIndex++;
    return reducedMotion
      ? <span aria-hidden="true" key={index}>{word}</span>
      : <Word key={index} word={word} index={currentIndex} total={total} progress={scrollYProgress} />;
  })}</span>;
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
