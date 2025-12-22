import { services } from "@/lib/data"
import { Wind, Snowflake, Settings, Wrench, Flame, Brush } from "lucide-react"

const iconMap = {
  wind: Wind,
  snowflake: Snowflake,
  settings: Settings,
  wrench: Wrench,
  flame: Flame,
  clean: Brush
}

export function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Services</span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            Solutions frigorifiques complètes
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            De l&apos;installation au dépannage, une expertise technique au service de votre confort.
          </p>
        </div>

        {/* Services grid - Technical panel style */}
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={service.id}
                className="group relative p-6 lg:p-8 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                {/* Service number */}
                <div className="absolute top-4 right-4 text-xs font-mono text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>

                    {/* Use cases chips */}
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full border border-slate-700"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>

        {/* 24/7 note */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-300">
              Service de dépannage disponible <span className="text-cyan-400">7j/7</span> pour les situations urgentes
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
