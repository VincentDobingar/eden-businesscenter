import { useEffect, useMemo, useState } from "react"
import {
  X,
  Search,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Link } from "react-router-dom"
import Seo from "../components/Seo.jsx"
import OptimizedImage from "../components/OptimizedImage.jsx"

const images = [
  { src: "/images/galerie/tricot1.jpg", alt: "Tricot classique EDEN", category: "Classiques" },
  { src: "/images/galerie/tricot2.jpg", alt: "Tricot technique EDEN", category: "Techniques" },
  { src: "/images/galerie/tricot3.jpg", alt: "Tricot personnalisé EDEN", category: "Personnalisés" },
  { src: "/images/galerie/processus1.jpg", alt: "Processus de fabrication", category: "Production" },
  { src: "/images/galerie/processus2.jpg", alt: "Atelier de production", category: "Production" },
  { src: "/images/galerie/modele1.jpg", alt: "Modèle premium en tricot", category: "Classiques" },
  { src: "/images/galerie/modele2.jpg", alt: "Finition haut de gamme", category: "Techniques" },
  { src: "/images/galerie/modele3.jpg", alt: "Commande personnalisée", category: "Personnalisés" },
]

const categories = ["Toutes", "Classiques", "Techniques", "Personnalisés", "Production"]

const Galerie = () => {
  const [activeCategory, setActiveCategory] = useState("Toutes")
  const [selectedIndex, setSelectedIndex] = useState(null)

  const filteredImages = useMemo(() => {
    if (activeCategory === "Toutes") return images
    return images.filter((img) => img.category === activeCategory)
  }, [activeCategory])

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null

  const openPreview = (index) => setSelectedIndex(index)
  const closePreview = () => setSelectedIndex(null)

  const showPrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    )
  }

  const showNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    )
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      if (selectedIndex === null) return
      if (e.key === "Escape") closePreview()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [selectedIndex, filteredImages.length])

  useEffect(() => {
    closePreview()
  }, [activeCategory])

  return (
    <>
      <Seo
        title="Galerie | EDEN Business Center"
        description="Découvrez la galerie EDEN Business Center : tricots, finitions, production et modèles personnalisés."
        canonical="https://eden-bunsinesscenter.com/galerie"
      />

      <div className="bg-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-eden-light via-white to-emerald-50 py-20">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-12 left-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl" />
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-4">
                Galerie
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-eden-dark leading-tight mb-6">
                Découvrez nos tricots, nos finitions et notre univers de production
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cette galerie met en avant nos produits, notre savoir-faire et quelques aperçus de notre processus de fabrication.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-3 rounded-2xl font-semibold transition ${
                    activeCategory === category
                      ? "bg-eden-green text-white shadow-eden-md"
                      : "bg-eden-light text-eden-dark hover:bg-emerald-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredImages.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-gray-300 bg-eden-light p-12 text-center">
                <ImageIcon className="mx-auto mb-4 text-eden-green" size={42} />
                <h2 className="text-2xl font-bold text-eden-dark mb-3">
                  Aucune image disponible
                </h2>
                <p className="text-gray-600">
                  Ajoute des images dans le dossier galerie pour les afficher ici.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((img, index) => (
                  <button
                    key={`${img.src}-${index}`}
                    type="button"
                    onClick={() => openPreview(index)}
                    className="group text-left bg-white rounded-[1.75rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition"
                  >
                    <div className="relative h-72 bg-gray-100 overflow-hidden">
                      <OptimizedImage
                        src={img.src}
                        alt={img.alt}
                        width={800}
                        height={800}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition bg-white text-eden-dark rounded-full p-3 shadow-lg">
                          <Search size={22} />
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-sm font-semibold text-eden-gold mb-2">
                        {img.category}
                      </p>
                      <h3 className="text-lg font-bold text-eden-dark leading-snug">
                        {img.alt}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] bg-gradient-to-r from-eden-green to-emerald-800 text-white px-8 md:px-14 py-12 md:py-14 shadow-2xl">
              <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <p className="text-amber-200 font-semibold uppercase tracking-[0.2em] mb-3">
                    Besoin d'informations
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Vous souhaitez commander ou demander un devis ?
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                    Contactez-nous pour discuter de vos besoins et recevoir une proposition adaptée.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-eden-green px-7 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition"
                  >
                    Nous contacter
                  </Link>

                  <Link
                    to="/produits"
                    className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 rounded-2xl font-bold hover:bg-white/10 transition"
                  >
                    Voir les produits
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
              <button
                type="button"
                onClick={closePreview}
                className="absolute top-3 right-3 z-20 bg-white text-eden-dark rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
                aria-label="Fermer l'aperçu"
              >
                <X size={22} />
              </button>

              <button
                type="button"
                onClick={showPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/95 text-eden-dark rounded-full p-3 shadow-lg hover:bg-white transition"
                aria-label="Image précédente"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/95 text-eden-dark rounded-full p-3 shadow-lg hover:bg-white transition"
                aria-label="Image suivante"
              >
                <ChevronRight size={24} />
              </button>

              <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="bg-gray-100 max-h-[80vh] overflow-hidden">
                  <OptimizedImage
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1400}
                    height={1000}
                    className="w-full h-full object-contain max-h-[80vh]"
                    eager
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-eden-gold mb-2">
                    {selectedImage.category}
                  </p>
                  <h3 className="text-2xl font-bold text-eden-dark">
                    {selectedImage.alt}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Galerie