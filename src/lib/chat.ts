export function openChat() {
  const host = document.querySelector<HTMLElement>("[data-squadcraft]")
  if (!host?.shadowRoot) return
  const painel = host.shadowRoot.querySelector<HTMLElement>(".painel")
  if (painel && !painel.hidden) return
  host.shadowRoot.querySelector<HTMLButtonElement>(".botao")?.click()
}