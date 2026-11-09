import { h2 } from "../../components/ui"
import { ENTREGA } from "../content"

export function Entrega() {
  return (
    <section id="o-que-a-squad-entrega" className="bg-sc-ink text-sc-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={`${h2} max-w-[20ch]`}>O que a squad entrega</h2>
        <ul className="list-none p-0 m-0 mt-9 grid md:grid-cols-2 gap-6 md:gap-5">
          {ENTREGA.map((item, i) => (
            <li
              key={item.titulo}
              className="bg-white text-sc-ink border-[3px] border-sc-paper shadow-[6px_6px_0_#12B86B] p-[clamp(22px,2.6vw,32px)]"
            >
              <span aria-hidden="true" className="font-mono text-[11.5px] font-semibold tracking-[0.12em] text-sc-green-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[clamp(20px,2vw,26px)] font-extrabold tracking-[-0.02em] uppercase leading-[1.15] mt-3 mb-0">
                {item.titulo}
              </h3>
              <p className="text-base text-sc-gray-2 leading-[1.45] mt-3 mb-0 max-w-[48ch]">{item.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
