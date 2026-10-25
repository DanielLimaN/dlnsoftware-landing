import { h2 } from "../../components/ui"
import { ASSUME } from "../content"

export function Assume() {
  return (
    <section id="o-que-a-squad-assume" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={`${h2} max-w-[20ch]`}>O que a squad assume no administrativo</h2>
        <ul className="list-none p-0 m-0 mt-8 grid md:grid-cols-2 gap-0.5 bg-sc-line border border-sc-line">
          {ASSUME.map((item) => (
            <li key={item} className="bg-white flex items-start gap-4 p-[clamp(18px,2.2vw,26px)]">
              <span
                aria-hidden="true"
                className="grid place-items-center size-8 shrink-0 bg-sc-green border-2 border-sc-ink font-black text-lg leading-none"
              >
                ✓
              </span>
              <span className="text-[clamp(17px,1.6vw,20px)] font-semibold leading-[1.35] pt-0.5">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-sc-gray-2 mt-5 mb-0 max-w-[70ch]">
          Escalas e decisões trabalhistas continuam com o seu DP e o seu contador. A squad organiza,
          lembra e comunica.
        </p>
      </div>
    </section>
  )
}
