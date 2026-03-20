import { useState, useEffect } from "react";
import { menuCategories as staticMenu } from "../data/menu";

const Menu = () => {
  const [menuCategories, setMenuCategories] = useState(staticMenu);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE}/menu/`);
        if (!response.ok) return;
        const dishes = await response.json();

        const categoriesMap = {};
        dishes.forEach(dish => {
          if (!categoriesMap[dish.category_name]) {
            categoriesMap[dish.category_name] = [];
          }
          categoriesMap[dish.category_name].push({
            name: dish.name,
            description: dish.description,
            price: `${dish.price}€`
          });
        });

        const categories = Object.keys(categoriesMap).map(categoryName => ({
          category: categoryName,
          items: categoriesMap[categoryName]
        }));

        if (categories.length > 0) setMenuCategories(categories);
      } catch {
        // API no disponible — se mantiene el menú estático
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);
  
  return (
    <section id="menu" className="bg-neutral-900 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-600/30 bg-yellow-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Nuestro Menú
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Sabores de Francia
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Descubre nuestra selección de platos tradicionales franceses, elaborados con ingredientes frescos y locales
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {menuCategories.map((section, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-8 border-b border-yellow-600/30 pb-3 text-2xl font-semibold text-yellow-500">
                {section.category}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="group rounded-lg border border-white/5 bg-white/5 p-5 transition-all hover:border-yellow-600/30 hover:bg-white/10"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors">
                          {item.name}
                        </h4>
                        <p className="mt-2 text-sm text-white/60">
                          {item.description}
                        </p>
                      </div>
                      <span className="shrink-0 text-lg font-semibold text-yellow-500">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
