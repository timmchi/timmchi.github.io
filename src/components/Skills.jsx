import { skills } from "../../data/skills";
import { useInView } from "react-intersection-observer";
import SkillCard from "./SkillCard";
import Header from "./Header";

const Skills = () => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: "all 1s",
        filter: inView ? "blur(0)" : "blur(5px)",
        transform: inView ? "translateY(0)" : "translateY(40%)",
      }}
      className="pb-6"
    >
      <Header text="Skills" />
      <ul className="flex flex-wrap flex-col justify-center items-center lg:flex-row">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
