const IMAGE_PLACEHOLDER = 'https://pbs.twimg.com/profile_images/1534365794074755073/ClZmdMG8_400x400.jpg'

const SkillCard = ({ skill }) => {
    return (
        <li className="flex text-white font-bold bg-slate-700 w-56 mx-4 mb-2 rounded">
            <img src={IMAGE_PLACEHOLDER} alt="skill logo" width="70" height="70" />
            <p>{skill.name}</p>
        </li>
    )
}

export default SkillCard