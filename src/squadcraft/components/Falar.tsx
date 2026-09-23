import { openChat } from "../../lib/chat"
import { EMAIL, WHATSAPP_LABEL, WHATSAPP_URL } from "../data"
import { Blink } from "./ui"

export function Falar() {
  return (
    <section id="falar" className="bg-sc-green text-sc-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(44px,6vw,88px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-11 items-start">
        <div>
          <h2 className="text-[clamp(38px,7vw,104px)] font-black leading-[1.1] tracking-[-0.05em] uppercase m-0 max-w-[12ch]">
            Qual rotina está comendo o dia do seu time?
          </h2>
          <p className="text-[19px] font-semibold mt-6 mb-0 max-w-[38ch]">
            Responda em uma frase. Um especialista volta com a proposta da primeira squad — quais
            papéis, com que limites, e o que ela resolve sozinha.
          </p>
        </div>
        <div className="flex flex-col gap-[18px] border-[3px] border-sc-ink p-[clamp(24px,3vw,36px)] bg-white/55">
          <div className="flex items-center gap-[11px]">
            <Blink />
            <span className="font-mono text-xs font-semibold tracking-[0.12em] uppercase">
              Atendimento pelo chat · agentes SquadCraft
            </span>
          </div>
          <p className="text-[clamp(19px,2.2vw,26px)] font-bold tracking-[-0.02em] leading-[1.15] m-0">
            Fale aqui e já veja uma squad trabalhando — é ela que atende.
          </p>
          <button
            type="button"
            onClick={openChat}
            className="bg-sc-ink text-sc-green border-0 font-[inherit] font-extrabold text-[clamp(16px,1.8vw,20px)] uppercase tracking-[0.02em] p-5 cursor-pointer transition-transform duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#0E7A49]"
          >
            Abrir o chat →
          </button>
          <span className="font-mono text-xs font-semibold tracking-[0.06em] uppercase leading-[1.9]">
            ou{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-sc-ink">
              WhatsApp {WHATSAPP_LABEL}
            </a>{" "}
            · <a href={`mailto:${EMAIL}`} className="text-sc-ink">{EMAIL}</a>
          </span>
        </div>
      </div>
    </section>
  )
}
