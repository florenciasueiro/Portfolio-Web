const items = ["Desarrollo web", "Diseño digital", "Frontend", "Experiencias con intención", "Agentes digitales"];

function BandContent({ hidden = false }: { hidden?: boolean }) {
  return <span className="kinetic-band-group" aria-hidden={hidden}>{items.map((item) => <span key={item}>{item}<i>✦</i></span>)}</span>;
}

export function KineticBand() {
  return <div className="kinetic-band" aria-label={items.join(". ")}>
    <div className="kinetic-band-track">
      <BandContent />
      <BandContent hidden />
    </div>
  </div>;
}
