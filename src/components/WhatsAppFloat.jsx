import { MessageCircle } from "lucide-react"

const phoneNumber = "+25761379229"
const message =
  "Bonjour EDEN Business Center, je souhaite avoir plus d'informations sur vos tricots."
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

const WhatsAppFloat = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <div className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl px-5 py-4 transition-all duration-300">
        <MessageCircle size={24} />
        <span className="hidden sm:inline font-semibold">
          WhatsApp
        </span>
      </div>
    </a>
  )
}

export default WhatsAppFloat