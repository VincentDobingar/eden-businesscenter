import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, BadgeCheck, PackageCheck } from "lucide-react"

const categories = [
  {
    title: "Tricots classiques",
    description:
      "Des modèles élégants et polyvalents, adaptés à la vente en boutique et aux commandes régulières.",
    image: "/images/tricot1.jpg",
  },
  {
    title: "Tricots techniques",
    description:
      "Une fabrication plus spécifique pour répondre à des besoins particuliers en termes de finition et de structure.",
    image: "/images/tricot2.jpg",
  },
  {
    title: "Tricots personnalisés",
    description:
      "Des commandes sur mesure pour entreprises, partenaires commerciaux et demandes spécifiques.",
    image: "/images/tricot3.jpg",
  },
  {
    title: "Production & savoir-faire",
    description:
      "Un aperçu de notre processus de fabrication locale et de l’attention apportée à chaque détail.",
    image: "/images/processus1.jpg",
  },
]

const points = [
  "Fabrication locale à Kayanza",
  "Finition soignée et présentation professionnelle",
  "Commandes adaptées aux besoins des clients",
  "Approche flexible pour revendeurs et partenaires",
]

const Produits = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-eden-light via-white to-emerald-50 py-20">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-12 left-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-4">
              Nos produits
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-eden-dark leading-tight mb-6">
              Une collection de tricots pensée pour le marché et la qualité
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              EDEN Business Center propose des tricots conçus avec soin pour les
              revendeurs, entreprises et partenaires commerciaux à la recherche
              de produits fiables, bien finis et valorisants.
            </p>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-eden-dark mb-5">
                Des produits adaptés à plusieurs besoins
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Notre gamme est pensée pour répondre aux attentes de plusieurs
                profils de clients, avec une attention constante portée à
                l’esthétique, à la durabilité et à la satisfaction.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white shadow-sm p-5"
                  >
                    <CheckCircle2
                      size={22}
                      className="text-eden-green mt-0.5 shrink-0"
                    />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-eden-green to-emerald-800 text-white rounded-[2rem] shadow-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <BadgeCheck className="text-amber-300" size={28} />
                <h3 className="text-2xl font-bold">Notre promesse</h3>
              </div>

              <p className="text-white/90 leading-relaxed mb-8">
                Offrir des tricots qui renforcent l’image de vos produits, de
                votre commerce ou de votre entreprise, avec une approche
                professionnelle et flexible.
              </p>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Qualité visuelle</p>
                  <p className="text-sm text-white/80 mt-1">
                    Des pièces conçues pour inspirer confiance et valoriser la marque.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Approche B2B</p>
                  <p className="text-sm text-white/80 mt-1">
                    Un positionnement pensé pour les revendeurs et partenaires.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Souplesse de collaboration</p>
                  <p className="text-sm text-white/80 mt-1">
                    Des échanges simples pour aboutir à une solution adaptée.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {categories.map((item, index) => (
              <article
                key={index}
                className="group bg-white rounded-[1.75rem] border border-gray-100 shadow-sm hover:shadow-xl transition overflow-hidden"
              >
                <div className="h-72 bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-eden-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-eden-green font-bold hover:gap-3 transition-all"
                  >
                    Demander un devis
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-eden-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] overflow-hidden shadow-xl bg-gray-100 min-h-[360px]">
              <img
                src="/images/processus1.jpg"
                alt="Processus de fabrication EDEN"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-4">
                Production
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-eden-dark mb-5">
                Une fabrication locale qui inspire confiance
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Notre processus met l’accent sur la régularité, le soin et la
                qualité perçue. Chaque étape est pensée pour aboutir à un
                produit valorisant et commercialement crédible.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Analyse du besoin client",
                  "Choix du modèle ou de la personnalisation",
                  "Fabrication avec suivi de qualité",
                  "Préparation pour vente ou livraison",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <PackageCheck
                      size={22}
                      className="text-eden-green mt-0.5 shrink-0"
                    />
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-eden-green text-white px-7 py-4 rounded-2xl font-bold shadow-md hover:opacity-95 transition"
              >
                Parler de votre besoin
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-r from-eden-green to-emerald-800 text-white px-8 md:px-14 py-12 md:py-14 shadow-2xl">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-amber-200 font-semibold uppercase tracking-[0.2em] mb-3">
                  Collaboration
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Vous cherchez un fournisseur ou un partenaire textile fiable ?
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                  Contactez EDEN Business Center pour discuter de vos besoins,
                  d’une commande personnalisée ou d’un partenariat commercial.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-eden-green px-7 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition"
                >
                  Demander un devis
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="https://wa.me/25762500305?text=Bonjour%20EDEN%20Business%20Center%2C%20je%20souhaite%20demander%20un%20devis%20pour%20vos%20tricots."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 rounded-2xl font-bold hover:bg-white/10 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Produits