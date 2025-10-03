import React from "react";
import Header from '../assets/imagefood/header.jpg';
 
              
export default function HeaderComponent() {
  return (
    <header className="w-full h-40 md:h-60 relative overflow-hidden flex items-center justify-center mt-12">
      <img src={Header} alt="Header" className="absolute inset-0 w-full h-full object-cover md:object-fill z-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 w-full text-center">
        <span
          className="block text-4xl md:text-6xl font-extrabold mb-2 animate-fadeleft text-yellow-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          style={{ animation: 'fadeleft 1s ease' }}
        >
          Bienvenue chez
        </span>
        <span
          className="block text-5xl md:text-7xl font-extrabold drop-shadow-2xl bg-gradient-to-r from-yellow-500 via-pink-300 to-red-200 bg-clip-text text-transparent animate-faderight border-glow"
          style={{ 
            animation: 'faderight 1.2s ease, borderPulse 2s ease-in-out infinite',
            textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,215,0,0.6), 0 0 30px rgba(255,105,180,0.4)',
            WebkitTextStroke: '2px rgba(255,255,255,0.3)'
          }}
        >
          UTOPIA
        </span>
      </div>
      <style>
        {`
          @keyframes fadeleft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes faderight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes borderPulse { 
            0%, 100% { 
              text-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,215,0,0.6), 0 0 30px rgba(255,105,180,0.4);
              -webkit-text-stroke: 2px rgba(255,255,255,0.3);
            }
            50% { 
              text-shadow: 0 0 20px rgba(255,255,255,1), 0 0 30px rgba(255,215,0,0.9), 0 0 40px rgba(255,105,180,0.7), 0 0 50px rgba(255,20,147,0.5);
              -webkit-text-stroke: 3px rgba(255,255,255,0.6);
            }
          }
        `}
      </style>
    </header>
  );
}