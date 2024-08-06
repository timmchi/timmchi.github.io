import { useInView } from "react-intersection-observer";
import { projects } from "../../data/projectData";
import ProjectCard from "./ProjectCard";
import Header from "./Header";

const ProjectsList = () => {
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
    >
      <Header text="Projects" />
      <ul role="list" className="flex flex-col items-center justify-center">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
