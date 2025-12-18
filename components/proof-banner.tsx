import { CheckCircle, Shield, Leaf } from "lucide-react"

const proofs = [
  {
    icon: CheckCircle,
    title: "Toutes marques",
    description: "Nous intervenons sur l'ensemble des équipements du marché, sans restriction de fabricant.",
  },
  {
    icon: Shield,
    title: "Travail soigné & suivi",
    description: "Chaque intervention est documentée. Nous assurons un suivi rigoureux de vos installations.",
  },
  {
    icon: Leaf,
    title: "Solutions durables",
    description: "Nous privilégions les réparations de qualité et les équipements éco-responsables.",
  },
]

export function ProofBanner() {
  return (
    <section className="relative bg-slate-900 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {proofs.map((proof, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Spec sheet style header */}
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <proof.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm uppercase tracking-wider">{proof.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{proof.description}</p>
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-700/50 rounded-tr-xl group-hover:border-cyan-500/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
