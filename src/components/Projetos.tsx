import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import analiseEstoque from '../assets/projects/analise-estoque.png'
import crmLeads from '../assets/projects/crm-leads.png'
import mapaCalor from '../assets/projects/mapa-calor.png'
import mlLabs from '../assets/projects/ml-labs.png'
import whatsappBot from '../assets/projects/whatsapp-bot.png'
import portfolioImg from '../assets/projects/portfolio.png'

const projects = [
  {
    title: 'ML Labs',
    context: 'Experimentos com Machine Learning em dados estruturados',
    highlights: [
      'API Flask com modelos especializados por tipo de negócio (venda e aluguel)',
      'Pipeline completo: coleta MySQL → treino → serialização com pickle',
      'R² de 0,98 no treino com 104.232 registros processados',
    ],
    tags: ['Python', 'Flask', 'MySQL', 'Machine Learning', 'Scikit-learn'],
    image: mlLabs as string,
    github: 'https://github.com/vitor-mendes-dev/ML-Labs',
    live: 'https://vitor-mendes-dev.github.io/ML-Labs/',
    status: 'online' as const,
  },
  {
    title: 'Mapa de Calor & Insights',
    context: 'Padrões de comportamento de leads por dia e horário',
    highlights: [
      'Segunda-feira é o melhor dia da semana com 1.307 leads totais',
      '19,5% dos leads chegam fora do horário comercial — oportunidade de automação',
      'Insights automáticos com recomendações para o time de atendimento',
    ],
    tags: ['Python', 'MySQL', 'Heat Map', 'Insights'],
    image: mapaCalor as string,
    github: null,
    live: null,
    status: 'online' as const,
  },
  {
    title: 'CRM de Leads',
    context: 'Evolução e origem dos leads ao longo do tempo',
    highlights: [
      'Acompanhamento diário de novos leads com pico de 50 contatos/dia',
      'Distribuição por fonte: Grupo Wimóveis (44%), DF Imóveis (38%) e outros',
      'Curva de performance comercial por propriedade para priorização de esforços',
    ],
    tags: ['Python', 'MySQL', 'CRM', 'Visualização'],
    image: crmLeads as string,
    github: null,
    live: null,
    status: 'online' as const,
  },
  {
    title: 'Real Estate Ads Intelligence',
    context: 'Análise de estoque e performance de anúncios',
    highlights: [
      '28 imóveis analisados com valor médio de R$ 1,7M e 9.452 visualizações',
      'Curva de atenção por views/dia para identificar anúncios com perda de tração',
      'Distribuição temporal do estoque para apoio em decisões de precificação',
    ],
    tags: ['Python', 'MySQL', 'Análise de Dados', 'Dashboard'],
    image: analiseEstoque as string,
    github: null,
    live: null,
    status: 'online' as const,
  },
  {
    title: 'WhatsApp Chatbot',
    context: 'Automação de atendimento via WhatsApp com QR Code',
    highlights: [
      'Chatbot funcional via QR Code com respostas automáticas configuráveis',
      'Integração em estudo com a API oficial do WhatsApp Business',
      'Fluxos de atendimento para triagem e encaminhamento de leads',
    ],
    tags: ['Node.js', 'WhatsApp API', 'Automação', 'Chatbot'],
    image: whatsappBot as string,
    github: 'https://github.com/vitor-mendes-dev',
    live: null,
    status: 'wip' as const,
  },
  {
    title: 'Portfólio Pessoal',
    context: 'Este portfólio que você está navegando agora',
    highlights: [
      'Construído com React, TypeScript e Tailwind CSS usando Vite',
      'Tema claro/escuro com opção sistema — persistência via localStorage',
      'Deploy automatizado no GitHub Pages com um único comando',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: portfolioImg as string,
    github: 'https://github.com/vitor-mendes-dev/portifolio',
    live: 'https://vitor-mendes-dev.github.io/portifolio/',
    status: 'online' as const,
  },
]

function ImageCard({ image, title, faded }: { image: string; title: string; faded: boolean }) {
  return (
    <div className={`relative w-full transition-all duration-300 ease-out ${faded ? 'opacity-0 scale-[0.97] blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
      <div className="absolute inset-0 rounded-2xl bg-zinc-200 dark:bg-zinc-800 translate-x-4 translate-y-4 rotate-2" />
      <div className="absolute inset-0 rounded-2xl bg-zinc-300 dark:bg-zinc-700 translate-x-2 translate-y-2 rotate-1 opacity-60" />
      <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-white/10 shadow-xl aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  )
}

export function Projetos() {
  const [current, setCurrent] = useState(0)
  const [faded, setFaded] = useState(false)

  const navigate = (next: number) => {
    setFaded(true)
    setTimeout(() => {
      setCurrent(next)
      setFaded(false)
    }, 280)
  }

  const prev = () => navigate((current - 1 + projects.length) % projects.length)
  const nextSlide = () => navigate((current + 1) % projects.length)

  const project = projects[current]

  return (
    <section id="projetos" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Projetos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            O que estou construindo
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">

          {/* Imagem */}
          <div className="w-full md:w-1/2">
            <ImageCard image={project.image} title={project.title} faded={faded} />
          </div>

          {/* Conteúdo */}
          <div className={`w-full md:w-1/2 transition-all duration-300 ease-out ${faded ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>

            {/* Status + contador */}
            <div className="flex items-center gap-3 mb-4">
              {project.status === 'online' ? (
                <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-xs text-amber-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Em desenvolvimento
                </span>
              )}
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <span className="text-xs text-zinc-400 dark:text-zinc-600 font-medium tabular-nums">
                {current + 1} / {projects.length}
              </span>
            </div>

            {/* Título e contexto */}
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-1.5">
              {project.title}
            </h3>
            <p className="text-emerald-500 font-medium text-sm mb-6">
              {project.context}
            </p>

            {/* Destaques */}
            <ul className="flex flex-col gap-3 mb-6">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links e navegação */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    <GithubIcon size={15} />
                    Código
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-emerald-500 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={15} />
                    Ver online
                  </a>
                )}
              </div>

              {/* Setas */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Projeto anterior"
                  className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center hover:shadow-[0_0_18px_6px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_18px_6px_rgba(255,255,255,0.2)] transition-all duration-300"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Próximo projeto"
                  className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center hover:shadow-[0_0_18px_6px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_18px_6px_rgba(255,255,255,0.2)] transition-all duration-300"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5 mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  aria-label={`Ir para projeto ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-5 h-1.5 bg-emerald-500'
                      : 'w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
