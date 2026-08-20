import { FlowMark } from "./FlowMark"
import { openChat } from "../lib/chat"

export function CTA() {
  return (
    <section className="flex flex-col items-center px-8 py-24 gap-8">
      <div className="w-full max-w-[1280px] bg-card border border-signal rounded-2xl p-16 sm:p-20 flex flex-col items-center gap-7">
        <FlowMark size={120} />
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-bone text-center max-w-[600px]">
          Vamos transformar suas operações?
        </h2>
        <p className="text-base text-muted text-center max-w-[500px]">
          Chame a gente pelo chat para entendermos como podemos ajudar sua
          empresa a evoluir.
        </p>
        <button
          onClick={openChat}
          className="inline-flex items-center px-12 py-[18px] bg-signal text-ink font-bold text-base rounded-lg hover:opacity-90 transition-opacity cursor-pointer border-0"
        >
          Solicitar Consultoria
        </button>
      </div>
    </section>
  )
}
