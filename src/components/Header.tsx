import { Logo, SQUADCRAFT_URL, WHATSAPP_URL, pillDark } from "./ui"

const links = [
  { label: "Case", href: "#case" },
  { label: "Serviços", href: "#servicos" },
  { label: "SquadCraft", href: SQUADCRAFT_URL },
  { label: "Método", href: "#metodo" },
  { label: "Contato", href: "#conversar" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-60 bg-paper/90 backdrop-blur-[14px]">
      <div className="max-w-[1240px] mx-auto px-8 py-5 flex items-center gap-8">
        <a href="#" className="no-underline">
          <Logo />
        </a>
        <nav className="hidden md:flex flex-1 min-w-0 flex-wrap items-center justify-end gap-x-5 gap-y-2 ml-auto">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="no-underline text-base">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className={`${pillDark} text-base px-6 py-3 whitespace-nowrap ml-auto md:ml-0`}
        >
          Agendar 30 min
        </a>
      </div>
    </header>
  )
}
