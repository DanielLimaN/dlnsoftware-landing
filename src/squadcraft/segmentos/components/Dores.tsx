import type { Segmento } from "../../../content/segmentos"
import { h2 } from "../../components/ui"

export function Dores({ s }: { s: Segmento }) {
  return (
    <section id="o-que-trava" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>O que trava a rotina</h2>
        <ul className="list-none p-0 m-0 mt-8 grid md:grid-cols-3 gap-5">
          {s.dores.map((d) => (
            <li key={d.titulo} className="bg-white border-[3px] border-sc-ink shadow-[6px_6px_0_#15181C] p-[clamp(20px,2.4vw,28px)]">
              <h3 className="text-[clamp(21px,2.1vw,26px)] font-black tracking-[-0.03em] leading-[1.15] m-0">{d.titulo}</h3>
              <p className="text-base text-sc-gray-2 mt-3 mb-0">{d.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
