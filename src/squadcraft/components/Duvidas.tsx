import { FAQ } from "../data"
import { h2 } from "./ui"

export function Duvidas() {
  return (
    <section id="duvidas" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={`${h2} mb-9 max-w-[22ch]`}>
          O que perguntam <span className="text-sc-green-deep">antes de fechar</span>
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,330px),1fr))] gap-0.5 bg-sc-line border border-sc-line">
          {FAQ.map((q) => (
            <div key={q.p} className="bg-white p-[clamp(24px,3vw,32px)] min-w-0 transition-colors duration-200 hover:bg-sc-paper">
              <h3 className="text-[clamp(18px,2vw,23px)] font-extrabold tracking-[-0.02em] leading-[1.25] m-0 [overflow-wrap:anywhere]">
                {q.p}
              </h3>
              <p className="text-base text-sc-gray mt-3.5 mb-0 [overflow-wrap:anywhere]">{q.r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
