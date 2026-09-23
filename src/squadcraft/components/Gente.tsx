import { h2 } from "./ui"

const link = "text-sc-green-deep font-semibold"

export function Gente() {
  return (
    <section id="gente" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-11 items-center">
        <div>
          <h2 className={`${h2} max-w-[18ch]`}>
            Tem gente <br />
            <span className="text-sc-green-deep">de verdade</span> <br />
            do outro lado
          </h2>
          <p className="text-lg text-sc-gray mt-6 mb-0 max-w-[44ch]">
            A implantação é sessão com especialista, não tutorial. Depois, quando precisar mudar uma
            regra ou incluir um papel novo, você fala com quem já conhece a sua operação.
          </p>
          <p className="font-mono text-[12.5px] font-semibold tracking-[0.08em] uppercase text-sc-green-deep mt-6 mb-0">
            A base é o material da sua empresa — e quem corrige são seus funcionários
          </p>
          <p className="text-base text-sc-gray mt-5 mb-0 max-w-[46ch]">
            O SquadCraft é construído pela{" "}
            <a href="/" className={link}>DLN Software</a>, a mesma engenharia que fez a esteira de
            risco da{" "}
            <a href="https://cromatic.com.br" rel="noopener" target="_blank" className={link}>Cromatic</a>{" "}
            integrada ao motor antifraude da{" "}
            <a href="https://www.valid.com" rel="noopener" target="_blank" className={link}>Valid</a>.
          </p>
        </div>
        <div className="relative border-2 border-sc-green bg-white min-w-0">
          <img
            width={1024}
            height={576}
            loading="lazy"
            decoding="async"
            src="/assets/especialista-daniel.png"
            alt="Daniel, especialista SquadCraft, em sessão de implantação"
            className="w-full h-auto block grayscale contrast-[1.08]"
          />
          <span className="absolute left-0 bottom-0 bg-sc-green text-sc-ink font-mono text-[11.5px] font-semibold tracking-[0.08em] uppercase px-[13px] py-2">
            especialista squadcraft
          </span>
        </div>
      </div>
    </section>
  )
}
