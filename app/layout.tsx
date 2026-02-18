
import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TranslationsProvider from '@/components/TranslationsProvider';
import Header from '@/components/Header';

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
      <TranslationsProvider>
        <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
      </TranslationsProvider>
    </html>
  )
}
