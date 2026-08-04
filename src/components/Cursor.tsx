import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const x = useMotionValue(-50); const y = useMotionValue(-50);
  const spring = { damping: 28, stiffness: 350, mass: .3 };
  const sx = useSpring(x, spring); const sy = useSpring(y, spring);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY); };
    const over = (event: MouseEvent) => setActive(Boolean((event.target as HTMLElement).closest("a,button,.project-card")));
    window.addEventListener("mousemove", move); window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [x, y]);
  return <motion.div className="cursor" style={{ x: sx, y: sy }} animate={{ scale: active ? 2.4 : 1, opacity: active ? .45 : .9 }} aria-hidden="true" />;
}
