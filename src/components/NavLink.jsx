import { Link } from "react-router-dom"

const NavLink = ({ title, to, activePage, handleActive }) => {
    return (
        <li>
            <Link to={to} onClick={handleActive} className={`block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-stone-200 md:p-0 md:dark:hover:text-gray-400 dark:hover:bg-teal-600 dark:hover:text-white md:dark:hover:bg-transparent ${activePage === title ? 'text-blue-700 dark:text-teal-500' : 'dark:text-white'}`}>{title}</Link>
        </li>
    )
}

export default NavLink