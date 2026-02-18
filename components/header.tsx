"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"
import { useTranslation } from 'react-i18next';
import { PiBuildingOffice } from "react-icons/pi";



export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const { t,i18n } = useTranslation();
  const buttonquote = t('button.btn_quote');

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const navItems = [
    { label:  t('nav.home'), href: "#inicio" },
    { label: t('nav.services'), href: "#servicios" },
    { label: t('nav.choose'), href: "#porque" },
    { label:  t('nav.contact'), href: "#contacto" },
  ]

  const logo = { image: "/logo/logo-magicwebs-depelover.png"}

  // Cierre del Menu en mobile al darle click fuera
  const headerRef  = useRef<HTMLDivElement>(null); // referencia al menú

  // función para cerrar el menú al hacer clic fuera
  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (isMobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false); // Cierra el menú
    }
  }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);


  return (
    <>
      <header  ref={headerRef} className="relative sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <span className="text-2xl font-bold text-primary uppercase">
                <img 
                  src={logo.image} 
                  alt="Logo" 
                  className="h-[80px] lg:h-[80px] w-full" />
              </span>
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 mt-1 border rounded hover:bg-gray-100">
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Menú de escritorio */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[17px] font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button onClick={() => setIsContactModalOpen(true)}>
              {buttonquote}
            </Button>
          </nav>

          {/* Botón menú móvil */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Menú móvil con overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full border-t border-border bg-background md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[17px] font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsContactModalOpen(true)
                }}
                className="w-full"
              >
                {buttonquote}
              </Button>
            </nav>
          </div>
        )}
      </header>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </>
  )
}
