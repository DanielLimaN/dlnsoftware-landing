import { useState, type FormEvent } from "react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = {
      nome: data.get("nome"),
      empresa: data.get("empresa"),
      email: data.get("email"),
      mensagem: data.get("mensagem"),
    }
    console.log("Form submitted:", payload)
    setSubmitted(true)
  }

  return (
    <section
      id="contato"
      className="relative flex flex-col items-center px-8 py-24 gap-12"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-signal rounded-full" />
      <span className="text-xs font-semibold tracking-[0.2em] text-signal">
        CONTATO
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone text-center max-w-[500px]">
        Solicite uma consultoria gratuita
      </h2>
      <p className="text-base text-muted text-center max-w-[500px]">
        Preencha o formulário abaixo e entraremos em contato em até 24 horas.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] bg-card border border-card-border rounded-2xl px-9 py-10 flex flex-col gap-5"
      >
        <FormField
          label="Nome completo"
          name="nome"
          placeholder="Seu nome"
          required
        />
        <FormField
          label="Empresa"
          name="empresa"
          placeholder="Nome da sua empresa"
          required
        />
        <FormField
          label="E-mail"
          name="email"
          type="email"
          placeholder="seu@email.com"
          required
        />
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            placeholder="Conte-nos sobre seu projeto..."
            rows={4}
            className="w-full bg-input-bg border border-card-border rounded-lg px-4 py-3.5 text-sm text-bone placeholder:text-faint resize-none outline-none focus:border-signal/50 transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={submitted}
          className="w-full h-[52px] bg-signal text-ink font-bold text-base rounded-[10px] hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer"
        >
          {submitted ? "Solicitação Enviada ✓" : "Enviar Solicitação"}
        </button>
        {submitted && (
          <p className="text-sm text-signal text-center">
            Recebemos sua solicitação! Entraremos em contato em breve.
          </p>
        )}
      </form>
    </section>
  )
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full h-12 bg-input-bg border border-card-border rounded-lg px-4 text-sm text-bone placeholder:text-faint outline-none focus:border-signal/50 transition-colors"
      />
    </div>
  )
}
