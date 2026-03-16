import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FloatingPhone from './components/FloatingPhone'
import Home from './pages/Home'
import VehiculesPage from './pages/VehiculesPage'
import ServicesPage from './pages/ServicesPage'
import AproposPage from './pages/AproposPage'
import ContactPage from './pages/ContactPage'
import ActualitesPage from './pages/ActualitesPage'
import ArticlePage from './pages/ArticlePage'
import AvisPage from './pages/AvisPage'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"                 element={<Home />} />
        <Route path="/vehicules"        element={<VehiculesPage />} />
        <Route path="/services"         element={<ServicesPage />} />
        <Route path="/a-propos"         element={<AproposPage />} />
        <Route path="/contact"          element={<ContactPage />} />
        <Route path="/actualites"       element={<ActualitesPage />} />
        <Route path="/actualites/:slug" element={<ArticlePage />} />
        <Route path="/avis"             element={<AvisPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite"  element={<Confidentialite />} />
        <Route path="*"                 element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingPhone />
    </>
  )
}
