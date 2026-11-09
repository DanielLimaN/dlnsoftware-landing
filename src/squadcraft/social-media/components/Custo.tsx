import { h2 } from "../../components/ui"
import { PLANOS } from "../content"

export function Custo() {
  return (
    <section id="quanto-custa" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>Quanto custa</h2>
        <p className="text-[clamp(17px,1.7vw,21px)] font-medium mt-4 mb-0 max-w-[60ch]">
          A squad de conteúdo cabe no plano de entrada. Os outros existem para quando ela não for a
          única rotina que você quer tirar da mão do time.
        </p>

        <ul className="list-none p-0 m-0 mt-9 grid md:grid-cols-3 gap-6 md:gap-5 items-stretch">
          {PLANOS.map((p) => (
            <li
              key={p.selo}
              className={`flex flex-col text-sc-ink border-[3px] p-[clamp(22px,2.6vw,32px)] ${
                p.destaque
                  ? "bg-sc-green border-sc-ink shadow-[10px_10px_0_#15181C]"
                  : "bg-white border-sc-ink shadow-[6px_6px_0_#12B86B]"
              }`}
            >
              <span
                className={`font-mono text-[11.5px] font-semibold tracking-[0.12em] uppercase ${
                  p.destaque ? "text-sc-ink" : "text-sc-green-deep"
                }`}
              >
                {p.selo}
              </span>
              <p className="font-black tracking-[-0.045em] leading-none mt-3 mb-0 text-[clamp(38px,4vw,54px)]">
                {p.preco}
                {p.periodo && <span className="text-[0.45em] tracking-[-0.02em]">{p.periodo}</span>}
              </p>
              <h3 className="text-[clamp(19px,1.8vw,22px)] font-extrabold tracking-[-0.02em] leading-[1.2] mt-5 mb-0">
                {p.exemplo}
              </h3>
              <ul className="list-none p-0 m-0 mt-4 flex flex-col gap-3">
                {p.inclui.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base font-medium leading-[1.4]">
                    <span
                      aria-hidden="true"
                      className={`grid place-items-center size-6 shrink-0 border-2 border-sc-ink font-black text-sm leading-none ${
                        p.destaque ? "bg-white" : "bg-sc-green"
                      }`}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <p
                  className={`m-0 pt-4 border-t-2 font-mono text-xs font-semibold tracking-[0.04em] ${
                    p.destaque ? "border-sc-ink" : "border-sc-line-2 text-sc-gray-2"
                  }`}
                >
                  {p.rodape}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4">
          <p className="text-[15px] text-sc-gray-2 m-0 max-w-[70ch]">
            Todos os planos: implantação com especialista inclusa e sem fidelidade. A composição da
            squad é definida no diagnóstico.
          </p>
          <a
            href="/squadcraft#planos"
            className="font-extrabold text-[clamp(15px,1.5vw,18px)] uppercase tracking-[0.01em] text-sc-green-deep underline underline-offset-4 decoration-2 py-3 hover:text-sc-ink"
          >
            Ver todos os planos →
          </a>
        </div>
      </div>
    </section>
  )
}
