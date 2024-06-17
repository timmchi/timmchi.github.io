import { useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    <Skills />
    <Projects />
    </>
  )
}

export default App
