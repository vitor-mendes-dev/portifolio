import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 text-xs font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponível para novas oportunidades
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-6">
          Vitor Mendes
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500 mt-1">
            Dev & Analista
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Graduando em <span className="text-zinc-900 dark:text-white font-medium">Análise e Desenvolvimento de Sistemas</span>,
          unindo tecnologia, dados e experiência no mercado imobiliário para construir
          soluções digitais que fazem a diferença.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projetos"
            className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold hover:shadow-[0_0_22px_8px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_22px_8px_rgba(255,255,255,0.2)] transition-all duration-300 text-sm"
          >
            Ver projetos
          </a>
          <a
            href="#sobre"
            className="px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-semibold transition-all duration-200 text-sm"
          >
            Saiba mais
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/vitor-mendes-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href="https://br.linkedin.com/in/vitor-mendes-65b735123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href="mailto:vitor.mendes.dev@gmail.com"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            aria-label="E-mail"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
