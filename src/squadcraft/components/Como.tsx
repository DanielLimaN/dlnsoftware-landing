import { ETAPAS } from "../data"
import { h2 } from "./ui"

export function Como() {
  return (
    <section id="como" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <h2 className={`${h2} max-w-[20ch]`}>
          Da conversa ao squad no ar <span className="text-sc-green-deep">em uma semana</span>
        </h2>
        <p className="text-[19px] text-sc-gray mt-[22px] mb-0 max-w-[68ch]">
          Você não recebe acesso e um tutorial. Um especialista conduz a implantação inteira, e o
          que ele monta sai da sua operação — não de um modelo genérico. É esse trabalho que faz a
          diferença entre um agente que parece certo e um que responde certo para o seu negócio.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-0.5 bg-sc-line border border-sc-line mt-9">
          {ETAPAS.map((e) => (
            <div key={e.quando} className="bg-white p-[clamp(24px,3vw,34px)]">
              <span className="font-mono text-[11.5px] font-semibold tracking-[0.12em] uppercase text-sc-green-deep">
                {e.quando}
              </span>
              <h3 className="text-[clamp(20px,2.2vw,26px)] font-extrabold tracking-[-0.02em] uppercase leading-[1.1] mt-3.5 mb-0">
                {e.titulo}
              </h3>
              <p className="text-base text-sc-gray mt-3 mb-0">{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
