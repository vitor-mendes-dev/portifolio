import { GraduationCap, Building2, Lightbulb } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Formação',
    text: 'Graduando em Análise e Desenvolvimento de Sistemas, com foco em tecnologia, automação e análise de dados.',
  },
  {
    icon: Building2,
    title: 'Experiência',
    text: 'Atuação no mercado imobiliário com gestão de anúncios, processos operacionais e suporte às equipes de vendas e locação.',
  },
  {
    icon: Lightbulb,
    title: 'Interesse',
    text: 'TI aplicada a negócios, análise de processos e desenvolvimento de soluções digitais para ganhar eficiência e organização.',
  },
]

export function Sobre() {
  return (
    <section id="sobre" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
            <span className="text-emerald-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
              Sobre mim
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
              Tecnologia para
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500"> transformar negócios</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
              Atualmente cursando Análise e Desenvolvimento de Sistemas, com foco em aplicar
              tecnologia, automação e análise de dados para otimizar rotinas e apoiar decisões estratégicas.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
              Tenho experiência no mercado imobiliário, atuando na gestão de anúncios, processos
              operacionais e suporte às equipes de vendas e locação. Esse contexto me deu uma visão
              única sobre como a tecnologia pode resolver problemas reais de negócio.
            </p>
            <div className="flex flex-wrap gap-2">
              {['ADS', 'Dados', 'Automação', 'Mercado Imobiliário', 'Processos'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-none hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <Icon size={20} className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-zinc-900 dark:text-white font-semibold mb-1">{title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
