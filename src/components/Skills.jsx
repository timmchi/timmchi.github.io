import { skills } from "../../data/skills"
import SkillCard from "./SkillCard"
import Header from "./Header"

const Skills = () => {
    return (
        <div className="pb-6">
            <Header text="Skills" />
            <ul className="flex flex-wrap flex-col justify-center items-center lg:flex-row">
                {skills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
            </ul>
        </div>
    )
}

export default Skills