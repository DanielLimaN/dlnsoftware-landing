import { FlowIcon } from "./FlowMark"

const services = [
  {
    title: "Consultoria de Processos",
    items: [
      "Mapeamento de fluxos operacionais",
      "Análise de pontos de dor e gargalos",
      "Otimização de processos existentes",
      "KPIs e métricas de performance",
    ],
  },
  {
    title: "Engenharia de Software",
    items: [
      "Desenvolvimento web e mobile sob medida",
      "Arquitetura escalável e resiliente",
      "APIs e integrações de sistemas",
      "Code review e qualidade de código",
    ],
  },
  {
    title: "Transformação Digital",
    items: [
      "Automação de processos manuais",
      "Modernização de sistemas legados",
      "Cloud migration e infraestrutura",
      "Data analytics e dashboards",
    ],
  },
]

export function Services() {
  return (
    <section
      id="servicos"
      className="relative flex flex-col items-center px-8 py-24 gap-12 bg-ink-light"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-signal rounded-full" />
      <span className="text-xs font-semibold tracking-[0.2em] text-signal">
        O QUE FAZEMOS
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone text-center max-w-[700px]">
        Soluções completas de engenharia de software para o seu negócio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1280px]">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-3 p-8 sm:p-9 bg-card border border-card-border rounded-2xl"
          >
            <h3 className="text-xl font-bold text-bone">{service.title}</h3>
            <ul className="flex flex-col gap-1.5">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
            <FlowIcon size={32} className="mt-auto" />
          </div>
        ))}
      </div>
    </section>
  )
}
