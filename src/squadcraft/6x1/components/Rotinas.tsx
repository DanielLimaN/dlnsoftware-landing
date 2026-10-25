import { useState, useSyncExternalStore } from "react"
import { h2 } from "../../components/ui"
import { analytics } from "../analytics"
import { ROTINAS } from "../content"
import { rotinasHref } from "../whatsapp"
import { ctaBase } from "./CtaBotoes"

const DESKTOP = "(min-width: 768px)"

function useDesktop() {
  return useSyncExternalStore(
    (fn) => {
      const mq = window.matchMedia(DESKTOP)
      mq.addEventListener("change", fn)
      return () => mq.removeEventListener("change", fn)
    },
    () => window.matchMedia(DESKTOP).matches,
  )
}

function Itens({ itens, marcadas, alternar }: { itens: string[]; marcadas: Set<string>; alternar: (r: string) => void }) {
  return (
    <ul className="list-none p-0 m-0 flex flex-col gap-3">
      {itens.map((item) => (
        <li key={item}>
          <label className="flex items-start gap-3 cursor-pointer text-base font-medium leading-[1.4]">
            <span className="relative grid shrink-0 size-6">
              <input
                type="checkbox"
                checked={marcadas.has(item)}
                onChange={() => alternar(item)}
                className="peer appearance-none m-0 size-6 border-2 border-sc-ink bg-white cursor-pointer checked:bg-sc-green"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 grid place-items-center font-black text-sm leading-none pointer-events-none invisible peer-checked:visible"
              >
                ✓
              </span>
            </span>
            {item}
          </label>
        </li>
      ))}
    </ul>
  )
}

export function Rotinas() {
  const desktop = useDesktop()
  const [aberta, setAberta] = useState(ROTINAS[0].area)
  const [marcadas, setMarcadas] = useState<Set<string>>(() => new Set())

  const alternar = (r: string) =>
    setMarcadas((atual) => {
      const nova = new Set(atual)
      if (nova.has(r)) nova.delete(r)
      else nova.add(r)
      return nova
    })

  // Keep the page order in the message, not the click order.
  const escolhidas = ROTINAS.flatMap((a) => a.itens.filter((i) => marcadas.has(i)))
  const areas = ROTINAS.filter((a) => a.itens.some((i) => marcadas.has(i))).map((a) => a.area)
  const contagem = (area: string) => ROTINAS.find((a) => a.area === area)!.itens.filter((i) => marcadas.has(i)).length

  // The click itself is counted as cta_rotinas_6x1 by data-track; this adds which routines were picked.
  const registrar = () =>
    analytics.then((m) => m.track("rotinas_escolhidas_6x1", { rotinas: escolhidas, areas, quantidade: escolhidas.length }))

  return (
    <section id="alem-da-transicao" data-section="rotinas" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={h2}>Além da transição</h2>
        <p className="text-[clamp(17px,1.7vw,21px)] font-medium mt-4 mb-0 max-w-[60ch]">
          Marque o que hoje toma o tempo do seu administrativo. A conversa começa por aí.
        </p>

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {ROTINAS.map(({ area, itens }) => {
            const n = contagem(area)
            const id = `rotinas-${area.replace(/\W+/g, "-").toLowerCase()}`
            const titulo = "text-[clamp(19px,1.8vw,22px)] font-extrabold tracking-[-0.02em] leading-[1.2]"
            if (desktop) {
              return (
                <div key={area} className="bg-white border-[3px] border-sc-ink shadow-[6px_6px_0_#15181C] p-[clamp(20px,2.4vw,28px)]">
                  <h3 className={`${titulo} m-0 mb-4`}>{area}</h3>
                  <Itens itens={itens} marcadas={marcadas} alternar={alternar} />
                </div>
              )
            }
            const open = aberta === area
            return (
              <div key={area} className="bg-white border-[3px] border-sc-ink">
                <h3 className="m-0">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={id}
                    onClick={() => setAberta(open ? "" : area)}
                    className={`${titulo} w-full flex items-center justify-between gap-4 text-left bg-transparent border-0 cursor-pointer font-[inherit] text-sc-ink px-5 py-4`}
                  >
                    <span>
                      {area}
                      {n > 0 && <span className="font-mono text-xs font-semibold tracking-[0.04em] text-sc-green-deep ml-2">· {n} marcada{n > 1 ? "s" : ""}</span>}
                    </span>
                    <span aria-hidden="true" className="grid place-items-center size-8 shrink-0 border-2 border-sc-ink font-mono text-lg font-semibold leading-none">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div id={id} hidden={!open} className="px-5 pb-5">
                  <Itens itens={itens} marcadas={marcadas} alternar={alternar} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          {escolhidas.length > 0 ? (
            <a
              href={rotinasHref(escolhidas)}
              target="_blank"
              rel="noopener"
              data-track="cta_rotinas_6x1"
              onClick={registrar}
              className={`${ctaBase} bg-sc-ink text-sc-green hover:text-sc-green w-full md:w-auto`}
            >
              Conversar sobre essas rotinas
            </a>
          ) : null}
          <p aria-live="polite" className="font-mono text-xs font-semibold tracking-[0.06em] uppercase text-sc-gray-2 m-0">
            {escolhidas.length === 0
              ? "Marque ao menos uma rotina"
              : `${escolhidas.length} rotina${escolhidas.length > 1 ? "s" : ""} marcada${escolhidas.length > 1 ? "s" : ""}`}
          </p>
        </div>

        <p className="text-sm text-sc-gray-2 mt-6 mb-0 max-w-[70ch]">
          As decisões continuam com a sua equipe. A squad organiza, lembra, cobra e avisa.
        </p>
      </div>
    </section>
  )
}
