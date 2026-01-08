import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Sections/Navbar'
import HeroSection from './Sections/HeroSection'
import ServicesSection from './Sections/ServicesSection'
import MethodologySection from './Sections/MethodologySection'
import TestimonialsSection from './Sections/TestimonialsSection'
import CertificatesSection from './Sections/CertificatesSection'
import VideoGallerySection from './Sections/VideoGallerySection'
import FaqSection from './Sections/FaqSection'
import ContactCtaSection from './Sections/ContactCtaSection'
import ContactFormSection from './Sections/ContactFormSection'
import FooterSection from './Sections/FooterSection'
import Loading from './components/Loading'
import MassagePromo from './components/MassagePromo'
import FloatingActionButtons from './components/FloatingActionButtons'
import PrivacyPolicy from './Pages/PrivacyPolicy'

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading')
    return !hasSeenLoading
  })
  const [isContactOpen, setIsContactOpen] = useState(false)

  const videosToPreload = [
    '/images/Dikla/video/1.mp4',
    '/images/Dikla/video/20251104_114301000_iOS_0 (video-converter.com).mp4'
  ]

  useEffect(() => {
    if (isLoading) {
      sessionStorage.setItem('hasSeenLoading', 'true')
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <Loading onDone={() => setIsLoading(false)} videosToPreload={videosToPreload} />}
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
                  <FaqSection />
                  <ContactCtaSection onOpenContact={() => setIsContactOpen(true)} />
                  <MassagePromo className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 pb-10" />
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
