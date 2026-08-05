import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Cursor } from "./components/Cursor";
import { KineticBand } from "./components/KineticBand";
import { Loader } from "./components/ui/Loader";
import { Hero } from "./sections/Hero";
import { ScrollyStory } from "./sections/ScrollyStory";
import { About } from "./sections/About";
import { Technologies } from "./sections/Technologies";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { useLenis } from "./hooks/useLenis";
import "./hero-premium.css";
import "./brand-overrides.css";
import "./hero-availability.css";
import "./hero-intro.css";
import "./hero-portrait-scroll.css";

const AmbientScene = lazy(() => import("./components/AmbientScene"));

export default function App() {
  useLenis();

  return (
    <AnimatePresence mode="wait">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <a className="skip-link" href="#main">Saltar al contenido</a>
        <Cursor />
        <Navbar />
        <main id="main">
          <div className="ambient-canvas" aria-hidden="true">
            <Suspense fallback={<Loader compact />}><AmbientScene /></Suspense>
          </div>
          <Hero />
          <About />
          <ScrollyStory />
          <KineticBand />
          
          <Technologies />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
