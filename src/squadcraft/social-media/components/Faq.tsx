import { useId, useState } from "react"
import { h2 } from "../../components/ui"
import { FAQ } from "../content"

function Pergunta({ p, r }: { p: string; r: string }) {
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
          {p}
          <span
            aria-hidden="true"
            className="grid place-items-center size-8 shrink-0 border-2 border-sc-ink font-mono text-lg font-semibold leading-none"
          >
            {aberta ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div id={id} hidden={!aberta} className="px-[clamp(18px,2.4vw,28px)] pb-6">
        <p className="text-base text-sc-gray-2 m-0 max-w-[70ch]">{r}</p>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section id="perguntas" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>Perguntas frequentes</h2>
        <div className="mt-8 flex flex-col gap-0.5 bg-sc-line border-[3px] border-sc-ink max-w-[960px]">
          {FAQ.map((q) => (
            <Pergunta key={q.p} p={q.p} r={q.r} />
          ))}
        </div>
      </div>
    </section>
  )
}
