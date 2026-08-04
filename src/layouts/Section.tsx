import type { PropsWithChildren } from "react";
import { Reveal } from "../components/Reveal";

export function Section({ id, eyebrow, title, children, className = "" }: PropsWithChildren<{ id: string; eyebrow: string; title: React.ReactNode; className?: string }>) {
  return <section id={id} className={`section ${className}`}><div className="container"><Reveal><div className="section-heading"><span>{eyebrow}</span><h2>{title}</h2></div></Reveal>{children}</div></section>;
}
