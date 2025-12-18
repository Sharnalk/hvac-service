"use client"

import { useEffect, useRef, useState } from "react"
import { processSteps } from "@/lib/data"

export function Process() {
  const [progress, setProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate progress through section
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))
      setProgress(scrollProgress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Notre méthode</span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white tracking-tight">Un processus maîtrisé</h2>
          <p className="mt-4 text-slate-400">
            De la prise de contact à la mise en service, chaque étape est pensée pour garantir un résultat optimal.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden lg:block">
            <div
              className="w-full bg-gradient-to-b from-cyan-400 to-blue-500 transition-all duration-300 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => {
              const isActive = progress > index / processSteps.length
              const isLeft = index % 2 === 0

              return (
                <div
                  key={step.step}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${index > 0 ? "lg:mt-16" : ""}`}
                >
                  {/* Content */}
                  <div className={`${isLeft ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"}`}>
                    <div
                      className={`p-6 rounded-xl bg-slate-800/30 border transition-all duration-500 ${
                        isActive ? "border-cyan-500/30 bg-slate-800/50" : "border-slate-800"
                      }`}
                    >
                      {/* Step indicator */}
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:justify-end" : ""}`}>
                        <span className="font-mono text-xs text-slate-500">
                          Étape {String(step.step).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-mono text-sm font-bold transition-colors ${
                            isActive ? "text-cyan-400" : "text-slate-600"
                          }`}
                        >
                          {step.temp}°C
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 hidden lg:block ${
                      isActive
                        ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                        : "bg-slate-900 border-slate-700"
                    }`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
