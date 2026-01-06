import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Sections/Navbar'
import HeroSection from './Sections/HeroSection'
import ServicesSection from './Sections/ServicesSection'
import MethodologySection from './Sections/MethodologySection'
import TestimonialsSection from './Sections/TestimonialsSection'
import CertificatesSection from './Sections/CertificatesSection'
import VideoGallerySection from './Sections/VideoGallerySection'
import StatsSection from './Sections/StatsSection'
import FaqSection from './Sections/FaqSection'
import ContactCtaSection from './Sections/ContactCtaSection'
import ContactFormSection from './Sections/ContactFormSection'
import FooterSection from './Sections/FooterSection'
import Loading from './components/Loading'
import FloatingActionButtons from './components/FloatingActionButtons'
import PrivacyPolicy from './Pages/PrivacyPolicy'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      {isLoading && <Loading onDone={() => setIsLoading(false)} />}
      {!isLoading && (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header onOpenContact={() => setIsContactOpen(true)} />
                <main className="min-h-screen pt-24 text-brand-inkMuted">
                  <HeroSection onOpenContact={() => setIsContactOpen(true)} />
                  <ServicesSection onOpenContact={() => setIsContactOpen(true)} />
                  <MethodologySection />
                  <TestimonialsSection />
                  <CertificatesSection />
                  <VideoGallerySection />
                  <StatsSection />
                  <FaqSection />
                  <ContactCtaSection onOpenContact={() => setIsContactOpen(true)} />
                </main>
                <FooterSection />
                <ContactFormSection isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
                <FloatingActionButtons onOpenContact={() => setIsContactOpen(true)} />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      )}
    </>
  )
}

export default App
