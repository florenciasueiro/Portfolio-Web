import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS } from "../constants/data";

const href = (item: string) => `#${item.toLowerCase().replace(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <motion.header className="nav-wrap" initial={{ opacity: 0, y: -10, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: .45, delay: 1.82, ease: [0.16, 1, .3, 1] }}><nav className="navbar" aria-label="Navegación principal">
    <a id="nav-logo-anchor" className="scroll-fill-title" href="#inicio" aria-label="Florencia, inicio">FLOR</a>
    <div className="nav-desktop">{NAV_ITEMS.map(item => <a key={item} href={href(item)}>{item}</a>)}</div>
    <button className="menu-button" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>{NAV_ITEMS.map(item => <a key={item} href={href(item)} onClick={() => setOpen(false)}>{item}</a>)}</motion.div>}</AnimatePresence>
  </nav></motion.header>;
}
