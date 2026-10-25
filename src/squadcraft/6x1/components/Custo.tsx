import { h2 } from "../../components/ui"

export function Custo() {
  return (
    <section id="quanto-custa" className="bg-sc-ink text-sc-paper">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)] grid md:grid-cols-[1fr_auto] gap-x-12 gap-y-6 items-end">
        <div>
          <h2 className={h2}>Quanto custa</h2>
          <p className="text-[clamp(36px,6vw,80px)] font-black tracking-[-0.045em] leading-[1.05] text-sc-green mt-5 mb-0">
            A partir de R$&nbsp;397/mês
          </p>
          <p className="text-[clamp(17px,1.7vw,21px)] font-medium mt-4 mb-0">
            Implantação com especialista inclusa. Sem fidelidade.
          </p>
        </div>
        <a
          href="/squadcraft#planos"
          className="justify-self-start font-extrabold text-[clamp(15px,1.5vw,18px)] uppercase tracking-[0.01em] text-sc-green underline underline-offset-4 decoration-2 py-3 hover:text-sc-paper"
        >
          Ver todos os planos →
        </a>
      </div>
    </section>
  )
}
