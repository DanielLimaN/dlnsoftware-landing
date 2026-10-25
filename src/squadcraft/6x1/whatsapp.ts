import { WHATSAPP_URL } from "../data"

export const CTA = {
  checklist: {
    label: "Receber o checklist da transição 5x2",
    event: "cta_checklist_6x1",
    mensagem: "Olá! Vim pela página da 6x1 e quero receber o checklist da transição para a escala 5x2.",
  },
  conversa: {
    label: "Conversar 15 minutos com um especialista",
    event: "cta_conversa_6x1",
    mensagem: "Olá! Vim pela página da 6x1 e quero conversar 15 minutos sobre o administrativo da minha empresa.",
  },
} as const

export type CtaTipo = keyof typeof CTA

// The ad's UTM goes into the message itself, so the conversation on WhatsApp says which post or
// campaign brought the person in.
export function whatsappHref(tipo: CtaTipo, search = window.location.search) {
  const params = new URLSearchParams(search)
  const source = params.get("utm_source")
  const campaign = params.get("utm_campaign")
  let texto: string = CTA[tipo].mensagem
  if (source || campaign) texto += ` (origem: ${source ?? "-"}/${campaign ?? "-"})`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(texto)}`
}
