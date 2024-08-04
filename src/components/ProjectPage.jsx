import { useParams } from "react-router-dom";
import { projects } from "../../data/projectData";
import Carousel from "./Carousel";
import TechCard from "./TechCard";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === Number(projectId));

  console.log(project);
  return (
    <div className="flex mt-16 bg-stone-200 dark:bg-teal-900 h-screen text-teal-900 dark:text-stone-200">
      <div className="basis-1/2">
        <Carousel images={project.images} size="small" />
      </div>
      <div className="basis-1/2 justify-center mt-8 max-w-[40%]">
        <div className="flex gap-6">
          <h1 className="text-5xl font-bold">{project.name}</h1>
          <div className="flex pt-2 text-md justify-center gap-4 items-center divide-x-2 divide-teal-900 lg:text-xl dark:divide-stone-200">
            <a
              className="flex justify-center align-center gap-2"
              href={project.link}
              target="_blank"
            >
              <FaExternalLinkAlt className="h-6 w-6" />
            </a>
            <a
              href={project.github}
              className="flex items-center justify-center align-middle pl-4"
              target="_blank"
            >
              <FaGithub className="h-8 w-8 " />
            </a>
          </div>
        </div>
        <ul className="flex flex-wrap max-w-96 gap-2 py-4 md:flex-nowrap md:max-w-full">
          {project.technologiesUsed.map((tech) => (
            <TechCard key={`${project.id}-${tech}`} techName={tech} />
          ))}
        </ul>
        {project.detailedDescription.map((detailedD, index) => (
          <p className="text-xl pb-2" key={`${project.id}-${index}`}>
            {detailedD}
          </p>
        ))}
        <div>
          <h2 className="text-3xl font-bold py-4">What I learned</h2>
          <ul className="list-disc list-inside">
            {project.learningOutcomes.map((outcome) => (
              <li className="text-xl pb-2" key={`${project.id}-${outcome}`}>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
