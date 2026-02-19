import React from "react";
// import { Header } from "@/components/header"
import TranslationsProvider from "@/components/TranslationsProvider";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
 return (
    <section className="min-h-screen bg-gray-50">
       {/* <Header /> */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <TranslationsProvider>
          {children}
        </TranslationsProvider>
      </div>
    </section>
  );
}
