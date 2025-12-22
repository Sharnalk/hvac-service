import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProofBanner } from "@/components/proof-banner"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofBanner />
        <Services />
        <Process />
        <Gallery />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
