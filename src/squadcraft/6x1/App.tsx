import { lazy, Suspense } from "react"
import { Topo } from "./components/Topo"
import { Hero } from "./components/Hero"
import { Muda } from "./components/Muda"
import { Efeito } from "./components/Efeito"
import { Assume } from "./components/Assume"
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
        <Muda />
        <Efeito />
        <Assume />
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
