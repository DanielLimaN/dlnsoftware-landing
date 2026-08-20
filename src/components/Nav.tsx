import { openChat } from "../lib/chat"

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Método", href: "#metodo" },
  { label: "Diferenciais", href: "#diferenciais" },
]

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-ink/80 backdrop-blur-md border-b border-card-border">
      <a href="#" className="flex flex-col gap-0.5 no-underline">
        <span className="text-2xl font-bold tracking-tight text-bone">
          dln.
        </span>
        <span className="text-[11px] font-medium tracking-wide text-signal">
          software consulting
        </span>
      </a>
      <div className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted no-underline hover:text-bone transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={openChat}
          className="text-sm font-medium text-muted hover:text-bone transition-colors cursor-pointer bg-transparent border-0 p-0"
        >
          Contato
        </button>
      </div>
      <button
        onClick={openChat}
        className="md:hidden text-sm font-semibold text-signal cursor-pointer bg-transparent border-0 p-0"
      >
        Contato
      </button>
    </nav>
  )
}
