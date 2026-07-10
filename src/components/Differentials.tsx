import { FlowIcon } from "./FlowMark"

const items = [
  {
    title: "Equipe Sênior",
    desc: "Profissionais com vasta experiência em arquitetura de software, liderança técnica e entrega de projetos complexos.",
  },
  {
    title: "Entregas Ágeis",
    desc: "Metodologias ágeis e ciclos curtos de entrega para garantir valor contínuo ao seu negócio.",
  },
  {
    title: "Foco em Resultado",
    desc: "Cada projeto é desenhado para gerar impacto mensurável nos indicadores da sua operação.",
  },
  {
    title: "Suporte Contínuo",
    desc: "Suporte dedicado pós-entrega com monitoramento, evolução e melhoria contínua dos sistemas.",
  },
]

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative flex flex-col items-center px-8 py-24 gap-12 bg-ink-light"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-signal rounded-full" />
      <span className="text-xs font-semibold tracking-[0.2em] text-signal">
        DIFERENCIAIS
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone text-center max-w-[600px]">
        Por que escolher a DLN Software?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1280px]">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 p-7 sm:p-9 bg-card border border-card-border rounded-2xl"
          >
            <FlowIcon size={32} />
            <h3 className="text-lg font-bold text-bone">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
