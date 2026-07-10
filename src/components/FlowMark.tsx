export function FlowMark({ size = 60, className }: { size?: number; className?: string }) {
  const aspectRatio = 240 / 100
  const w = size
  const h = size / aspectRatio

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 240 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M44,76 C70,76 90,52 120,52 C150,52 170,76 196,76" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      <circle cx="44" cy="76" r="11" fill="#5EEAD4" />
      <circle cx="120" cy="52" r="11" fill="#F8FAFC" />
      <circle cx="196" cy="76" r="11" fill="#3B82F6" />
    </svg>
  )
}

export function FlowIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18,4 C18,4 8,14 8,18 C8,22 18,18 18,18 C18,18 28,14 28,18" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="4" r="3.5" fill="#5EEAD4" />
      <circle cx="8" cy="18" r="3.5" fill="#F8FAFC" />
      <circle cx="28" cy="18" r="3.5" fill="#3B82F6" />
    </svg>
  )
}
