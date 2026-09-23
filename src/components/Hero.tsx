import { WHATSAPP_URL, pillDark } from "./ui"

const inputs = [
  { label: "planilhas", y: 34, cy: 44, delay: "0s" },
  { label: "WhatsApp", y: 88, cy: 98, delay: ".55s" },
  { label: "e-mail", y: 140, cy: 150, delay: "2.2s", active: true },
  { label: "anotação", y: 192, cy: 202, delay: "1.1s" },
  { label: "quem lembrar", y: 246, cy: 256, delay: "1.65s" },
]

// Only the outer four inputs get a curve into the ruler; e-mail sits on the straight dashed line.
const curves = inputs.filter((i) => !i.active)

function FlowDiagram() {
  return (
    <svg
      viewBox="0 0 420 300"
      className="w-full h-auto block mt-[22px]"
      role="img"
      aria-label="Diagrama: entradas dispersas convergindo para uma régua de decisão única"
    >
      <g fontFamily="'IBM Plex Mono',monospace" fontSize="12" fill="#AFBBCF">
        {inputs.map((i) => (
          <text key={i.label} x="20" y={i.y} fill={i.active ? "#12B86B" : undefined}>
            {i.label}
          </text>
        ))}
      </g>
      <g stroke="#232B3D" strokeWidth="1.5" fill="none">
        {curves.map((i) => (
          <path key={i.label} d={`M172 ${i.cy} C216 ${i.cy} 216 150 250 150`} />
        ))}
      </g>
      <g stroke="#12B86B" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="26 234">
        {curves.map((i) => (
          <path
            key={i.label}
            d={`M172 ${i.cy} C216 ${i.cy} 216 150 250 150`}
            style={{ animation: `dlnFlow 2.8s linear infinite ${i.delay}` }}
          />
        ))}
      </g>
      <path
        d="M172 150 L250 150"
        stroke="#12B86B"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 8"
        style={{ animation: "dlnDash 3.2s linear infinite" }}
      />
      <g fill="#12B86B">
        {inputs.map((i) => (
          <circle
            key={i.label}
            cx="160"
            cy={i.cy}
            r="8"
            style={{ animation: `dlnBlip 2.8s ease-in-out infinite ${i.delay}` }}
          />
        ))}
      </g>
      <circle
        cx="250"
        cy="150"
        r="17"
        fill="#F7F5F2"
        style={{ transformOrigin: "250px 150px", animation: "dlnRuler 2.8s ease-in-out infinite" }}
      />
      <path
        d="M267 150 L328 150"
        stroke="#2F6BFF"
        strokeWidth="2"
        fill="none"
        strokeDasharray="61 61"
        style={{ animation: "dlnFlow 2.8s linear infinite 1.9s" }}
      />
      <circle
        cx="348"
        cy="150"
        r="15"
        fill="#2F6BFF"
        style={{ transformOrigin: "348px 150px", animation: "dlnOut 2.8s ease-in-out infinite" }}
      />
      <g fontFamily="'IBM Plex Mono',monospace" fontSize="11">
        <text x="250" y="196" textAnchor="middle" fill="#F7F5F2">régua</text>
        <text x="348" y="196" textAnchor="middle" fill="#9DBCFF">decisão</text>
      </g>
    </svg>
  )
}

export function Hero() {
  return (
    <section className="max-w-[1240px] mx-auto px-8 pt-[72px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[52px] items-center">
        <div>
          <h1 className="font-serif font-normal text-[clamp(40px,5.2vw,70px)] leading-[1.03] tracking-[-0.022em] m-0 max-w-[22ch]">
            Consultoria de processos e engenharia de software para{" "}
            <em className="italic text-blue-deep">operações que já giram dinheiro</em>
          </h1>
          <p className="text-[19px] text-ink-2 mt-7 max-w-[54ch]">
            Mapeamos como o trabalho acontece de verdade, mostramos o que vale automatizar antes de
            escrever código, e entregamos o sistema. Construímos a esteira de risco que a{" "}
            <strong className="font-semibold text-ink">Cromatic</strong> usa para financiar
            equipamento médico, integrada ao motor antifraude da{" "}
            <strong className="font-semibold text-ink">Valid</strong>.
          </p>
          <div className="flex flex-wrap items-center gap-[26px] mt-[34px]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className={`${pillDark} text-[17px] px-[30px] py-4`}
            >
              Agendar diagnóstico gratuito
            </a>
            <span className="font-mono text-[13px] text-ink-3 max-w-[30ch] leading-[1.7]">
              Você sai da primeira conversa com o mapa do seu processo em uma página.
            </span>
          </div>
        </div>
        <div className="bg-night rounded-md p-[clamp(26px,3.4vw,42px)] min-w-0">
          <span className="font-mono text-[11px] tracking-[0.13em] uppercase text-mist-2">
            Do processo espalhado ao processo decidido
          </span>
          <FlowDiagram />
        </div>
      </div>
    </section>
  )
}
