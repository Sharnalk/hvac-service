export const services = [
  {
    id: "climatisation",
    title: "Climatisation",
    description:
      "Installation, entretien et réparation de systèmes de climatisation pour un confort optimal en toute saison.",
    icon: "wind",
    useCases: ["Maison", "Bureau", "Commerce", "Collectivités"],
    type: "both" as const, // Added type for cold/heat/both
  },
  {
    id: "entretien",
    title: "Entretien", 
    description:
    "Nettoyage, contrôle et maintenance des équipements pour garantir une hygiène irréprochable, des performances optimales et une durée de vie prolongée.",
    icon: "clean",
    useCases: ["Maison", "Bureau", "Commerce", "Collectivités"],
    type: "both" as const,
  },
  {
    id: "maintenance",
    title: "Maintenance Préventive",
    description: "Contrats de maintenance sur mesure pour garantir la longévité et l'efficacité de vos équipements.",
    icon: "settings",
    useCases: ["Maison", "Bureau", "Commerce", "Collectivités"],
    type: "both" as const,
  },
  {
    id: "depannage",
    title: "Dépannage",
    description:
    "Intervention rapide en cas de panne sur les installations que nous avons réalisées, pour assurer leur bon fonctionnement.",
    icon: "wrench",
    useCases: ["Urgence", "Diagnostic", "Réparation"],
    type: "both" as const,
  },
]

export const processSteps = [
  {
    step: 1,
    title: "Diagnostic",
    description: "Analyse complète de vos besoins et de l'existant",
    temp: 24,
  },
  {
    step: 2,
    title: "Proposition",
    description: "Devis détaillé et solutions adaptées",
    temp: 16,
  },
  {
    step: 3,
    title: "Intervention",
    description: "Installation ou réparation par nos techniciens qualifiés",
    temp: 7,
  },
  {
    step: 4,
    title: "Suivi",
    description: "Accompagnement et maintenance préventive",
    temp: -2,
  },
]

export interface ProjectImage {
  src: string
  alt: string
}

export interface Realisation {
  id: number
  title: string
  images: ProjectImage[]
  category: string
  type: "cold" | "heat" | "both"
  lieu: string
  objectif: string
  solution: string
}

export const realisations: Realisation[] = [
  {
    id: 1,
    title: "Restaurant Le Gourmet",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Chambre froide restaurant" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Intérieur chambre froide" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Groupe froid" },
    ],
    category: "Chambre froide",
    type: "cold",
    lieu: "Restaurant gastronomique",
    objectif: "Conservation optimale des produits frais",
    solution: "Chambre froide positive 12m³",
  },
  {
    id: 2,
    title: "Bureaux Nexia",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Climatisation bureaux" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Open space climatisé" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Unités extérieures" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Panneau de contrôle" },
    ],
    category: "Climatisation",
    type: "both",
    lieu: "Bureaux open-space",
    objectif: "Confort thermique 200m²",
    solution: "Système VRV multi-zones",
  },
  {
    id: 3,
    title: "Entrepôt Frigolog",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Entrepôt frigorifique" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Zone surgélation" },
    ],
    category: "Chambre froide",
    type: "cold",
    lieu: "Entrepôt logistique",
    objectif: "Stockage produits surgelés",
    solution: "Chambre négative -22°C",
  },
  {
    id: 4,
    title: "Supermarché FreshMart",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Vitrines réfrigérées" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Intervention technicien" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Local technique" },
    ],
    category: "Maintenance",
    type: "cold",
    lieu: "Supermarché",
    objectif: "Contrat annuel préventif",
    solution: "Maintenance trimestrielle complète",
  },
  {
    id: 5,
    title: "Villa Les Oliviers",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "PAC extérieure" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Unité intérieure salon" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Chambre climatisée" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Thermostat connecté" },
    ],
    category: "Pompe à chaleur",
    type: "heat",
    lieu: "Villa particulier",
    objectif: "Chauffage et climatisation réversible",
    solution: "PAC air-air multi-split 4 unités",
  },
  {
    id: 6,
    title: "Cuisine Centrale Sodexo",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Cuisine professionnelle" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Réparation compresseur" },
    ],
    category: "Dépannage",
    type: "cold",
    lieu: "Cuisine collective",
    objectif: "Panne compresseur urgente",
    solution: "Remplacement sous 4h",
  },
  {
    id: 7,
    title: "Hôtel Le Méridien",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Chambre d'hôtel" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Unités en toiture" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Hall d'entrée" },
    ],
    category: "Climatisation",
    type: "both",
    lieu: "Hôtel 4 étoiles",
    objectif: "Rénovation système CVC complet",
    solution: "VRV 45 unités + GTC",
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Marie L.",
    role: "Gérante de restaurant",
    content:
      "Intervention rapide et professionnelle pour notre chambre froide. L'équipe a su diagnostiquer le problème en moins d'une heure.",
    rating: 5,
  },
  {
    id: 2,
    name: "Pierre D.",
    role: "Directeur technique",
    content:
      "Nous travaillons avec eux depuis 3 ans pour la maintenance de nos installations. Fiabilité et réactivité au rendez-vous.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie M.",
    role: "Particulier",
    content:
      "Installation de notre climatisation réalisée avec soin. Conseils pertinents et travail propre. Je recommande.",
    rating: 5,
  },
]

export const faqItems = [
  {
    question: "Quels types d'équipements prenez-vous en charge ?",
    answer:
      "Nous intervenons sur toutes les marques et tous les types d'équipements frigorifiques : climatiseurs, pompes à chaleur, chambres froides positives et négatives, vitrines réfrigérées, groupes froids industriels.",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer:
      "Nous couvrons l'ensemble de la région et pouvons nous déplacer dans un rayon de 80 km autour de notre siège. Pour les contrats de maintenance, des conditions spécifiques peuvent s'appliquer.",
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer:
      "Oui, nous proposons des contrats de maintenance préventive adaptés à vos équipements et à votre activité. Ces contrats incluent des visites régulières, le remplacement des pièces d'usure et une priorité en cas de dépannage.",
  },
  {
    question: "Quels sont vos délais d'intervention en cas d'urgence ?",
    answer:
      "Notre équipe s'engage à intervenir dans les meilleurs délais. Pour les clients sous contrat, nous garantissons une prise en charge prioritaire. Les interventions d'urgence sont possibles 7j/7.",
  },
  {
    question: "Fournissez-vous un devis avant intervention ?",
    answer:
      "Absolument. Nous établissons systématiquement un devis détaillé avant toute intervention, sauf en cas d'urgence où un accord préalable par téléphone peut être convenu.",
  },
]

export const values = [
  {
    title: "Précision",
    description:
      "Chaque intervention est réalisée avec rigueur. Nous prenons le temps du diagnostic pour des solutions durables.",
  },
  {
    title: "Transparence",
    description:
      "Devis clairs, explications détaillées, pas de surprise. Vous savez exactement ce que nous faisons et pourquoi.",
  },
  {
    title: "Réactivité",
    description: "Quand l'urgence l'exige, nous savons agir vite. Mais jamais au détriment de la qualité du travail.",
  },
]
