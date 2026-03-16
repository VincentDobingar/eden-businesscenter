import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Handshake,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router-dom"

const valeurs = [
  {
    icon: ShieldCheck,
    title: "Exigence de qualité",
    text: "Nous accordons une attention particulière aux finitions, à la présentation et à la satisfaction client.",
  },
  {
    icon: Sparkles,
    title: "Valorisation du savoir-faire local",
    text: "Notre activité met en avant une production locale sérieuse et professionnelle au Burundi.",
  },
  {
    icon: Handshake,
    title: "Relations durables",
    text: "Nous développons des collaborations fondées sur la confiance, l’écoute et la constance.",
  },
]

const etapes = [
  "Comprendre les besoins du client",
  "Proposer une solution adaptée",
  "Fabriquer avec soin et régularité",
  "Livrer un produit valorisant et crédible",
]

const APropos = () => {
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
              À propos
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-eden-dark leading-tight mb-6">
              EDEN Business Center, une vision textile fondée sur la qualité et la confiance
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous développons une activité de fabrication et de vente de
              tricots avec l’ambition de proposer des produits bien finis,
              commercialement crédibles et adaptés aux besoins des partenaires
              et revendeurs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl p-8 md:p-10">
              <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-4">
                Notre identité
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-eden-dark mb-6">
                Une marque qui veut conjuguer élégance, sérieux et savoir-faire
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Basée à Kayanza, EDEN Business Center se positionne comme un
                acteur capable d’accompagner la vente et la distribution de
                tricots avec une image soignée et une approche professionnelle.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Notre démarche vise à construire une marque locale forte,
                inspirant confiance, tout en répondant aux attentes des clients
                qui recherchent un partenaire fiable et flexible.
              </p>
            </div>

            <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-eden-green to-emerald-800 text-white shadow-2xl p-8 md:p-10 min-h-[420px] flex flex-col justify-center">
              <img
                src="/public/logo-eden.png"
                alt="Logo EDEN Business Center"
                className="w-32 h-32 object-contain bg-white rounded-3xl p-3 mb-6"
              />
              <h3 className="text-3xl font-bold mb-4">Notre engagement</h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Produire des tricots qui donnent confiance au client final,
                renforcent l’image des partenaires et soutiennent une dynamique
                commerciale durable.
              </p>
              <div className="space-y-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Production locale</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Finition soignée</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">Approche orientée partenariat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-eden-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-3">
              Nos valeurs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-eden-dark mb-4">
              Les principes qui guident notre travail
            </h2>
            <p className="text-gray-600 text-lg">
              Nous construisons notre activité autour de la qualité, de la
              crédibilité commerciale et du respect des engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valeurs.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-[1.75rem] p-8 shadow-sm border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                    <Icon className="text-eden-green" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-eden-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
            <div className="rounded-[2rem] overflow-hidden shadow-xl bg-gray-100 min-h-[380px]">
              <img
                src="/images/processus1.jpg"
                alt="Processus de fabrication EDEN"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-4">
                Notre démarche
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-eden-dark mb-5">
                Une méthode simple, sérieuse et orientée résultat
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nous avançons avec une approche structurée afin de répondre aux
                attentes de chaque client avec clarté, souplesse et rigueur.
              </p>

              <div className="space-y-4">
                {etapes.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="text-eden-green mt-0.5 shrink-0"
                    />
                    <span className="text-gray-700 text-lg">{step}</span>
                  </div>
                ))}
              </div>
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
                  Vision
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Faire d’EDEN une référence locale crédible et élégante
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                  Nous voulons bâtir une marque reconnue pour son sérieux, sa
                  qualité et sa capacité à répondre durablement aux besoins du
                  marché.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/produits"
                  className="inline-flex items-center gap-2 bg-white text-eden-green px-7 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition"
                >
                  Voir nos produits
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 rounded-2xl font-bold hover:bg-white/10 transition"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default APropos