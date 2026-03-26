import { ThemeProvider } from './contexts/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Sobre } from './components/Sobre'
import { Habilidades } from './components/Habilidades'
import { Projetos } from './components/Projetos'
import { Contato } from './components/Contato'
import { Footer } from './components/Footer'

function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
