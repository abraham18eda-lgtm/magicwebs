"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ServicesSection } from "@/components/services-section"
import { CtaSection } from "@/components/cta-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection onOpenContact={openContactModal} />
        <AboutSection />
        <WhyUsSection />
        <ServicesSection onOpenContact={openContactModal} />
        <PortfolioSection />
        <FaqSection />
        <CtaSection onOpenContact={openContactModal} />
      </main>
      <Footer />
      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
      <WhatsappButton />
    </div>
  )
}
