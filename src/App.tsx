import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Case } from "./components/Case"
import { Services } from "./components/Services"
import { SquadCraft } from "./components/SquadCraft"
import { Method } from "./components/Method"
import { Calculator } from "./components/Calculator"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { ConsentBanner } from "./lib/ConsentBanner"

export default function App() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <Hero />
      <Case />
      <Services />
      <SquadCraft />
      <Method />
      <Calculator />
      <Contact />
      <Footer />
      <ConsentBanner variant="dln" />
    </div>
  )
}
