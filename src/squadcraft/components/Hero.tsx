import { MARQUEE } from "../data"
import { Blink } from "./ui"

const palavras = ["Sua", "equipe", "para", "de", "fazer"]

function MarqueeTrack({ hidden }: { hidden?: boolean }) {
  return (
    <span className="flex gap-[26px] pr-[26px]" aria-hidden={hidden || undefined}>
      {MARQUEE.map((m) => (
        <span key={m} className="contents">
          <span>{m}</span>
          <span>◆</span>
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  return (
    <section className="bg-sc-green text-sc-ink relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 pt-[clamp(40px,6vw,80px)] pb-[clamp(30px,4vw,48px)]">
        <div className="flex items-center gap-3 mb-[clamp(24px,3vw,40px)]">
          <Blink />
          <span className="font-mono text-xs font-semibold tracking-[0.14em] uppercase">
            Um produto DLN Software · em produção na Cromatic
          </span>
        </div>

        <h1 className="text-[clamp(52px,12.5vw,186px)] font-black leading-[1.1] tracking-[-0.055em] uppercase m-0 max-w-[14ch]">
          {palavras.map((p, i) => (
            <span key={p}>
              <span
                className="inline-block"
                style={{ animation: `arRise .62s cubic-bezier(.16,1,.3,1) ${i * 0.07}s both` }}
              >
                {p}
              </span>{" "}
            </span>
          ))}
          <span
            className="block text-sc-ink [-webkit-text-stroke:2px_#FFFFFF]"
            style={{ animation: "arWipe .9s cubic-bezier(.16,1,.3,1) .38s both" }}
          >
            tarefa de robô
          </span>
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-8 items-end mt-[clamp(28px,4vw,52px)]">
          <p className="text-[clamp(18px,2vw,23px)] font-medium m-0 max-w-[42ch] leading-[1.35]">
            Atendimento, cobrança, follow-up, conteúdo. Equipes de agentes de IA que executam —
            montadas por um especialista nosso, alimentadas com o material da sua operação.
          </p>
          <div className="flex flex-col gap-3.5 justify-self-start">
            <a
              href="#falar"
              className="bg-sc-ink text-sc-green no-underline font-extrabold text-[clamp(15px,1.6vw,19px)] uppercase tracking-[0.01em] px-[34px] py-5 text-center transition-transform duration-150 hover:text-sc-green-deep hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#15181C]"
            >
              Montar minha squad →
            </a>
            <span className="font-mono text-[12.5px] font-semibold uppercase tracking-[0.06em]">
              R$ 397/mês · implantação inclusa · sem fidelidade
            </span>
          </div>
        </div>
      </div>

      <div className="border-y-2 border-sc-ink bg-sc-ink py-[13px] overflow-hidden">
        <div
          className="flex w-max font-mono text-[13px] font-semibold tracking-[0.1em] uppercase text-sc-green whitespace-nowrap"
          style={{ animation: "arMarquee 32s linear infinite" }}
        >
          <MarqueeTrack />
          <MarqueeTrack hidden />
        </div>
      </div>
    </section>
  )
}
