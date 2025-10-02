import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Phone, Sparkles } from "lucide-react";
import AllMenus from "./Menu";

const Home = () => {
  const navigate = useNavigate();
  
  // State for the first image slider
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const slides1 = [
    "src/assets/imagelocal/image1.jpg",
    "src/assets/imagelocal/image2.jpg",
    " src/assets/imagelocal/image3.jpg",
    "src/assets/imagelocal/image4.jpg",
    "src/assets/imagelocal/image5.jpg",
    "src/assets/imagelocal/image6.jpg",
  ];

  // State for the second image slider
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const slides2 = [
    "src/assets/imagefood/image1.jpg",
    "src/assets/imagefood/image2.jpg",
    "src/assets/imagefood/image3.jpg",
    "src/assets/imagefood/image4.jpg",
    "src/assets/imagefood/image5.jpg",
    "src/assets/imagefood/image6.jpg",
    "src/assets/imagefood/image7.jpg",
    "src/assets/imagefood/image8.jpg",
    "src/assets/imagefood/image9.jpg",
    "src/assets/imagefood/image10.jpg",
    "src/assets/imagefood/image11.jpg",
    "src/assets/imagefood/image12.jpg",
  ];

  // Auto-slide functionality for both sliders
  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrentSlide1((prev) => (prev + 1) % slides1.length);
    }, 3000);

    const timer2 = setInterval(() => {
      setCurrentSlide2((prev) => (prev + 1) % slides2.length);
    }, 4000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [slides1.length, slides2.length]);

  return (
    <div className="min-h-screen bg-[#fff] p-6 pt-45">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - 3 divs */}
          <div className="lg:w-2/5 space-y-6">
            {/* Contacts Section */}
            <div className="bg-[#F8F0ED]  shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#872E1E]">
                Contactez-nous
              </h2>
              <div className="space-y-3">
                <p className="flex items-center text-gray-800">
                  <span className="font-semibold w-24 text-[#872E1E]">
                    Contact & Réservations:
                  </span>
                  +33 7 52 08 14 49
                </p>
                <p className="flex items-center text-gray-800">
                  <span className="font-semibold w-24 text-[#872E1E]">
                    Email:
                  </span>
                  soulkitchen.restos@gmail.com
                </p>
                <p className="flex items-center text-gray-800">
                  <span className="font-semibold w-24 text-[#872E1E]">
                    Address:
                  </span>
                  59 Avenue Maurice Bourgès-Maunoury 31200 Toulouse
                </p>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-[#F8F0ED] shadow-md p-2">
              <h2 className="text-2xl font-bold mb-4 text-[#872E1E]">
                Notre Location
              </h2>
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.4097113193557!2d1.4494447757708906!3d43.6396434533082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aea35ac292ed7d%3A0xb1495ed090a16250!2s59%20Av.%20Maurice%20Bourg%C3%A8s-Maunoury%2C%2031200%20Toulouse!5e0!3m2!1sen!2sfr!4v1759327528881!5m2!1sen!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                ></iframe>
              </div>
            </div>

            {/* Hours Section */}
            <div className="bg-[#F8F0ED] shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#872E1E]">
                Horaires
              </h2>
              <div className="space-y-2">
                {[
                  { day: "Lundi", hours: "Fermé" },
                  {
                    day: "Mardi/Mercredi/Jeudi/Dimanche",
                    hours: "11h00 - 21h30",
                  },
                  { day: "Vendredi", hours: "11h00 - 22h30" },
                  { day: "Samedi", hours: "14h30 - 22h30" },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b border-gray-100"
                  >
                    <span className="font-medium text-gray-700">
                      {schedule.day}
                    </span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 2 image sliders */}
          <div className="lg:w-3/5 space-y-15">
            {/* First Image Slider */}
            <div className="bg-[#F8F0ED] shadow-md ">
              <div className="relative overflow-hidden  aspect-video">
                {slides1.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                      index === currentSlide1 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={slide}
                      alt={`Store gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides1.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentSlide1 ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentSlide1(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Second Image Slider */}
            <div className="bg-white shadow-md">
              <div className="relative overflow-hidden aspect-video">
                {slides2.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                      index === currentSlide2 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={slide}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides2.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentSlide2 ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentSlide2(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Reservation Button Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#872E1E] via-[#a53527] to-[#872E1E] p-8  shadow-2xl relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-full animate-ping"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-yellow-300 mr-2 animate-spin" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Réservez Votre Table
                </h2>
                <Sparkles className="w-8 h-8 text-yellow-300 ml-2 animate-spin" />
              </div>
              
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Vivez une expérience culinaire exceptionnelle dans notre restaurant. 
                Réservez dès maintenant pour garantir votre place !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => navigate('/reservations')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-[#872E1E] font-bold text-lg rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-300 animate-pulse hover:animate-none overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                  <span className="relative flex items-center">
                    <Calendar className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Réserver Maintenant
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
                
                <div className="flex items-center text-white/80">
                  <Phone className="w-5 h-5 mr-2 animate-bounce" />
                  <span className="text-sm">ou appelez: +33 7 52 08 14 49</span>
                </div>
              </div>
            </div>
            
            {/* Floating animation elements */}
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
