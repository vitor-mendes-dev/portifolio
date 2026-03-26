import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

const contacts = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'vitor.mendes.dev@gmail.com',
    href: 'mailto:vitor.mendes.dev@gmail.com',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'vitor-mendes-dev',
    href: 'https://github.com/vitor-mendes-dev',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Conecte-se comigo',
    href: 'https://br.linkedin.com/in/vitor-mendes-65b735123',
  },
]

export function Contato() {
  return (
    <section id="contato" className="py-28 px-6 bg-zinc-50 dark:bg-white/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-emerald-500 text-sm font-semibold uppercase tracking-widest mb-4 block">
          Contato
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          Vamos conversar?
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-14 max-w-xl mx-auto">
          Estou aberto a novas oportunidades, colaborações ou simplesmente uma boa conversa sobre
          tecnologia e negócios. Entre em contato!
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-none hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-zinc-50 dark:hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Icon size={22} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-zinc-400 text-xs uppercase tracking-widest font-medium mb-0.5">{label}</p>
                <p className="text-zinc-900 dark:text-white text-sm font-medium">{value}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="text-zinc-400 group-hover:text-emerald-500 transition-colors"
              />
            </a>
          ))}
        </div>

        <a
          href="mailto:vitor.mendes.dev@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold hover:shadow-[0_0_28px_10px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_28px_10px_rgba(255,255,255,0.2)] transition-all duration-300 text-sm"
        >
          Enviar mensagem
          <Mail size={16} />
        </a>
      </div>
    </section>
  )
}
