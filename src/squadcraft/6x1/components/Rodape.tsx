import { analytics } from "../analytics"
import { Wordmark } from "../../components/ui"

export function Rodape() {
  return (
    <footer className="border-t-2 border-sc-green">
      <div className="max-w-[1400px] mx-auto px-6 py-9 flex flex-col gap-6">
        <p className="text-sm text-sc-gray-2 m-0 max-w-[80ch]">
          Conteúdo informativo, baseado na Emenda Constitucional 141/2026 e em informações da Agência
          Senado. As regras por setor ainda dependem de regulamentação. Para decisões trabalhistas,
          consulte seu contador ou advogado.
        </p>
        <div>
          <Wordmark className="text-lg" />
          <p className="text-sc-gray-2 text-[13px] leading-[1.7] mt-2 mb-0">
            Um produto da DLN Software · Daniel Lima do Nascimento Consultoria em TI Ltda.
            <br />
            CNPJ 47.389.772/0001-20
          </p>
        </div>
      </div>
      <div className="border-t border-sc-line">
        <div className="max-w-[1400px] mx-auto px-6 pt-[18px] pb-[104px] md:pb-[18px] font-mono text-[11.5px] text-sc-gray-2 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} DLN Software</span>
          <button type="button" onClick={() => analytics.then((m) => m.reopenConsent())} className="bg-transparent border-0 p-0 font-[inherit] text-sc-gray-2 cursor-pointer underline hover:text-sc-ink">
            Preferências de cookies
          </button>
        </div>
      </div>
    </footer>
  )
}
