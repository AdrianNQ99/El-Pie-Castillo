const About = () => {
  return (
    <section id="about" className="flex-[7] bg-neutral-950 py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-600/30 bg-yellow-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Sobre nosotros
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              El Pie Castillo, sabor y calma al pie del castillo
            </h2>
            <p className="mt-6 text-base text-white/80 sm:text-lg">
              El Pie Castillo es un restaurante en Águilas (Murcia), ubicado junto al Castillo de San Juan de las Águilas. Su propuesta se centra en cocina tradicional francesa, servida en un ambiente acogedor y con
              encanto, ideal para disfrutar con calma de una comida especial.
            </p>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              Nuestra filosofía es cuidar cada detalle: producto cercano, platos honestos y un trato cercano para que cada visita
              se sienta como en casa.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-yellow-500" aria-hidden="true" />
                <span>Ubicación emblemática: a los pies del Castillo de San Juan de las Águilas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-yellow-500" aria-hidden="true" />
                <span>Cocina tradicional francesa con producto local.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-yellow-500" aria-hidden="true" />
                <span>Ambiente íntimo y atención cercana.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
