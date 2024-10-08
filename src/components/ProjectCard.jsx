import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Carousel from "./Carousel";
import TechCard from "./TechCard";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: "all 1s",
        filter: inView ? "blur(0)" : "blur(5px)",
        transform: inView ? "translateY(0)" : "translateY(10%)",
      }}
      className={`flex flex-col-reverse justify-between border-b-2 border-teal-900 dark:border-stone-200 px-6 w-full max-w-screen h-[90%] lg:w-[190vh] lg:max-w-screen-xl lg:px-12 lg:flex-row ${
        project.id % 2 !== 0 && "lg:flex-row-reverse"
      }`}
    >
      <div className="basis-2/3 text-center text-teal-900 align-center justify-center self-center dark:text-stone-200">
        <h3 className="text-2xl py-2 font-bold lg:text-4xl">{project.name}</h3>
        <p className="text-lg text-center lg:text-2xl">{project.description}</p>
        <ul className="flex flex-wrap max-w-96 align-center items-center justify-center gap-2 py-4 md:flex-nowrap md:max-w-full">
          {project.technologiesUsed.map((tech) => (
            <TechCard key={`${project.id}-${tech}`} techName={tech} />
          ))}
        </ul>
        <div className="flex text-md justify-center gap-4 items-center divide-x-2 divide-teal-900 lg:text-xl dark:divide-stone-200">
          <a
            className="flex justify-center align-center gap-2"
            href={project.link}
            target="_blank"
          >
            Link
            <FaExternalLinkAlt className="mt-0.5" />
          </a>
          <a
            href={project.github}
            className="flex items-center justify-center align-middle pl-4"
            target="_blank"
          >
            {" "}
            Repository
            <FaGithub className="h-8 w-8 pl-2" />
          </a>
        </div>
        <button
          className="p-2 mt-4 font-bold text-stone-200 text-lg mb-4 bg-teal-700 hover:bg-teal-900 rounded-full w-48 lg:text-xl lg:w-64 lg:mt-5 dark:bg-stone-200 dark:text-teal-900 dark:hover:bg-stone-400"
          onClick={() => navigate(`/projects/${project.id}`)}
        >
          Read more
        </button>
      </div>
      <div className="basis-1/3 rounded-xl flex justify-center align-center border-8 border-slate-100 my-6 p-2 bg-slate-200 shadow-lg lg:my-8 lg:p-8 lg:pb-16">
        <Carousel images={project.images} />
      </div>
    </div>
  );
};

export default ProjectCard;
