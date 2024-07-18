import { projects } from "../../data/projectData"
import ProjectCard from "./ProjectCard"
import Header from "./Header"

const Projects = () => {
    return (
        <div className="mt-16">
            <Header text="Projects" />
            <ul role="list" className="flex flex-col items-center justify-center">
                {projects.map((project) => <li key={project.id}>
                    <ProjectCard project={project} />
                </li>)}
            </ul>
        </div>
    )
}

export default Projects