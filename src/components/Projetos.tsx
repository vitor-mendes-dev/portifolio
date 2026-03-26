import { ExternalLink, FlaskConical, MessageCircle } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

const projects = [
  {
    title: 'Portfólio Pessoal',
    description: 'Este portfólio! Desenvolvido com React, TypeScript e Tailwind CSS. Hospedado no GitHub Pages com suporte a tema claro e escuro.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/vitor-mendes-dev/portifolio',
    live: 'https://vitor-mendes-dev.github.io/portifolio/',
    status: 'online',
    icon: ExternalLink,
  },
  {
    title: 'ML Labs',
    description: 'Projeto de aprendizado explorando Machine Learning com dados estruturados armazenados em MySQL. Experimentos com modelos supervisionados.',
    tags: ['Python', 'MySQL', 'Machine Learning', 'Dados'],
    github: 'https://github.com/vitor-mendes-dev',
    live: null,
    status: 'wip',
    icon: FlaskConical,
  },
  {
    title: 'WhatsApp Chatbot',
    description: 'Chatbot via WhatsApp usando QR Code. Aprendendo a integrar com a API oficial do WhatsApp Business para automação de atendimento.',
    tags: ['Node.js', 'WhatsApp API', 'Automação', 'Chatbot'],
    github: 'https://github.com/vitor-mendes-dev',
    live: null,
    status: 'wip',
    icon: MessageCircle,
  },
]

export function Projetos() {
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

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-none hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <project.icon size={20} className="text-emerald-500" />
                </div>
                {project.status === 'online' && (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                )}
                {project.status === 'wip' && (
                  <span className="flex items-center gap-1.5 text-xs text-amber-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Em desenvolvimento
                  </span>
                )}
              </div>

              <h3 className="text-zinc-900 dark:text-white font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-zinc-200/80 dark:border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium"
                >
                  <GithubIcon size={16} />
                  Código
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-emerald-500 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Ver online
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
