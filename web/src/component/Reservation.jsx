import { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    comments: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setStatus({
        type: "error",
        message: "Por favor, completa todos los campos obligatorios.",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Por favor, introduce un email válido.",
      });
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^[0-9]{9,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      setStatus({
        type: "error",
        message: "Por favor, introduce un teléfono válido (mínimo 9 dígitos).",
      });
      setIsSubmitting(false);
      return;
    }

  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reservation" className="bg-neutral-900 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-600/30 bg-yellow-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Reservas
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Reserva tu mesa
          </h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Completa el formulario y nos pondremos en contacto contigo para confirmar tu reserva
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2">
           
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90">
                Nombre completo <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90">
                Email <span className="text-yellow-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/90">
                Teléfono <span className="text-yellow-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                placeholder="600 000 123"
              />
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-white/90">
                Número de personas <span className="text-yellow-500">*</span>
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num} className="bg-neutral-800">
                    {num} {num === 1 ? "persona" : "personas"}
                  </option>
                ))}
                <option value="10+" className="bg-neutral-800">
                  Más de 10 personas
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-white/90">
                Fecha <span className="text-yellow-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                required
                className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-white/90">
                Hora <span className="text-yellow-500">*</span>
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              >
                <option value="" className="bg-neutral-800">
                  Selecciona una hora
                </option>
                <optgroup label="Comidas" className="bg-neutral-800">
                  <option value="13:00" className="bg-neutral-800">13:00</option>
                  <option value="13:30" className="bg-neutral-800">13:30</option>
                  <option value="14:00" className="bg-neutral-800">14:00</option>
                  <option value="14:30" className="bg-neutral-800">14:30</option>
                  <option value="15:00" className="bg-neutral-800">15:00</option>
                </optgroup>
                <optgroup label="Cenas" className="bg-neutral-800">
                  <option value="20:00" className="bg-neutral-800">20:00</option>
                  <option value="20:30" className="bg-neutral-800">20:30</option>
                  <option value="21:00" className="bg-neutral-800">21:00</option>
                  <option value="21:30" className="bg-neutral-800">21:30</option>
                  <option value="22:00" className="bg-neutral-800">22:00</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="comments" className="block text-sm font-medium text-white/90">
              Comentarios adicionales
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="4"
              className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              placeholder="Alergias, ocasión especial, preferencias de mesa..."
            />
          </div>

          {status.message && (
            <div
              className={`mt-6 rounded-md border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-green-500/30 bg-green-500/10 text-green-400"
                  : "border-red-500/30 bg-red-500/10 text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-yellow-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar reserva"}
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-white/60">
            También puedes llamarnos al <a href="tel:+34968123456" className="text-yellow-500 hover:underline">968 12 34 56</a> para reservar directamente
          </p>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
