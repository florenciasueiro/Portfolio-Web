import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type Geometry = { left: number; top: number; x: number; y: number; scale: number; collapse: number };

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
      setGeometry({ left: from.left, top: from.top, x: to.left - from.left, y: to.top - from.top, scale: to.height / from.height, collapse: Math.max(0, from.width * .22) });
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
  const letters = useTransform(scrollY, [distance * .55, distance], [1, 0]);
  const suffixX = useTransform(scrollY, [distance * .55, distance], [0, -(geometry?.collapse ?? 0)]);

  if (!geometry) return null;
  return <motion.div className="shared-wordmark" aria-hidden="true" style={{ left: geometry.left, top: geometry.top, x, y, scale }}>
    <span>F</span><motion.span className="shared-wordmark__middle" style={{ scaleX: letters }}>LOR </motion.span><motion.span style={{ x: suffixX }}>S</motion.span><motion.span className="shared-wordmark__dot" style={{ x: suffixX }}>·</motion.span>
  </motion.div>;
}
