export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-semibold text-slate-100 text-lg">FroidPro</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Solutions frigorifiques et climatisation pour particuliers et professionnels. Précision, fiabilité,
              réactivité.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#realisations" className="text-slate-400 hover:text-white transition-colors">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-slate-400 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>01 23 45 67 89</li>
              <li>contact@froidpro.fr</li>
              <li className="text-cyan-400">Urgence 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} FroidPro. Tous droits réservés.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
