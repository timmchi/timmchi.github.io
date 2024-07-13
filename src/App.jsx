import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import ProjectPage from './components/ProjectPage'
import About from './components/About'
import NavBar from './components/Navbar'
import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='bg-stone-200'>
      <Routes>
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<MainPage />} />
      </Routes>

      <NavBar />
    </div>
  )
}

export default App
