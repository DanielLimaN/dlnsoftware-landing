import { EMAIL, Eyebrow, WHATSAPP_LABEL, WHATSAPP_URL, pillDark } from "./ui"

export function Contact() {
  return (
    <section id="conversar" className="border-t border-line">
      <div className="max-w-[1240px] mx-auto px-8 py-[88px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-14 items-start">
          <div>
            <Eyebrow>Vamos conversar</Eyebrow>
            <h2 className="font-serif font-normal text-[clamp(32px,4.6vw,56px)] leading-[1.02] tracking-[-0.022em] mt-[18px] mb-0">
              Conta como sua operação funciona hoje.
            </h2>
            <p className="text-ink-2 mt-5 mb-0 text-lg max-w-[42ch]">
              Trinta minutos, sem compromisso. Se quiser falar com a Cromatic antes de decidir, a
              gente conecta.
            </p>
            <div className="mt-8 font-mono text-[13px] text-ink-3">resposta em até 1 dia útil</div>
          </div>
          <div className="flex flex-col gap-3.5 self-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className={`${pillDark} flex flex-wrap items-center justify-between gap-4 text-lg px-7 py-[22px]`}
            >
              Chamar no WhatsApp <span className="font-mono text-sm">{WHATSAPP_LABEL} →</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex flex-wrap items-center justify-between gap-4 border border-line-3 text-ink no-underline font-medium text-lg px-7 py-[21px] rounded-full transition-colors hover:border-ink hover:text-ink"
            >
              Mandar e-mail <span className="font-mono text-sm">{EMAIL} →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
