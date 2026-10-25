// Approved copy for /squadcraft/6x1. Change wording only with sign-off: the page must stay
// neutral about the law and never suggest the squad replaces people.

export const SELO = "FIM DA ESCALA 6X1 · VALE A PARTIR DE 15/12"

export const MUDA = [
  { titulo: "5x2", texto: "Duas folgas por semana, uma delas preferencialmente no domingo, sem redução de salário." },
  { titulo: "44h → 40h", texto: "A jornada máxima cai aos poucos, ao longo de 14 meses. Em dezembro, já são 42 horas." },
  { titulo: "Quem já faz 40h", texto: "Para quem já trabalha 40 ou 36 horas por semana, nada muda." },
  { titulo: "Serviço ao Estado", texto: "Empresas que prestam serviço ao poder público têm 12 meses para se adaptar." },
]

export const EFEITO = [
  {
    titulo: "Na operação",
    texto: "Transporte, varejo, saúde e indústria vão precisar de mais pessoas para cobrir os mesmos horários.",
  },
  {
    titulo: "No administrativo",
    texto:
      "Mais trabalho no atendimento, no financeiro, nas compras e na comunicação das novas escalas, sem poder crescer na mesma proporção.",
  },
]

export const ASSUME = [
  "Comunica a nova escala a cada pessoa do time",
  "Atende clientes e fornecedores no WhatsApp, a qualquer hora",
  "Cobra quem atrasou e lança no financeiro",
  "Confere o ponto e avisa sobre o limite de horas",
  "Cobra os documentos das novas admissões",
  "Lembra a gestão de cada etapa da transição",
]

export const PASSOS = [
  "Conversa de 15 minutos: entendemos a rotina do seu administrativo.",
  "Um especialista monta a squad com você, ligada ao WhatsApp e aos sistemas que a empresa já usa. No ar em cerca de uma semana.",
  "Você acompanha tudo e aprova o que é crítico. Nada importante acontece sem o seu ok.",
]

// Also repeated in the FAQPage JSON-LD of squadcraft/6x1/index.html: keep both in sync.
export const FAQ = [
  {
    p: "O SquadCraft substitui funcionários?",
    r: "Não. Ele assume as tarefas repetitivas, para o seu time ficar com o que precisa de gente: atender, decidir, vender.",
  },
  {
    p: "A squad monta a escala 5x2?",
    r: "Ela ajuda a organizar e a comunicar a escala ao time. Quem define e aprova a escala é a sua gestão, com o DP e o contador.",
  },
  {
    p: "Funciona com o sistema que eu já uso?",
    r: "Funciona com WhatsApp, planilhas, ERPs como Omie e Bling e outros sistemas. Se for um sistema próprio, a DLN faz a integração.",
  },
  { p: "Preciso entender de tecnologia?", r: "Não. Um especialista monta tudo com você." },
  { p: "Quanto tempo para começar?", r: "Em cerca de uma semana a primeira squad está no ar." },
]

// Prices and limits mirror PLANOS in ../data.ts (main landing): change both together.
export const PLANOS_6X1 = [
  {
    selo: "ESSENCIAL",
    preco: "R$ 397",
    periodo: "/mês",
    exemplo: "Squad de comunicação da escala",
    inclui: [
      "Comunica a nova escala a cada pessoa do time",
      "Responde dúvidas sobre folgas e horários no WhatsApp",
      "Avisa o time quando a escala muda",
    ],
    rodape: "1 squad · 1 número de WhatsApp",
    destaque: false,
  },
  {
    selo: "OPERAÇÃO · MAIS INDICADO",
    preco: "R$ 1.197",
    periodo: "/mês",
    exemplo: "Administrativo da transição",
    inclui: [
      "Tudo do exemplo anterior",
      "Confere o ponto e avisa sobre o limite de horas",
      "Cobra os documentos das novas admissões",
      "Cobra quem atrasou e lança no financeiro",
    ],
    rodape: "Até 4 squads · Integração com o seu ERP ou CRM",
    destaque: true,
  },
  {
    selo: "ENTERPRISE",
    preco: "Sob consulta",
    periodo: "",
    exemplo: "Várias unidades ou sistema próprio",
    inclui: [
      "Squads para cada unidade ou área",
      "Integração com sistemas próprios ou antigos",
      "Acompanhamento da transição em todas as etapas",
    ],
    rodape: "Squads ilimitadas · Engenharia DLN",
    destaque: false,
  },
]
