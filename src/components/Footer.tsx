import { Monitor, Sun, Moon } from 'lucide-react'
import { useTheme, ThemePreference } from '../contexts/ThemeContext'

const options: { value: ThemePreference; icon: typeof Monitor; label: string }[] = [
  { value: 'system', icon: Monitor, label: 'Sistema' },
  { value: 'light',  icon: Sun,     label: 'Claro'   },
  { value: 'dark',   icon: Moon,    label: 'Escuro'  },
]

export function Footer() {
  const { preference, setPreference } = useTheme()

  return (
    <footer className="py-8 px-6 border-t border-zinc-200/80 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <span className="text-zinc-600 dark:text-zinc-400 font-medium">Vitor Mendes</span>

        <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200/80 dark:border-white/8">
          {options.map(({ value, icon: Icon, label }) => {
            const active = preference === value
            return (
              <button
                key={value}
                onClick={() => setPreference(value)}
                aria-label={label}
                title={label}
                className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 ${
                  active
                    ? 'bg-white dark:bg-white/15 text-zinc-900 dark:text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'
                }`}
              >
                <Icon size={15} />
              </button>
            )
          })}
        </div>

        <span className="text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} · Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
