import { lazy, Suspense } from "react"
import { Topo } from "./components/Topo"
import { Hero } from "./components/Hero"
import { Trava } from "./components/Trava"
import { Entrega } from "./components/Entrega"
import { Semana } from "./components/Semana"
import { Como } from "./components/Como"
import { Custo } from "./components/Custo"
import { Faq } from "./components/Faq"
import { Chamada } from "./components/Chamada"
import { Rodape } from "./components/Rodape"
import { BotaoFixo } from "./components/BotaoFixo"
import { analytics } from "./analytics"

const ConsentBanner = lazy(() => analytics.then(() => import("../../lib/ConsentBanner")).then((m) => ({ default: m.ConsentBanner })))

export default function App() {
  return (
    <div className="overflow-x-clip">
      <Topo />
      <main>
        <Hero />
        <Trava />
        <Entrega />
        <Semana />
        <Como />
        <Custo />
        <Faq />
        <Chamada />
      </main>
      <Rodape />
      <BotaoFixo />
      <Suspense>
        <ConsentBanner variant="squadcraft" />
      </Suspense>
    </div>
  )
}
