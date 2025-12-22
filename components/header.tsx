"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-semibold text-slate-100 text-lg tracking-tight hidden sm:block">HVAC SERVICES</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Badge */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-xs text-cyan-400/80 border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/5">
              Urgence 24/7
            </span>
            <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100 font-medium" asChild>
              <a href="#contact">Demander un devis</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-lg border-t border-slate-800/50">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <span className="text-xs text-cyan-400/80 text-center">Urgence 24/7</span>
              <Button className="w-full bg-white text-slate-900 hover:bg-slate-100" asChild>
                <a href="#contact">Demander un devis</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
