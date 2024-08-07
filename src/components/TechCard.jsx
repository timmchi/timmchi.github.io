const TechCard = ({ techName }) => {
  return (
    <li className="bg-teal-700 bg-opacity-70 py-[4px] text-stone-200 font-bold px-1 rounded-lg dark:bg-stone-200 dark:text-teal-900">
      {techName}
    </li>
  );
};

export default TechCard;
