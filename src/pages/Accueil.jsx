import { Link } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Sparkles,
  PhoneCall,
} from "lucide-react"
import Seo from "../components/Seo.jsx"

const produits = [
  {
    title: "Tricots classiques",
    description:
      "Des modèles sobres, élégants et durables pour la vente en boutique et les commandes récurrentes.",
    image: "/images/tricot1.jpg",
  },
  {
    title: "Tricots techniques",
    description:
      "Des finitions soignées et une fabrication adaptée aux besoins spécifiques des partenaires.",
    image: "/images/tricot2.jpg",
  },
  {
    title: "Tricots personnalisés",
    description:
      "Personnalisation selon vos besoins pour entreprises, revendeurs et commandes sur mesure.",
    image: "/images/tricot3.jpg",
  },
]

const avantages = [
  {
    icon: ShieldCheck,
    title: "Qualité maîtrisée",
    text: "Chaque pièce est réalisée avec une attention particulière à la finition, à la durabilité et à la présentation.",
  },
  {
    icon: Sparkles,
    title: "Savoir-faire local",
    text: "Nous valorisons une production locale sérieuse, capable de répondre à une clientèle exigeante.",
  },
  {
    icon: Truck,
    title: "Partenariats flexibles",
    text: "Nous travaillons avec revendeurs, entreprises et distributeurs dans une logique de croissance durable.",
  },
]

const chiffres = [
  { value: "100%", label: "Production locale" },
  { value: "Qualité", label: "Finition soignée" },
  { value: "B2B", label: "Partenariats commerciaux" },
]

const temoignages = [
  {
    name: "Boutique Imboneza",
    role: "Revendeur local",
    text: "Les finitions sont propres et la qualité inspire confiance. Nos clients apprécient beaucoup les produits.",
  },
  {
    name: "Maison Urumuri",
    role: "Partenaire commercial",
    text: "EDEN Business Center montre du sérieux dans la présentation, l'écoute et la régularité.",
  },
  {
    name: "Atelier Dukore",
    role: "Client professionnel",
    text: "Nous avons apprécié la souplesse de collaboration et la capacité à répondre à une demande personnalisée.",
  },
]

const partenaires = [
  "Revendeurs",
  "Boutiques",
  "Entreprises",
  "Distributeurs",
]

