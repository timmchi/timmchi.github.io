const SkillCard = ({ skill }) => {
  return (
    <li className="flex items-center text-stone-200 font-bold bg-teal-700 w-2/3 lg:w-72 mx-4 mb-2 rounded shadow-lg hover:scale-105">
      <div className="bg-white">
        <img src={skill.image} alt="skill logo" width="70" height="70" />
      </div>
      <p className="text-2xl flex-grow text-center">{skill.name}</p>
    </li>
  );
};

export default SkillCard;
