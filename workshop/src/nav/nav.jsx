import { useState, useEffect } from "react";
import { Menu, X, Instagram, Phone, Facebook } from "lucide-react";

export default function Navbar({ logoText = "Luna & Co.", bgImage }) {
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
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/10">
                <svg
                  className="w-7 h-7 text-white/90"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 9c.5 1 1 2 4 2s3.5-1 4-2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white font-semibold tracking-wide">
                {logoText}
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex md:items-center md:gap-6">
              <a
                href="#menu"
                className="text-white/90 hover:text-white transition"
              >
                Menu
              </a>
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
                className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-amber-400 to-rose-500 text-neutral-900 shadow-lg hover:scale-105 transform transition"
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
                  href="#"
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
