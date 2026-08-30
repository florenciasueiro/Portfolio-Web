import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type Geometry = { left: number; top: number; x: number; y: number; scale: number };

export function SharedWordmark() {
  const [geometry, setGeometry] = useState<Geometry | null>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const measure = () => {
      const source = document.getElementById("hero-wordmark-anchor");
      const target = document.getElementById("nav-logo-anchor");
      if (!source || !target) return;
      const from = source.getBoundingClientRect();
      const to = target.getBoundingClientRect();
      const scale = (to.height / from.height) * .87;
      setGeometry({ left: from.left, top: from.top, x: to.left + (to.width - from.width * scale) / 2 - from.left, y: to.top + (to.height - from.height * scale) / 2 - from.top, scale });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, []);

  const distance = typeof window === "undefined" ? 420 : Math.max(280, window.innerHeight * .62);
  const x = useTransform(scrollY, [0, distance], [0, geometry?.x ?? 0]);
  const y = useTransform(scrollY, [0, distance], [0, geometry?.y ?? 0]);
  const scale = useTransform(scrollY, [0, distance], [1, geometry?.scale ?? 1]);
  const opacity = useTransform(scrollY, [0, distance], [.5, 1]);
  if (!geometry) return null;
  return <motion.div className="shared-wordmark" aria-hidden="true" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .14 } } }} style={{ left: geometry.left, top: geometry.top, x, y, scale, opacity }}>
    {"Flor".split("").map((letter, index) => <motion.span key={`${letter}-${index}`} variants={{ hidden: { opacity: 0, x: -10, filter: "blur(8px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: .38, ease: [0.16, 1, .3, 1] } } }}>{letter}</motion.span>)}
  </motion.div>;
}
