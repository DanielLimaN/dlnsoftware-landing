import { Eyebrow, SQUADCRAFT_URL } from "./ui"

const services = [
  {
    title: "Consultoria de processos",
    text: "Mapeamento com quem executa, gargalos nomeados, régua de decisão onde hoje existe planilha. O entregável é um plano com preço, não um relatório.",
  },
  {
    title: "Engenharia de software",
    text: "Sistemas sob medida, integrações com bureaus e antifraude, modernização de legado por partes — sem parar a operação. Código e dados no seu nome.",
  },
  {
    title: "SquadCraft · agentes de IA",
    text: "Equipes de agentes para atendimento, cobrança e follow-up, montadas por um especialista nosso e conectadas ao WhatsApp que você já usa.",
    link: { label: "Ver a página do SquadCraft →", href: SQUADCRAFT_URL },
  },
]

export function Services() {
  return (
    <section id="servicos" className="max-w-[1240px] mx-auto mt-[104px] px-8">
      <Eyebrow>O que fazemos</Eyebrow>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-11 mt-10">
        {services.map((s) => (
          <div key={s.title}>
            <div className="h-[3px] w-11 bg-blue mb-[22px]" />
            <h3 className="font-serif font-normal text-[29px] leading-[1.1] m-0">{s.title}</h3>
            <p className="text-ink-2 mt-3.5 mb-0 text-[17px]">{s.text}</p>
            {s.link && (
              <a
                href={s.link.href}
                className="inline-block mt-3.5 text-base font-medium text-blue-deep no-underline border-b border-blue-soft pb-0.5 hover:border-blue-deep hover:text-blue-deep"
              >
                {s.link.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
