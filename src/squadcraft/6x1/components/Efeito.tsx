import { h2 } from "../../components/ui"
import { EFEITO } from "../content"

const tons = ["bg-sc-ink text-sc-paper [&_h3]:text-sc-green", "bg-sc-green text-sc-ink"]

export function Efeito() {
  return (
    <section id="efeito" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>O efeito na sua empresa</h2>
        <div className="mt-8 grid md:grid-cols-2 border-[3px] border-sc-ink">
          {EFEITO.map((e, i) => (
            <div key={e.titulo} className={`p-[clamp(24px,3.4vw,44px)] ${tons[i]}`}>
              <h3 className="text-[clamp(24px,2.8vw,36px)] font-black tracking-[-0.03em] uppercase leading-[1.1] m-0">
                {e.titulo}
              </h3>
              <p className="text-[clamp(17px,1.6vw,20px)] font-medium leading-[1.45] mt-3.5 mb-0">{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
