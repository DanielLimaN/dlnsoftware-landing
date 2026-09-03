export function Footer() {
  return (
    <footer className="flex flex-col px-8 py-12 gap-8">
      <div className="w-full max-w-[1280px] mx-auto h-px bg-card-border" />
      <div className="w-full max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-xl font-bold tracking-tight text-bone">
            dln.
          </span>
          <span className="text-xs font-medium text-signal">
            software consulting
          </span>
          <span className="text-xs text-subtle">
            Engenharia de software para operações reais
          </span>
        </div>
        <a
          href="mailto:contato@dlnsoftware.com.br"
          className="text-sm font-medium text-muted no-underline hover:text-bone transition-colors"
        >
          contato@dlnsoftware.com.br
        </a>
      </div>
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-1">
        <p className="text-xs text-subtle">
          DANIEL LIMA DO NASCIMENTO CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA
        </p>
        <p className="text-xs text-subtle">CNPJ 47.389.772/0001-20</p>
        <p className="text-xs text-subtle">
          &copy; {new Date().getFullYear()} DLN Software. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