const Accueil = () => {
  return (
    <>
      <Seo
        title="EDEN Business Center | Tricots de qualité au Burundi"
        description="Fabrication et vente de tricots de qualité à Kayanza, Burundi. Produits sur mesure, revendeurs et partenaires commerciaux bienvenus."
        canonical="https://eden-bunsinesscenter.com/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EDEN Business Center",
          url: "https://eden-bunsinesscenter.com/",
          logo: "https://eden-bunsinesscenter.com/logo-eden.png",
          email: "contact@eden-bunsinesscenter.com",
          telephone: "+25761379229",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kayanza",
            addressCountry: "BI",
          },
        }}
      />

      <div className="bg-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-eden-light via-white to-emerald-50">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-16 -left-16 w-72 h-72 bg-emerald-100 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-amber-100 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white border border-emerald-100 shadow-sm rounded-full px-4 py-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-eden-green" />
                  <span className="text-sm font-semibold text-eden-dark">
                    Fabrication & vente de tricots au Burundi
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-eden-dark leading-tight">
                  Des tricots de qualité, pensés pour la{" "}
                  <span className="text-eden-green">vente</span>, la{" "}
                  <span className="text-eden-green">distribution</span> et les{" "}
                  <span className="text-eden-green">commandes sur mesure</span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  EDEN Business Center accompagne les revendeurs, entreprises et
                  partenaires commerciaux avec des tricots élégants, bien finis
                  et adaptés aux besoins du marché.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/produits"
                    className="inline-flex items-center gap-2 bg-eden-green text-white px-7 py-4 rounded-2xl font-bold shadow-lg shadow-emerald-200 hover:opacity-95 transition"
                  >
                    Découvrir nos produits
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border-2 border-eden-green text-eden-green px-7 py-4 rounded-2xl font-bold hover:bg-eden-green hover:text-white transition"
                  >
                    Demander un devis
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {chiffres.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/90 backdrop-blur border border-gray-100 shadow-sm rounded-2xl p-5"
                    >
                      <div className="text-2xl font-bold text-eden-green">
                        {item.value}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-5 lg:p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 bg-gradient-to-br from-eden-green to-emerald-800 rounded-[1.5rem] p-8 flex items-center justify-center min-h-[260px]">
                      <img
                        src="/LogoEdenBlc.png"
                        alt="Logo EDEN Business Center"
                        className="max-h-52 object-contain drop-shadow-xl"
                      />
                    </div>

                    <div className="rounded-[1.25rem] overflow-hidden min-h-[180px] bg-gray-100">
                      <img
                        src="/images/tricot1.jpg"
                        alt="Tricot EDEN"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="rounded-[1.25rem] overflow-hidden min-h-[180px] bg-gray-100">
                      <img
                        src="/images/tricot2.jpg"
                        alt="Fabrication de tricots"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-4 md:left-auto md:-right-6 bg-white shadow-xl border border-gray-100 rounded-2xl p-4 max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <CheckCircle2 className="text-eden-green" size={22} />
                    </div>
                    <div>
                      <p className="font-bold text-eden-dark">
                        Partenaire de confiance
                      </p>
                      <p className="text-sm text-gray-600">
                        Pour revendeurs, entreprises et commandes personnalisées.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-3">
                Nos collections
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-eden-dark mb-4">
                Une gamme pensée pour les besoins du marché
              </h2>
              <p className="text-gray-600 text-lg">
                Nous proposons des tricots adaptés à plusieurs usages, avec un
                accent particulier sur la qualité, la présentation et la
                satisfaction client.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {produits.map((produit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-[1.75rem] border border-gray-100 shadow-sm hover:shadow-xl transition overflow-hidden"
                >
                  <div className="h-72 overflow-hidden bg-gray-100">
                    <img
                      src={produit.image}
                      alt={produit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-eden-dark mb-3">
                      {produit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {produit.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-eden-green font-bold hover:gap-3 transition-all"
                    >
                      Demander plus d'informations
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-eden-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-3">
                Pourquoi nous choisir
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-eden-dark mb-4">
                Une image sérieuse, un travail soigné, une vision durable
              </h2>
              <p className="text-gray-600 text-lg">
                Notre ambition est de faire d&apos;EDEN Business Center une marque
                reconnue pour son sérieux, sa qualité et sa capacité à répondre
                aux besoins des partenaires commerciaux.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {avantages.map((item, index) => {
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-3">
                Notre méthode
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-eden-dark mb-4">
                Un processus simple et professionnel
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Échange sur le besoin",
                  text: "Nous analysons votre demande, le type de produit recherché et le volume souhaité.",
                },
                {
                  step: "02",
                  title: "Proposition adaptée",
                  text: "Nous vous orientons vers la solution la plus adaptée à votre activité et à vos objectifs.",
                },
                {
                  step: "03",
                  title: "Production & livraison",
                  text: "Nous lançons la fabrication avec un souci constant de qualité et de satisfaction client.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-[1.75rem] border border-gray-100 p-8 bg-gradient-to-b from-white to-emerald-50/40"
                >
                  <div className="text-5xl font-bold text-emerald-100 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-eden-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-3">
                Témoignages
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-eden-dark mb-4">
                Ce que disent nos partenaires
              </h2>
              <p className="text-gray-600 text-lg">
                Une marque se construit aussi par la confiance et l’expérience vécue.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {temoignages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[1.75rem] p-8 shadow-sm border border-gray-100"
                >
                  <div className="text-4xl text-eden-gold mb-4">“</div>
                  <p className="text-gray-600 leading-relaxed mb-6">{item.text}</p>
                  <div>
                    <h3 className="font-bold text-eden-dark">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-eden-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-3">
                Réseau
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-eden-dark mb-4">
                Nous travaillons avec différents profils de partenaires
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partenaires.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[1.5rem] bg-white border border-gray-100 shadow-sm px-6 py-8 text-center font-semibold text-eden-dark"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-eden-green to-emerald-800 text-white px-8 md:px-14 py-12 md:py-14 shadow-2xl">
              <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <p className="text-amber-200 font-semibold uppercase tracking-[0.2em] mb-3">
                    Travaillons ensemble
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Besoin d&apos;un partenaire fiable pour vos tricots ?
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                    Contactez-nous pour discuter de vos besoins, obtenir un devis
                    ou construire une collaboration durable avec EDEN Business
                    Center.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-eden-green px-7 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition"
                  >
                    Nous contacter
                    <ArrowRight size={18} />
                  </Link>

                  <a
                    href="tel:+25762500305"
                    className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 rounded-2xl font-bold hover:bg-white/10 transition"
                  >
                    <PhoneCall size={18} />
                    Appeler
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Accueil