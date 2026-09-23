import type { ReactNode } from "react"

export const WHATSAPP_URL = "https://wa.me/5519989111132"
export const WHATSAPP_LABEL = "(19) 98911-1132"
export const EMAIL = "daniel@dlnsoftware.com.br"
export const LINKEDIN_URL = "https://www.linkedin.com/company/dln-software"
export const SQUADCRAFT_URL = "/squadcraft/"

export function Eyebrow({
  children,
  className = "text-ink-3",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`font-mono text-[11.5px] tracking-[0.14em] uppercase ${className}`}
    >
      {children}
    </span>
  )
}

export function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  const md = size === "md"
  return (
    <span className={`flex items-center ${md ? "gap-[11px]" : "gap-2.5"}`}>
      <img
        src="/assets/dln-icon.webp"
        alt={md ? "DLN Software" : ""}
        width={128}
        height={128}
        decoding="async"
        className={md ? "size-[34px] rounded-lg block" : "size-[30px] rounded-[7px] block"}
      />
      <span className={`font-serif leading-none ${md ? "text-[28px]" : "text-[26px]"}`}>
        dln<span className="text-blue-deep">.</span>
      </span>
    </span>
  )
}

export const pillDark =
  "bg-ink text-paper no-underline font-medium rounded-full transition-colors hover:bg-blue hover:text-paper"
