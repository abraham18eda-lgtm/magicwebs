
import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TranslationsProvider from '@/components/TranslationsProvider';
import Header from '@/components/Header';
import Script from "next/script";

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'MagicWebs | Desarrollo Web, E-commerce y Software',
  description: 'Soluciones digitales profesionales para tu negocio. Desarrollo web, tiendas online y software a medida.',
   icons: {
    icon: "icon/magicwebspro-favicon.png",   // Ruta relativa desde la carpeta public
    shortcut: "icon/magicwebspro-favicon.png",
    apple: "icon/magicwebspro-favicon.png", // opcional para iOS
  },
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1988912838328369');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J2C1HKC0F6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J2C1HKC0F6');
          `}
        </Script>
      </head>

        <body className={`${inter.variable} font-sans antialiased`}>
          {/* Noscript Meta Pixel */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1988912838328369&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
          <TranslationsProvider>
          {children}
          </TranslationsProvider>
        </body>
    </html>
  )
}
