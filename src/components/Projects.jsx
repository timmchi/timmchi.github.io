import { projects } from "../../data/projectData"
import ProjectCard from "./ProjectCard"
import Header from "./Header"

const Projects = () => {
    return (
        <>
            <Header text="Projects" />
            <ul role="list" className="flex flex-col items-center justify-center">
                {projects.map((project) => <li key={project.id}>
                    <ProjectCard project={project} />
                </li>)}
            </ul>
        </>
    )
}

export default Projects