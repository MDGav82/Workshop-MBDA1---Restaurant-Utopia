import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&s=')] bg-cover bg-center min-h-screen">
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
                Luna & Co.
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
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                  aria-label="Phone"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 0 1 2-2h2.6a1 1 0 0 1 .9.56l1 2.2a1 1 0 0 1-.2 1.07L7.5 9.8a11 11 0 0 0 5.7 5.7l2.9-1.3a1 1 0 0 1 1.07-.2l2.2 1a1 1 0 0 1 .56.9V19a2 2 0 0 1-2 2h-1C9.163 21 3 14.837 3 7V5z"
                    />
                  </svg>
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                className="md:hidden p-2 rounded-md bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {mobileOpen ? (
                  <svg
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
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
      <main className="pt-28">
        <section className="max-w-4xl mx-auto text-center py-40">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Fine dining under the stars
          </h1>
          <p className="mt-6 text-white/90 max-w-2xl mx-auto">
            Seasonal tasting menu · Open Wed–Sun · Walk-ins & reservations
          </p>
        </section>
      </main>
    </div>
  );
}
