import { ShieldCheck, Target, Sparkles, FileText } from "lucide-react"

const engagements = [
  {
    icon: ShieldCheck,
    title: "Hygiène",
    description: "Traitement anti-fongique et anti-bactérien adapté.",
  },
  {
    icon: Target,
    title: "Précision",
    description: "Diagnostic approfondi et solutions durables.",
  },
  {
    icon: Sparkles,
    title: "Propreté",
    description: "Protections systématiques, nettoyage complet.",
  },
  {
    icon: FileText,
    title: "Transparence",
    description: "Explications claires et compte-rendu détaillé.",
  },
]

const protocolSteps = [
  {
    id: "01",
    title: "Turbine",
    description:
      "Démontage et nettoyage complet de la turbine pour éliminer poussières et dépôts accumulés. Restauration du flux d'air optimal.",
    color: "cyan",
  },
  {
    id: "02",
    title: "Échangeur",
    description:
      "Décrassage minutieux de l'échangeur thermique. Récupération de l'efficacité énergétique et réduction de la consommation.",
    color: "cyan",
  },
  {
    id: "03",
    title: "Unité intérieure",
    description:
      "Traitement complet de la jaquette et des filtres avec solution anti-microbienne certifiée. Protection durable de la qualité d'air.",
    color: "amber",
  },
  {
    id: "04",
    title: "Groupe extérieur",
    description:
      "Inspection, nettoyage et contrôle du compresseur et du condenseur. Vérification des pressions et du circuit frigorifique.",
    color: "amber",
  },
]

export function About() {
  return (
    <section id="apropos" className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium uppercase tracking-wider">
            <span className="w-8 h-px bg-cyan-400/50" />À propos
            <span className="w-8 h-px bg-cyan-400/50" />
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            La qualité avant le volume.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
              L'attention au détail, toujours.
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 mb-24">
          <p className="text-xl text-slate-200 leading-relaxed font-light">
            Nous ne comptons pas en volume d'interventions, mais en résultats durables.
            <span className="text-white font-medium">
              {" "}
              Chaque système mérite une attention individualisée, un diagnostic précis et des solutions pérennes.
            </span>
          </p>
          <p className="text-slate-400 leading-relaxed">
            Un entretien rigoureux va bien au-delà du confort immédiat. Il préserve la qualité de l'air que vous
            respirez, prévient les dysfonctionnements coûteux, prolonge la durée de vie de vos équipements et optimise
            leur consommation énergétique.
          </p>
        </div>

        <div className="mb-24">
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-16">
            Notre protocole d'entretien hygiène
          </h3>

          <div className="relative grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
            {/* Left side annotations (01, 02) */}
            <div className="flex flex-col gap-12 lg:text-right order-2 lg:order-1">
              {protocolSteps.slice(0, 2).map((step) => (
                <div key={step.id} className="group">
                  <div className="flex lg:flex-row-reverse items-start gap-4">
                    <span
                      className={`flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center text-lg font-bold transition-all duration-300 group-hover:scale-110 ${
                        step.color === "cyan"
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                          : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                      }`}
                    >
                      {step.id}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Central SVG */}
            <div className="relative order-1 lg:order-2 flex-shrink-0">
              <svg
                viewBox="0 0 300 400"
                className="w-full max-w-[280px] mx-auto h-auto"
                aria-labelledby="ac-diagram-title"
              >
                <title id="ac-diagram-title">Schéma d'une climatisation split</title>

                {/* Glow effect background */}
                <defs>
                  <radialGradient id="glowCyan" cx="50%" cy="30%" r="50%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="glowAmber" cx="50%" cy="70%" r="50%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Background glows */}
                <ellipse cx="150" cy="80" rx="120" ry="60" fill="url(#glowCyan)" />
                <ellipse cx="150" cy="300" rx="100" ry="80" fill="url(#glowAmber)" />

                {/* Unité intérieure */}
                <rect x="50" y="40" width="200" height="80" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                <rect x="60" y="50" width="180" height="45" rx="4" fill="#0f172a" />
                {/* Grille ventilation */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                  <line key={i} x1={70 + i * 15} y1="55" x2={70 + i * 15} y2="90" stroke="#475569" strokeWidth="2" />
                ))}
                {/* Indicateur LED */}
                <circle cx="230" cy="105" r="4" fill="#22d3ee" className="animate-pulse" />
                <text
                  x="150"
                  y="130"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="8"
                  fontFamily="system-ui"
                  letterSpacing="0.1em"
                >
                  UNITÉ INTÉRIEURE
                </text>

                {/* Liaison frigorifique (tuyaux) */}
                <path d="M150 120 L150 200" fill="none" stroke="#22d3ee" strokeWidth="3" strokeDasharray="8 4" />
                <path d="M160 120 L160 200" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="8 4" />

                {/* Unité extérieure */}
                <rect x="60" y="220" width="180" height="140" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                {/* Ventilateur */}
                <circle cx="150" cy="290" r="45" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                <circle cx="150" cy="290" r="8" fill="#334155" />
                {/* Pales du ventilateur */}
                <path d="M150 245 Q170 267 150 290 Q130 267 150 245" fill="#475569" />
                <path d="M195 290 Q173 310 150 290 Q173 270 195 290" fill="#475569" />
                <path d="M150 335 Q130 313 150 290 Q170 313 150 335" fill="#475569" />
                <path d="M105 290 Q127 270 150 290 Q127 310 105 290" fill="#475569" />
                {/* Grille latérale */}
                <rect x="70" y="230" width="50" height="120" rx="2" fill="#0f172a" />
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={i} x1={78 + i * 10} y1="235" x2={78 + i * 10} y2="345" stroke="#334155" strokeWidth="1" />
                ))}
                <text
                  x="150"
                  y="375"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="8"
                  fontFamily="system-ui"
                  letterSpacing="0.1em"
                >
                  GROUPE EXTÉRIEUR
                </text>

                {/* Connection points - highlighted areas */}
                <circle cx="100" cy="70" r="6" fill="#22d3ee" fillOpacity="0.5" stroke="#22d3ee" strokeWidth="2" />
                <circle cx="200" cy="70" r="6" fill="#22d3ee" fillOpacity="0.5" stroke="#22d3ee" strokeWidth="2" />
                <circle cx="150" cy="105" r="6" fill="#f59e0b" fillOpacity="0.5" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="150" cy="290" r="6" fill="#f59e0b" fillOpacity="0.5" stroke="#f59e0b" strokeWidth="2" />
              </svg>
            </div>

            {/* Right side annotations (03, 04) */}
            <div className="flex flex-col gap-12 order-3">
              {protocolSteps.slice(2, 4).map((step) => (
                <div key={step.id} className="group">
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center text-lg font-bold transition-all duration-300 group-hover:scale-110 ${
                        step.color === "cyan"
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                          : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                      }`}
                    >
                      {step.id}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-16">
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-12">
            Nos engagements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((engagement, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                {/* Number */}
                <div className="absolute top-4 right-4 text-xs font-mono text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-amber-500/20 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <engagement.icon className="w-5 h-5 text-cyan-400" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-white mb-2">{engagement.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{engagement.description}</p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
