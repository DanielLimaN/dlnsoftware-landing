import { h2 } from "../../components/ui"
import { MUDA } from "../content"

export function Muda() {
  return (
    <section id="o-que-muda" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>O que muda</h2>
        <ul className="list-none p-0 m-0 mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-5">
          {MUDA.map((c) => (
            <li key={c.titulo} className="bg-white border-[3px] border-sc-ink shadow-[6px_6px_0_#15181C] p-[clamp(20px,2.4vw,28px)]">
              <h3 className="text-[clamp(28px,3vw,40px)] font-black tracking-[-0.04em] leading-[1.05] text-sc-green-deep m-0">
                {c.titulo}
              </h3>
              <p className="text-base text-sc-gray-2 mt-3 mb-0">{c.texto}</p>
            </li>
          ))}
        </ul>
        <p className="font-mono text-xs tracking-[0.04em] text-sc-gray-2 mt-7 mb-0">
          Fonte: Emenda Constitucional 141/2026 e Agência Senado.
        </p>
      </div>
    </section>
  )
}
