import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS } from "../constants/data";

const href = (item: string) => `#${item.toLowerCase().replace(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="navbar" aria-label="Navegación principal">
    <a className="logo" href="#inicio">FS<span>·</span></a>
    <div className="nav-desktop">{NAV_ITEMS.map(item => <a key={item} href={href(item)}>{item}</a>)}</div>
    <button className="menu-button" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>{NAV_ITEMS.map(item => <a key={item} href={href(item)} onClick={() => setOpen(false)}>{item}</a>)}</motion.div>}</AnimatePresence>
  </nav></header>;
}
