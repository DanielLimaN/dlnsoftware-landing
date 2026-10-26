import type { Segmento } from "../../../content/segmentos"
import { h2 } from "../../components/ui"

export function Assume({ s }: { s: Segmento }) {
  return (
    <section id="o-que-a-squad-assume" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>O que a squad assume</h2>
        <ul className="list-none p-0 m-0 mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-0.5 bg-sc-line border border-sc-line">
          {s.rotinas.map((r) => (
            <li key={r.texto} className="bg-white flex items-start gap-4 p-[clamp(18px,2.2vw,26px)]">
              <span
                aria-hidden="true"
                className="grid place-items-center size-8 shrink-0 bg-sc-green border-2 border-sc-ink font-black text-lg leading-none"
              >
                ✓
              </span>
              <div className="flex flex-col items-start gap-3">
                <span className="text-[clamp(17px,1.6vw,20px)] font-semibold leading-[1.35] pt-0.5">{r.texto}</span>
                <span className="inline-flex items-center gap-2 border-2 border-sc-green-deep px-2.5 py-1 font-mono text-[11.5px] font-semibold tracking-[0.06em] uppercase text-sc-green-deep">
                  <span aria-hidden="true" className="size-[7px] bg-sc-green-deep" />
                  {r.resultado}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
