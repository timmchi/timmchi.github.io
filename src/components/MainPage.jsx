import Hero from "./Hero"
import Skills from "./Skills"
import ProjectsList from "./ProjectsList"
import Contact from "./Contact"

const MainPage = () => {
    return (
        <div className="py-10">
            <Hero />
            <Skills />
            <ProjectsList />
            <Contact />
        </div>
    )
}

export default MainPage