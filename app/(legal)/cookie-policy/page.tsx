"use client"

import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown'

export default function CookiePolicyPage() {
  
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">
        { t('cookie-policy.title') }
      </h1>

      <section className="mb-12 prose prose-gray max-w-none whitespace-pre-line">
        <ReactMarkdown>
         { t('cookie-policy.description') }
         </ReactMarkdown>
      </section>

    </main>
  )
}
