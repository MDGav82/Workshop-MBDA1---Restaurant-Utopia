import Header from '../components/Header';

const brunchSections = [
  {
    title: "BOISSONS FROIDES",
    items: [
      { name: "Eau pétillante" },
      { name: "Limonade", bio: true },
      { name: "Ginger beer", bio: true },
      { name: "Kombucha à base de thé vert et thé noir fermentés (fait maison)" },
      { name: "Kéfir citron et figue (fait maison)" },
      { name: "Jus", bio: true, description: "pomme / pomme-kiwi / poire / orange pressée" },
      { name: "Sirop", bio: true, description: "grenadine / fraise / mûre / pêche / verveine-mélisse / menthe / orgeat / citron / mirabelle / fleurs d'acacia" }
    ],
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "BOISSONS CHAUDES",
    items: [
      { name: "Expresso / Allongé" },
      { name: "Déca" },
      { name: "Noisette" },
      { name: "Café au lait" },
      { name: "Chocolat chaud", bio: true, note: "Nous utilisons du lait de vache entier issu de l'agriculture biologique. Option lait d'avoine bio disponible !" },
      { name: "Thés noirs", description: "Earl Grey / Pu Erh Impérial / Lapsang Souchong (thé fumé pour accompagner le brunch) / Étoile des Indes (thé noir, orange, cardamome)" },
      { name: "Thés verts", description: "nature / menthe / fruits rouge / jasmin / sencha au riz soufflé (au cours des repas) / violette / féerie de Noël (orange, mandarine, épices)" },
      { name: "Infusions", description: "Infusion de plantes Grand-mère (thym, menthe, basilic, sauge, anis vert, réglisse, cannelle) / Curcuma (gingembre, carvi, cannelle, cardamome, cacao, clous de girofle, réglisse, pomme) / Rooibos : cocktail de fruits / Infusion de Noël (amande, pomme, cannelle, pêche, hibiscus, sureau, raisins, églantier, mûrier) / Lune de miel (maté, citronnelle, rooibos, lapscho, gingembre, menthe, citron, cannelle) / Tonique (romarin, fleur de sureau, thym, frêne, cassis) / Détente (figuier, mélisse, calendula, lavande) / Verveine" },
      { name: "Thé blanc de Noël" }
    ],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Branch() {
  return (
    <main className="pt-20 bg-[#101416] min-h-screen">
      <Header />
      
      {/* Le Brunch du Dimanche Title with Time */}
      <div className="max-w-5xl mx-auto text-center py-6 px-4">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            Le Brunch du Dimanche
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-blue-400 text-lg sm:text-xl font-semibold px-4 py-2 border-2 border-blue-400 rounded-full ">
              🥐 12H00 - 14H00
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
          <p className="text-gray-300 text-sm sm:text-base italic">
            Disponible uniquement le dimanche aux heures indiquées
          </p>
        </div>
      </div>
      
      {/* Formula Brunch - PROMOTION */}
      <div className="max-w-5xl mx-auto text-center py-6 px-4 sm:py-10">
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-2xl p-1 shadow-2xl animate-pulse">
          <div className="bg-[#101416] rounded-xl px-6 py-4 sm:px-8 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <span className="bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                  🥞 FORMULE BRUNCH 🥞
                </span>
                <h2 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-extrabold text-center sm:text-left">
                  Formule à volonté (du salé, du sucré, du chaud et du froid), une boisson froide et une boisson chaude
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-pink-400 text-2xl sm:text-3xl md:text-4xl font-black">
                  25€
                </span>
                <span className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  Par Personne
                </span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-pink-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Menu sections */}
      {brunchSections.map((section, index) => {
        const getTopIcon = () => {
          if (section.title === "BOISSONS FROIDES") {
            return <svg width="40" height="40" fill="none" stroke="#60a5fa" strokeWidth="2" viewBox="0 0 24 24" className="animate-pulse"><path d="M5 12V7a1 1 0 011-1h4l2 5h6a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1z" /><path d="M12 2L8 6h8l-4-4z" /></svg>;
          } else {
            return <svg width="40" height="40" fill="none" stroke="#f59e0b" strokeWidth="2" viewBox="0 0 24 24" className="animate-bounce"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>;
          }
        };

        return (
          <section key={section.title} className={`max-w-5xl mx-auto flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-12 px-4`}>
            {/* Image section */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full md:w-1/2 relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-t-[3rem] rounded-b-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl animate-slidein">
                <div className="w-full h-full rounded-t-[2.8rem] rounded-b-lg overflow-hidden bg-black">
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Top icon */}
              <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-full p-2 sm:p-3 shadow-xl flex items-center justify-center border-2 border-gray-200 w-12 h-12 sm:w-16 sm:h-16">
                  {getTopIcon()}
                </div>
              </div>
            </div>
            
            {/* Menu content */}
            <div className="w-full md:w-1/2 px-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-1 sm:gap-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white underline">{section.title}</h2>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <svg width="50" height="6" viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[60px] sm:h-2">
                  <path d="M0 4 Q15 0 30 4 Q45 8 60 4" stroke="#4ade80" strokeWidth="2" fill="none" />
                </svg>
              </div>
              
              <ul className="space-y-3 sm:space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-white">
                    <div className="flex items-start">
                      <span className="text-gray-300 mr-2 text-sm sm:text-base">–</span>
                      <div className="flex-1">
                        <span className="font-medium text-white text-sm sm:text-base leading-relaxed">
                          {item.name}
                          {item.bio && <span className="text-green-400 ml-2 font-bold">bio</span>}
                        </span>
                        {item.description && (
                          <span className="block text-gray-300 text-xs sm:text-sm italic mt-1">: {item.description}</span>
                        )}
                        {item.note && (
                          <span className="block text-blue-400 text-xs sm:text-sm italic mt-1">*{item.note}</span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
      
      {/* Service compris note */}
      <div className="max-w-5xl mx-auto text-center sm:text-right py-6 sm:py-8 px-4">
        <p className="text-gray-400 italic text-sm sm:text-base">prix service compris</p>
      </div>
      
      <style>
        {`
          @keyframes slidein { from { opacity: 0; transform: translateY(-40px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        `}
      </style>
    </main>
  );
}
