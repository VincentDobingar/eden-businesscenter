import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  Clock3,
  ArrowRight,
} from "lucide-react"
import Seo from "../components/Seo.jsx"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "",
  })

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  })

  const apiUrl = import.meta.env.VITE_CONTACT_API_URL || "/api/contact.php"

  const whatsappMessage =
    "Bonjour EDEN Business Center, je souhaite avoir plus d'informations sur vos tricots."
  const whatsappUrl = `https://wa.me/25762500305?text=${encodeURIComponent(
    whatsappMessage
  )}`

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus({
      loading: true,
      success: "",
      error: "",
    })

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Erreur lors de l'envoi.")
      }

      setStatus({
        loading: false,
        success: result.message || "Votre message a bien été envoyé.",
        error: "",
      })

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        website: "",
      })
    } catch (error) {
      console.error("Contact form error:", error)

      setStatus({
        loading: false,
        success: "",
        error:
          error.message ||
          "Une erreur est survenue lors de l'envoi. Réessaie ou contacte-nous sur WhatsApp.",
      })
    }
  }

  return (
    <>
      <Seo
        title="Contact | EDEN Business Center"
        description="Contactez EDEN Business Center pour vos besoins en tricots, demandes de devis et partenariats commerciaux."
        canonical="https://eden-bunsinesscenter.com/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact EDEN Business Center",
          url: "https://eden-bunsinesscenter.com/contact",
        }}
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
                Contact
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-eden-dark leading-tight mb-6">
                Parlons de votre besoin en tricots et en partenariat
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Que vous soyez revendeur, entreprise ou partenaire commercial,
                nous sommes disponibles pour échanger sur vos besoins, vos
                volumes et vos demandes spécifiques.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
              <div className="space-y-6">
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8">
                  <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-4">
                    Nos coordonnées
                  </p>
                  <h2 className="text-3xl font-bold text-eden-dark mb-6">
                    Restons en contact
                  </h2>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4 rounded-2xl bg-eden-light p-5">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
                        <MapPin className="text-eden-green" size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-eden-dark mb-1">Adresse</h3>
                        <p className="text-gray-600">
                          Kayanza, Burundi
                          <br />
                          Unité de production spécialisée dans les tricots
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl bg-eden-light p-5">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
                        <Phone className="text-eden-green" size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-eden-dark mb-1">
                          Téléphone
                        </h3>
                        <a
                          href="tel:+25761379229"
                          className="text-gray-600 hover:text-eden-green transition"
                        >
                          +257 61 379 229
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl bg-eden-light p-5">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
                        <Mail className="text-eden-green" size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-eden-dark mb-1">Email</h3>
                        <a
                          href="mailto:contact@eden-businesscenter.org"
                          className="text-gray-600 hover:text-eden-green transition break-all"
                        >
                          contact@eden-businesscenter.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl bg-eden-light p-5">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
                        <Clock3 className="text-eden-green" size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-eden-dark mb-1">
                          Disponibilité
                        </h3>
                        <p className="text-gray-600">
                          Nous répondons rapidement aux demandes d’information,
                          de devis et de collaboration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-gradient-to-br from-eden-green to-emerald-800 text-white shadow-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="text-amber-300" size={24} />
                    <h3 className="text-2xl font-bold">WhatsApp direct</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Pour un échange rapide, vous pouvez aussi nous écrire sur
                    WhatsApp afin d’obtenir des informations sur nos produits ou
                    demander un devis.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-eden-green px-6 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition"
                  >
                    Écrire sur WhatsApp
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl p-8 md:p-10">
                <p className="text-eden-gold font-semibold uppercase tracking-[0.2em] mb-4">
                  Formulaire
                </p>
                <h2 className="text-3xl font-bold text-eden-dark mb-6">
                  Envoyez-nous votre message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-eden-dark">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-eden-green"
                        placeholder="Votre nom"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-eden-dark">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-eden-green"
                        placeholder="+257 ..."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-eden-dark">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-eden-green"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-eden-dark">
                        Sujet
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-eden-green"
                        placeholder="Demande de devis, partenariat..."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-eden-dark">
                      Message
                    </label>
                    <textarea
                      rows="7"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-eden-green resize-y"
                      placeholder="Expliquez-nous votre besoin, le type de produits recherché, les quantités estimées ou toute autre information utile."
                      required
                    />
                  </div>

                  {status.success && (
                    <div className="rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3">
                      {status.success}
                    </div>
                  )}

                  {status.error && (
                    <div className="rounded-2xl bg-red-50 border border-red-200 text-red-700 px-4 py-3">
                      {status.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full inline-flex items-center justify-center gap-3 bg-eden-green text-white py-5 px-8 rounded-2xl text-lg font-bold shadow-lg shadow-emerald-100 hover:opacity-95 transition disabled:opacity-70"
                  >
                    <Send size={20} />
                    {status.loading ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact