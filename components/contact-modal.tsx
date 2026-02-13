"use client"

import React from "react"

import { useState, useRef } from "react"
import { X, Upload, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useTranslation } from 'react-i18next';

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {

  const { t,i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const validTypes = ["image/jpeg", "image/png"]
      if (validTypes.includes(file.type)) {
        setFileName(file.name)
      } else {
        alert("Solo se permiten archivos JPG o PNG")
        e.target.value = ""
        setFileName(null)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (response.ok) { 
        setSubmitStatus("success")
        setTimeout(() => {
          onOpenChange(false)
          setSubmitStatus("idle")
          setFileName(null)
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            { t('form_quote.title') }
          </DialogTitle>
          <DialogDescription>
            { t('form_quote.description') }
          </DialogDescription>
        </DialogHeader>

        {submitStatus === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-center text-lg font-medium text-foreground">
              Mensaje enviado correctamente
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">{ t('form_quote.form.name.title') }</Label>
              <Input
                id="name"
                name="name"
                placeholder={ t('form_quote.form.name.input') }
                required
                className="bg-background"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">{ t('form_quote.form.email.title') }</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="magicwebs@email.com"
                required
                className="bg-background"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">{ t('form_quote.form.phone.title') }</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder= {t('form_quote.form.phone.input')}
                required
                className="bg-background"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="image">{t('form_quote.form.imagen')}</Label>
              <div
                className="relative flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border p-6 transition-colors hover:border-primary"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  id="image"
                  name="image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {fileName ? (
                  <div className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground">{fileName}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setFileName(null)
                        if (fileInputRef.current) fileInputRef.current.value = ""
                      }}
                      className="ml-2 rounded-full p-1 hover:bg-muted"
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      { t('form_quote.form_error.imagen_error') }
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">{t('form_quote.form.comment.title')}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t('form_quote.form.comment.text')}
                rows={4}
                required
                className="resize-none bg-background"
              />
            </div>

            {submitStatus === "error" && (
              <p className="text-sm text-destructive">
                 { t('form_quote.form_error.error') }
              </p>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ?   t('form_quote.form_send.1')  :  t('form_quote.form_send.2')  }
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
