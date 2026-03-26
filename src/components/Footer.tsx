export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200/80 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 dark:text-zinc-600 text-sm">
        <span className="text-zinc-600 dark:text-zinc-400 font-medium">Vitor Mendes</span>
        <span>© {new Date().getFullYear()} · Todos os direitos reservados</span>
      </div>
    </footer>
  )
}
