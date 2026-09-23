import { PLANOS } from "../data"
import { h2 } from "./ui"

export function Planos() {
  return (
    <section id="planos" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={`${h2} mb-8`}>Planos</h2>
        <div className="flex flex-col gap-0.5">
          {PLANOS.map((p) => (
            <div
              key={p.nome}
              className={`text-sc-ink grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-6 items-center p-[clamp(24px,3vw,38px)] border-2 transition-transform duration-200 hover:translate-x-2 ${
                p.destaque ? "bg-sc-green border-sc-green" : "bg-white border-sc-line-2"
              }`}
            >
              <div className="min-w-0">
                <div
                  className={`font-mono text-[11.5px] font-semibold tracking-[0.12em] uppercase ${
                    p.destaque ? "text-sc-ink" : "text-sc-green-deep"
                  }`}
                >
                  {p.rotulo}
                </div>
                <div className="text-[clamp(24px,3.2vw,42px)] font-black tracking-[-0.04em] uppercase leading-[1.1] mt-2.5 whitespace-nowrap">
                  {p.nome}
                </div>
              </div>
              <div className="text-[clamp(30px,4vw,52px)] font-black tracking-[-0.045em] leading-none min-w-0 [overflow-wrap:anywhere]">
                {p.preco}
              </div>
              <div className={`text-base min-w-0 [overflow-wrap:anywhere] ${p.destaque ? "text-sc-ink" : "text-sc-gray"}`}>
                {p.desc}
              </div>
              <a
                href="#falar"
                className={`justify-self-start no-underline font-extrabold text-sm uppercase tracking-[0.02em] px-[26px] py-[15px] shrink-0 ${
                  p.destaque
                    ? "bg-sc-ink text-sc-green hover:text-sc-green"
                    : "bg-sc-green text-sc-ink hover:text-sc-ink"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
