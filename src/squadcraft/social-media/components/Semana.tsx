import { h2 } from "../../components/ui"
import { SEMANA } from "../content"

export function Semana() {
  return (
    <section id="como-fica-a-semana" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={`${h2} max-w-[22ch]`}>Como fica a sua semana</h2>
        <ol className="list-none p-0 m-0 mt-8 grid md:grid-cols-3 gap-0.5 bg-sc-line border border-sc-line">
          {SEMANA.map((dia) => (
            <li key={dia.quando} className="bg-white p-[clamp(22px,3vw,34px)]">
              <span className="font-mono text-[11.5px] font-semibold tracking-[0.12em] uppercase text-sc-green-deep">
                {dia.quando}
              </span>
              <p className="text-[clamp(17px,1.6vw,19px)] leading-[1.45] mt-3 mb-0">{dia.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
