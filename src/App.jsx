import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import ProjectPage from './components/ProjectPage'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <div className='bg-slate-400'>
        <Hero />
        <Skills />
        <Projects />
        <ContactForm />
      </div>
    </>
  )
}

export default App
