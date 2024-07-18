import { useState } from 'react'
import ProjectPage from './components/ProjectPage'
import About from './components/About'
import Projects from './components/Projects'
import NavBar from './components/Navbar'
import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [isDark, setIsDark] = useState(false)

  const handleDarkModeToggle = () => setIsDark(!isDark)

  return (
    <div className={`${isDark && 'dark'} bg-stone-200 dark:bg-teal-900 w-full max-w-screen`}>
      <Routes>
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<MainPage />} />
      </Routes>

      <NavBar darkModeToggle={handleDarkModeToggle} isDark={isDark}/>
    </div>
  )
}

export default App
