import {
    useParams
} from 'react-router-dom'
import { projects } from '../../data/projectData'
import Carousel from "./Carousel"
import TechCard from "./TechCard";

const ProjectPage = () => {
    const { projectId } = useParams()
    const project = projects.find(p => p.id === Number(projectId))

    console.log(project)
    return (
        <div className='flex mt-16 bg-stone-200 dark:bg-teal-900 h-screen text-teal-900 dark:text-stone-200'>
            <div className='basis-1/2'>
                <Carousel images={project.images} />
            </div>
            <div className='basis-1/2 justify-center mt-8'>
                <h1 className='text-5xl font-bold'>{project.name}</h1>
                <ul className="flex flex-wrap max-w-96 gap-2 py-4 md:flex-nowrap md:max-w-full">
                    {project.technologiesUsed.map(tech => <TechCard key={`${project.id}-${tech}`} techName={tech} />)}
                </ul>
                <p className='text-2xl'>{project.detailedDescription}</p>
                <div>
                    {project.link}
                    {project.github}
                </div>
                <div>
                    <h2 className='text-3xl font-bold'>What I learned</h2>
                    <ul>
                        {project.learningOutcomes.map(outcome => <p>{outcome}</p>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage