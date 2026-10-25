import { h2 } from "../../components/ui"
import { PASSOS } from "../content"

export function Como() {
  return (
    <section id="como-funciona" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>Como funciona</h2>
        <ol className="list-none p-0 m-0 mt-8 grid md:grid-cols-3 gap-0.5 bg-sc-line border border-sc-line">
          {PASSOS.map((passo, i) => (
            <li key={passo} className="bg-white p-[clamp(22px,3vw,34px)]">
              <span aria-hidden="true" className="block text-[clamp(44px,5vw,64px)] font-black leading-none tracking-[-0.05em] text-sc-green-deep">
                {i + 1}
              </span>
              <p className="text-[clamp(17px,1.6vw,19px)] leading-[1.45] mt-4 mb-0">
                <span className="sr-only">{i + 1}. </span>
                {passo}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
