"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { realisations, type Realisation } from "@/lib/data"
import { FilterChips } from "@/components/filter-chips"
import { GalleryModal } from "@/components/gallery-modal"
import { cn } from "@/lib/utils"

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Realisation | null>(null)

  const categories = useMemo(() => [...new Set(realisations.map((r) => r.category))], [])

  const filteredRealisations = useMemo(
    () => (activeFilter === "all" ? realisations : realisations.filter((r) => r.category === activeFilter)),
    [activeFilter],
  )

  const openModal = (project: Realisation) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "cold":
        return {
          badge: "bg-sky-500/20 text-sky-400 border-sky-500/30",
          frost: "bg-sky-400/5",
          indicator: "bg-sky-400",
        }
      case "heat":
        return {
          badge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
          frost: "bg-amber-400/5",
          indicator: "bg-amber-400",
        }
      default:
        return {
          badge: "bg-slate-500/20 text-slate-300 border-slate-500/30",
          frost: "bg-slate-400/5",
          indicator: "bg-gradient-to-r from-sky-400 to-amber-400",
        }
    }
  }

  return (
    <section id="realisations" className="relative bg-slate-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sky-400 text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white tracking-tight">Nos réalisations</h2>
          <p className="mt-4 text-slate-400">
            Découvrez quelques-uns de nos projets récents, du froid industriel au chauffage résidentiel.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10">
          <FilterChips categories={categories} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRealisations.map((project) => {
            const styles = getTypeStyles(project.type)
            return (
              <button
                key={project.id}
                onClick={() => openModal(project)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 text-left"
              >
                <Image
                  src={project.images[0]?.src || "/placeholder.svg"}
                  alt={`${project.title} - ${project.lieu}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {project.images.length > 1 && (
                  <div className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-slate-900/80 text-slate-300 rounded border border-slate-700/50 backdrop-blur-sm">
                    {project.images.length} photos
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={cn("inline-block px-2 py-1 text-xs font-medium rounded border", styles.badge)}>
                      {project.category}
                    </span>
                    <span className={cn("w-2 h-2 rounded-full", styles.indicator)} />
                  </div>
                  <h3 className="text-white font-medium">{project.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{project.lieu}</p>
                  <p className="text-slate-500 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.solution}
                  </p>
                </div>

                {/* Type-based frost/glow effect on hover */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                    styles.frost,
                  )}
                />
              </button>
            )
          })}
        </div>
      </div>

      {/* Modal - now passes single project */}
      <GalleryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} project={selectedProject} />
    </section>
  )
}
