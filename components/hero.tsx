import { Button } from "@/components/ui/button"
import { ThermoGauge } from "@/components/thermo-gauge"
import { IsothermBackground } from "@/components/isotherm-background"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <IsothermBackground />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />
      <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main content */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sm text-slate-300">Particuliers & Professionnels</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight text-balance">
              Votre confort,{" "}
              <span className="bg-gradient-to-r from-sky-400 via-slate-200 to-amber-400 bg-clip-text text-transparent">
                toute l'année.
              </span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed text-pretty">
            Climatisation et chauffage par systèmes réversibles.<br/>
            De la mise en service à l’entretien et au dépannage, nous maîtrisons votre confort thermique avec la précision qui fait la différence.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              <div className="p-4 rounded-lg bg-slate-800/30 border border-sky-500/20">
                <div className="text-2xl font-bold text-sky-400 font-mono">-22°C</div>
                <div className="text-xs text-slate-500 mt-1">Froid négatif</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/30 border border-amber-500/20">
                <div className="text-2xl font-bold text-amber-400 font-mono">+35°C</div>
                <div className="text-xs text-slate-500 mt-1">Chauffage PAC</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                <div className="text-2xl font-bold text-white font-mono">&lt;4h</div>
                <div className="text-xs text-slate-500 mt-1">Intervention</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-medium px-8" asChild>
                <a href="#contact">Demander un devis</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                asChild
              >
                <a href="#realisations">Voir les réalisations</a>
              </Button>
            </div>
          </div>

          {/* Thermo Gauge */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <ThermoGauge />
                <p className="text-center text-xs text-slate-500 mt-4">Jauge interactive au scroll</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
