export const WHATSAPP_URL = "https://wa.me/5519989111132"
export const WHATSAPP_LABEL = "(19) 98911-1132"
export const EMAIL = "daniel@dlnsoftware.com.br"
export const LINKEDIN_URL = "https://www.linkedin.com/company/dln-software"

export type Foco = [string, string, string, string]

export const QUADROS: { legenda: string; foco: Foco | null; src: string; alt: string }[] = [
  { legenda: "Na biblioteca: o gatilho.", foco: ["1.2%", "53.5%", "12.6%", "5.2%"], src: "/assets/flow/01.png", alt: "Canvas vazio com a biblioteca do Studio" },
  { legenda: "Mensagem recebida no WhatsApp.", foco: ["41.8%", "12.4%", "24.6%", "28.4%"], src: "/assets/flow/02.png", alt: "Gatilho do WhatsApp no canvas" },
  { legenda: "Um agente entra no canvas.", foco: ["21.4%", "53.2%", "31.4%", "34.1%"], src: "/assets/flow/03.png", alt: "Agente adicionado ao canvas" },
  { legenda: "A tarefa: o que deve ser feito.", foco: ["63.9%", "52.9%", "31.6%", "21.1%"], src: "/assets/flow/04.png", alt: "Tarefa adicionada ao canvas" },
  { legenda: "Gatilho ligado na tarefa.", foco: null, src: "/assets/flow/05.png", alt: "Gatilho ligado na tarefa" },
  { legenda: "Tarefa ligada no agente — squad montado.", foco: null, src: "/assets/flow/06.png", alt: "Tarefa ligada no agente" },
]

export type Passo = { f: string | null; rotulo: string; texto: string }

export const ROTINAS: {
  n: string
  titulo: string
  gatilho: string
  entrega: string
  passos: Passo[]
  resultado: string
}[] = [
  {
    n: "01", titulo: "Captação de leads", gatilho: "cliente chama no WhatsApp perguntando preço", entrega: "lead qualificado no HubSpot",
    passos: [
      { f: "WhatsApp", rotulo: "gatilho", texto: "Cliente pergunta preço e prazo pelo WhatsApp da empresa." },
      { f: null, rotulo: "squad", texto: "Responde com a tabela real e qualifica: empresa, porte, interesse, urgência." },
      { f: "HubSpot", rotulo: "registra", texto: "Cria o contato e o negócio na etapa certa do funil, com a conversa anexada." },
      { f: "Slack", rotulo: "avisa", texto: "Vendedor recebe o resumo e o próximo passo sugerido." },
    ],
    resultado: "Nenhum lead some no WhatsApp de ninguém — e o vendedor liga já sabendo o que o cliente quer.",
  },
  {
    n: "02", titulo: "Agendamento de consultas", gatilho: "paciente pede horário pelo WhatsApp", entrega: "consulta marcada na agenda",
    passos: [
      { f: "WhatsApp", rotulo: "gatilho", texto: "Paciente pede para marcar uma consulta." },
      { f: "Google Calendar", rotulo: "consulta", texto: "Busca a agenda do profissional e oferece três horários livres." },
      { f: null, rotulo: "squad", texto: "Confirma dados, convênio e tipo de atendimento." },
      { f: "Google Calendar", rotulo: "agenda", texto: "Marca o horário e envia a confirmação." },
      { f: "WhatsApp", rotulo: "lembra", texto: "Lembrete 24h antes. Se desmarcar, o horário volta para a agenda." },
    ],
    resultado: "Recepção livre do vai-e-vem de mensagens e menos cadeira vazia por falta de confirmação.",
  },
  {
    n: "03", titulo: "Cobrança", gatilho: "parcela vence há 3 dias", entrega: "cliente cobrado, acordo registrado",
    passos: [
      { f: "PostgreSQL", rotulo: "gatilho · 9h", texto: "Todo dia às 9h, lê no seu sistema as parcelas vencidas." },
      { f: "WhatsApp", rotulo: "cobra", texto: "Envia lembrete com link de pagamento, no tom que você aprovou." },
      { f: null, rotulo: "squad", texto: "Negocia dentro da sua política: nova data ou parcelamento." },
      { f: "Google Sheets", rotulo: "registra", texto: "Cada tentativa e cada acordo ficam anotados." },
      { f: "Teams", rotulo: "escala", texto: "Caso travado vai para o financeiro, com o histórico." },
    ],
    resultado: "Régua de cobrança rodando todo dia, sem ninguém do time montando lista em planilha.",
  },
  {
    n: "04", titulo: "Follow-up comercial", gatilho: "negócio parado há 5 dias no CRM", entrega: "follow-up enviado, dono avisado",
    passos: [
      { f: "HubSpot", rotulo: "gatilho", texto: "Negócio sem atividade há 5 dias no funil." },
      { f: null, rotulo: "squad", texto: "Lê o histórico e escreve um follow-up que continua a conversa." },
      { f: "Gmail", rotulo: "envia", texto: "Sai do e-mail do próprio vendedor." },
      { f: "HubSpot", rotulo: "registra", texto: "Atividade anotada no negócio e lembrete para o dono." },
    ],
    resultado: "Proposta não esfria por esquecimento — o funil anda sozinho entre uma reunião e outra.",
  },
  {
    n: "05", titulo: "Conteúdo para LinkedIn", gatilho: "pauta do dia no calendário editorial", entrega: "post publicado após aprovação",
    passos: [
      { f: "Google Calendar", rotulo: "gatilho", texto: "Chega o dia da pauta no calendário editorial." },
      { f: null, rotulo: "squad", texto: "Escreve o post a partir dos materiais e cases da empresa." },
      { f: "Slack", rotulo: "aprova", texto: "Manda para aprovação; ajuste vira regra para os próximos." },
      { f: "LinkedIn", rotulo: "publica", texto: "Publicado na página depois do ok." },
    ],
    resultado: "Presença constante no LinkedIn sem alguém parar o dia para escrever.",
  },
  {
    n: "06", titulo: "Suporte ao cliente", gatilho: "cliente pergunta do pedido", entrega: "respondido com o status real",
    passos: [
      { f: "WhatsApp", rotulo: "gatilho", texto: "Cliente pergunta onde está o pedido ou como trocar." },
      { f: "MySQL", rotulo: "consulta", texto: "Busca o status do pedido direto no seu sistema." },
      { f: null, rotulo: "squad", texto: "Responde seguindo sua política de troca e prazo." },
      { f: "Teams", rotulo: "escala", texto: "Fora do combinado, passa para uma pessoa com todo o contexto." },
    ],
    resultado: "A maioria das dúvidas resolvida na hora; o time só pega o que precisa de gente.",
  },
]

