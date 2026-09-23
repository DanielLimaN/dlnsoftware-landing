import { useEffect, useState } from "react"
import { QUADROS } from "../data"
import { h2 } from "./ui"

export function Studio() {
  const [quadro, setQuadro] = useState(0)
  const [rodando, setRodando] = useState(true)

  useEffect(() => {
    if (!rodando) return
    const t = setInterval(() => setQuadro((q) => (q + 1) % QUADROS.length), 2200)
    return () => clearInterval(t)
  }, [rodando])

  const q = QUADROS[quadro]
  const fo = q.foco

  return (
    <section id="studio" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <div className="flex flex-wrap gap-5 items-end justify-between mb-7">
          <h2 className={`${h2} max-w-[18ch]`}>
            O SquadCraft Studio por dentro. <span className="text-sc-green-deep">Telas reais.</span>
          </h2>
          <span className="font-mono text-xs font-semibold tracking-[0.1em] uppercase text-sc-gray max-w-[34ch]">
            passo {quadro + 1} de {QUADROS.length} — um squad montado do zero
          </span>
        </div>

        <div className="border-2 border-sc-green bg-white">
          <div className="flex flex-wrap items-center gap-2.5 px-3.5 py-[11px] border-b-2 border-sc-green">
            <span className="font-mono text-[11.5px] font-semibold text-sc-green-deep">squadcraft.app / studio</span>
            <span className="ml-auto font-mono text-[11.5px] font-semibold text-sc-gray">
              {quadro + 1} / {QUADROS.length}
            </span>
          </div>
          <div className="relative aspect-[1765/968] overflow-hidden bg-sc-paper">
            {QUADROS.map((f, i) => (
              <img
                key={f.src}
                width={1765}
                height={968}
                loading="eager"
                fetchPriority={i === 0 ? "high" : undefined}
                decoding="async"
                src={f.src}
                alt={f.alt}
                className="absolute inset-0 size-full object-cover block transition-opacity duration-[450ms] ease-in-out"
                style={{ opacity: i === quadro ? 1 : 0 }}
              />
            ))}
            <span
              className="absolute border-[3px] border-sc-green pointer-events-none"
              style={{
                left: fo ? fo[0] : "50%",
                top: fo ? fo[1] : "50%",
                width: fo ? fo[2] : "0%",
                height: fo ? fo[3] : "0%",
                opacity: fo ? 1 : 0,
                transition: "opacity .4s ease, left .5s ease, top .5s ease, width .5s ease, height .5s ease",
              }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4 p-4 border-t-2 border-sc-green">
            <span className="text-[clamp(16px,2vw,21px)] font-bold tracking-[-0.01em] min-w-0 flex-1 [overflow-wrap:anywhere]">
              {q.legenda}
            </span>
            <button
              type="button"
              onClick={() => setRodando((r) => !r)}
              className="bg-transparent border-2 border-sc-line-2 text-sc-ink font-mono text-xs font-semibold uppercase tracking-[0.06em] px-[18px] py-[11px] cursor-pointer shrink-0 transition-colors hover:border-sc-green-deep hover:text-sc-green-deep"
            >
              {rodando ? "❙❙ pausar" : "▶ rodar"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
