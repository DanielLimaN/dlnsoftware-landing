import { useEffect, useRef, useState } from "react"

const steps = [
  {
    label: "Diagnóstico",
    desc: "Análise do fluxo atual e identificação de gargalos e oportunidades",
    color: "bg-signal",
    glowColor: "#5EEAD4",
    sub: [
      "Mapeamento de processos atuais",
      "Entrevistas com stakeholders",
      "Análise de dados e métricas",
      "Identificação de gargalos",
    ],
  },
  {
    label: "Estratégia",
    desc: "Desenho da solução, arquitetura e roadmap de implementação",
    color: "bg-bone",
    glowColor: "#F8FAFC",
    sub: [
      "Definição de roadmap",
      "Arquitetura da solução",
      "Planejamento de sprints",
      "Definição de KPIs",
    ],
  },
  {
    label: "Entrega",
    desc: "Implementação, validação e melhoria contínua dos sistemas",
    color: "bg-flow",
    glowColor: "#3B82F6",
    sub: [
      "Desenvolvimento iterativo",
      "Testes e validação",
      "Deploy e acompanhamento",
      "Otimização contínua",
    ],
  },
]

function useOnScreen(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible] as const
}

export function Method() {
  const [sectionRef, visible] = useOnScreen(0.15)

  return (
    <section
      id="metodo"
      ref={sectionRef}
      className="flex flex-col items-center px-8 py-24 gap-12"
    >
      <span className="text-xs font-semibold tracking-[0.2em] text-signal">
        NOSSO MÉTODO
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone text-center max-w-[600px]">
        Três etapas, um fluxo contínuo de valor
      </h2>

      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-12 w-full max-w-[1100px]">
        {/* Nodes row */}
        <div className="relative flex items-start justify-between">
          {/* Static wavy connector */}
          <svg className="absolute top-[18px] left-[4%] w-[92%] h-[12px] overflow-visible" viewBox="0 0 100 12" preserveAspectRatio="none">
            <path
              d="M-5,6 C7.5,0.5 32.5,0.5 45,6 C57.5,11.5 82.5,11.5 95,6 C102.5,5.5 107.5,5.5 110,6"
              stroke="#1F2937" strokeWidth="3" fill="none"
            />
          </svg>
          {/* Animated wave overlay */}
          <svg className="absolute top-[18px] left-[4%] w-[92%] h-[12px] overflow-visible opacity-60" viewBox="0 0 100 12" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#5EEAD4" />
                <stop offset="25%"  stopColor="#5EEAD4" />
                <stop offset="40%"  stopColor="#F8FAFC" />
                <stop offset="60%"  stopColor="#F8FAFC" />
                <stop offset="75%"  stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <path
              d="M-5,6 C7.5,0.5 32.5,0.5 45,6 C57.5,11.5 82.5,11.5 95,6 C102.5,5.5 107.5,5.5 110,6"
              stroke="url(#waveGradient)" strokeWidth="2.5" fill="none"
              strokeDasharray="10 30"
              strokeLinecap="round"
              strokeDashoffset={120}
              className={visible ? "animate-wave" : ""}
            />
          </svg>
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center relative z-10 w-1/3 px-4">
              <div
                className="absolute w-16 h-16 rounded-full"
                style={{
                  top: -10,
                  border: "1.5px dashed " + step.glowColor,
                  opacity: 0,
                  animation: visible ? `pulse-glow 2s ease-in-out ${i * 0.6}s infinite` : "none",
                }}
              />
              <div
                className="w-11 h-11 rounded-full mb-3"
                style={{ animation: visible ? `pulse-node 2s ease-in-out ${i * 0.6}s infinite` : "none" }}
              >
                <div className={`w-full h-full rounded-full ${step.color}`} />
              </div>
              <h3 className="text-lg font-bold text-bone mb-1">{step.label}</h3>
              <p className="text-xs text-muted text-center leading-relaxed max-w-[200px] mb-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        {/* Sub-steps row */}
        <div className="grid grid-cols-3 gap-6">
          {steps.map((step, colIdx) => (
            <div key={step.label} className="flex flex-col gap-2">
              {step.sub.map((sub, rowIdx) => (
                <div
                  key={sub}
                  className="flex items-center gap-2.5 p-3 bg-card border border-card-border rounded-lg"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`,
                    transitionDelay: visible ? `${0.4 + colIdx * 0.15 + rowIdx * 0.1}s` : "0s",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                  <span className="text-xs text-muted">{sub}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col gap-8 w-full max-w-[500px]">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col gap-3">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-full shrink-0"
                  style={{ animation: visible ? `pulse-node 2s ease-in-out ${i * 0.6}s infinite` : "none" }}
                >
                  <div className={`w-full h-full rounded-full ${step.color}`} />
                </div>
                {i < steps.length - 1 && <div className="w-0.5 h-full min-h-8 bg-card-border" />}
              </div>
              <div className="pb-4">
                <h3 className="text-base font-bold text-bone mb-0.5">{step.label}</h3>
                <p className="text-xs text-muted">{step.desc}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-4">
              {step.sub.map((sub, rowIdx) => (
                <div
                  key={sub}
                  className="flex items-center gap-2.5 p-3 bg-card border border-card-border rounded-lg ml-8"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`,
                    transitionDelay: visible ? `${0.4 + i * 0.15 + rowIdx * 0.1}s` : "0s",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                  <span className="text-xs text-muted">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
