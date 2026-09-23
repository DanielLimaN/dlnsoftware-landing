import { useEffect, useRef, useState } from "react"
import { track } from "../lib/analytics"
import { Eyebrow } from "./ui"

const PROJECT_COST = 18000
const SQUAD_MONTHLY = 397

function Stepper({
  label,
  display,
  pct,
  onMinus,
  onPlus,
  minusLabel,
  plusLabel,
  wide,
}: {
  label: string
  display: string
  pct: number
  onMinus: () => void
  onPlus: () => void
  minusLabel: string
  plusLabel: string
  wide?: boolean
}) {
  const btn =
    "size-8 border-0 rounded-full bg-transparent text-ink-2 text-[19px] leading-none cursor-pointer hover:bg-paper-2"
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-2.5">
        <span className="text-[16.5px]">{label}</span>
        <div className="flex items-center gap-1 border border-line-2 rounded-full p-1 bg-paper-card">
          <button type="button" onClick={onMinus} className={btn} aria-label={minusLabel}>
            −
          </button>
          <span
            className={`font-mono text-base text-center text-blue-deep ${wide ? "min-w-14" : "min-w-[34px]"}`}
            aria-live="polite"
          >
            {display}
          </span>
          <button type="button" onClick={onPlus} className={btn} aria-label={plusLabel}>
            +
          </button>
        </div>
      </div>
      <div className="h-1 rounded-full bg-line overflow-hidden">
        <div className="h-1 bg-blue" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

function paybackLabel(monthly: number) {
  const months = monthly > 0 ? PROJECT_COST / monthly : 0
  if (months < 1) return "menos de 1 mês de operação"
  if (months > 60) return "acima de 5 anos — automação talvez não seja a prioridade"
  if (Math.round(months * 10) === 10) return "1 mês de operação"
  return months.toFixed(1).replace(".", ",") + " meses de operação"
}

export function Calculator() {
  const [pessoas, setPessoas] = useState(6)
  const [horas, setHoras] = useState(8)
  const [custo, setCusto] = useState(45)

  const horasAno = pessoas * horas * 52
  const custoAno = horasAno * custo
  const mensal = custoAno / 12

  // Report the settled numbers, not every +/- tap; skip the initial defaults.
  const mounted = useRef(false)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    const t = setTimeout(
      () => track("calculator_change", { pessoas, horas, custo_hora: custo, custo_ano: custoAno }),
      1000,
    )
    return () => clearTimeout(t)
  }, [pessoas, horas, custo, custoAno])

  const paybackSquad =
    mensal > SQUAD_MONTHLY
      ? "se cobrir " + Math.ceil((SQUAD_MONTHLY / mensal) * 100) + "% desse custo, já se paga"
      : "acima do custo atual — comece pela consultoria"

  return (
    <section data-section="calculadora" className="border-t border-line">
      <div className="max-w-[1240px] mx-auto px-8 py-[88px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-14 items-start">
        <div>
          <Eyebrow>Calculadora</Eyebrow>
          <h2 className="font-serif font-normal text-[clamp(30px,4.2vw,50px)] leading-[1.04] tracking-[-0.02em] mt-4 mb-0">
            Quanto custa o seu processo manual por ano?
          </h2>
          <p className="text-ink-2 mt-5 mb-0 text-lg max-w-[44ch]">
            Nenhum projeto de automação se justifica sem essa conta — vale para consultoria e para
            SquadCraft. Faça com os seus números e leve o resultado para a conversa.
          </p>
          <div className="mt-[34px] flex flex-col gap-[22px]">
            <Stepper
              label="Pessoas envolvidas"
              display={String(pessoas)}
              pct={Math.round((pessoas / 50) * 100)}
              onMinus={() => setPessoas((v) => clamp(v - 1, 1, 50))}
              onPlus={() => setPessoas((v) => clamp(v + 1, 1, 50))}
              minusLabel="Menos pessoas"
              plusLabel="Mais pessoas"
            />
            <Stepper
              label="Horas por semana, cada uma, em tarefa manual"
              display={`${horas}h`}
              pct={Math.round((horas / 40) * 100)}
              onMinus={() => setHoras((v) => clamp(v - 1, 1, 40))}
              onPlus={() => setHoras((v) => clamp(v + 1, 1, 40))}
              minusLabel="Menos horas"
              plusLabel="Mais horas"
            />
            <Stepper
              label="Custo médio da hora"
              display={`R$ ${custo}`}
              pct={Math.round(((custo - 20) / 180) * 100)}
              onMinus={() => setCusto((v) => clamp(v - 5, 20, 200))}
              onPlus={() => setCusto((v) => clamp(v + 5, 20, 200))}
              minusLabel="Menor custo"
              plusLabel="Maior custo"
              wide
            />
          </div>
        </div>
        <div className="bg-night text-frost rounded-md p-[clamp(30px,4vw,48px)]">
          <span className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-green">
            Custo estimado por ano
          </span>
          <div className="font-serif text-[clamp(44px,6.4vw,76px)] leading-none tracking-[-0.03em] mt-3.5">
            R$ {Math.round(custoAno).toLocaleString("pt-BR")}
          </div>
          <p className="text-mist text-[16.5px] mt-4 mb-0">
            {horasAno.toLocaleString("pt-BR")} horas por ano em trabalho que um sistema faz sozinho.
          </p>
          <div className="border-t border-night-line mt-[26px] pt-[26px] grid gap-[18px]">
            <div>
              <span className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-green block mb-1.5">
                Consultoria · projeto de R$ 18 mil
              </span>
              <span className="text-xl font-semibold">{paybackLabel(mensal)}</span>
            </div>
            <div>
              <span className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-green block mb-1.5">
                SquadCraft · R$ 397/mês
              </span>
              <span className="text-xl font-semibold">{paybackSquad}</span>
            </div>
          </div>
          <a
            href="#conversar"
            className="block text-center bg-frost text-night no-underline font-semibold text-[17px] px-[26px] py-4 rounded-full mt-7 transition-colors hover:bg-white hover:text-night"
          >
            Levar esse número para a conversa
          </a>
        </div>
      </div>
    </section>
  )
}
