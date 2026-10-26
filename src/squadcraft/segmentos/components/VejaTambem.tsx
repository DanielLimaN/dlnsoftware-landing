import { SEGMENTOS } from "../../../content/segmentos"
import { h2 } from "../../components/ui"

const PAGINA_6X1 = {
  href: "/squadcraft/6x1",
  selo: "FIM DA ESCALA 6X1",
  nome: "Fim da escala 6x1: o administrativo da sua empresa dá conta?",
}

export function VejaTambem({ atual }: { atual: string }) {
  const cartoes = [
    ...SEGMENTOS.filter((s) => s.slug !== atual).map((s) => ({ href: `/squadcraft/${s.slug}`, selo: s.selo, nome: s.nome })),
    PAGINA_6X1,
  ]
  return (
    <section id="veja-tambem" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>Veja também</h2>
        <ul className="list-none p-0 m-0 mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] gap-4">
          {cartoes.map((c) => (
            <li key={c.href}>
              <a
                href={c.href}
                className="group flex flex-col justify-between gap-4 h-full no-underline text-sc-ink bg-white border-[3px] border-sc-ink p-5 transition-transform duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#12B86B] hover:text-sc-ink"
              >
                <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-sc-green-deep">{c.selo}</span>
                <span className="flex items-end justify-between gap-3 text-[clamp(18px,1.7vw,21px)] font-extrabold tracking-[-0.02em] leading-[1.2]">
                  {c.nome}
                  <span aria-hidden="true" className="shrink-0">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
