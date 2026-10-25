import { Blink } from "../../components/ui"
import { SELO } from "../content"
import { CtaBotoes } from "./CtaBotoes"

export function Hero() {
  return (
    <section data-section="hero" className="bg-sc-green text-sc-ink">
      <div className="max-w-[1400px] mx-auto px-6 pt-[clamp(20px,4vw,56px)] pb-[clamp(28px,4.5vw,64px)]">
        <p className="flex items-center gap-2.5 m-0 font-mono text-[11.5px] font-semibold tracking-[0.12em] uppercase">
          <Blink size="size-[8px]" />
          {SELO}
        </p>

        <h1 className="text-[clamp(30px,8.2vw,84px)] font-black leading-[1.04] tracking-[-0.045em] uppercase mt-[clamp(14px,2.5vw,32px)] mb-0 max-w-[22ch]">
          <span className="block">Sua empresa vai contratar na operação.</span>
          <span className="bg-sc-ink text-sc-green px-[0.12em] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
            O administrativo dá conta?
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 items-end mt-[clamp(16px,3vw,44px)]">
          <p className="text-[clamp(16px,1.9vw,22px)] font-medium leading-[1.4] m-0 max-w-[46ch]">
            O SquadCraft é uma equipe digital que cuida da rotina do administrativo: atende clientes no
            WhatsApp, cobra, confere e avisa. Montada por um especialista, para a contratação ir para
            onde ela é obrigatória.
          </p>
          <div className="md:justify-self-end w-full max-w-[460px]">
            <CtaBotoes />
          </div>
        </div>
      </div>
    </section>
  )
}
