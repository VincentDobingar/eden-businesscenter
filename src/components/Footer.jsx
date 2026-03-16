import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-eden-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/Logo-eden.png"
                alt="Logo EDEN Business Center"
                className="w-14 h-14 object-contain bg-white rounded-xl p-1"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">EDEN</h3>
                <p className="text-amber-300 text-sm">Business Center</p>
              </div>
            </div>

            <p className="text-white/75 leading-relaxed">
              Fabrication et vente de tricots de qualité pour revendeurs,
              partenaires commerciaux et commandes sur mesure.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Navigation</h4>
            <ul className="space-y-3 text-white/75">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/produits" className="hover:text-white transition">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="hover:text-white transition">
                    Galerie
                </Link>
              </li>
              <li>
                <Link to="/apropos" className="hover:text-white transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Coordonnées</h4>
            <ul className="space-y-4 text-white/75">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-amber-300 flex-shrink-0" />
                <span>Kayanza, Burundi</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-amber-300 flex-shrink-0" />
                <a href="tel:+25761379229" className="hover:text-white transition">
                  +257 61 379 229
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-amber-300 flex-shrink-0" />
                <a
                  href="mailto:guiryambaye.vincent@gmail.com"
                  className="hover:text-white transition break-all"
                >
                  contact@eden-businesscenter.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">Suivez-nous</h4>
            <p className="text-white/75 mb-5">
              Développons une présence de marque forte et professionnelle.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {year} EDEN Business Center. Tous droits réservés.</p>
          <p>Conçu avec élégance pour valoriser votre marque.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer