import { CtaBotoes } from "./CtaBotoes"

export function Chamada() {
  return (
    <section data-section="chamada" className="bg-sc-green text-sc-ink">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(44px,6vw,88px)] grid md:grid-cols-2 gap-x-12 gap-y-8 items-end">
        <div>
          <h2 className="text-[clamp(36px,6.4vw,92px)] font-black leading-[1.05] tracking-[-0.05em] uppercase m-0 max-w-[12ch]">
            15 de dezembro está chegando.
          </h2>
          <p className="text-[clamp(17px,1.8vw,21px)] font-semibold mt-5 mb-0 max-w-[40ch]">
            Receba o checklist da transição para a 5x2 e veja o que o seu administrativo precisa
            organizar até lá.
          </p>
        </div>
        <div className="md:justify-self-end w-full max-w-[460px]">
          <CtaBotoes />
        </div>
      </div>
    </section>
  )
}