export const PLANOS = [
  { rotulo: "essencial", nome: "Uma squad", preco: "R$ 397", desc: "1 equipe, 1 número de WhatsApp, configuração com especialista e relatório mensal.", cta: "Começar", destaque: false },
  { rotulo: "mais contratado", nome: "Operação", preco: "R$ 1.197", desc: "Até 4 equipes, integração com ERP ou CRM, relatórios e revisão mensal com especialista.", cta: "Falar agora", destaque: true },
  { rotulo: "sob medida", nome: "Enterprise", preco: "sob consulta", desc: "Equipes ilimitadas, integrações e antifraude sob demanda, SLA e engenharia DLN.", cta: "Pedir proposta", destaque: false },
]

export type Ferramenta = { nome: string; slug?: string | null; arquivo?: string; largo?: boolean; placaClara?: boolean }

export const FERRAMENTAS: Ferramenta[] = [
  { nome: "WhatsApp", slug: "whatsapp" },
  { nome: "Telegram", slug: "telegram" },
  { nome: "Discord", slug: "discord" },
  { nome: "Slack", arquivo: "/assets/logos/slack.png" },
  { nome: "Teams", arquivo: "/assets/logos/teams.png" },
  { nome: "LinkedIn", arquivo: "/assets/logos/linkedin.png" },
  { nome: "Gmail", slug: "gmail" },
  { nome: "Outlook", arquivo: "/assets/logos/outlook.png" },
  { nome: "Google Calendar", slug: "googlecalendar" },
  { nome: "Excel", arquivo: "/assets/logos/excel.png" },
  { nome: "Google Sheets", slug: "googlesheets" },
  { nome: "HubSpot", slug: "hubspot" },
  { nome: "Pipedrive", arquivo: "/assets/logos/pipedrive.png", largo: true, placaClara: true },
  { nome: "PostgreSQL", slug: "postgresql" },
  { nome: "MySQL", slug: "mysql" },
  { nome: "Oracle", arquivo: "/assets/logos/oracle.png", largo: true, placaClara: true },
  { nome: "seu sistema", slug: null },
]

