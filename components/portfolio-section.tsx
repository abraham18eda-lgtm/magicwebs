"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useTranslation } from 'react-i18next';



export function PortfolioSection() {

  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const projects = [
 
    {
      id: 1,
      title: t('portfolio-section.list-card.1.title'),
      category: t('portfolio-section.list-card.1.category'),
      description: t('portfolio-section.list-card.1.description'),
      image: "/portfolio/magictours.jpg",
      technologies: ["Vue", "Tailwind", "Vite", "node.js", "axios"],
    },
    {
      id: 2,
      title: t('portfolio-section.list-card.2.title'),
      category: t('portfolio-section.list-card.2.category'),
      description: t('portfolio-section.list-card.2.description'),
      image: "/portfolio/innovation-travel.jpg",
      technologies: ["Laravel", "Bootstrap", "Javescript", "Vite", "Vue"],
    },
  ]

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)

  return (
    <section className="py-20 bg-secondary/30" id="portafolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            { t('portfolio-section.subtitle') }
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            { t('portfolio-section.title') }
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            { t('portfolio-section.description') }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <button
              type="button"
              key={project.id}
              className="group cursor-pointer text-left"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/20">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Ver detalles
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-primary text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card">
          {selectedProject && (
            <>
              <div className="relative h-72 md:h-96">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground rounded-full"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-6">
                <DialogHeader>
                  <span className="text-primary text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Tecnologías utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver proyecto
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
