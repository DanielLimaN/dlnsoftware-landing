import { CTA, whatsappHref, type CtaTipo } from "../whatsapp"

const base =
  "flex items-center justify-center min-h-14 px-6 py-4 text-center no-underline font-extrabold text-[clamp(15px,1.5vw,18px)] uppercase tracking-[0.01em] leading-tight border-[3px] border-sc-ink transition-transform duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#15181C]"

const estilo: Record<CtaTipo, string> = {
  checklist: "bg-sc-ink text-sc-green hover:text-sc-green",
  conversa: "bg-white text-sc-ink hover:text-sc-ink",
}

export function CtaLink({ tipo, className = "" }: { tipo: CtaTipo; className?: string }) {
  return (
    <a
      href={whatsappHref(tipo)}
      target="_blank"
      rel="noopener"
      data-track={CTA[tipo].event}
      className={`${base} ${estilo[tipo]} ${className}`}
    >
      {CTA[tipo].label}
    </a>
  )
}

export function CtaBotoes() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[460px]">
      <CtaLink tipo="checklist" />
      <CtaLink tipo="conversa" />
    </div>
  )
}
