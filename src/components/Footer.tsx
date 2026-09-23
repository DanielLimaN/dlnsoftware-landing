import { reopenConsent } from "../lib/analytics"
import { EMAIL, LINKEDIN_URL, Logo, SQUADCRAFT_URL, WHATSAPP_LABEL, WHATSAPP_URL } from "./ui"

const heading = "font-mono text-[11px] tracking-[0.12em] uppercase text-ink-3"
const link = "no-underline text-[15.5px]"

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1240px] mx-auto px-8 py-[52px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-9">
        <div>
          <Logo size="sm" />
          <p className="text-ink-3 text-sm mt-3 mb-0 max-w-[30ch]">
            Consultoria de tecnologia e engenharia de software para operações reais.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className={heading}>Navegar</span>
          <a href="#case" className={link}>Case</a>
          <a href="#servicos" className={link}>Serviços</a>
          <a href={SQUADCRAFT_URL} className={link}>SquadCraft</a>
          <a href="#metodo" className={link}>Método</a>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className={heading}>Falar com a gente</span>
          <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className={link}>
            WhatsApp {WHATSAPP_LABEL}
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener" className={link}>
            LinkedIn ↗
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className={heading}>Empresa</span>
          <span className="text-ink-3 text-[13px] leading-[1.7]">
            Daniel Lima do Nascimento Consultoria em Tecnologia da Informação Ltda.
            <br />
            CNPJ 47.389.772/0001-20
          </span>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="max-w-[1240px] mx-auto px-8 py-5 font-mono text-xs text-ink-3 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} DLN Software</span>
          <button type="button" onClick={reopenConsent} className="bg-transparent border-0 p-0 font-[inherit] text-ink-3 cursor-pointer underline hover:text-ink">
            Preferências de cookies
          </button>
        </div>
      </div>
    </footer>
  )
}
