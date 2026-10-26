import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import {
  SEGMENTOS,
  SITE_URL,
  VIDEO_UPLOAD_DATE,
  faqDoSegmento,
  urlDoSegmento,
  type Segmento,
} from './src/content/segmentos.ts'

// One landing per segment at /squadcraft/<slug>, all built from squadcraft/segmento.html and the
// data in src/content/segmentos.ts. Each page is a real HTML file in dist, so a slug that isn't
// in the data has no file and Netlify answers 404.

const TEMPLATE = 'squadcraft/segmento.html'

// Pages that exist outside the segment data, for the sitemap.
const OUTRAS_PAGINAS = ['/', '/squadcraft', '/squadcraft/6x1']

const attr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Keeps "</script>" inside a string from closing the JSON-LD block.
const jsonLd = (dados: unknown) => JSON.stringify(dados).replace(/</g, '\\u003c')

function schema(s: Segmento) {
  const url = urlDoSegmento(s.slug)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: s.seoTitle,
        description: s.seoDescription,
        url,
        inLanguage: 'pt-BR',
        isPartOf: { '@type': 'WebSite', name: 'DLN Software', url: SITE_URL },
        publisher: { '@type': 'Organization', name: 'DLN Software', url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'SquadCraft', item: `${SITE_URL}/squadcraft` },
          { '@type': 'ListItem', position: 2, name: s.nome, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqDoSegmento(s).map((q) => ({
          '@type': 'Question',
          name: q.p,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.link ? q.r.replace(q.link.texto, `<a href="${SITE_URL}${q.link.href}">${q.link.texto}</a>`) : q.r,
          },
        })),
      },
      {
        '@type': 'VideoObject',
        name: `SquadCraft para ${s.nome.toLowerCase()}`,
        description: s.legendaVideo,
        thumbnailUrl: `${SITE_URL}/videos/segmentos/${s.slug}.jpg`,
        contentUrl: `${SITE_URL}/videos/segmentos/${s.slug}.mp4`,
        uploadDate: VIDEO_UPLOAD_DATE,
        duration: s.duracaoVideo,
        inLanguage: 'pt-BR',
      },
    ],
  }
}

function head(s: Segmento) {
  const url = urlDoSegmento(s.slug)
  const capa = `${SITE_URL}/videos/segmentos/${s.slug}.jpg`
  return `<title>${attr(s.seoTitle)}</title>
    <meta name="description" content="${attr(s.seoDescription)}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta name="author" content="DLN Software" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SquadCraft · DLN Software" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${attr(s.seoTitle)}" />
    <meta property="og:description" content="${attr(s.seoDescription)}" />
    <meta property="og:image" content="${capa}" />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1080" />
    <meta property="og:image:alt" content="${attr(s.legendaVideo)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${attr(s.seoTitle)}" />
    <meta name="twitter:description" content="${attr(s.seoDescription)}" />
    <meta name="twitter:image" content="${capa}" />
    <script type="application/ld+json">${jsonLd(schema(s))}</script>`
}

function sitemap() {
  const urls = [...OUTRAS_PAGINAS.map((p) => `${SITE_URL}${p}`), ...SEGMENTOS.map((s) => urlDoSegmento(s.slug))]
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`
}

// Rollup inputs: one virtual squadcraft/<slug>/index.html per segment.
export function entradasSegmentos(root: string) {
  return Object.fromEntries(
    SEGMENTOS.map((s) => [`segmento-${s.slug}`, path.resolve(root, 'squadcraft', s.slug, 'index.html')]),
  )
}

export function segmentos(): Plugin {
  let root = process.cwd()
  let porArquivo = new Map<string, Segmento>()

  const pagina = (s: Segmento) =>
    fs
      .readFileSync(path.resolve(root, TEMPLATE), 'utf8')
      .replace('<!--segmento:head-->', head(s))
      .replace('%SEGMENTO_SLUG%', s.slug)

  return {
    name: 'dln:segmentos',
    enforce: 'pre',
    configResolved(config) {
      root = config.root
      porArquivo = new Map(SEGMENTOS.map((s) => [path.resolve(root, 'squadcraft', s.slug, 'index.html'), s]))
    },
    resolveId(id) {
      if (porArquivo.has(id)) return id
    },
    load(id) {
      const s = porArquivo.get(id)
      if (s) return pagina(s)
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const slug = req.url?.match(/^\/squadcraft\/([a-z0-9-]+)\/?(?:\?.*)?$/)?.[1]
        const s = SEGMENTOS.find((x) => x.slug === slug)
        if (!s) return next()
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(await server.transformIndexHtml(req.url!, pagina(s)))
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap() })
    },
  }
}
