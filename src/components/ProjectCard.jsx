import { Link, useNavigate } from "react-router-dom"
import Carousel from "./Carousel"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const navigate = useNavigate()

    return (
        <div className={`flex ${project.id % 2 !== 0 && 'flex-row-reverse'} justify-between border-b-2 border-teal-900 px-12 py-0 w-[190vh] h-[90vh]`}>
            <div className="basis-2/3 text-center text-teal-900 align-center justify-center self-center">
                <h3 className="text-4xl font-bold pb-6">{project.name}</h3>
                <p className="text-2xl">{project.description}</p>
                <a className="flex text-xl justify-center align-center gap-2 pt-2" href={project.link} target="_blank">
                    Link
                    <FaExternalLinkAlt className="mt-0.5"/>
                </a>
                <a href={project.github} className="flex items-center justify-center align-middle text-xl" target="_blank"> Repository

                    <FaGithub className="h-8 w-8 pl-2"/>
                </a>
                <button className="p-2 mt-10 text-xl font-bold text-white bg-teal-700 hover:bg-teal-900 rounded-full w-64" onClick={() => navigate(`/projects/${project.id}`)}>
                    Read more
                </button>
            </div>
            <div className="basis-1/3 rounded-xl flex justify-center align-center border-8 border-slate-100 my-12 p-8 bg-slate-200 shadow-lg">
                <Carousel images={project.images} />
            </div>
            
        </div>
    )
}

export default ProjectCard