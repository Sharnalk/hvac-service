"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ThermoGaugeProps {
  className?: string
}
const maxThermoJauge = 24 as number;

export function ThermoGauge({ className }: ThermoGaugeProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const temperature = Math.round(maxThermoJauge - scrollProgress * 10 * 64) // Reduction of temperature on scroll
  const fillHeight = mounted ? (68 - (scrollProgress * 10 * 160) ) : 15 // 15% to 90%

  const getLabel = () => {
    if (temperature > 25) return "Chauffage"
    if (temperature > 15) return "Confort"
    if (temperature >= 5) return "Climatisation"
    if (temperature > -0) return "Froid négatif"
    return "Froid négatif"
  }

  const getGradient = () => {
    if (temperature > 20) {
      return "linear-gradient(to top, #f59e0b, #fb923c, #fbbf24)"
    }
    if (temperature > 5) {
      return "linear-gradient(to top, #38bdf8, #7dd3fc, #bae6fd)"
    }
    return "linear-gradient(to top, #0ea5e9, #38bdf8, #7dd3fc)"
  }

  const getGlowColor = () => {
    if (temperature > 20) return "#f59e0b"
    if (temperature > 5) return "#38bdf8"
    return "#0ea5e9"
  }

  const getTempColor = () => {
    if (temperature > 20) return "text-amber-400"
    if (temperature > 5) return "text-slate-200"
    return "text-sky-400"
  }

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="relative h-48 w-12 rounded-full bg-slate-800/50 border border-slate-600/50 overflow-hidden backdrop-blur-sm">
        {/* Temperature fill */}
        <div
          className="absolute bottom-0 left-0 right-0 transition-all duration-700 ease-out rounded-b-full"
          style={{
            height: `${fillHeight}%`,
            background: getGradient(),
          }}
        />
        {/* Gauge marks - updated for full range */}
        <div className="absolute inset-0 flex flex-col justify-between py-3 px-1">
          {[35, 25, 15, 5, 0].map((temp, i) => (
            <div key={i} className="flex items-center justify-end">
              <span
                className={cn(
                  "text-[8px] font-mono mr-1",
                  temp > 15 ? "text-amber-400/70" : temp > 0 ? "text-slate-400" : "text-sky-400/70",
                )}
              >
                {temp > 0 ? `+${temp}` : temp}°
              </span>
              <div className="w-2 h-px bg-slate-500" />
            </div>
          ))}
        </div>
        {/* Glow effect */}
        <div
          className="absolute bottom-0 left-0 right-0 blur-md opacity-60 transition-all duration-700"
          style={{
            height: `${fillHeight}%`,
            background: `linear-gradient(to top, ${getGlowColor()}, transparent)`,
          }}
        />
      </div>
      {/* Temperature display */}
      <div className="text-center">
        <div className={cn("font-mono text-2xl font-bold tabular-nums transition-colors duration-500", getTempColor())}>
          {temperature > 0 ? `+${temperature}` : temperature}°C
        </div>
        <div className="text-xs text-slate-400 font-medium tracking-wider uppercase mt-1">{getLabel()}</div>
      </div>
    </div>
  )
}
