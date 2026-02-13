import { 
  Rocket, 
  Shield, 
  Headphones, 
  Zap, 
  PenTool, 
  BarChart3,
  Briefcase,
  SiWebmoney  
} from "lucide-react"
import { FaReact } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { RiBarChartBoxAiLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

export function WhyUsSection() {

  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const reasons = [
    {
      id: 1,
      icon: FaReact,
      title:  t('why-us-section.list-card.1.title'),
      description: t('why-us-section.list-card.1.description'),
    },
    {
      id: 2,
      icon: Shield,
      title:  t('why-us-section.list-card.2.title'),
      description: t('why-us-section.list-card.2.description'),
    },
    {
      id: 3,
      icon: Headphones,
      title:  t('why-us-section.list-card.3.title'),
      description: t('why-us-section.list-card.3.description'),
    },
    {
      id: 4,
      icon: Briefcase,
      title:  t('why-us-section.list-card.4.title'),
      description: t('why-us-section.list-card.4.description'),
    },
    {
      id: 5,
      icon: SiAdobexd,
      title:  t('why-us-section.list-card.5.title'),
      description: t('why-us-section.list-card.5.description'),
    },
    {
      id: 6,
      icon: RiBarChartBoxAiLine ,
      title:  t('why-us-section.list-card.6.title'),
      description: t('why-us-section.list-card.6.description'),
    },
  ]

  return (
    <section id="porque" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            { t('why-us-section.subtitle')}
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            { t('why-us-section.title')}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
             { t('why-us-section.description')}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <reason.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
