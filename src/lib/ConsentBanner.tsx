import { useEffect, useState } from "react"
import { getConsent, onConsentReopen, setConsent } from "./analytics"

const styles = {
  dln: {
    box: "bg-[#14171A] text-[#F7F5F2] rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.25)]",
    text: "text-[#AFBBCF]",
    accept: "bg-[#F7F5F2] text-[#14171A] rounded-full font-semibold text-sm hover:bg-white",
    reject: "border border-[#38425A] text-[#F7F5F2] rounded-full font-medium text-sm hover:border-[#F7F5F2]",
  },
  squadcraft: {
    box: "bg-white text-[#15181C] border-[3px] border-[#15181C] shadow-[6px_6px_0_#12B86B]",
    text: "text-[#4A4F55]",
    accept: "bg-[#12B86B] text-[#15181C] border-2 border-[#15181C] font-extrabold uppercase text-[13px] tracking-[0.02em]",
    reject: "border-2 border-[#D5DAE0] text-[#15181C] font-extrabold uppercase text-[13px] tracking-[0.02em] hover:border-[#15181C]",
  },
}

export function ConsentBanner({ variant }: { variant: keyof typeof styles }) {
  const [open, setOpen] = useState(() => getConsent() === "pending")
  useEffect(() => onConsentReopen(() => setOpen(true)), [])

  if (!open) return null
  const s = styles[variant]

  const choose = (granted: boolean) => {
    setConsent(granted)
    setOpen(false)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferências de cookies"
      className={`fixed z-[100] left-4 right-4 bottom-4 sm:left-5 sm:right-auto sm:bottom-5 sm:max-w-[420px] p-5 ${s.box}`}
    >
      <p className="m-0 text-[15px] font-semibold leading-snug">Usamos cookies de análise</p>
      <p className={`mt-2 mb-0 text-sm leading-relaxed ${s.text}`}>
        Com a sua permissão, medimos visitas e cliques com o PostHog para entender o que funciona no
        site. Nada é coletado se você recusar, e dá para mudar a escolha no rodapé.
      </p>
      <div className="flex flex-wrap gap-2.5 mt-4">
        <button type="button" onClick={() => choose(true)} className={`cursor-pointer px-5 py-2.5 transition-colors ${s.accept}`}>
          Aceitar
        </button>
        <button type="button" onClick={() => choose(false)} className={`cursor-pointer bg-transparent px-5 py-2.5 transition-colors ${s.reject}`}>
          Recusar
        </button>
      </div>
    </div>
  )
}
