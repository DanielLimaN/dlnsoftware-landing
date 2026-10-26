import { SEGMENTOS } from "../../content/segmentos"

export function Segmentos() {
  return (
    <section id="segmentos" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col md:flex-row md:items-baseline gap-x-8 gap-y-4">
        <h2 className="font-mono text-xs font-semibold tracking-[0.12em] uppercase text-sc-gray-2 m-0 shrink-0">
          SquadCraft para o seu segmento
        </h2>
        <ul className="list-none p-0 m-0 flex flex-wrap gap-x-6 gap-y-2">
          {SEGMENTOS.map((s) => (
            <li key={s.slug}>
              <a href={`/squadcraft/${s.slug}`} className="text-[15px] font-semibold text-sc-ink underline underline-offset-4 decoration-sc-line-2 hover:text-sc-green-deep hover:decoration-sc-green-deep">
                {s.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
