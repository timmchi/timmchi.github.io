import { projects } from "../../data/projectData"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
        <>
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => <li key={project.id}>
                    <ProjectCard project={project} />
                </li>)}
            </ul>
        </>
    )
}

export default Projects