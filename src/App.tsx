import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Method } from "./components/Method"
import { Differentials } from "./components/Differentials"
import { Contact } from "./components/Contact"
import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Method />
      <Differentials />
      <Contact />
      <CTA />
      <Footer />
    </>
  )
}
