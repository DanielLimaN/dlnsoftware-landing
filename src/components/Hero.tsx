import { FlowMark } from "./FlowMark"

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[700px] px-8 pt-24 pb-20 gap-9">
      <FlowMark size={200} className="mb-4" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-bone text-center leading-[1.15] max-w-[800px]">
        Engenharia de software
        <br />
        para operações reais
      </h1>
      <p className="text-base sm:text-lg text-muted text-center leading-relaxed max-w-[600px]">
        Consultoria focada em melhoria de processos, desenvolvimento sob medida
        e transformação digital para o seu negócio.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#contato"
          className="inline-flex items-center px-8 py-4 bg-signal text-ink font-bold text-base rounded-lg no-underline hover:opacity-90 transition-opacity"
        >
          Solicitar Consultoria
        </a>
        <a
          href="#servicos"
          className="inline-flex items-center px-8 py-4 border border-card-border text-bone font-medium text-base rounded-lg no-underline hover:bg-card-hover transition-colors"
        >
          Ver Serviços
        </a>
      </div>
    </section>
  )
}
