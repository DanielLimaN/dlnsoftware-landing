import { WHATSAPP_URL } from "../data"

// The ad's UTM goes into the message itself, so the WhatsApp conversation says which campaign
// brought the person in.
export function whatsappHref(nomeCurto: string, search = window.location.search) {
  let texto = `Olá! Vim pela página de ${nomeCurto} e quero entender como o SquadCraft funciona na minha empresa.`
  const params = new URLSearchParams(search)
  const source = params.get("utm_source")
  const campaign = params.get("utm_campaign")
  if (source || campaign) texto += ` (origem: ${source ?? "-"}/${campaign ?? "-"})`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(texto)}`
}
