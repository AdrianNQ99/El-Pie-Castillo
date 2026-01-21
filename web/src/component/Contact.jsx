const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-950 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-600/30 bg-yellow-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Contacto
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Visítanos
          </h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Estamos junto al emblemático Castillo de San Juan de las Águilas
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div className="space-y-8">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-600/10 text-yellow-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Dirección</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Castillo de San Juan<br />
                    30880 Águilas, Murcia<br />
                    España
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-600/10 text-yellow-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Teléfono</h3>
                  <a 
                    href="tel:+34968123456" 
                    className="mt-2 block text-sm text-white/70 transition hover:text-yellow-500"
                  >
                    +34 968 12 34 56
                  </a>
                  <p className="mt-1 text-xs text-white/50">
                    Lunes a Domingo: 13:00 - 23:00
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-600/10 text-yellow-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a 
                    href="mailto:info@elpiecastillo.com" 
                    className="mt-2 block text-sm text-white/70 transition hover:text-yellow-500"
                  >
                    info@elpiecastillo.com
                  </a>
                  <p className="mt-1 text-xs text-white/50">
                    Respondemos en 24-48 horas
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-600/10 text-yellow-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">Horarios</h3>
                  <div className="mt-2 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Lunes - Viernes</span>
                      <span className="text-white">13:00 - 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Sábado</span>
                      <span className="text-white">13:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Domingo</span>
                      <span className="text-white">13:00 - 22:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] overflow-hidden rounded-xl border border-white/10 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1120.5771864885671!2d-1.5806319114435448!3d37.40234294619763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd64c93d104622b5%3A0x2ca555ab6c205c70!2sEl%20Pie%20Castillo!5e0!3m2!1ses!2ses!4v1743772488908!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de El Pie Castillo"
              className="grayscale-[50%] contrast-[1.2]"
            />
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-yellow-600/30 bg-yellow-600/5 p-6">
          <div className="flex items-start gap-4">
            <svg className="mt-1 h-6 w-6 shrink-0 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-400">Cómo llegar</h3>
              <p className="mt-2 text-sm text-white/80">
                Nos encontramos junto al Castillo de San Juan, en el casco histórico de Águilas. 
                Hay aparcamiento público disponible en las cercanías. Desde el puerto, son aproximadamente 
                5 minutos caminando por el paseo marítimo. Si vienes en coche, te recomendamos aparcar 
                en el parking del puerto y disfrutar del paseo hasta el restaurante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
