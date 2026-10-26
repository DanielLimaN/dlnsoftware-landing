import type { Segmento } from "../../../content/segmentos"
import { h2 } from "../../components/ui"

export function TimeFica({ s }: { s: Segmento }) {
  return (
    <section id="o-seu-time-fica-com" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>E o seu time fica com</h2>
        <ul className={`list-none p-0 m-0 mt-8 grid gap-5 ${s.timeFicaCom.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {s.timeFicaCom.map((t) => (
            <li
              key={t}
              className="bg-sc-green border-[3px] border-sc-ink shadow-[6px_6px_0_#15181C] p-[clamp(22px,2.8vw,34px)] text-[clamp(26px,3vw,40px)] font-black tracking-[-0.04em] leading-[1.08] uppercase"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
