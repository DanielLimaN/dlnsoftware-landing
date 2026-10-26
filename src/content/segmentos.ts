// Approved copy for the /squadcraft/<slug> landing pages. Change wording only with sign-off.
// This file is also read by vite.config.ts (page <head>, JSON-LD and sitemap), so keep it plain
// data: no imports from the app.

export type Pergunta = {
  p: string
  r: string
  // Part of `r` that becomes an internal link on the page.
  link?: { texto: string; href: string }
}

export type Segmento = {
  slug: string
  nome: string
  nomeCurto: string
  seoTitle: string
  seoDescription: string
  selo: string
  h1: string
  sub: string
  dores: { titulo: string; texto: string }[]
  legendaVideo: string
  // ISO 8601, for the VideoObject schema.
  duracaoVideo: string
  rotinas: { texto: string; resultado: string }[]
  timeFicaCom: string[]
  faq: Pergunta[]
}

export const SITE_URL = "https://dlnsoftware.com.br"
export const VIDEO_UPLOAD_DATE = "2026-10-26"

export const PRECO = "A partir de R$ 397/mês · implantação com especialista inclusa · sem fidelidade"

export const COMO_FUNCIONA = [
  "Conversa de 15 minutos: entendemos a rotina da sua empresa.",
  "Um especialista monta a squad com você, ligada ao WhatsApp e aos sistemas que você já usa. No ar em cerca de uma semana.",
  "Você acompanha tudo e aprova o que é crítico. Nada importante acontece sem o seu ok.",
]

export const FAQ_COMUNS: Pergunta[] = [
  {
    p: "Preciso entender de tecnologia?",
    r: "Não. Um especialista monta tudo com você, e o seu time só aprova o que é importante.",
  },
  {
    p: "O SquadCraft substitui funcionários?",
    r: "Não. Ele assume as tarefas repetitivas, para o seu time ficar com o que precisa de gente.",
  },
]

