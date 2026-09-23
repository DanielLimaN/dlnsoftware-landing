const numeros = [
  { valor: "1", texto: "semana da conversa até o squad no ar, com especialista conduzindo." },
  { valor: "0", texto: "telas em branco para você configurar sozinho." },
  { valor: "24/7", texto: "a squad responde — e escala para humano quando sai do combinado." },
]

export function Numeros() {
  return (
    <section className="bg-sc-violet text-white border-b border-sc-line">
      <div className="max-w-[1400px] mx-auto px-6 py-[clamp(40px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-9">
        {numeros.map((n) => (
          <div key={n.valor}>
            <div className="text-[clamp(56px,9vw,120px)] font-black leading-[0.95] tracking-[-0.05em]">{n.valor}</div>
            <p className="text-[17px] font-semibold mt-3.5 mb-0 max-w-[24ch]">{n.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
