import { FERRAMENTAS, logoDe } from "../data"
import { ToolLogo } from "./ui"

export function Ferramentas() {
  return (
    <section data-section="integracoes" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(36px,4.4vw,60px)]">
        <span className="font-mono text-xs font-semibold tracking-[0.12em] uppercase text-sc-gray">
          Entra onde o trabalho já acontece
        </span>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,112px),1fr))] gap-0.5 bg-sc-line border border-sc-line mt-5">
          {FERRAMENTAS.map((fer) => (
            <div
              key={fer.nome}
              className="group bg-white text-sc-gray flex flex-col items-center gap-2.5 px-2.5 py-5 min-w-0 transition-colors duration-200 hover:bg-sc-green hover:text-sc-ink"
            >
              <span
                className="h-[34px] shrink-0 flex items-center justify-center"
                style={{
                  width: fer.largo ? 82 : 34,
                  background: fer.placaClara ? "#FFFFFF" : "transparent",
                  padding: fer.placaClara ? 4 : 0,
                }}
              >
                {fer.slug === null ? (
                  <span className="font-mono text-[13px] font-semibold">{"{ }"}</span>
                ) : fer.largo ? (
                  <img
                    src={logoDe(fer.nome)}
                    alt={fer.nome}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain block"
                  />
                ) : (
                  <ToolLogo src={logoDe(fer.nome)} nome={fer.nome} size={34} fallbackClassName="text-[13px]" />
                )}
              </span>
              <span className="font-mono text-[10.5px] text-center [overflow-wrap:anywhere]">{fer.nome}</span>
            </div>
          ))}
        </div>
        <p className="text-[17px] mt-5 mb-0">
          Não achou a sua?{" "}
          <a href="#falar" className="text-sc-green-deep no-underline border-b-2 border-sc-green hover:text-sc-green-deep">
            Nós integramos
          </a>
          .
        </p>
      </div>
    </section>
  )
}
