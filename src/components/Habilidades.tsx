const skillGroups = [
  {
    category: 'Desenvolvimento',
    skills: [
      { name: 'HTML & CSS', level: 80 },
      { name: 'JavaScript', level: 65 },
      { name: 'Node.js', level: 55 },
      { name: 'React', level: 50 },
      { name: 'TypeScript', level: 40 },
      { name: 'Python', level: 60 },
    ],
  },
  {
    category: 'Dados & Banco de Dados',
    skills: [
      { name: 'MySQL', level: 65 },
      { name: 'SQLite', level: 65 },
      { name: 'SQL (queries)', level: 70 },
      { name: 'Excel / Planilhas', level: 85 },
      { name: 'Análise de Processos', level: 75 },
    ],
  },
  {
    category: 'Ferramentas & Outros',
    skills: [
      { name: 'Git & GitHub', level: 60 },
      { name: 'Machine Learning', level: 35 },
      { name: 'Chatbots / WhatsApp', level: 45 },
      { name: 'Automação de Tarefas', level: 70 },
      { name: 'Gestão de Anúncios', level: 85 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">{name}</span>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-zinc-200 dark:bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
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
              <div className="flex flex-col gap-5">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
