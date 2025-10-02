import { useState, useEffect } from "react";
import { Menu, X, Instagram, Phone, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ logoText = "Utopia ", bgImage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-cover bg-center  max-h-0.5">
      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-[#872E1E]/80 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/10">
                <img
                  src="src\assets\imagelocal\LOGO-Restaurant-Utopia-Borderouge2-768x436.png"
                  alt=""
                />
              </div>
              <span className="text-white font-semibold tracking-wide">
                {logoText}
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex md:items-center md:gap-6">
              <Link
                to="/menu"
                className="text-white/90 hover:text-white transition"
              >
                Menu
              </Link>
              <a
                href="#about"
                className="text-white/80 hover:text-white transition"
              >
                About
              </a>
              <a
                href="#private-dining"
                className="text-white/80 hover:text-white transition"
              >
                Private Dining
              </a>
              <a
                href="#policies"
                className="text-white/80 hover:text-white transition"
              >
                Policies
              </a>
              <a
                href="#contact"
                className="text-white/80 hover:text-white transition"
              >
                Contact
              </a>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <a
                href="#reserve"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#6A2519] text-white shadow-lg hover:scale-105 transform transition"
              >
                Reserve
              </a>

              <div className="hidden md:flex items-center gap-2">
                <a
                  href="#"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61550992137450"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
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
          <div className="md:hidden backdrop-blur-sm bg-white/10 border-t border-white/5">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#menu" className="block text-white font-medium">
                Menu
              </a>
              <a href="#about" className="block text-white/90">
                About
              </a>
              <a href="#private-dining" className="block text-white/90">
                Private Dining
              </a>
              <a href="#policies" className="block text-white/90">
                Policies
              </a>
              <a href="#contact" className="block text-white/90">
                Contact
              </a>
              <a
                href="#reserve"
                className="block mt-2 px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-900 text-center"
              >
                Reserve
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero section for demo */}
    </div>
  );
}
