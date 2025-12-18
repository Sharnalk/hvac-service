"use client"

import { useEffect, useCallback, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Realisation } from "@/lib/data"
import { cn } from "@/lib/utils"

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  project: Realisation | null
}

export function GalleryModal({ isOpen, onClose, project }: GalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project?.id])

  const handlePrevImage = useCallback(() => {
    if (!project) return
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }, [project])

  const handleNextImage = useCallback(() => {
    if (!project) return
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }, [project])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrevImage()
      if (e.key === "ArrowRight") handleNextImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, handlePrevImage, handleNextImage])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  const currentImage = project.images[currentImageIndex]
  const hasMultipleImages = project.images.length > 1

  const getTypeColor = () => {
    switch (project.type) {
      case "cold":
        return "bg-sky-500/20 text-sky-400 border-sky-500/30"
      case "heat":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30"
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Projet: ${project.title}`}
    >
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 z-10"
        onClick={onClose}
        aria-label="Fermer"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Navigation buttons - only show if multiple images */}
      {hasMultipleImages && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10"
            onClick={handlePrevImage}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10"
            onClick={handleNextImage}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </>
      )}

      {/* Content */}
      <div className="max-w-6xl w-full mx-4 flex flex-col lg:flex-row gap-6 items-start">
        {/* Main image area */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-900">
            <Image src={currentImage.src || "/placeholder.svg"} alt={currentImage.alt} fill className="object-cover" />
          </div>

          {/* Thumbnails - only show if multiple images */}
          {hasMultipleImages && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={cn(
                    "relative flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all",
                    idx === currentImageIndex
                      ? "border-sky-400 opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100",
                  )}
                  aria-label={`Voir image ${idx + 1}`}
                  aria-current={idx === currentImageIndex ? "true" : undefined}
                >
                  <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project info */}
        <div className="lg:w-1/3 text-white p-4 lg:sticky lg:top-0">
          <div className="flex items-center gap-2 mb-4">
            <span className={cn("inline-block px-3 py-1 text-xs font-medium rounded-full border", getTypeColor())}>
              {project.category}
            </span>
            {project.type === "cold" && <span className="text-xs text-sky-400">Froid</span>}
            {project.type === "heat" && <span className="text-xs text-amber-400">Chaud</span>}
            {project.type === "both" && <span className="text-xs text-slate-400">Réversible</span>}
          </div>

          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm mb-6">{project.lieu}</p>

          <div className="space-y-4 text-sm">
            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Objectif</span>
              <p className="text-slate-200">{project.objectif}</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Solution</span>
              <p className="text-slate-200">{project.solution}</p>
            </div>
          </div>

          {hasMultipleImages && (
            <div className="mt-6 text-xs text-slate-500">
              Photo {currentImageIndex + 1} / {project.images.length}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
