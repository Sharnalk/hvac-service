"use client"

import { cn } from "@/lib/utils"

interface FilterChipsProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterChips({ categories, activeFilter, onFilterChange }: FilterChipsProps) {
  const getCategoryStyle = (category: string, isActive: boolean) => {
    if (!isActive) {
      return "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200"
    }

    // Map categories to their temperature type
    const coldCategories = ["Chambre froide"]
    const heatCategories = ["Pompe à chaleur"]

    if (coldCategories.includes(category)) {
      return "bg-slate-800 text-sky-400 border-sky-500/50"
    }
    if (heatCategories.includes(category)) {
      return "bg-slate-800 text-amber-400 border-amber-500/50"
    }
    return "bg-slate-800 text-slate-200 border-slate-500/50"
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center" role="group" aria-label="Filtrer les réalisations">
      <button
        onClick={() => onFilterChange("all")}
        className={cn(
          "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300",
          activeFilter === "all"
            ? "bg-slate-800 text-white border-slate-500/50"
            : "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200",
        )}
      >
        Tous
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300",
            getCategoryStyle(category, activeFilter === category),
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
