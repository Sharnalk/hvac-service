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
      { src: "/realisations/clim1/clim_1_a.webp", alt: "" },
      { src: "/realisations/clim1/clim_1_b.webp", alt: "" },
      { src: "/realisations/clim1/clim_1_c.webp", alt: "" },
      { src: "/realisations/clim1/clim_1_d.webp", alt: "" },
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
      { src: "/realisations/clim2/clim_2_a.webp", alt: "" },
      { src: "/realisations/clim2/clim_2_b.webp", alt: "" },
      { src: "/realisations/clim2/clim_2_c.webp", alt: "" },
      { src: "/realisations/clim2/clim_2_d.webp", alt: "" },
      { src: "/realisations/clim2/clim_2_e.webp", alt: "" },
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
      { src: "/realisations/clim3/clim_3_a.webp", alt: "" },
      { src: "/realisations/clim3/clim_3_b.webp", alt: "" },
      { src: "/realisations/clim3/clim_3_c.webp", alt: "" },
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
      { src: "/realisations/clim4/clim_4_a.webp", alt: "" },
      { src: "/realisations/clim4/clim_4_b.webp", alt: "" },
      { src: "/realisations/clim4/clim_4_c.webp", alt: "" },
      { src: "/realisations/clim4/clim_4_d.webp", alt: "" },
      { src: "/realisations/clim4/clim_4_e.webp", alt: "" },
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
      { src: "/realisations/clim5/clim_5_a.webp", alt: "" },
      { src: "/realisations/clim5/clim_5_b.webp", alt: "" },
      { src: "/realisations/clim5/clim_5_c.webp", alt: "" },
    ],
    category: "Pompe à chaleur",
    type: "heat",
    lieu: "Villa particulier",
    objectif: "Chauffage et climatisation réversible",
    solution: "PAC air-air multi-split 4 unités",
  },
  {
    id: 7,
    title: "Hôtel Le Méridien",
    images: [
      { src: "/realisations/clim7/clim_7_a.webp", alt: "" },
      { src: "/realisations/clim7/clim_7_b.webp", alt: "" },
    ],
    category: "Climatisation",
    type: "both",
    lieu: "Hôtel 4 étoiles",
    objectif: "Rénovation système CVC complet",
    solution: "VRV 45 unités + GTC",
  },
];


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
