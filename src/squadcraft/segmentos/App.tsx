import { lazy, Suspense } from "react"
import type { Segmento } from "../../content/segmentos"
import { Topo } from "../6x1/components/Topo"
import { Hero } from "./components/Hero"
import { Dores } from "./components/Dores"
import { Video } from "./components/Video"
import { Assume } from "./components/Assume"
import { TimeFica } from "./components/TimeFica"
import { Como } from "./components/Como"
import { Preco } from "./components/Preco"
import { Faq } from "./components/Faq"
import { VejaTambem } from "./components/VejaTambem"
import { Chamada } from "./components/Chamada"
import { Rodape } from "./components/Rodape"
import { analytics } from "./analytics"

const ConsentBanner = lazy(() => analytics.then(() => import("../../lib/ConsentBanner")).then((m) => ({ default: m.ConsentBanner })))

export default function App({ segmento }: { segmento: Segmento }) {
  return (
    <div className="overflow-x-clip">
      <Topo />
      <main>
        <Hero s={segmento} />
        <Dores s={segmento} />
        <Video s={segmento} />
        <Assume s={segmento} />
        <TimeFica s={segmento} />
        <Como />
        <Preco />
        <Faq s={segmento} />
        <VejaTambem atual={segmento.slug} />
        <Chamada s={segmento} />
      </main>
      <Rodape />
      <Suspense>
        <ConsentBanner variant="squadcraft" />
      </Suspense>
    </div>
  )
}
