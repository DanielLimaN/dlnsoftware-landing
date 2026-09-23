import { Eyebrow, SQUADCRAFT_URL } from "./ui"

const teams = [
  {
    tag: "atendimento",
    text: "Confirma agendamento, responde dúvida recorrente e passa para uma pessoa quando sai do script.",
  },
  {
    tag: "cobrança",
    text: "Persegue pendência com régua de tom e horário, registra cada tentativa e avisa quem precisa decidir.",
  },
  {
    tag: "pós-venda e marketing",
    text: "Lembra quem parou de comprar, puxa follow-up esquecido e devolve a lista do que merece atenção humana.",
  },
]

const plans = [
  {
    name: "Essencial",
    audience: "uma equipe, um processo",
    price: "R$ 397",
    perMonth: true,
    features: [
      "1 equipe de agentes",
      "1 número de WhatsApp",
      "configuração inicial com especialista",
      "suporte por e-mail",
    ],
    cta: "Começar",
    href: `${SQUADCRAFT_URL}#planos`,
  },
  {
    name: "Operação",
    audience: "várias áreas trabalhando juntas",
    price: "R$ 1.197",
    perMonth: true,
    featured: true,
    features: [
      "até 4 equipes de agentes",
      "integração com seu ERP ou CRM",
      "relatórios de atendimento e cobrança",
      "revisão mensal com especialista",
    ],
    cta: "Falar com especialista",
    href: `${SQUADCRAFT_URL}#falar`,
  },
  {
    name: "Sob medida",
    audience: "volume alto ou regra crítica",
    price: "sob consulta",
    features: [
      "equipes ilimitadas",
      "agentes treinados no seu processo",
      "integrações e antifraude sob demanda",
      "acordo de nível de serviço",
    ],
    cta: "Pedir proposta",
    href: `${SQUADCRAFT_URL}#falar`,
  },
]

const ctaPrimary =
  "bg-green text-green-ink font-semibold rounded-full transition-colors hover:bg-green-hi cursor-pointer border-0"
const ctaOutline =
  "bg-transparent border border-night-line-2 text-frost font-medium rounded-full transition-colors hover:border-green cursor-pointer"

export function SquadCraft() {
  return (
    <section id="squadcraft" className="max-w-[1240px] mx-auto mt-[104px] px-8">
      <div className="bg-night text-frost rounded-md p-[clamp(32px,4.4vw,60px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-12 items-start">
          <div>
            <Eyebrow className="text-green">Produto próprio</Eyebrow>
            <img
              src="/assets/squadcraft-logo.png"
              alt="SquadCraft"
              width={1799}
              height={252}
              loading="lazy"
              decoding="async"
              className="w-full max-w-[280px] h-auto block mt-5"
            />
            <h2 className="font-serif font-normal text-[clamp(30px,3.8vw,46px)] leading-[1.06] tracking-[-0.02em] mt-6 mb-0 max-w-[26ch]">
              Equipes de agentes de IA montadas com você, não uma tela em branco.
            </h2>
            <p className="text-mist mt-5 mb-0 text-[17.5px] max-w-[48ch]">
              A maior parte das ferramentas de IA entrega um chat vazio e a conta de descobrir o que
              fazer com ele. No SquadCraft, um especialista nosso configura a primeira equipe junto
              com você, a partir do processo que já mapeamos — e ela entra em operação conectada ao
              WhatsApp que a empresa já usa.
            </p>
            <div className="flex flex-wrap items-center gap-[18px] mt-8">
              <a href={SQUADCRAFT_URL} className={`${ctaPrimary} no-underline text-[17px] px-7 py-[15px] hover:text-green-ink`}>
                Conhecer o SquadCraft →
              </a>
              <span className="font-mono text-[13px] text-mist-2">
                a partir de R$ 397/mês · implantação inclusa
              </span>
            </div>
          </div>
          <div className="grid gap-px bg-night-line border border-night-line rounded-md overflow-hidden">
            {teams.map((t) => (
              <div key={t.tag} className="bg-night-2 px-[26px] py-6">
                <div className="font-mono text-[11.5px] text-green mb-2">{t.tag}</div>
                <div className="text-[16.5px]">{t.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-11 pt-10 border-t border-night-line">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-serif font-normal text-[clamp(26px,3vw,34px)] leading-[1.1] m-0">Planos</h3>
            <span className="font-mono text-[12.5px] text-mist-2">
              mensal, sem fidelidade · implantação inclusa em todos
            </span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-[18px] mt-7">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-lg p-[30px] flex flex-col gap-[18px] border ${
                  p.featured ? "bg-night-green border-green" : "bg-night-2 border-night-line"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-[11px] left-[30px] bg-green text-green-ink font-mono text-[10.5px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full">
                    mais contratado
                  </span>
                )}
                <div>
                  <div className="text-[17px] font-semibold">{p.name}</div>
                  <div className="text-mist-2 text-[15px] mt-1.5">{p.audience}</div>
                </div>
                <div className="font-serif text-[42px] leading-none">
                  {p.price}
                  {p.perMonth && <span className="font-sans text-base text-mist-2">/mês</span>}
                </div>
                <div className="flex flex-col gap-2.5 text-base text-frost-2">
                  {p.features.map((f) => (
                    <span key={f} className="flex gap-[9px]">
                      <span className="text-green">✓</span>
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href={p.href}
                  className={`mt-auto text-center no-underline text-base p-3.5 ${
                    p.featured ? `${ctaPrimary} text-green-ink hover:text-green-ink` : `${ctaOutline} text-frost hover:text-frost`
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        <p className="font-mono text-[12.5px] text-mist-2 mt-[34px] mb-0 pt-6 border-t border-night-line max-w-[80ch] leading-[1.7]">
          Consultoria e SquadCraft são coisas separadas: a primeira é projeto sob medida, orçado por
          escopo; a segunda é produto por assinatura. Às vezes o diagnóstico conclui que você só
          precisa do segundo — e aí a gente diz isso.{" "}
          <a href={SQUADCRAFT_URL} className="text-green hover:text-green">
            Ver tudo sobre o SquadCraft →
          </a>
        </p>
      </div>
    </section>
  )
}
