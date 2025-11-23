import { useState } from 'react'
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

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      {isLoading && <Loading onDone={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <Header />
          <main
            style={{
              paddingTop: '100px',
              minHeight: '100vh',
              backgroundColor: '#fffcf0', // Off White, שונה מהרקע של ה-navbar
              color: '#5b4f47',
            }}
          >
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
        </>
      )}
    </>
  )
}

export default App
