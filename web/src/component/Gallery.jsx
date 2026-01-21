import restaurantImages from "../../data/images.js";

const Gallery = () => {

  return (
    <section id="gallery" className="bg-neutral-950 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
      
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-600/30 bg-yellow-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Galería
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Momentos en El Pie Castillo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Descubre el ambiente y la esencia de nuestro restaurante a través de estas imágenes
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {restaurantImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:border-yellow-600/30"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
         
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-white">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
