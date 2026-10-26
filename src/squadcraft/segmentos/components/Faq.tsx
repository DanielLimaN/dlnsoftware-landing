import { useId, useState } from "react"
import { faqDoSegmento, type Pergunta as P, type Segmento } from "../../../content/segmentos"
import { h2 } from "../../components/ui"

function Resposta({ q }: { q: P }) {
  if (!q.link) return q.r
  const [antes, depois] = q.r.split(q.link.texto)
  return (
    <>
      {antes}
      <a href={q.link.href} className="text-sc-green-deep font-semibold underline underline-offset-2">
        {q.link.texto}
      </a>
      {depois}
    </>
  )
}

function Pergunta({ q }: { q: P }) {
  const [aberta, setAberta] = useState(false)
  const id = useId()
  return (
    <div className="bg-white">
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={aberta}
          aria-controls={id}
          onClick={() => setAberta((v) => !v)}
          className="w-full flex items-center justify-between gap-5 text-left bg-transparent border-0 cursor-pointer font-[inherit] text-sc-ink text-[clamp(18px,1.8vw,22px)] font-extrabold tracking-[-0.02em] leading-[1.3] px-[clamp(18px,2.4vw,28px)] py-5 hover:bg-sc-paper"
        >
          {q.p}
          <span
            aria-hidden="true"
            className="grid place-items-center size-8 shrink-0 border-2 border-sc-ink font-mono text-lg font-semibold leading-none"
          >
            {aberta ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div id={id} hidden={!aberta} className="px-[clamp(18px,2.4vw,28px)] pb-6">
        <p className="text-base text-sc-gray-2 m-0 max-w-[70ch]">
          <Resposta q={q} />
        </p>
      </div>
    </div>
  )
}

export function Faq({ s }: { s: Segmento }) {
  return (
    <section id="perguntas" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>Perguntas frequentes</h2>
        <div className="mt-8 flex flex-col gap-0.5 bg-sc-line border-[3px] border-sc-ink max-w-[960px]">
          {faqDoSegmento(s).map((q) => (
            <Pergunta key={q.p} q={q} />
          ))}
        </div>
      </div>
    </section>
  )
}
