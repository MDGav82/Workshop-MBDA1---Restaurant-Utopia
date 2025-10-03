import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram, Phone, Facebook } from "lucide-react";
import Logo from '../assets/imagelocal/logo.png';

export default function Navbar({ bgImage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="bg-cover bg-center  max-h-0.5"
      style={{
        backgroundImage:
          bgImage ||
          "url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&s=')",
      }}
    >
      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-[#872E1E] shadow-lg border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-32">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="w-50 h-50 m-2 p-2 object-contain" />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex md:items-center md:gap-6">
                <Link
                  to="/"
                  className="text-[1rem] md:text-[1.2rem] text-white/90 hover:text-amber-400 font-semibold px-3 py-1 rounded transition"
                >
                  Home
                </Link>
                <Link
                  to="/menu"
                  className="text-[1rem] md:text-[1.2rem] text-white/80 hover:text-amber-400 font-semibold px-3 py-1 rounded transition"
                >
                  Menu
                </Link>
                <div className="relative group">
                  <button className="inline-flex items-center px-3 py-1 bg-white border border-amber-400 font-bold text-amber-700 text-base tracking-wide shadow-md focus:outline-none gap-1">
                    <span className="text-[1rem] md:text-[1.2rem]">Menus du jour</span>
                    <svg className="w-4 h-4 text-amber-700 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute left-0 mt-2 min-w-[11.5rem] bg-white border border-amber-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-50">
                    <Link
                      to="/jour"
                      className="text-[1rem] md:text-[1.2rem] block px-4 py-2 text-amber-700 hover:bg-amber-100 font-semibold rounded-t"
                    >
                      Jour
                    </Link>
                    <Link
                      to="/brunch"
                      className="text-[1rem] md:text-[1.2rem] text-[1rem] md:text-[1.2rem] block px-4 py-2 text-amber-700 hover:bg-amber-100 font-semibold"
                    >
                      Brunch
                    </Link>
                    <Link
                      to="/soir"
                      className="text-[1rem] md:text-[1.2rem] block px-4 py-2 text-amber-700 hover:bg-amber-100 font-semibold rounded-b"
                    >
                      Soir
                    </Link>
                  </div>
                </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <Link
                to="/reservations"
                className="hidden md:inline-flex items-center px-5 py-2 mr-4 text-base font-bold bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500 text-white shadow-xlhover:scale-105 transition-all border-2 border-white/30"
                style={{letterSpacing: '0.03em'}}
              >
                <span className="mr-2">Contact & Réservations</span>
                <span className="tracking-widest">+33 7 52 08 14 49</span>
              </Link>

              <div className="hidden md:flex items-center gap-2">
                <a href="#" className="p-3 rounded-full bg-white/20 hover:bg-rose-500 transition" aria-label="Instagram">
                <Instagram className="w-7 h-7 text-white" />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/20 hover:bg-blue-600 transition" aria-label="Facebook">
                  <Facebook className="w-7 h-7 text-white" />
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                className="md:hidden p-2 rounded-md bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#872E1E]/95 z-[60] flex flex-col animate-slideDown  border-b-4 border-amber-400">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-transform duration-300 ease-in-out transform hover:rotate-90"
                aria-label="Close menu"
              >
                <X className="w-8 h-8 text-white" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-6">
              <Link to="/" className="text-white text-2xl font-bold py-2 px-6  hover:bg-amber-400 hover:text-[#872E1E] transition w-full text-center" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link to="/menu" className="text-white text-2xl font-bold py-2 px-6  hover:bg-amber-400 hover:text-[#872E1E] transition w-full text-center" onClick={() => setMobileOpen(false)}>
                Nos Menus
              </Link>
              <Link to="/jour" className="text-white text-2xl font-bold py-2 px-6  hover:bg-amber-400 hover:text-[#872E1E] transition w-full text-center" onClick={() => setMobileOpen(false)}>
                Menu Jour
              </Link>
              <Link to="/brunch" className="text-white text-2xl font-bold py-2 px-6  hover:bg-amber-400 hover:text-[#872E1E] transition w-full text-center" onClick={() => setMobileOpen(false)}>
                Menu Brunch
              </Link>
              <Link to="/soir" className="text-white text-2xl font-bold py-2 px-6  hover:bg-amber-400 hover:text-[#872E1E] transition w-full text-center" onClick={() => setMobileOpen(false)}>
                Menu Soir
              </Link>
              <Link
                to="/reservations"
                className="mt-4 p-3  text-lg font-bold bg-white text-[#872E1E] text-center shadow-lg hover:bg-amber-600 hover:text-white transition w-80"
                onClick={() => setMobileOpen(false)}
              >
                Réserver
              </Link>
            </div>
            <div className="flex justify-center gap-6 pb-8">
              <a href="#" className="p-3 rounded-full bg-white/20 hover:bg-rose-500 transition" aria-label="Instagram">
                <Instagram className="w-7 h-7 text-white" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/20 hover:bg-blue-600 transition" aria-label="Facebook">
                <Facebook className="w-7 h-7 text-white" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero section for demo */}
    </div>
  );
}
