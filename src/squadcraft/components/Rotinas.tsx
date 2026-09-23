import { useState } from "react"
import { ROTINAS, logoDe } from "../data"
import { ToolLogo, h2 } from "./ui"

export function Rotinas() {
  const [aberta, setAberta] = useState(0)

  return (
    <section id="rotinas" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={`${h2} mb-9 max-w-[20ch]`}>
          O que sai da conta <br />
          <span className="text-sc-green-deep">do seu time</span>
        </h2>
        <p className="font-mono text-xs font-semibold tracking-[0.08em] uppercase text-sc-gray -mt-[18px] mb-7">
          Casos reais de uso · abra para ver o passo a passo
        </p>
        <div className="flex flex-col">
          {ROTINAS.map((r, i) => {
            const isOpen = aberta === i
            const logos = [...new Set(r.passos.map((p) => p.f).filter((f): f is string => !!f))]
            return (
              <div
                key={r.n}
                className="border-t border-sc-line-2 transition-colors duration-[250ms]"
                style={{ background: isOpen ? "#FFFFFF" : "transparent" }}
              >
                <button
                  type="button"
                  onClick={() => setAberta(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full bg-transparent border-0 font-[inherit] text-sc-ink text-left cursor-pointer grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-6 gap-y-3.5 items-center px-3.5 py-6 hover:bg-white"
                >
                  <span className="flex items-baseline gap-3.5 min-w-0">
                    <span className="font-mono text-xs font-semibold tracking-[0.1em] text-sc-green-deep shrink-0">{r.n}</span>
                    <span className="flex flex-col gap-1.5 min-w-0">
                      <span className="text-[clamp(22px,2.8vw,34px)] font-extrabold tracking-[-0.03em] uppercase leading-[1.05] [overflow-wrap:anywhere]">
                        {r.titulo}
                      </span>
                      <span className="text-base text-sc-gray-2 leading-[1.45]">
                        {r.gatilho} <span className="font-bold text-sc-green-deep">→ {r.entrega}</span>
                      </span>
                    </span>
                  </span>
                  <span className="flex flex-wrap items-center justify-end gap-2.5 min-w-0">
                    {logos.map((l) => (
                      <span
                        key={l}
                        title={l}
                        className="size-10 rounded-[10px] bg-white border border-sc-line flex items-center justify-center shrink-0 text-sc-gray"
                      >
                        <ToolLogo src={logoDe(l)} nome={l} size={22} />
                      </span>
                    ))}
                    <span
                      className="size-10 rounded-full bg-sc-ink text-sc-green flex items-center justify-center text-[22px] font-bold shrink-0 transition-transform duration-300"
                      style={{ transform: `rotate(${isOpen ? 45 : 0}deg)` }}
                    >
                      +
                    </span>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-3.5 pt-1 pb-[30px]">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-3">
                      {r.passos.map((p, j) => (
                        <div
                          key={j}
                          className="bg-white border border-sc-line rounded-[14px] p-[18px] flex flex-col gap-3.5 min-w-0"
                        >
                          <span className="flex items-center justify-between gap-2.5">
                            {p.f ? (
                              <span className="size-11 rounded-[11px] bg-sc-chip flex items-center justify-center shrink-0 text-sc-gray">
                                <ToolLogo src={logoDe(p.f)} nome={p.f} size={26} />
                              </span>
                            ) : (
                              <span className="size-11 rounded-[11px] bg-sc-green text-sc-green-ink flex items-center justify-center font-mono text-[13px] font-bold shrink-0">
                                IA
                              </span>
                            )}
                            <span className="font-mono text-[11px] font-semibold tracking-[0.1em] uppercase text-sc-gray text-right">
                              {p.rotulo}
                            </span>
                          </span>
                          <span className="text-base font-semibold leading-[1.4] text-sc-ink">{p.texto}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 bg-sc-ink text-white rounded-[14px] px-5 py-[18px] flex flex-wrap gap-x-4 gap-y-2 items-baseline">
                      <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-sc-green shrink-0">
                        Resultado
                      </span>
                      <span className="text-[17px] font-semibold leading-[1.4] min-w-0">{r.resultado}</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          <div className="border-t border-sc-line-2" />
        </div>
      </div>
    </section>
  )
}