export function logoDe(nome: string) {
  const fer = FERRAMENTAS.find((x) => x.nome === nome)
  if (!fer) return ""
  if (fer.arquivo) return fer.arquivo
  return fer.slug ? "https://cdn.simpleicons.org/" + fer.slug : ""
}

export const FAQ = [
  { p: "Preciso saber configurar IA?", r: "Não. A primeira squad é montada por um especialista nosso a partir do seu processo — você revisa, pede ajuste e aprova. A operação do dia a dia é só usar, no canal que a empresa já usa." },
  { p: "E quando o agente não sabe responder?", r: "Ele passa para uma pessoa, com o histórico da conversa junto. A regra de quando transferir é definida com você na implantação: o agente não improvisa fora do escopo nem inventa informação que não está na base." },
  { p: "De onde vêm as respostas?", r: "Do material da sua empresa: tabela de preço, política de desconto, prazos reais, contratos, histórico do cliente. Com a base ligada, o agente responde somente o que está nos seus documentos — e diz que não tem a informação em vez de inventar." },
  { p: "Quem corrige quando ela erra?", r: "Seus próprios funcionários. Quem entende do assunto marca a resposta errada e escreve a certa; aquilo vira regra para a squad inteira, sem abrir ticket e sem depender de nós." },
  { p: "Funciona no WhatsApp que já usamos?", r: "Sim, é o caminho padrão — seu cliente não aprende app novo nem muda de número. Também entra em e-mail, calendário, ERP, CRM, planilhas e sistemas próprios; quando o sistema é antigo, a engenharia da DLN faz a integração." },
  { p: "Isso substitui a consultoria da DLN?", r: "São coisas separadas. Consultoria é projeto sob medida, orçado por escopo; SquadCraft é produto por assinatura. Às vezes o diagnóstico conclui que você só precisa do SquadCraft — e nesse caso a gente diz isso." },
  { p: "Tem fidelidade ou custo de implantação?", r: "Não e não. É mensal e cancelável, e a implantação com especialista já está inclusa no valor do plano, inclusive no Essencial de R$ 397." },
  { p: "Em quanto tempo está no ar?", r: "Uma semana entre a primeira conversa e a squad operando, no cenário padrão de uma rotina. Squads com integração a sistema próprio ou regra crítica levam mais, e o prazo sai do diagnóstico com data." },
]

export const ETAPAS = [
  {
    quando: "dia 1 · diagnóstico",
    titulo: "Mapa da rotina",
    texto: "Conversamos com quem executa, não só com a diretoria: que mensagem chega, quem responde hoje, quanto tempo leva, o que exige decisão humana e o que é repetição pura. Sai daqui a lista do que vale virar squad — e o que não vale.",
  },
  {
    quando: "dias 2–3 · construção",
    titulo: "Squad montada",
    texto: "No Studio, o especialista liga o gatilho, define os agentes e as tarefas, escreve os guardrails (o que o agente nunca pode dizer) e o tom de voz. A base de conhecimento recebe os seus documentos: tabela de preço, política de desconto, prazos reais, contratos.",
  },
  {
    quando: "dia 4 · ensaio",
    titulo: "Teste com sua equipe",
    texto: "Seu time conversa com a squad como se fosse cliente e marca o que está errado. Cada correção vira regra na hora. É aqui que a squad aprende o jeito da casa — e é por isso que quem treina são seus funcionários, não nós.",
  },
  {
    quando: "dia 5 · no ar",
    titulo: "Entra em operação",
    texto: "A squad assume no canal que a empresa já usa, com a regra de escalonamento ativa: quando o caso sai do combinado, vai para uma pessoa com o histórico junto. Você acompanha o que foi resolvido sozinho e o que voltou para humano.",
  },
]

export const MARQUEE = ["atendimento", "cobrança", "follow-up", "conteúdo", "agendamento", "triagem de lead", "pós-venda", "conferência de nota"]
