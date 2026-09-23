import { Wordmark } from "./ui"

const links = [
  { label: "Studio", href: "#studio" },
  { label: "Rotinas", href: "#rotinas" },
  { label: "Como funciona", href: "#como" },
  { label: "Gente", href: "#gente" },
  { label: "Planos", href: "#planos" },
  { label: "DLN ↗", href: "/" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-70 bg-white border-b-2 border-sc-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-3.5 flex items-center gap-[26px]">
        <a href="#" className="no-underline text-sc-ink hover:text-sc-ink">
          <Wordmark />
        </a>
        <nav className="hidden md:flex flex-1 min-w-0 flex-wrap items-center justify-end gap-x-4 gap-y-2 ml-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="no-underline text-sc-gray font-mono text-xs uppercase tracking-[0.08em] hover:text-sc-green-deep"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#falar"
          className="ml-auto md:ml-0 bg-sc-green text-sc-ink no-underline font-extrabold text-[13px] uppercase tracking-[0.02em] px-5 py-3 shrink-0 transition-transform duration-150 hover:text-sc-ink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#0E7A49]"
        >
          Montar squad
        </a>
      </div>
    </header>
  )
}
