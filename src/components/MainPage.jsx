import { useRef } from "react"
import Hero from "./Hero"
import Skills from "./Skills"
import ProjectsList from "./ProjectsList"
import Contact from "./Contact"

const MainPage = () => {
    const contactRef = useRef(null)

    const scrollToContactMe = () => contactRef.current.scrollIntoView()

    return (
        <div className="py-10">
            <Hero handleContactMe={scrollToContactMe} />
            <Skills />
            <ProjectsList />
            <div ref={contactRef}>
                <Contact />
            </div>
        </div>
    )
}

export default MainPage