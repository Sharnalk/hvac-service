import { values } from "@/lib/data"

export function About() {
  return (
    <section id="apropos" className="relative bg-slate-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main content - editorial style */}
          <div className="lg:col-span-7">
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">À propos</span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
              La précision avant la vitesse.
              <br />
              <span className="text-slate-400">Mais intervention rapide quand urgence.</span>
            </h2>

            <div className="mt-8 space-y-6 text-slate-300 leading-relaxed">
              <p>
                Depuis notre création, nous avons fait le choix de la qualité plutôt que du volume. Chaque intervention
                est réalisée avec le même niveau d&apos;exigence, qu&apos;il s&apos;agisse d&apos;installer une
                climatisation chez un particulier ou de maintenir une chambre froide industrielle.
              </p>
              <p>
                Notre équipe de techniciens qualifiés intervient sur toutes les marques, avec un engagement constant :
                un diagnostic précis, des solutions adaptées, et un suivi rigoureux. Nous ne cherchons pas à vendre,
                nous cherchons à résoudre.
              </p>
              <p className="text-slate-400 text-sm border-l-2 border-cyan-500/30 pl-4">
                Conformité aux normes en vigueur, respect des bonnes pratiques frigorifiques, et transparence totale sur
                nos interventions.
              </p>
            </div>
          </div>

          {/* Values sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-4">
              {values.map((value, index) => (
                <div key={index} className="p-5 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
