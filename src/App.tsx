import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Method } from "./components/Method"
import { SquadCraft } from "./components/SquadCraft"
import { Differentials } from "./components/Differentials"
import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Method />
      <SquadCraft />
      <Differentials />
      <CTA />
      <Footer />
    </>
  )
}
