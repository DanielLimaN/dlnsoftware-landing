import { Eyebrow } from "./ui"

const timeline = [
  {
    when: "dia 0",
    title: "Conversa de 30 minutos",
    text: "Você conta como o trabalho acontece hoje. Sem apresentação comercial.",
  },
  {
    when: "dias 1–3",
    title: "Mapeamento com quem executa",
    text: "Mapa em uma página, com os gargalos marcados e ordenados por impacto.",
  },
  {
    when: "dia 5",
    title: "Plano e orçamento na mesa",
    text: "Escopo, prazo e preço fechados. Automação de processo começa em R$ 18 mil.",
  },
  {
    when: "depois",
    title: "Sem lock-in",
    text: "Código, dados e acessos no seu nome desde o dia 1. Suporte é opcional.",
  },
]

export function Method() {
  return (
    <section id="metodo" className="border-t border-line mt-[104px]">
      <div className="max-w-[1240px] mx-auto px-8 py-[88px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-14 items-start">
          <div>
            <Eyebrow>Método</Eyebrow>
            <h2 className="font-serif font-normal text-[clamp(30px,4.2vw,50px)] leading-[1.04] tracking-[-0.02em] mt-4 mb-0">
              A maior parte do dinheiro perdido em TI foi gasto especificando o sistema errado com
              muita competência.
            </h2>
            <p className="text-ink-2 mt-[22px] mb-0 text-lg max-w-[46ch]">
              O diagnóstico existe para evitar isso, e é gratuito porque é nele que decidimos, os
              dois, se faz sentido trabalhar junto. Se o melhor caminho for não fazer nada por ora, a
              gente diz isso.
            </p>
            <div className="flex flex-wrap items-center gap-[18px] mt-[34px] pt-[26px] border-t border-line">
              <img
                src="/assets/daniel-avatar.webp"
                alt="Daniel Lima do Nascimento, que conduz cada diagnóstico"
                width={132}
                height={132}
                loading="lazy"
                decoding="async"
                className="size-[66px] rounded-full block shrink-0"
              />
              <div>
                <div className="text-[17px] font-semibold">Daniel Lima do Nascimento</div>
                <div className="text-[15.5px] text-ink-2">conduz cada diagnóstico pessoalmente</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-px bg-line border border-line">
            {timeline.map((t) => (
              <div key={t.when} className="bg-paper p-7">
                <div className="font-mono text-xs text-blue-deep">{t.when}</div>
                <h3 className="text-[18.5px] font-semibold mt-3 mb-0">{t.title}</h3>
                <p className="text-ink-2 mt-2.5 mb-0 text-base">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
