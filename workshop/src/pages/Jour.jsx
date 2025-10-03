
import Header from '../components/Header';
import Image1 from '../assets/imagefood/image9.jpg';
import Image2 from '../assets/imagefood/image11.jpg';
import Image3 from '../assets/imagefood/image12.jpg';

const menuSections = [
  {
    title: "ENTRÉES",
    price: "5,5€",
    items: [
      {
        name: "Soupe de pois chiche citronnée",
        vg: true
      },
      {
        name: "Saumon fumé maison, crumpets au levain, chantilly au raifort"  
      }
    ],
    image: Image1
  },
  {
    title: "PLATS", 
    price: "14€",
    items: [
      {
        name: "Ravioles farcies Ossau Iraty & tomate, crème à l'ail noir, chou Kale sauté, parmesan & salade verte",
        vg: true,
        option: "ou option magret fumé maison"
      },
      {
        name: "Salade César",
        subItems: ["Poulet croustillant", "Halloumi grillé VG"]
      },
      {
        name: "Filet mignon de porc croustillant, sauce porto & riz"
      }
    ],
    image: Image2
  },
  {
    title: "DESSERTS / FROMAGES",
    price: "5,5€", 
    items: [
      {
        name: "Assiette de fromages"
      },
      {
        name: "Financier, crémeux citron, gel framboise, pignons de pin, pistaches"
      },
      {
        name: "Riz au lait, caramel beurre salé, noisettes & amandes caramélisées"
      },
      {
        name: "Coupe glacée par KIMGLACE – 2 parfums au choix : Vanille / Noisette / Chocolat / Fleur de lait / Citron vert / Melon"
      }
    ],
    image: Image3
  }
];

export default function Jour() {
  return (
    <main className="pt-20 bg-[#101416] min-h-screen">
      <Header />
      
      {/* Menu du Jour Title with Time */}
      <div className="max-w-5xl mx-auto text-center py-6 px-4">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-3">
            Menu du Jour
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
            <span className="text-yellow-400 text-lg sm:text-xl font-semibold px-4 py-2 border-2 border-yellow-400 rounded-full">
              🕐 12:00H - 14:00H
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          <p className="text-gray-300 text-sm sm:text-base italic">
            Disponible uniquement aux heures indiquées
          </p>
        </div>
      </div>
      
      {/* Formula entrée, plat, dessert header - PROMOTION */}
      <div className="max-w-5xl mx-auto text-center py-6 px-4 sm:py-10">
        <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-2xl p-1 shadow-2xl animate-pulse">
          <div className="bg-[#101416] rounded-xl px-6 py-4 sm:px-8 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                  🔥 OFFRE SPÉCIALE 🔥
                </span>
                <h1 className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-extrabold text-center sm:text-left">
                  Formule entrée, plat, dessert
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl font-black">
                  23€
                </span>
                <span className="text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  Prix Exceptionnel
                </span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Menu sections */}
      {menuSections.map((section, index) => {
        const getTopIcon = () => {
          if (section.title === "ENTRÉES") {
            return <svg width="40" height="40" fill="none" stroke="#ffd23f" strokeWidth="2" viewBox="0 0 24 24" className="animate-pulse"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>;
          } else if (section.title === "PLATS") {
            return <svg width="40" height="40" fill="none" stroke="#ffd23f" strokeWidth="2" viewBox="0 0 24 24" className="animate-bounce"><rect x="3" y="11" width="18" height="2" rx="1" /><path d="M12 3v18" /><circle cx="12" cy="7" r="2" /></svg>;
          } else {
            return <svg width="40" height="40" fill="none" stroke="#ff6b9d" strokeWidth="2" viewBox="0 0 24 24" className="animate-spin"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M8 12l2 2 4-4" /></svg>;
          }
        };

        return (
          <section key={section.title} className={`max-w-5xl mx-auto flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-12 px-4`}>
            {/* Image section */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full md:w-1/2 relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-t-[3rem] rounded-b-lg bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-1 shadow-2xl animate-slidein">
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
              <span className="text-white text-xl sm:text-2xl font-bold">{section.price}</span>
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
                    <span className="text-gray-300 mr-2 text-sm sm:text-base">•</span>
                    <div className="flex-1">
                      <span className="font-medium text-white text-sm sm:text-base leading-relaxed">
                        {item.name}
                        {item.vg && <span className="text-green-400 ml-2 font-bold">VG</span>}
                      </span>
                      {item.option && (
                        <span className="block text-gray-400 text-xs sm:text-sm italic mt-1">({item.option})</span>
                      )}
                      {item.subItems && (
                        <ul className="ml-2 sm:ml-4 mt-2 space-y-1">
                          {item.subItems.map((subItem, subIdx) => (
                            <li key={subIdx} className="text-gray-300 text-xs sm:text-sm flex items-center">
                              <span className="mr-2">▷</span>
                              {subItem.includes('VG') ? (
                                <>
                                  {subItem.replace(' VG', '')}
                                  <span className="text-green-400 ml-2 font-bold">VG</span>
                                </>
                              ) : (
                                subItem
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        );
      })}      {/* Service compris note */}
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
