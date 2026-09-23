import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Studio } from "./components/Studio"
import { Rotinas } from "./components/Rotinas"
import { Numeros } from "./components/Numeros"
import { Gente } from "./components/Gente"
import { Ferramentas } from "./components/Ferramentas"
import { Como } from "./components/Como"
import { Planos } from "./components/Planos"
import { Duvidas } from "./components/Duvidas"
import { Falar } from "./components/Falar"
import { Footer } from "./components/Footer"
import { ConsentBanner } from "../lib/ConsentBanner"

export default function App() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <Hero />
      <Studio />
      <Rotinas />
      <Numeros />
      <Gente />
      <Ferramentas />
      <Como />
      <Planos />
      <Duvidas />
      <Falar />
      <Footer />
      <ConsentBanner variant="squadcraft" />
    </div>
  )
}
