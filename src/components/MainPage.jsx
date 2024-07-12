import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

const MainPage = () => {
    return (
        <div className="py-10">
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default MainPage