"use client"

import { Button } from "@/components/ui/button"
import { 
  Globe, 
  ShoppingBag, 
  Smartphone, 
  Database, 
  ArrowRight 
} from "lucide-react"
import { CgMicrosoft } from "react-icons/cg";
import { useTranslation } from 'react-i18next';

interface ServicesSectionProps {
  onOpenContact: () => void
}

export function ServicesSection({ onOpenContact }: ServicesSectionProps) {

  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };
  
  const services = [
    {
      icon: Globe,
      title: t('service-section.list-card.1.title'),
      description: t('service-section.list-card.1.description'),
      features: ["Diseño Responsivo", "SEO Optimizado", "Velocidad de Carga", "CMS Integrado"],
    },
    {
      icon: ShoppingBag,
      title: t('service-section.list-card.2.title'),
      description: t('service-section.list-card.2.description'),
      features: ["Carrito de Compras", "Pagos Seguros", "Gestión de Productos", "Análisis de Ventas"],
    },
    {
      icon: CgMicrosoft,
      title: t('service-section.list-card.3.title'),
      description: t('service-section.list-card.3.description'),
      features: ["Automatización", "Integraciones API", "Dashboards", "Reportes"],
    },
  ]
  
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            { t('service-section.subtitle') }
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            { t('service-section.title') }
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            { t('service-section.description') }
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                className="group/btn w-fit gap-2 bg-transparent"
                onClick={onOpenContact}
              >
                Más Información
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
