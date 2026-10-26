import { ctaBase } from "../../6x1/components/CtaBotoes"
import { whatsappHref } from "../whatsapp"

export function CtaBotoes({ nomeCurto }: { nomeCurto: string }) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[460px]">
      <a
        href={whatsappHref(nomeCurto)}
        target="_blank"
        rel="noopener"
        data-track="cta_whatsapp_segmento"
        className={`${ctaBase} bg-sc-ink text-sc-green hover:text-sc-green`}
      >
        Conversar 15 minutos com um especialista
      </a>
      <a href="#video" className={`${ctaBase} bg-white text-sc-ink hover:text-sc-ink`}>
        Ver como funciona
      </a>
    </div>
  )
}
