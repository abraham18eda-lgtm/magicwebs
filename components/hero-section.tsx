"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, ShoppingCart, Layers } from "lucide-react"
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  onOpenContact: () => void
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {

  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Transformamos ideas en soluciones digitales
          </div> */}

          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            { t('hero-section.title.1') } {" "} 
            <span className="text-primary"> { t('hero-section.title.2') } </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            { t('hero-section.description') }
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={onOpenContact} className="gap-2">
              { t('button.btn_proyect') }
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#servicios"> { t('button.btn_services') }</a>
            </Button>
          </div>

          <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{ t('hero-section.web.title') }</h3>
              <p className="text-center text-sm text-muted-foreground">
                { t('hero-section.web.title') }
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{ t('hero-section.ecommerce.title') }</h3>
              <p className="text-center text-sm text-muted-foreground">
                { t('hero-section.ecommerce.description') }
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{ t('hero-section.software.title') }</h3>
              <p className="text-center text-sm text-muted-foreground">
                { t('hero-section.software.description') }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
