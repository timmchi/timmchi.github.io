import ProjectPage from './components/ProjectPage'
import About from './components/About'
import Projects from './components/Projects'
import NavBar from './components/Navbar'
import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='w-full max-w-screen'>
      <Routes>
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<MainPage />} />
      </Routes>

      <NavBar />
    </div>
  )
}

export default App
