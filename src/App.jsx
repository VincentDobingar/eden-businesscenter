import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import WhatsAppFloat from "./components/WhatsAppFloat.jsx"
import Accueil from "./pages/Accueil.jsx"
import Produits from "./pages/Produits.jsx"
import Galerie from "./pages/Galerie.jsx"
import APropos from "./pages/APropos.jsx"
import Contact from "./pages/Contact.jsx"

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App