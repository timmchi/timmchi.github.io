import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import ContactForm from "./ContactForm"

const MainPage = () => {
    return (
        <div className="py-10">
            <Hero />
            <Skills />
            <Projects />
            <ContactForm /> 
        </div>
    )
}

export default MainPage