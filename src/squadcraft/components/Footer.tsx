import { reopenConsent } from "../../lib/analytics"
import { EMAIL, LINKEDIN_URL, WHATSAPP_LABEL, WHATSAPP_URL } from "../data"
import { Wordmark } from "./ui"

const heading = "font-mono text-[10.5px] font-semibold tracking-[0.12em] uppercase text-sc-gray"
const navLink = "no-underline text-sc-gray text-[15px] hover:text-sc-green-deep"
const contactLink = "text-[15px] no-underline hover:text-sc-green-deep"

export function Footer() {
  return (
    <footer className="border-t-2 border-sc-green">
      <div className="max-w-[1400px] mx-auto px-6 py-9 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-7">
        <div>
          <Wordmark className="text-lg" />
          <p className="text-sc-gray text-sm mt-3 mb-0 max-w-[28ch]">
            Equipes de agentes de IA montadas por especialistas. Um produto da DLN Software.
          </p>
        </div>
        <div className="flex flex-col gap-[9px]">
          <span className={heading}>Navegar</span>
          <a href="#studio" className={navLink}>Studio</a>
          <a href="#rotinas" className={navLink}>Rotinas</a>
          <a href="#planos" className={navLink}>Planos</a>
          <a href="#duvidas" className={navLink}>Dúvidas</a>
          <a href="/" className={navLink}>DLN Software</a>
        </div>
        <div className="flex flex-col gap-[9px]">
          <span className={heading}>Contato</span>
          <a href={`mailto:${EMAIL}`} className={contactLink}>{EMAIL}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className={contactLink}>
            WhatsApp {WHATSAPP_LABEL}
          </a>
          <a href={LINKEDIN_URL} rel="noopener" target="_blank" className={contactLink}>
            LinkedIn ↗
          </a>
          <a href="/" className={contactLink}>dlnsoftware.com.br ↗</a>
        </div>
        <div className="flex flex-col gap-[7px]">
          <span className={heading}>Empresa</span>
          <span className="text-sc-gray text-[13px] leading-[1.7]">
            Daniel Lima do Nascimento Consultoria em TI Ltda.
            <br />
            CNPJ 47.389.772/0001-20
          </span>
        </div>
      </div>
      <div className="border-t border-sc-line">
        <div className="max-w-[1400px] mx-auto px-6 pt-[18px] pb-[104px] font-mono text-[11.5px] text-sc-gray flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} DLN Software</span>
          <button type="button" onClick={reopenConsent} className="bg-transparent border-0 p-0 font-[inherit] text-sc-gray cursor-pointer underline hover:text-sc-ink">
            Preferências de cookies
          </button>
        </div>
      </div>
    </footer>
  )
}
