import { Wordmark } from "../../components/ui"
import { analytics } from "../analytics"

export function Rodape() {
  return (
    <footer className="border-t-2 border-sc-green">
      <div className="max-w-[1400px] mx-auto px-6 py-9">
        <a href="/squadcraft" className="no-underline text-sc-ink hover:text-sc-ink inline-block">
          <Wordmark className="text-lg" />
        </a>
        <p className="text-sc-gray-2 text-[13px] leading-[1.7] mt-2 mb-0">
          Um produto da DLN Software · Daniel Lima do Nascimento Consultoria em TI Ltda.
          <br />
          CNPJ 47.389.772/0001-20
        </p>
      </div>
      <div className="border-t border-sc-line">
        <div className="max-w-[1400px] mx-auto px-6 py-[18px] font-mono text-[11.5px] text-sc-gray-2 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} DLN Software</span>
          <button type="button" onClick={() => analytics.then((m) => m.reopenConsent())} className="bg-transparent border-0 p-0 font-[inherit] text-sc-gray-2 cursor-pointer underline hover:text-sc-ink">
            Preferências de cookies
          </button>
        </div>
      </div>
    </footer>
  )
}
