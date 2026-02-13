"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Send
} from "lucide-react"
import { useTranslation } from 'react-i18next';

export function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

      const formData = new FormData(e.currentTarget)
      const form = e.currentTarget

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("footer_email"),
          message: formData.get("footer_message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      // console.log("API response:", data)

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
       console.error("Error enviando newsletter:", error)
      setSubmitStatus("error")

    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer id="contacto" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Column 1 - Company Info */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">DS</span>
              </div> */}
              <span className="text-xl font-bold text-foreground">MagicWebs</span>
            </Link>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              { t('footer.section_social.description') }
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href={ t('footer.section_social.social.1.link') }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              {/* <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
              {/* <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a> */}
              {/* <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-lg font-semibold text-foreground"> { t('footer.section_contact.contact.title') } </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="block text-sm font-medium text-foreground">{ t('footer.section_contact.contact.1.title') }</span>
                  <a
                    href="mailto:info@magicwebs.com"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    { t('footer.section_contact.contact.1.email') }
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="block text-sm font-medium text-foreground">{ t('footer.section_contact.contact.2.title') }</span>
                  <a
                    href= {t('footer.section_contact.contact.2.link')} 
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    { t('footer.section_contact.contact.2.phone') }
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="block text-sm font-medium text-foreground">{ t('footer.section_contact.contact.3.title') }</span>
                  <span className="text-sm text-muted-foreground">
                    {  t('footer.section_contact.contact.3.location')  }
                  </span>
                </div>
              </li>
            </ul>

            <h3 className="mb-4 mt-8 text-lg font-semibold text-foreground">{  t('footer.section_contact.services.title')  }</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#servicios" className="text-sm text-muted-foreground hover:text-primary">
                  {  t('footer.section_contact.services.1.title')  }
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm text-muted-foreground hover:text-primary">
                  {  t('footer.section_contact.services.2.title')  }
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm text-muted-foreground hover:text-primary">
                 {  t('footer.section_contact.services.3.title')  }
                </Link>
              </li>
              {/* <li>
                <Link href="#servicios" className="text-sm text-muted-foreground hover:text-primary">
                  Aplicaciones Web
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Column 3 - Contact Form */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-lg font-semibold text-foreground"> { t('footer.section_form.title') } </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                name="footer_email"
                type="email"
                placeholder={ t('footer.section_form.email') }
                required
                className="bg-background"
              />
              <Textarea
                name="footer_message"
                placeholder={ t('footer.section_form.text') }
                rows={4}
                required
                className="resize-none bg-background"
              />
              {submitStatus === "success" && (
                <p className="text-sm text-green-600"> { t('footer.form_error.success') } </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-destructive"> { t('footer.form_error.error') } </p>
              )}
              <Button type="submit" disabled={isSubmitting} className="gap-2">
                <Send className="h-4 w-4" />
                {isSubmitting ?  t('footer.form_error.submit.1')  :   t('footer.form_error.submit.2')  }
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            { t('signature.title') }
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              { t('privacy.title') }
            </Link>
            {/* <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Términos de Servicio
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
