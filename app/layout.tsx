import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Inter, Source_Serif_4, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin"] })
const sourceSerif = Source_Serif_4({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FroidPro | Le froid, au degré près",
  description:
    "Solutions frigorifiques et climatisation pour particuliers et professionnels. Installation, maintenance et dépannage 24/7. Toutes marques.",
  keywords: [
    "frigoriste",
    "climatisation",
    "chambre froide",
    "maintenance frigorifique",
    "dépannage climatisation",
    "installation clim",
  ],
  openGraph: {
    title: "FroidPro | Le froid, au degré près",
    description: "Solutions frigorifiques et climatisation pour particuliers et professionnels.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
