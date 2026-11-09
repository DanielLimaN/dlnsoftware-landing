import { h2 } from "../../components/ui"
import { TRAVA } from "../content"

export function Trava() {
  return (
    <section id="por-que-trava" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={`${h2} max-w-[22ch]`}>
          Por que a sua empresa <span className="text-sc-green-deep">para de postar</span>
        </h2>
        <ul className="list-none p-0 m-0 mt-8 grid md:grid-cols-2 gap-0.5 bg-sc-line border border-sc-line">
          {TRAVA.map((item) => (
            <li key={item.titulo} className="bg-white p-[clamp(22px,2.6vw,32px)]">
              <h3 className="text-[clamp(19px,1.9vw,24px)] font-extrabold tracking-[-0.02em] uppercase leading-[1.15] m-0">
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
