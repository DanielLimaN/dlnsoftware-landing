import { PRECO } from "../../../content/segmentos"

export function Preco() {
  const [preco, ...resto] = PRECO.split(" · ")
  // "R$" and the amount never split across lines.
  const valor = preco.replace("R$ ", "R$\u00a0")
  return (
    <section id="preco" aria-label="Preço" className="bg-sc-ink text-sc-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(36px,4.5vw,64px)] flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
        <p className="m-0">
          <span className="block text-[clamp(30px,4.6vw,62px)] font-black leading-[1.05] tracking-[-0.04em] uppercase text-sc-green">
            {valor}
          </span>
          {resto.map((r) => (
            <span key={r} className="font-mono text-[13px] font-semibold tracking-[0.06em] uppercase mt-3 md:mt-4 md:mr-5 block md:inline-block">
              <span aria-hidden="true">· </span>
              {r}
            </span>
          ))}
        </p>
        <a
          href="/squadcraft#planos"
          className="font-extrabold text-[clamp(15px,1.5vw,18px)] uppercase tracking-[0.01em] text-sc-green underline underline-offset-4 decoration-2 py-3 hover:text-sc-paper"
        >
          Ver todos os planos →
        </a>
      </div>
    </section>
  )
}
