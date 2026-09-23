import { useState } from "react"

export const h2 =
  "text-[clamp(30px,4.6vw,62px)] font-black leading-[1.1] tracking-[-0.04em] uppercase m-0"

export function Blink({ className = "bg-sc-ink", size = "size-[9px]" }: { className?: string; size?: string }) {
  return (
    <span
      className={`${size} shrink-0 ${className}`}
      style={{ animation: "arBlink 1.6s steps(1,end) infinite" }}
    />
  )
}

export function Wordmark({ className = "text-[19px]" }: { className?: string }) {
  return (
    <span className={`flex items-baseline gap-[3px] font-black tracking-[-0.04em] uppercase shrink-0 ${className}`}>
      SQUAD<span className="text-sc-green-deep">CRAFT</span>
    </span>
  )
}

// Logos come from the Simple Icons CDN or local files; when one fails to load we fall back to initials.
export function ToolLogo({
  src,
  nome,
  size,
  fallbackClassName = "",
}: {
  src: string
  nome: string
  size: number
  fallbackClassName?: string
}) {
  const [falhou, setFalhou] = useState(false)
  if (!src || falhou) {
    return (
      <span className={`font-mono text-[11px] font-semibold ${fallbackClassName}`}>
        {nome.slice(0, 2).toUpperCase()}
      </span>
    )
  }
  return (
    <img
      src={src}
      alt={nome}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFalhou(true)}
      className="object-contain block"
      style={{ width: size, height: size }}
    />
  )
}
