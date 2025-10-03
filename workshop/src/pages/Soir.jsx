import Header from '../components/Header';
import Image1 from '../assets/imagefood/image6.jpg';
import Image2 from '../assets/imagefood/image5.jpg';

const soirMenuSections = [
  {
    title: "FLAMMEKUECHE TRADITIONNELLES",
    subtitle: "Base crème de Bresse et fromage blanc | Légumes & comté bio",
    items: [
      {
        name: "TRADITIONNELLE",
        description: "(oignons + lardons fumés)",
        price: "11€",
        special: true
      },
      {
        name: "GRATINÉE",
        description: "(oignons + lardons fumés + comté 8 mois)",
        price: "13€",
        special: true
      },
      {
        name: "FORESTIÈRE",
        description: "(oignons + lardons fumés + champignons + persillade)",
        price: "13€",
        special: true
      },
      {
        name: "MUNSTER",
        description: "(oignons + lardons fumés + munster fermier)",
        price: "14€",
        special: true
      },
      {
        name: "GRATON",
        description: "(oignons + gratons + comté 8 mois + persillade)",
        price: "13€"
      }
    ],
    image: Image1
  },
  {
    title: "FLAMMEKUECHE SPÉCIALITÉS",
    subtitle: "Nos créations gourmandes et spécialités maison",
    items: [
      {
        name: "VÉGÉTARIENNE",
        description: "(oignons + champignons + comté 8 mois + persillade)",
        price: "13€"
      },
      {
        name: "FAUMON",
        description: "(oignons + carottes fumées + comté 8 mois + ciboulette)",
        price: "13€"
      },
      {
        name: "SAUMON",
        description: "(oignons + saumon fumé maison + comté 8 mois + ciboulette)",
        price: "16€"
      },
      {
        name: "ANCHOIS",
        description: "(oignons + anchois + comté 8 mois + ciboulette)",
        price: "13€"
      },
      {
        name: "LA PIQUANTE",
        description: "(oignons + champignons + comté 8 mois + lardons fumés + gratons + persillade + piment antillais + pickles oignons rouge)",
        price: "14€",
        special: true,
        option: "OPTION Magret de canard fumé et séché maison du Gers pour remplacer les lardons",
        optionPrice: "+2€"
      }
    ],
    image: Image2
  }
];

const menuNotes = {
  maximum: "Maximum 2 tartes flambées/table/commande",
  bread: "Pâte à pain maison élaborée au levain naturel uniquement & farine Les Moulins de Perrine (31)"
};

export default function Soir() {
  return (
    <main className="pt-20 bg-[#101416] min-h-screen">
      <Header />
      
      {/* Menu du Soir Title with Time */}
      <div className="max-w-5xl mx-auto text-center py-6 px-4">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Menu du Soir
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
            <div className="flex flex-col items-center">
              <span className="text-orange-400 text-lg sm:text-xl font-semibold px-4 py-2 border-2 border-orange-400 rounded-full mb-1">
                🌙 Ma, Me, Je, Di : 18H45 - 21H00
              </span>
              <span className="text-red-400 text-sm sm:text-base font-semibold px-3 py-1 border border-red-400 rounded-full">
                Ve & Sa : 18H45 - 21H30
              </span>
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
          <p className="text-gray-300 text-sm sm:text-base italic">
            Horaires d'ouverture selon les jours de la semaine
          </p>
        </div>
      </div>

      {/* Flammekueche Sections */}
      {soirMenuSections.map((section, index) => {
        const getTopIcon = () => {
          if (index === 0) {
            return <svg width="40" height="40" fill="none" stroke="#f97316" strokeWidth="2" viewBox="0 0 24 24" className="animate-bounce"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>;
          } else {
            return <svg width="40" height="40" fill="none" stroke="#dc2626" strokeWidth="2" viewBox="0 0 24 24" className="animate-pulse"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
          }
        };

        return (
          <section key={section.title} className={`max-w-5xl mx-auto flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-12 px-4`}>
            {/* Image section */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full md:w-1/2 relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-t-[3rem] rounded-b-lg bg-gradient-to-br from-orange-500 via-red-500 to-purple-500 p-1 shadow-2xl animate-slidein">
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
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-red-400 underline mb-2">
                  {section.title}
                </h2>
                <p className="text-green-400 text-sm sm:text-base italic mb-1">
                  {section.subtitle}
                </p>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <svg width="50" height="6" viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[60px] sm:h-2">
                  <path d="M0 4 Q15 0 30 4 Q45 8 60 4" stroke="#4ade80" strokeWidth="2" fill="none" />
                </svg>
              </div>
              
              <ul className="space-y-3 sm:space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-white">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 mr-3">
                        <span className={`font-bold text-sm sm:text-base ${item.special ? 'text-yellow-400' : 'text-white'}`}>
                          {item.name}
                          {item.special && <span className="text-yellow-400 ml-1">*</span>}
                        </span>
                        <span className="block text-gray-300 text-xs sm:text-sm italic mt-1">
                          {item.description}
                        </span>
                        {item.option && (
                          <>
                            <span className="block text-blue-400 text-xs sm:text-sm italic mt-2 underline">
                              *{item.option}
                            </span>
                            <span className="block text-orange-400 text-xs sm:text-sm font-bold mt-1">
                              {item.optionPrice}
                            </span>
                          </>
                        )}
                      </div>
                      <span className="text-orange-400 text-lg sm:text-xl font-bold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* Notes Section */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
          <p className="text-red-400 text-sm sm:text-base font-semibold mb-2">
            {menuNotes.maximum}
          </p>
          <p className="text-gray-400 text-xs sm:text-sm italic">
            {menuNotes.bread}
          </p>
        </div>
      </div>
      
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
