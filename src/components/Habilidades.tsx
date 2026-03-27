const skillGroups = [
  {
    category: 'Desenvolvimento',
    skills: ['HTML & CSS', 'JavaScript', 'Node.js', 'React', 'TypeScript', 'Python'],
  },
  {
    category: 'Dados & Banco de Dados',
    skills: ['MySQL', 'SQLite', 'SQL (queries)', 'Excel / Planilhas', 'Análise de Processos'],
  },
  {
    category: 'Ferramentas & Outros',
    skills: ['Git & GitHub', 'Machine Learning', 'Chatbots / WhatsApp', 'Automação de Tarefas', 'Gestão de Anúncios'],
  },
]

function SkillItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 flex items-center justify-center">
        <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">{name}</span>
    </div>
  )
}

export function Habilidades() {
  return (
    <section id="habilidades" className="py-28 px-6 bg-zinc-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Habilidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            O que eu sei fazer
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-none hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300"
            >
              <h3 className="text-zinc-900 dark:text-white font-semibold mb-6 pb-4 border-b border-zinc-200/80 dark:border-white/[0.08]">
                {category}
              </h3>
              <div className="flex flex-col gap-4">
                {skills.map((skill) => (
                  <SkillItem key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
