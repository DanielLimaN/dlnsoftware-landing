import { useRef } from "react"
import type { Segmento } from "../../../content/segmentos"
import { analytics } from "../analytics"

export function Video({ s }: { s: Segmento }) {
  const contou = useRef(false)
  const aoTocar = () => {
    if (contou.current) return
    contou.current = true
    analytics.then((m) => m.track("video_play_segmento"))
  }

  return (
    <section id="video" aria-label="Vídeo" className="bg-sc-ink text-sc-paper scroll-mt-4">
      <figure className="max-w-[1100px] mx-auto px-6 py-[clamp(40px,5vw,72px)] m-0">
        <video
          controls
          preload="none"
          playsInline
          poster={`/videos/segmentos/${s.slug}.jpg`}
          width={1920}
          height={1080}
          onPlay={aoTocar}
          className="block w-full h-auto aspect-video bg-black border-[3px] border-sc-paper shadow-[8px_8px_0_#12B86B]"
        >
          <source src={`/videos/segmentos/${s.slug}.mp4`} type="video/mp4" />
        </video>
        <figcaption className="font-mono text-[13px] tracking-[0.02em] mt-6 text-sc-paper">{s.legendaVideo}</figcaption>
      </figure>
    </section>
  )
}