export const SEGMENTOS: Segmento[] = [
  {
    slug: "escolas",
    nome: "Escolas e cursos",
    nomeCurto: "escolas",
    seoTitle: "Atendimento e cobrança automáticos para escolas e cursos | SquadCraft",
    seoDescription:
      "Uma equipe digital que responde interessados, cobra mensalidades e avisa os pais sobre faltas no WhatsApp. A partir de R$ 397/mês.",
    selo: "SQUADCRAFT PARA ESCOLAS",
    h1: "Sua escola responde todo interessado. Mesmo às 22h.",
    sub: "Uma equipe digital que cuida da rotina da secretaria: responde quem quer se matricular, cobra mensalidades e avisa os pais. Montada por um especialista.",
    dores: [
      {
        titulo: "Interessado sem resposta",
        texto: "Quem pergunta à noite e só recebe resposta no dia seguinte se matricula em outra escola.",
      },
      {
        titulo: "Mensalidade atrasada",
        texto: "Cobrar um por um toma a semana da secretaria, e o atraso vira inadimplência.",
      },
      { titulo: "Pais sem aviso", texto: "A falta descoberta tarde demais vira evasão." },
    ],
    legendaVideo: "Um dia na escola com a rotina saindo da mão do time.",
    duracaoVideo: "PT44S",
    rotinas: [
      { texto: "Lembra os alunos da aula do dia", resultado: "142 lembretes enviados" },
      { texto: "Cobra as mensalidades atrasadas", resultado: "pagamento confirmado" },
      { texto: "Responde quem quer se matricular", resultado: "vaga reservada" },
      { texto: "Avisa os pais quando o aluno falta", resultado: "pais avisados" },
      { texto: "Retoma quem ainda não se matriculou", resultado: "interessados retomados" },
      { texto: "Manda o resumo do dia para a direção", resultado: "resumo às 19h" },
    ],
    timeFicaCom: ["Ensinar", "Conversar com os pais", "Planejar o semestre"],
    faq: [
      {
        p: "A squad conversa com os pais pelo WhatsApp da escola?",
        r: "Sim. Ela atende pelo WhatsApp da escola, no tom que vocês definirem.",
      },
      {
        p: "E se um pai quiser falar com a coordenação?",
        r: "A conversa vai para a pessoa certa da equipe, com todo o histórico.",
      },
      {
        p: "Ela negocia mensalidades?",
        r: "Só dentro das regras que a escola definir. Exceções esperam a aprovação de alguém do time.",
      },
    ],
  },
  {
    slug: "lojas",
    nome: "Lojas e varejo",
    nomeCurto: "lojas",
    seoTitle: "Atendimento no WhatsApp, estoque e crediário para lojas | SquadCraft",
    seoDescription:
      "Uma equipe digital que responde clientes, avisa o estoque baixo, cobra o crediário e chama de volta quem desistiu da compra. A partir de R$ 397/mês.",
    selo: "SQUADCRAFT PARA LOJAS",
    h1: "Sua loja vende até quando o balcão está cheio.",
    sub: "Uma equipe digital que responde clientes no WhatsApp, cuida do estoque e do crediário e chama de volta quem desistiu. Montada por um especialista.",
    dores: [
      {
        titulo: "Cliente sem resposta",
        texto: "Quem pergunta do tamanho e espera duas horas compra no concorrente.",
      },
      {
        titulo: "Estoque zerado sem aviso",
        texto: "O mais vendido acaba, e alguém só descobre na hora de vender.",
      },
      { titulo: "Crediário esquecido", texto: "A parcela vence, ninguém cobra, e o atraso vira dívida." },
    ],
    legendaVideo: "O mesmo dia da loja, de dois jeitos.",
    duracaoVideo: "PT43S",
    rotinas: [
      { texto: "Responde clientes e separa os pedidos", resultado: "pedido separado" },
      { texto: "Confere o estoque e avisa o que está acabando", resultado: "reposição sugerida" },
      { texto: "Avisa a entrega e manda o rastreio", resultado: "rastreio enviado" },
      { texto: "Cobra o crediário atrasado", resultado: "acordo registrado" },
      { texto: "Chama de volta quem não fechou a compra", resultado: "cliente voltou" },
      { texto: "Manda o resumo de vendas do dia", resultado: "resumo às 20h" },
    ],
    timeFicaCom: ["Atender quem está na loja", "Escolher a nova coleção"],
    faq: [
      {
        p: "A squad consulta o meu estoque?",
        r: "Sim, quando conectada ao sistema ou à planilha que a loja já usa.",
      },
      { p: "Ela dá desconto sozinha?", r: "Não. Descontos fora da política esperam a sua aprovação." },
      { p: "Funciona no WhatsApp que a loja já usa?", r: "Sim. Ela atende pelo WhatsApp da loja." },
    ],
  },
  {
    slug: "clinicas",
    nome: "Clínicas e consultórios",
    nomeCurto: "clínicas",
    seoTitle: "Confirmação de consultas e agenda automáticas para clínicas | SquadCraft",
    seoDescription:
      "Uma equipe digital que confirma consultas, preenche horários vagos e tira dúvidas de convênio e preparo no WhatsApp. A partir de R$ 397/mês.",
    selo: "SQUADCRAFT PARA CLÍNICAS",
    h1: "Menos faltas na agenda. Mais tempo para os pacientes.",
    sub: "Uma equipe digital que confirma consultas, preenche horários vagos e responde as dúvidas da recepção. Montada por um especialista.",
    dores: [
      {
        titulo: "Falta sem aviso",
        texto: "O paciente esquece, o horário fica vazio e ninguém consegue encaixar outro.",
      },
      {
        titulo: "Recepção sobrecarregada",
        texto: "As mesmas dúvidas de convênio e preparo, o dia inteiro.",
      },
      {
        titulo: "Pagamento pendente",
        texto: "Consulta particular sem pagamento, e ninguém com tempo de cobrar.",
      },
    ],
    legendaVideo: "Um dia no consultório com a rotina saindo da mão da recepção.",
    duracaoVideo: "PT43S",
    rotinas: [
      { texto: "Confirma as consultas do dia", resultado: "consultas confirmadas" },
      { texto: "Preenche o horário que ficou vago", resultado: "horário preenchido" },
      { texto: "Tira dúvidas de convênio e preparo", resultado: "dúvida respondida" },
      { texto: "Cobra os pagamentos pendentes", resultado: "pagamento confirmado" },
      { texto: "Envia as orientações pós-consulta", resultado: "orientações enviadas" },
      { texto: "Lembra os pacientes de amanhã", resultado: "lembretes enviados" },
    ],
    timeFicaCom: ["Cuidar dos pacientes", "Fazer a clínica crescer"],
    faq: [
      {
        p: "A squad dá orientação médica?",
        r: "Não. Ela responde dúvidas administrativas e de preparo com base no material da clínica. Questões clínicas vão para a equipe.",
      },
      {
        p: "E os dados dos pacientes?",
        r: "A squad usa só as informações necessárias para a rotina administrativa, nos canais que a clínica já usa.",
      },
      {
        p: "Ela remarca consultas?",
        r: "Sim, dentro dos horários livres da agenda e das regras que a clínica definir.",
      },
    ],
  },
  {
    slug: "industria",
    nome: "Indústrias e fábricas",
    nomeCurto: "indústrias",
    seoTitle: "Automação da rotina administrativa para indústrias | SquadCraft",
    seoDescription:
      "Uma equipe digital que gera ordens de produção, cota matéria-prima, informa prazos e cobra duplicatas, ligada ao seu ERP. A partir de R$ 397/mês.",
    selo: "SQUADCRAFT PARA INDÚSTRIAS",
    h1: "O painel de pendências da sua fábrica zera todo dia.",
    sub: "Uma equipe digital que cuida da rotina administrativa da produção: ordens, cotações, prazos, cobranças e despachos. Montada por um especialista.",
    dores: [
      {
        titulo: "Pedido parado",
        texto: "O pedido foi aprovado, mas a ordem de produção depende de alguém lembrar.",
      },
      {
        titulo: "Cliente atrás de prazo",
        texto: 'O comercial passa o dia respondendo "qual o prazo do meu pedido?".',
      },
      { titulo: "Duplicata vencida", texto: "A cobrança fica para depois, e o caixa sente." },
    ],
    legendaVideo: 'O painel de pendências da fábrica virando de "pendente" para "feito".',
    duracaoVideo: "PT40S",
    rotinas: [
      { texto: "Gera as ordens de produção dos pedidos aprovados", resultado: "ordem gerada" },
      { texto: "Confere a matéria-prima e cota com fornecedores", resultado: "cotações recebidas" },
      { texto: "Responde os clientes sobre prazos", resultado: "prazo informado" },
      { texto: "Cobra as duplicatas vencidas", resultado: "acordo registrado" },
      { texto: "Avisa o cliente quando o pedido sai", resultado: "cliente avisado" },
      { texto: "Manda o resumo do dia para a diretoria", resultado: "resumo às 18h" },
    ],
    timeFicaCom: ["Fechar novos clientes", "Melhorar a produção"],
    faq: [
      {
        p: "Funciona com o meu ERP?",
        r: "Funciona com ERPs como o Omie e com sistemas próprios, que a DLN integra.",
      },
      {
        p: "A squad faz compras sozinha?",
        r: "Não. Cotações e compras acima do limite esperam a sua aprovação.",
      },
      {
        p: "Serve para mais de uma unidade?",
        r: "Sim. No plano Enterprise, cada unidade pode ter as suas squads.",
      },
    ],
  },
  {
    slug: "agencias",
    nome: "Agências de publicidade",
    nomeCurto: "agências",
    seoTitle: "Relatórios, aprovações e posts automáticos para agências | SquadCraft",
    seoDescription:
      "Uma equipe digital que monta relatórios de campanha, cobra aprovações dos clientes e publica os posts aprovados. A partir de R$ 397/mês.",
    selo: "SQUADCRAFT PARA AGÊNCIAS",
    h1: "Sua agência cria. A rotina, a squad resolve.",
    sub: "Uma equipe digital que cuida da operação da agência: relatórios, aprovações, briefings, faturas e publicação. Montada por um especialista.",
    dores: [
      {
        titulo: "Relatório que come a sexta",
        texto: "Montar o relatório de cada cliente toma o dia de quem deveria estar criando.",
      },
      {
        titulo: "Aprovação que some",
        texto: "A peça fica parada esperando o cliente responder no WhatsApp.",
      },
      {
        titulo: "Fatura atrasada",
        texto: "Cobrar cliente é desconfortável, e por isso fica para depois.",
      },
    ],
    legendaVideo: "Um dia na agência, com o post indo ao ar depois da aprovação.",
    duracaoVideo: "PT48S",
    rotinas: [
      { texto: "Monta o relatório de campanha de cada cliente", resultado: "relatório enviado" },
      { texto: "Cobra do cliente a aprovação das peças", resultado: "aprovação recebida" },
      { texto: "Recebe pedidos novos e organiza o briefing", resultado: "briefing organizado" },
      { texto: "Cobra as faturas em atraso", resultado: "fatura paga" },
      { texto: "Publica os posts que o cliente aprovou", resultado: "post publicado" },
      { texto: "Manda o resumo do dia", resultado: "resumo às 18h" },
    ],
    timeFicaCom: ["Criar campanhas", "Atender os clientes"],
    faq: [
      {
        p: "A squad publica sem aprovação?",
        r: "Nunca. O post só vai ao ar depois do ok do cliente.",
      },
      {
        p: "Ela escreve no tom de cada cliente?",
        r: "Sim. Cada cliente pode ter as suas referências de tom e de marca.",
      },
      {
        p: "Serve para agências pequenas?",
        r: "Sim. O plano Essencial atende uma squad, e você cresce quando precisar.",
      },
    ],
  },
  {
    slug: "contabilidade",
    nome: "Escritórios de contabilidade",
    nomeCurto: "escritórios de contabilidade",
    seoTitle: "Cobrança de documentos e prazos automáticos para escritórios contábeis | SquadCraft",
    seoDescription:
      "Uma equipe digital que cobra documentos dos clientes, lembra vencimentos, envia guias e responde dúvidas no WhatsApp. A partir de R$ 397/mês.",
    selo: "SQUADCRAFT PARA CONTABILIDADE",
    h1: "Seu escritório para de correr atrás de documento.",
    sub: "Uma equipe digital que cobra documentos, lembra prazos, envia guias e responde os clientes. Montada por um especialista.",
    dores: [
      {
        titulo: "Cliente que não manda a nota",
        texto: "O fechamento atrasa porque alguém precisa cobrar documento por documento.",
      },
      {
        titulo: "Prazo que passa",
        texto: "Uma guia esquecida vira multa para o cliente e desgaste para o escritório.",
      },
      {
        titulo: "WhatsApp lotado",
        texto: '"Minha guia saiu?" o dia inteiro, de dezenas de clientes.',
      },
    ],
    legendaVideo: "O mês de um departamento pessoal, com cada prazo carimbado.",
    duracaoVideo: "PT48S",
    rotinas: [
      { texto: "Cobra os documentos do mês de cada cliente", resultado: "documentos recebidos" },
      { texto: "Lembra os vencimentos de impostos e guias", resultado: "lembretes enviados" },
      { texto: "Envia guias e holerites para cada cliente", resultado: "guias enviadas" },
      {
        texto: 'Responde "minha guia saiu?" e as dúvidas frequentes',
        resultado: "dúvida respondida",
      },
      { texto: "Cobra os honorários em atraso", resultado: "pagamento confirmado" },
      { texto: "Manda o resumo do dia: quem enviou e quem falta", resultado: "resumo às 18h" },
    ],
    timeFicaCom: ["Analisar e orientar os clientes", "Conquistar novos clientes"],
    faq: [
      {
        p: "A squad calcula impostos?",
        r: "Não. Os cálculos e as decisões continuam com o escritório. A squad cobra, lembra, envia e responde.",
      },
      {
        p: "Funciona com muitos clientes ao mesmo tempo?",
        r: "Sim. É justamente para escritórios que atendem dezenas de empresas.",
      },
      {
        p: "Os meus clientes percebem a diferença?",
        r: "Eles recebem lembretes e respostas mais rápidas, pelo WhatsApp do escritório.",
      },
    ],
  },
  {
    slug: "transporte",
    nome: "Transportadoras e empresas de ônibus",
    nomeCurto: "transporte",
    seoTitle: "Escala de motoristas, documentos e fretamento automáticos | SquadCraft",
    seoDescription:
      "Uma equipe digital que comunica escalas, avisa documentos vencendo, atende pedidos de fretamento e cobra clientes. Pronta para a 5x2. A partir de R$ 397/mês.",
    selo: "SQUADCRAFT PARA TRANSPORTE",
    h1: "Sua frota roda. O administrativo acompanha.",
    sub: "Uma equipe digital que cuida da rotina administrativa da operação: escalas, documentos, orçamentos e cobranças. Montada por um especialista.",
    dores: [
      {
        titulo: "Escala nova para comunicar",
        texto: "Com a escala 5x2, cada motorista precisa saber os seus dias e horários, e confirmar.",
      },
      {
        titulo: "Documento vencendo",
        texto: "CNH, exame toxicológico e cursos vencem sem ninguém perceber a tempo.",
      },
      {
        titulo: "Orçamento sem resposta",
        texto: "Pedido de fretamento que espera demais vira contrato do concorrente.",
      },
    ],
    legendaVideo: "O SquadCraft por dentro: como uma squad é montada e acompanhada.",
    duracaoVideo: "PT50S",
    rotinas: [
      { texto: "Comunica a escala a cada motorista e confirma a leitura", resultado: "leitura confirmada" },
      { texto: "Confere a jornada e avisa sobre o limite de horas", resultado: "aviso enviado" },
      { texto: "Avisa CNH, exame toxicológico e cursos perto de vencer", resultado: "documentos em dia" },
      { texto: "Responde pedidos de orçamento de fretamento", resultado: "orçamento enviado" },
      { texto: "Cobra os contratos de fretamento em atraso", resultado: "pagamento confirmado" },
      { texto: "Manda o resumo do dia para a operação", resultado: "resumo às 18h" },
    ],
    timeFicaCom: ["Cuidar da operação", "Atender os grandes contratos"],
    faq: [
      {
        p: "A squad monta a escala?",
        r: "Não. Quem define a escala é a sua gestão. A squad comunica, confirma e lembra.",
      },
      {
        p: "Ajuda na transição para a escala 5x2?",
        r: "Sim. Veja a nossa página sobre o fim da escala 6x1.",
        link: { texto: "página sobre o fim da escala 6x1", href: "/squadcraft/6x1" },
      },
      {
        p: "Funciona para frotas grandes?",
        r: "Sim. No plano Enterprise, cada base ou unidade pode ter as suas squads.",
      },
    ],
  },
]

export const urlDoSegmento = (slug: string) => `${SITE_URL}/squadcraft/${slug}`
export const faqDoSegmento = (s: Segmento) => [...s.faq, ...FAQ_COMUNS]
