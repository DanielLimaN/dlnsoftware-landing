import type { Segmento } from "../../../content/segmentos"
import { Blink } from "../../components/ui"
import { CtaBotoes } from "./CtaBotoes"

export function Hero({ s }: { s: Segmento }) {
  return (
    <section data-section="hero" className="bg-sc-green text-sc-ink">
      <div className="max-w-[1400px] mx-auto px-6 pt-[clamp(20px,4vw,56px)] pb-[clamp(28px,4.5vw,64px)]">
        <p className="flex items-center gap-2.5 m-0 font-mono text-[11.5px] font-semibold tracking-[0.12em] uppercase">
          <Blink size="size-[8px]" />
          {s.selo}
        </p>

        <h1 className="text-[clamp(32px,8.2vw,84px)] font-black leading-[1.04] tracking-[-0.045em] uppercase mt-[clamp(14px,2.5vw,32px)] mb-0 max-w-[20ch]">
          {s.h1}
        </h1>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 items-end mt-[clamp(16px,3vw,44px)]">
          <p className="text-[clamp(16px,1.9vw,22px)] font-medium leading-[1.4] m-0 max-w-[46ch]">{s.sub}</p>
          <div className="md:justify-self-end w-full max-w-[460px]">
            <CtaBotoes nomeCurto={s.nomeCurto} />
          </div>
        </div>
      </div>
    </section>
  )
}
