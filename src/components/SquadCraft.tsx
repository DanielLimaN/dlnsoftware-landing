import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  MessageCircle,
  Settings2,
  Sparkles,
  Wallet,
  Workflow,
} from "lucide-react"
import { useState } from "react"

const portfolio = [
  {
    name: "SquadCraft",
    badge: "PRODUTO",
    desc: "Monte times de agentes de IA para qualquer área — atendimento, marketing, financeiro — em fluxos visuais, sem código.",
    link: "Conhecer o produto",
    icon: Workflow,
    accent: true,
  },
  {
    name: "Consultoria sob medida",
    badge: "SERVIÇO",
    desc: "Engenharia de software, melhoria de processos e transformação digital para a sua operação.",
    link: "Falar com especialista",
    icon: Settings2,
    accent: true,
  },
  {
    name: "Novos produtos",
    badge: "EM BREVE",
    desc: "Estamos construindo mais soluções para times de tecnologia. Fique de olho no que vem por aí.",
    link: "Acompanhar novidades",
    icon: Sparkles,
    accent: false,
  },
]

const showcaseBullets = [
  "Times de IA para atendimento, marketing e financeiro",
  "A primeira equipe é configurada por um especialista, junto com você",
  "Implantação inclusa: você não configura nada",
  "Depois monte quantas equipes quiser e chame reforço quando precisar",
]

const capabilities = [
  {
    title: "Atendimento",
    desc: "Confirma agendamentos e responde o que sempre repete",
    icon: MessageCircle,
  },
  {
    title: "Marketing",
    desc: "Lembra quem não voltou e avisa das novidades",
    icon: Megaphone,
  },
  {
    title: "Financeiro",
    desc: "Cobra pendências e organiza os recebimentos",
    icon: Wallet,
  },
]

const plans = [
  {
    name: "ESSENCIAL",
    price: "R$ 397",
    tag: "Resolve o atendimento",
    features: [
      { text: "Primeira equipe montada com você", highlight: true },
      "1 equipe ativa",
      "500 execuções por mês",
      "1 revisão no primeiro mês",
      "Suporte por e-mail, 48h",
    ],
    cta: "Começar",
    featured: false,
  },
  {
    name: "PROFISSIONAL",
    price: "R$ 897",
    tag: "Atende, divulga e cobra",
    features: [
      { text: "Primeira equipe montada com você", highlight: true },
      "4 equipes ativas",
      "2.000 execuções por mês",
      "1 nova equipe montada por trimestre",
      "Suporte no WhatsApp, 24h",
    ],
    cta: "Começar",
    featured: true,
  },
  {
    name: "ESCALA",
    price: "R$ 2.500",
    tag: "Operação inteira coberta",
    features: [
      { text: "Primeira equipe montada com você", highlight: true },
      "12 equipes ativas",
      "6.000 execuções por mês",
      "1 nova equipe montada por mês",
      "Suporte no WhatsApp, 4h",
    ],
    cta: "Falar com especialista",
    featured: false,
  },
]

const showcaseImages = [
  "/squadcraft-ui.png",
  "/squadcraft-ui2.png",
  "/squadcraft-ui3.png",
  "/squadcraft-ui4.png",
  "/squadcraft-ui5.png",
]

