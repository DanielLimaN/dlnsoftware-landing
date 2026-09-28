import { h2 } from "./ui"

export function Studio() {
  return (
    <section id="studio" className="border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)]">
        <div className="flex flex-wrap gap-5 items-end justify-between mb-7">
          <h2 className={`${h2} max-w-[18ch]`}>
            O SquadCraft Studio por dentro. <span className="text-sc-green-deep">Telas reais.</span>
          </h2>
          <span className="font-mono text-xs font-semibold tracking-[0.1em] uppercase text-sc-gray max-w-[34ch]">
            Um squad montado do zero
          </span>
        </div>

        <div className="border-2 border-sc-green bg-white">
          <div className="flex flex-wrap items-center gap-2.5 px-3.5 py-[11px] border-b-2 border-sc-green">
            <span className="font-mono text-[11.5px] font-semibold text-sc-green-deep">squadcraft.app / studio</span>
          </div>
          <video
            src="/assets/squadcraft-web.mp4"
            poster="/assets/squadcraft-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="Vídeo: montando um squad no SquadCraft Studio"
            className="w-full h-auto block bg-sc-paper"
          />
        </div>
      </div>
    </section>
  )
}
