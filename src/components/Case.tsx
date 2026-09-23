import type { ReactNode } from "react"
import { Eyebrow } from "./ui"

const steps: { n: string; title: string; text: string; icon: ReactNode; last?: boolean }[] = [
  {
    n: "01",
    title: "Proposta entra",
    text: "Dados do profissional de saúde e do equipamento, num formulário único.",
    icon: (
      <>
        <rect x="12" y="6" width="62" height="50" rx="4" fill="#EFEAE0" />
        <rect x="24" y="17" width="62" height="50" rx="4" fill="#F7F5F2" stroke="#14171A" strokeWidth="1.6" />
        <path d="M34 32 H76 M34 42 H68 M34 52 H72" stroke="#9A958C" strokeWidth="1.6" />
      </>
    ),
  },
  {
    n: "02",
    title: "Regras da Cromatic",
    text: "Régua de crédito escrita com quem aprova — a mesma para todos, rastreável.",
    icon: (
      <>
        <path d="M18 18 H102 M18 37 H102 M18 56 H102" stroke="#E3DED5" strokeWidth="1.6" />
        <circle cx="40" cy="18" r="7" fill="#14171A" />
        <circle cx="72" cy="37" r="7" fill="#14171A" />
        <circle cx="56" cy="56" r="7" fill="#2F6BFF" />
      </>
    ),
  },
  {
    n: "03",
    title: "Antifraude Valid",
    text: "Identidade e sinal de fraude checados no motor da Valid, dentro do fluxo.",
    icon: (
      <>
        <path
          d="M60 4 L88 15 V38 C88 55 76 65 60 71 C44 65 32 55 32 38 V15 Z"
          fill="#F7F5F2"
          stroke="#14171A"
          strokeWidth="1.6"
        />
        <path
          d="M48 37 L57 47 L74 26"
          stroke="#2F6BFF"
          strokeWidth="3.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    n: "04",
    title: "Decisão e FIDC",
    text: "Aprovação com justificativa registrada. O fundo financia sabendo o risco que comprou.",
    last: true,
    icon: (
      <>
        <circle cx="60" cy="37" r="28" fill="none" stroke="#E3DED5" strokeWidth="7" />
        <path d="M60 9 A28 28 0 0 1 84 51" fill="none" stroke="#2F6BFF" strokeWidth="7" strokeLinecap="round" />
        <circle cx="60" cy="37" r="7" fill="#14171A" />
      </>
    ),
  },
]

export function Case() {
  return (
    <section id="case" className="max-w-[1240px] mx-auto mt-[72px] px-8">
      <div className="bg-night text-frost rounded-md overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-stretch">
        <div className="p-[clamp(32px,4.4vw,60px)] flex flex-col gap-[22px]">
          <Eyebrow className="text-green">Case · crédito e antifraude</Eyebrow>
          <h2 className="font-serif font-normal text-[clamp(30px,3.8vw,46px)] leading-[1.06] tracking-[-0.02em] m-0 max-w-[24ch]">
            Para proteger o fundo que bancariza o financiamento, construímos a esteira.
          </h2>
          <p className="text-mist m-0 text-[17px] max-w-[48ch]">
            A Cromatic vende equipamento de ticket alto para profissionais de saúde — mercado novo no
            Brasil, que os bancos ainda não bancarizam e que por isso exigiu um FIDC próprio.
            Desenhamos a esteira que decide quem entra e integramos ao motor antifraude da Valid:
            menos fraude, menos perda no fundo, crescimento com régua de risco.
          </p>
          <div className="flex flex-wrap items-center gap-3.5 mt-auto pt-3.5">
            <img
              src="/assets/cromatic-logo.webp"
              alt="Cromatic"
              width={240}
              height={240}
              loading="lazy"
              decoding="async"
              className="size-10 block rounded-[9px] bg-paper p-[3px] box-content"
            />
            <span className="text-[17px] font-semibold">Cromatic</span>
            <span className="w-px h-6 bg-night-line" />
            <span className="font-mono text-[12.5px] text-green">integração em produção</span>
          </div>
        </div>
        <div className="bg-night-2 flex items-center justify-center p-[clamp(28px,4vw,48px)] min-w-0">
          <img
            src="/assets/cromatic-nec-one.webp"
            width={1071}
            height={1122}
            loading="lazy"
            decoding="async"
            alt="Cromatic NEO One, equipamento financiado pela esteira de risco"
            className="w-full max-w-[380px] h-auto block drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
      <p className="font-mono text-[12.5px] text-ink-3 mt-4 mb-0">
        NEO One · cada aprovação errada é prejuízo direto no fundo — é esse risco que a esteira
        precisa acertar
      </p>

      <div className="border border-line rounded-md bg-paper-card p-[clamp(26px,3.4vw,44px)] mt-5">
        <Eyebrow>A esteira, do pedido à decisão</Eyebrow>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-5 mt-7">
          {steps.map((s) => (
            <div key={s.n} className="min-w-0">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono text-[11px] text-blue-deep">{s.n}</span>
                <span className={`flex-1 h-px ${s.last ? "bg-blue" : "bg-line"}`} />
              </div>
              <svg viewBox="0 0 120 74" className="w-full max-w-[120px] h-auto block" aria-hidden="true">
                {s.icon}
              </svg>
              <h4 className="text-[17px] font-semibold mt-4 mb-0">{s.title}</h4>
              <p className="text-ink-2 text-[15.5px] mt-2 mb-0">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