export function SquadCraft() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => setCurrentImageIndex((i) => (i + 1) % showcaseImages.length)
  const prevImage = () => setCurrentImageIndex((i) => (i - 1 + showcaseImages.length) % showcaseImages.length)

  return (
    <section
      id="produtos"
      className="relative flex flex-col items-center px-8 py-24 gap-12 bg-ink"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-signal rounded-full" />

      {/* Header */}
      <div className="flex flex-col items-center gap-5 w-full">
        <span className="text-xs font-semibold tracking-[0.2em] text-signal">
          PRODUTOS & SOLUÇÕES
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone text-center max-w-[720px]">
          Um portfólio que cresce com a sua operação
        </h2>
        <p className="text-base text-muted text-center leading-relaxed max-w-[660px]">
          Do SquadCraft à consultoria de tecnologia sob medida — construímos e
          reunimos soluções para acelerar times e operações. E o portfólio está
          só começando.
        </p>
      </div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1280px]">
        {portfolio.map((card) => (
          <PortfolioCard key={card.name} {...card} />
        ))}
      </div>

      {/* Spotlight */}
      <div className="flex flex-col items-center gap-2.5 w-full">
        <span className="text-xs font-semibold tracking-[0.2em] text-signal">
          PRODUTO EM DESTAQUE
        </span>
        <img
          src="/squadcraft-logo.png"
          alt="SquadCraft"
          className="h-10 max-w-[280px] object-contain"
        />
      </div>

      {/* Showcase */}
      <div
        id="squadcraft"
        className="w-full max-w-[1280px] rounded-[20px] border border-card-border bg-panel p-6 sm:p-12 flex flex-col gap-10"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 w-full">
          <div className="flex flex-col gap-6 max-w-[600px]">
            <h3 className="text-2xl sm:text-3xl font-bold leading-[1.25] tracking-tight text-bone">
              Sua equipe de IA montada com você, não uma tela em branco
            </h3>
            <a
              href="#contato"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-[10px] bg-signal px-6 py-3.5 text-[15px] font-bold text-ink no-underline hover:opacity-90 transition-opacity"
            >
              Agendar conversa de 30 min
              <ArrowRight size={16} className="text-ink" />
            </a>
          </div>
          
          <ul className="flex flex-col gap-3.5 flex-1 max-w-[500px]">
            {showcaseBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[11px] bg-[#5EEAD422] mt-0.5">
                  <Check size={13} className="text-signal" />
                </span>
                <span className="text-[15px] text-slate leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full mt-4 overflow-hidden rounded-xl border border-card-border bg-card shadow-[0_0_80px_-18px_rgba(94,234,212,0.35)]">
          <div className="relative w-full overflow-hidden bg-ink group">
            <img 
              src={showcaseImages[currentImageIndex]} 
              alt={`SquadCraft Studio Tela ${currentImageIndex + 1}`} 
              className="w-full h-auto block opacity-95 transition-opacity duration-300" 
            />
            <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_120px_rgba(11,15,26,0.6)]" />

            {/* Carousel Controls */}
            <button 
              onClick={prevImage}
              aria-label="Imagem anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-ink/70 text-bone hover:bg-signal hover:text-ink transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextImage}
              aria-label="Próxima imagem"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-ink/70 text-bone hover:bg-signal hover:text-ink transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight size={28} />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
              {showcaseImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  aria-label={`Ir para imagem ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? "w-8 bg-signal" : "w-2.5 bg-bone/40 hover:bg-bone"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="flex flex-col items-center gap-7 w-full max-w-[1280px]">
        <h3 className="text-[28px] font-bold tracking-tight text-bone text-center">
          O que sua equipe de IA faz
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="flex flex-col gap-3.5 p-7 bg-card border border-card-border rounded-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5EEAD422]">
                <cap.icon size={24} className="text-signal" />
              </div>
              <h4 className="text-lg font-bold text-bone">{cap.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="flex flex-col items-center gap-8 w-full max-w-[1280px]">
        <div className="flex flex-col items-center gap-3 w-full">
          <h3 className="text-3xl font-bold tracking-tight text-bone text-center">
            Escolha o tamanho da sua equipe
          </h3>
          <p className="text-base text-muted text-center leading-relaxed max-w-[680px]">
            1 equipe = até 3 agentes, 1 canal conectado e 1 rotina agendada.
            Implantação inclusa nos planos anuais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="w-full rounded-2xl border border-anchor-border bg-anchor p-5 sm:p-7">
          <p className="text-[15px] text-slate leading-[1.55]">
            Uma agência cobra a partir de R$ 3.000 só de setup. Aqui a
            implantação está inclusa no plano anual. Prefere mensal sem
            contrato? Taxa de setup de R$ 1.500, cancela quando quiser.
          </p>
        </div>

        <p className="text-xs text-subtle text-center leading-relaxed max-w-[900px]">
          Execuções extras: R$ 0,20 cada, com aviso em 80% do limite ·
          Equipe adicional montada com auxílio: R$ 690 · Ajustes extras: R$
          150 · Integrações personalizadas orçadas caso a caso
        </p>
      </div>
    </section>
  )
}

function PortfolioCard({
  name,
  badge,
  desc,
  link,
  icon: Icon,
  accent,
}: (typeof portfolio)[number]) {
  return (
    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-card-border bg-card p-8">
      <div className="flex flex-col gap-[18px]">
        <div className="flex items-center justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${
              accent ? "bg-[#5EEAD422]" : "bg-[#64748B22]"
            }`}
          >
            <Icon size={24} className={accent ? "text-signal" : "text-subtle"} />
          </div>
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wider ${
              accent
                ? "bg-[#5EEAD422] text-signal"
                : "bg-[#64748B22] text-subtle"
            }`}
          >
            {badge}
          </span>
        </div>
        {name === "SquadCraft" ? (
          <img
            src="/squadcraft-logo.png"
            alt="SquadCraft"
            className="h-7 w-auto object-contain object-left mt-1 mb-0.5"
          />
        ) : (
          <h3
            className={`text-[22px] font-bold tracking-tight ${
              accent ? "text-bone" : "text-slate"
            }`}
          >
            {name}
          </h3>
        )}
        <p className="text-sm text-muted leading-relaxed">{desc}</p>
      </div>
      <a
        href={name === "SquadCraft" ? "#squadcraft" : "#contato"}
        className={`inline-flex items-center gap-2 text-sm font-semibold no-underline ${
          accent ? "text-signal hover:text-bone" : "text-subtle hover:text-slate"
        } transition-colors`}
      >
        {link}
        <ArrowRight size={15} />
      </a>
    </div>
  )
}


function PlanCard({
  name,
  price,
  tag,
  features,
  cta,
  featured,
}: (typeof plans)[number]) {
  return (
    <div
      className={`flex h-full flex-col gap-4 rounded-2xl border bg-card p-7 ${
        featured ? "border-signal border-2" : "border-card-border"
      }`}
    >
      {featured && (
        <span className="w-fit rounded-full bg-signal px-[11px] py-[5px] text-[11px] font-bold tracking-wide text-ink">
          MAIS ESCOLHIDO
        </span>
      )}
      <span className="text-xs font-bold tracking-widest text-subtle">
        {name}
      </span>
      <div className="flex items-end gap-1.5">
        <span className="text-[34px] font-bold tracking-tight text-bone">
          {price}
        </span>
        <span className="text-[15px] text-subtle">/mês</span>
      </div>
      <span className="text-[15px] text-muted">{tag}</span>
      <div className="h-px bg-card-border" />
      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature) => {
          const text = typeof feature === "string" ? feature : feature.text
          const highlight = typeof feature !== "string" && feature.highlight
          return (
            <li key={text} className="flex items-center gap-2.5">
              {highlight ? (
                <CheckCircle2 size={16} className="shrink-0 text-signal" />
              ) : (
                <Check size={16} className="shrink-0 text-signal" />
              )}
              <span
                className={`text-sm leading-[1.4] ${
                  highlight ? "font-semibold text-signal" : "text-muted"
                }`}
              >
                {text}
              </span>
            </li>
          )
        })}
      </ul>
      <a
        href="#contato"
        className={`mt-auto flex w-full items-center justify-center rounded-[10px] px-5 py-3.5 text-[15px] no-underline ${
          featured
            ? "bg-signal font-bold text-ink hover:opacity-90 transition-opacity"
            : "border border-card-border font-medium text-bone hover:bg-card-hover transition-colors"
        }`}
      >
        {cta}
      </a>
    </div>
  )
}