import { WHATSAPP_URL } from "../data"

export const CTA = {
  exemplo: {
    label: "Ver um exemplo para a minha empresa",
    event: "cta_exemplo_social",
    mensagem:
      "Olá! Vim pela página de social media no piloto automático e quero ver um exemplo de calendário e de post para a minha empresa.",
  },
  conversa: {
    label: "Conversar 15 minutos com um especialista",
    event: "cta_conversa_social",
    mensagem:
      "Olá! Vim pela página de social media no piloto automático e quero conversar 15 minutos sobre o conteúdo da minha empresa.",
  },
} as const

export type CtaTipo = keyof typeof CTA

// The ad's UTM goes into the message itself, so the conversation on WhatsApp says which post or
// campaign brought the person in. Same arrangement as the 6x1 page.
function comOrigem(texto: string, separador: string, search: string) {
  const params = new URLSearchParams(search)
  const source = params.get("utm_source")
  const campaign = params.get("utm_campaign")
  if (source || campaign) texto += `${separador}(origem: ${source ?? "-"}/${campaign ?? "-"})`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(texto)}`
}

export function whatsappHref(tipo: CtaTipo, search = window.location.search) {
  return comOrigem(CTA[tipo].mensagem, " ", search)
}
