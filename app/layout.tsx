
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <TranslationsProvider>
        <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
      </TranslationsProvider>
    </html>
  )
}
