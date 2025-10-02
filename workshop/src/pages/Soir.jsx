import React from "react";

// Soir.jsx
// Tailwind + JSX component that recreates a clean "Menu du Soir" layout.
// Replace the `menuData` contents with the exact text from your PDF.

const menuData = {
  title: "MENU DU Soir",
  date: "30/09/2025",
  sections: [
    {
      id: "entrees",
      title: "Entrées",
      items: [
        { name: "Velouté de légumes de saison", price: "6€" },
        { name: "Tartine chèvre, miel et thym", price: "7€" },
      ],
    },
    {
      id: "plats",
      title: "Plats",
      items: [
        { name: "Filet de poulet rôti, purée maison", price: "12€" },
        { name: "Poisson du Soir, légumes croquants", price: "13€" },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      items: [
        { name: "Tartelette aux pommes", price: "5€" },
        { name: "Mousse au chocolat", price: "5€" },
      ],
    },
    {
      id: "boissons",
      title: "Boissons",
      items: [
        { name: "Eau minérale 50cl", price: "2€" },
        { name: "Café expresso", price: "2€" },
      ],
    },
  ],
};

export default function Soir({ data = menuData }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <article className="w-full max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
              {data.title}
            </h1>
            <p className="mt-1 text-sm text-gray-500">{data.date}</p>
          </div>

          {/* Logo / emblem placeholder */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#a0482d] to-[#6A2519] flex items-center justify-center text-white font-bold">
              Soir
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.sections.map((section) => (
            <section key={section.id} className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-700 border-l-4 border-green-400 pl-3">
                {section.title}
              </h2>

              <ul className="divide-y">
                {section.items.map((it, idx) => (
                  <li
                    key={idx}
                    className="py-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {it.name}
                      </p>
                      {/* Optional description: uncomment and supply text if needed */}
                      {/* <p className="text-xs text-gray-500">Petite description ou allergènes</p> */}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      {it.price}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Footer / Notes */}
        <footer className="p-6 border-t bg-gray-50 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Plat du Soir servi jusqu'à épuisement des stocks.
          </p>
          <p className="text-xs text-gray-500">
            Allergènes: veuillez consulter le serveur.
          </p>
        </footer>
      </article>
    </div>
  );
}
