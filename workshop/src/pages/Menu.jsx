import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";

const AllMenus = () => {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  const menuSections = [
    {
      id: 1,
      title: "Jour",
      subtitle: "Morning Delights",
      time: "12:00 - 14:00",
      description:
        "manger les burgers yammy yammy manger le s pizzas yammyyammy hello HAHAH",
      image: "src/assets/imagefood/image8.jpg",
      color: "from-orange-400 to-amber-500",
      icon: "☀️",
      pdfUrl: "../assets/pdfmenus/pour-menu-jour.pdf",
    },
    {
      id: 2,
      title: "Brunch",
      subtitle: "Midday Indulgence",
      time: "14:00 - 18:00",
      description:
        "Mélange parfait du petit déjeuner et du déjeuner avec des cocktails, des salades.",
      image: "src/assets/imagefood/image10.jpg",
      color: "from-emerald-400 to-teal-500",
      icon: "🧇🥐☕",
      pdfUrl: "../assets/pdfmenus/pour-menu-brunch.pdf",
    },
    {
      id: 3,
      title: "Soir",
      subtitle: "Evening Excellence",
      time: "18:45 - 21:00",
      description:
        "Notre menu de dîner sélectionné par le chef, nos vins fins et nos desserts.",
      image: "src/assets/imagefood/image13.jpg",
      color: "from-purple-500 to-indigo-600",
      icon: "🍽️🥂🍝👩🏻‍🍳",
      pdfUrl: "../assets/pdfmenus/pour-menu-soir.pdf",
    },
  ];

  const handleCardClick = (menuId) => {
    // In a real app, this would navigate to the actual menu page
    console.log(`Navigating to ${menuId} menu page`);
    // Example: navigate(`/menu/${menuId}`);
    navigate(`/${menuId}`);
    // Reset active card after animation
    setTimeout(() => setActiveCard(null), 300);
  };

  const handleDownload = (e, pdfUrl, pdfName) => {
    e.stopPropagation(); // Prevent card click when downloading
    // In a real app, this would trigger the PDF download
    console.log(`Downloading ${pdfUrl}`);
    const doc = new jsPDF();
    doc.save(pdfName);
  };

  return (
    <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#872E1E] mb-4">
            Notre menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos menus soigneusement élaborés pour chaque occasion.
            Chaque plat raconte une histoire de passion et de qualité.
          </p>
          <div className="w-24 h-1 bg-[#872E1E] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {menuSections.map((menu) => (
            <div
              key={menu.id}
              className={`group relative bg-[#F8F0ED] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                activeCard === menu.id ? "scale-95" : ""
              }`}
              onClick={() => handleCardClick(menu.title)}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${menu.color} opacity-80 mix-blend-multiply`}
                ></div>

                {/* Icon and Title Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="text-3xl">{menu.icon}</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{menu.title}</h3>
                  <p className="text-white/90 font-medium">{menu.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Time Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  {menu.time}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {menu.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* View Menu Button */}
                  <button
                    className="flex-1 bg-[#872E1E] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 text-center"
                    onClick={() => handleCardClick(menu.id)}
                  >
                    Voir le menu complet
                  </button>

                  {/* Download Button */}
                  <button
                    onClick={(e) => handleDownload(e, menu.pdfUrl, menu.title)}
                    className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    PDF
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${menu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
              >
                <div className="absolute inset-[2px] rounded-2xl bg-white z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMenus;
