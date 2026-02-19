"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
      i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
    };
  

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-gray-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 whitespace-pre-line">
           { t( 'cookie-policy.banner_text' ) }{" "}
          <Link
            href="/cookie-policy"
            className="underline hover:text-white"
          >
            { t('cookie-policy.title') }
          </Link>.
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-sm rounded-md border border-gray-500 text-gray-300 hover:bg-gray-800"
          >
            { t( 'cookie-policy.1' ) }
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700"
          >
             { t( 'cookie-policy.2' ) }
          </button>
        </div>
      </div>
    </div>
  );
}
