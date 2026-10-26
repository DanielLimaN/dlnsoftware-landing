import type { Segmento } from "../../../content/segmentos"
import { CtaBotoes } from "./CtaBotoes"

// Closes with the hero's own line (not a second heading: the page keeps a single H1).
export function Chamada({ s }: { s: Segmento }) {
  return (
    <section data-section="chamada" aria-label="Conversar com um especialista" className="bg-sc-green text-sc-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(44px,6vw,88px)] grid md:grid-cols-2 gap-x-12 gap-y-8 items-end">
        <p className="text-[clamp(32px,5.6vw,80px)] font-black leading-[1.05] tracking-[-0.05em] uppercase m-0 max-w-[16ch]">
          {s.h1}
        </p>
        <div className="md:justify-self-end w-full max-w-[460px]">
          <CtaBotoes nomeCurto={s.nomeCurto} />
        </div>
      </div>
    </section>
  )
}
