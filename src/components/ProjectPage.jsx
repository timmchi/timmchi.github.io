import {
    useParams
} from 'react-router-dom'
import { projects } from '../../data/projectData'
import Carousel from "./Carousel"

const ProjectPage = () => {
    const { projectId } = useParams()
    const project = projects.find(p => p.id === Number(projectId))

    console.log(project)
    return (
        <div className='flex mt-16 bg-stone-200 dark:bg-teal-900 h-screen'>
            <div className='basis-1/2'>
                <Carousel images={project.images} />
            </div>
            <div className='basis-1/2'>
                {project.name}
                {project.detailedDescription}
                {project.link}
                {project.github}
            </div>
        </div>
    )
}

export default ProjectPage