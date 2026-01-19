import heroImage from "../assets/ElPieCastillo-Hero.jpg"

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden text-white max-h-50vh">
      <div
        className="absolute inset-0 hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 px-6 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Cocina francesa artesanal
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            El Pie Castillo
            <span className="block text-yellow-600">Recetas de tradición francesa</span>
          </h1>

          <p className="mt-6 text-lg text-white/80 sm:text-xl">
            Cocina casera con ingredientes locales, ambiente cálido y la mejor atención para tus momentos especiales.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
                href="reservation"
              className="inline-block rounded-md bg-yellow-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Reservar mesa
            </a>
            <a
                href="menu"
              className="inline-block rounded-md border border-white/30 px-5 py-3 text-center text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2"
            >
              Ver menú
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero 