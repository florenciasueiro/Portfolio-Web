import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { NAV_ITEMS } from "../constants/data";

const href = (item: string) => `#${item.toLowerCase().replace(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const reveal = useSpring(useTransform(scrollY, [0, 90, 240], [0, 0, 1]), { stiffness: 100, damping: 25 });
  const y = useTransform(reveal, [0, 1], [-18, 0]);
  return <motion.header style={{ opacity: reveal, y }} className="nav-wrap"><nav className="navbar" aria-label="Navegación principal">
    <a className="logo" href="#inicio">FS<span>·</span></a>
    <div className="nav-desktop">{NAV_ITEMS.map(item => <a key={item} href={href(item)}>{item}</a>)}</div>
    <button className="menu-button" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>{NAV_ITEMS.map(item => <a key={item} href={href(item)} onClick={() => setOpen(false)}>{item}</a>)}</motion.div>}</AnimatePresence>
  </nav></motion.header>;
}
