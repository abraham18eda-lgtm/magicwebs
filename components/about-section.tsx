import { CheckCircle2 } from "lucide-react"
import { useTranslation } from 'react-i18next';

export function AboutSection() {

  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const features = t( 'about-section.features', { returnObjects: true} );

  return (
    <section id="servicios" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-1 lg:gap-16">
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary text-center">
              { t('about-section.subtitle')}
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
              { t('about-section.title')}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              { t('about-section.description')}
            </p>
            {/* <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Ayudamos a empresas en crecimiento con soluciones digitales personalizadas, escalables y desarrolladas con tecnología moderna y mejores prácticas para maximizar su desarrollo y resultados.
            </p> */}

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-primary p-8 text-center">
                  <span className="text-4xl font-bold text-primary-foreground">500+</span>
                  <p className="mt-2 text-sm text-primary-foreground/80">Proyectos Completados</p>
                </div>
                <div className="rounded-2xl bg-secondary p-8 text-center">
                  <span className="text-4xl font-bold text-foreground">98%</span>
                  <p className="mt-2 text-sm text-muted-foreground">Clientes Satisfechos</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:pt-8">
                <div className="rounded-2xl bg-secondary p-8 text-center">
                  <span className="text-4xl font-bold text-foreground">15+</span>
                  <p className="mt-2 text-sm text-muted-foreground">Años de Experiencia</p>
                </div>
                <div className="rounded-2xl bg-primary p-8 text-center">
                  <span className="text-4xl font-bold text-primary-foreground">24/7</span>
                  <p className="mt-2 text-sm text-primary-foreground/80">Soporte Técnico</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
