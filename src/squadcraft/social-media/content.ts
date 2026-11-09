// Approved copy for /squadcraft/social-media. Change wording only with sign-off.
//
// A PÁGINA NÃO PROMETE PUBLICAÇÃO SOZINHA, E ISSO É DECISÃO
//
// "Piloto automático" é o nome da campanha, não uma promessa de que a squad publica por conta
// própria: hoje ela escreve, monta o calendário e deixa tudo pronto, e quem dá o ok manda para o
// ar. Vender publicação automática criaria dívida de entrega na primeira semana de uso — e a
// aprovação é justamente o que o cliente quer ouvir quando o assunto é a voz da empresa.
//
// Vídeo também não aparece em lugar nenhum: ainda não existe.

export const SELO = "NOVO · SOCIAL MEDIA NO PILOTO AUTOMÁTICO"

export const SUBTITULO =
  "Uma squad de agentes escreve os posts do LinkedIn e do Instagram da sua empresa, monta o " +
  "calendário da semana e acompanha o que cada post rendeu. Você aprova pelo WhatsApp."

// O que trava a empresa hoje. Fala da dor antes de falar do produto.
export const TRAVA = [
  {
    titulo: "Começa e para",
    texto:
      "Três posts numa semana, nada por um mês. A conta fica parecendo abandonada bem quando alguém vai conferir se a empresa existe.",
  },
  {
    titulo: "Sempre cai no fim da fila",
    texto:
      "Quem escreveria é quem atende, vende ou entrega. Entre um cliente e um post, o post perde — e perde todo dia.",
  },
  {
    titulo: "Trava na pauta",
    texto:
      "A pergunta não é como escrever, é sobre o quê. A empresa tem caso, número e bastidor de sobra, e nada disso chega até o texto.",
  },
  {
    titulo: "Ninguém mede",
    texto:
      "Publica, curte, esquece. Sem olhar o que rendeu, o mês seguinte começa do zero outra vez.",
  },
]

// O que a squad entrega. Cada item é uma capacidade que existe hoje.
export const ENTREGA = [
  {
    titulo: "Posts para LinkedIn e Instagram",
    texto:
      "O mesmo assunto vira dois textos, um para cada rede — porque o mesmo texto nos dois lugares fracassa nos dois. Escritos a partir do material da sua empresa: cases, serviços, preços, jeito de falar.",
  },
  {
    titulo: "Calendário da semana",
    texto:
      "A pauta de cada dia definida com antecedência, não na véspera. Você vê a semana inteira de uma vez e remaneja o que quiser.",
  },
  {
    titulo: "Métricas que voltam para a pauta",
    texto:
      "A squad acompanha o que cada post rendeu e usa isso na escolha da próxima pauta. O que funcionou vira regra; o que não funcionou sai do calendário.",
  },
  {
    titulo: "Aprovação pelo WhatsApp",
    texto:
      "Nada vai ao ar sem o seu ok. O post chega pronto onde você já está, você aprova ou pede o ajuste — e o ajuste vira regra para os próximos.",
  },
]

export const PASSOS = [
  "Conversa de 15 minutos: o que a sua empresa faz, para quem fala e o que já publicou.",
  "Um especialista monta a squad com o material da sua empresa e a liga ao seu WhatsApp. No ar em cerca de uma semana.",
  "A partir daí chega a pauta da semana e os posts prontos. Você aprova o que vai ao ar.",
]

// O que a semana parece depois que a squad está no ar.
export const SEMANA = [
  { quando: "Segunda", texto: "A pauta da semana chega pronta, com o que foi melhor no mês passado já considerado." },
  { quando: "Durante a semana", texto: "Cada post chega escrito para a sua aprovação, um de LinkedIn e um de Instagram." },
  { quando: "Sexta", texto: "O resumo do que foi publicado e de como cada post se saiu." },
]

// Also repeated in the FAQPage JSON-LD of squadcraft/social-media/index.html: keep both in sync.
export const FAQ = [
  {
    p: "Os posts saem com a cara da minha empresa?",
    r: "Saem. A squad é alimentada com o material da sua empresa — cases, serviços, preços, posts antigos — e escreve no tom que já está lá. O que você corrigir vira regra para os próximos.",
  },
  {
    p: "A squad publica sozinha?",
    r: "Não sem o seu ok. Ela escreve, monta o calendário e deixa tudo pronto; a publicação acontece depois que você aprova. É a sua voz na rede, então a decisão continua sendo sua.",
  },
  {
    p: "Preciso de social media ou agência?",
    r: "Não para o dia a dia. A squad assume a parte repetitiva: pauta, texto e acompanhamento. Campanha, posicionamento e direção de marca continuam sendo trabalho de gente.",
  },
  {
    p: "E se eu não gostar de um post?",
    r: "Você responde o que mudar, no mesmo WhatsApp. Aquele ajuste passa a valer para os próximos posts, sem precisar repetir a correção toda semana.",
  },
  {
    p: "De onde vêm os assuntos?",
    r: "Do material da sua empresa e do que já foi publicado, com o histórico de temas evitando repetição. Você também pode mandar um assunto na hora e a squad escreve a partir dele.",
  },
  {
    p: "Quanto tempo para começar?",
    r: "Cerca de uma semana entre a primeira conversa e os primeiros posts chegando para aprovação.",
  },
  {
    p: "Tem fidelidade?",
    r: "Não. É mensal e cancelável, e a implantação com especialista já está inclusa no valor do plano.",
  },
]

// Prices mirror PLANOS in ../data.ts (main landing): change both together.
export const PLANOS = [
  {
    selo: "ESSENCIAL",
    preco: "R$ 397",
    periodo: "/mês",
    exemplo: "Uma squad de conteúdo",
    inclui: [
      "Posts de LinkedIn e Instagram",
      "Calendário da semana",
      "Aprovação pelo WhatsApp",
      "Relatório mensal do que rendeu",
    ],
    rodape: "1 squad · 1 número de WhatsApp",
    destaque: true,
  },
  {
    selo: "OPERAÇÃO",
    preco: "R$ 1.197",
    periodo: "/mês",
    exemplo: "Conteúdo e o resto da rotina",
    inclui: [
      "Tudo do Essencial",
      "Mais squads: atendimento, cobrança, follow-up",
      "Integração com o seu ERP ou CRM",
      "Revisão mensal com especialista",
    ],
    rodape: "Até 4 squads · Integração com os seus sistemas",
    destaque: false,
  },
  {
    selo: "ENTERPRISE",
    preco: "Sob consulta",
    periodo: "",
    exemplo: "Várias marcas ou unidades",
    inclui: [
      "Uma squad de conteúdo por marca ou unidade",
      "Integração com sistemas próprios",
      "SLA e engenharia DLN",
    ],
    rodape: "Squads ilimitadas · Engenharia DLN",
    destaque: false,
  },
]
