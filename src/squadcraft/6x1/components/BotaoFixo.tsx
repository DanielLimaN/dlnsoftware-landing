import { useEffect, useState } from "react"
import { CtaLink } from "./CtaBotoes"

// Mobile only: appears once the hero's buttons have scrolled away, and steps aside while the
// final call to action (which has the same buttons) is on screen.
export function BotaoFixo() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const alvos = document.querySelectorAll('[data-section="hero"], [data-section="chamada"]')
    const naTela = new Set<Element>()
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) naTela.add(e.target)
        else naTela.delete(e.target)
      }
      setVisivel(naTela.size === 0)
    })
    alvos.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  if (!visivel) return null
  return (
    <div data-section="fixo" className="md:hidden fixed inset-x-0 bottom-0 z-60 p-3 bg-sc-paper/95 border-t-2 border-sc-ink">
      <CtaLink tipo="checklist" className="hover:shadow-none hover:translate-x-0 hover:translate-y-0" />
    </div>
  )
}
