import { Menu, X, PhoneCall } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/produits", label: "Produits" },
  { to: "/galerie", label: "Galerie" },
  { to: "/apropos", label: "À propos" },
  { to: "/contact", label: "Contact" },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-eden-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/80 text-center sm:text-left">
            Fabrication & vente de tricots de qualité au Burundi
          </p>
          <a
            href="tel:+25762500305"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-white transition"
          >
            <PhoneCall size={15} />
            <span>+257 61 379 229</span>
          </a>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <img
                src="Logo-eden.png"
                alt="Logo EDEN Business Center"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div className="leading-tight min-w-0">
                <span className="block text-2xl font-bold text-eden-green tracking-wide">
                  EDEN
                </span>
                <span className="block text-sm text-eden-gold truncate">
                  Business Center
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-xl font-medium transition ${
                    isActive(link.to)
                      ? "bg-emerald-50 text-eden-green"
                      : "text-gray-700 hover:text-eden-green hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/25762500305?text=Bonjour%20EDEN%20Business%20Center%2C%20je%20souhaite%20avoir%20plus%20d%27informations%20sur%20vos%20tricots."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border border-eden-green text-eden-green font-semibold hover:bg-eden-green hover:text-white transition"
              >
                WhatsApp
              </a>

              <Link
                to="/contact"
                className="px-5 py-3 rounded-xl bg-eden-green text-white font-semibold shadow-md hover:opacity-95 transition"
              >
                Demander un devis
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 text-eden-green hover:bg-gray-50 transition"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden pb-5">
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-3 rounded-xl font-medium transition ${
                      isActive(link.to)
                        ? "bg-emerald-50 text-eden-green"
                        : "text-gray-700 hover:bg-gray-50 hover:text-eden-green"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="grid sm:grid-cols-2 gap-3 mt-3">
                  <a
                    href="https://wa.me/25762500305?text=Bonjour%20EDEN%20Business%20Center%2C%20je%20souhaite%20avoir%20plus%20d%27informations%20sur%20vos%20tricots."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-4 py-3 rounded-xl border border-eden-green text-eden-green font-semibold hover:bg-eden-green hover:text-white transition"
                  >
                    WhatsApp
                  </a>

                  <Link
                    to="/contact"
                    className="text-center px-4 py-3 rounded-xl bg-eden-green text-white font-semibold hover:opacity-95 transition"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar