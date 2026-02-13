"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Script from "next/script"
import { useTranslation } from 'react-i18next';

export function FaqSection() {

  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const faqs = [
  {
    question: t('faq-section.1.Q1'),
    answer: t('faq-section.1.A1'),
  },
  {
    question: t('faq-section.2.Q2'),
    answer: t('faq-section.2.A2'),
  },
  {
    question: t('faq-section.3.Q3'),
    answer: t('faq-section.3.A3'),
  },
  {
    question: t('faq-section.4.Q4'),
    answer: t('faq-section.4.A4'),
  },
  {
    question: t('faq-section.5.Q5'),
    answer: t('faq-section.5.A5'),
  },
  {
    question: t('faq-section.6.Q6'),
    answer: t('faq-section.6.A6'),
  },
]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="py-20 bg-background" id="faq">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            { t('faq-section.subtitle') }
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            { t('faq-section.title') }
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            { t('faq-section.description') }
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
