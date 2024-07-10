import { skills } from "../../data/skills"
import SkillCard from "./SkillCard"

const Skills = () => {
    return (
        <>
            <h2 className="text-2xl font-bold">Skills</h2>
            <ul>
                {skills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
            </ul>
        </>
    )
}

export default Skills