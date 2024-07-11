import { skills } from "../../data/skills"
import SkillCard from "./SkillCard"

const Skills = () => {
    return (
        <>
            <h2 className="text-2xl font-bold">Skills</h2>
            <ul className="flex flex-wrap flex-col justify-center items-center lg:flex-row">
                {skills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
            </ul>
        </>
    )
}

export default Skills