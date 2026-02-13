"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { useTranslation } from 'react-i18next';

interface CtaSectionProps {
  onOpenContact: () => void
}

export function CtaSection({ onOpenContact }: CtaSectionProps) {

  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            { t('cta-section.title') }
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-primary-foreground/80">
            { t('cta-section.description') }
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={onOpenContact}
            >
              <MessageCircle className="h-5 w-5" />
              { t('button.btn_quote') }
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="tel:+523223797506">
                <Phone className="h-5 w-5" />
                { t('button.btn_call') }
              </a>
            </Button>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {/* <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary-foreground">5 días</span>
              <span className="mt-1 text-sm text-primary-foreground/70">Tiempo promedio de propuesta</span>
            </div> */}
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary-foreground">{ t('cta-section.list.1.title') }</span>
              <span className="mt-1 text-sm text-primary-foreground/70">{ t('cta-section.list.1.subtitle') }</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary-foreground">{ t('cta-section.list.2.title') }</span>
              <span className="mt-1 text-sm text-primary-foreground/70">{ t('cta-section.list.2.subtitle') }</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
