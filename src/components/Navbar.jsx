import { useState } from "react"
import { Link } from "react-router-dom"
import NavLink from "./NavLink"

const NavBar = () => {

    const [open, setOpen] = useState(false)
    const [activePage, setActivePage] = useState('')

    return (
    <nav className="bg-white dark:bg-teal-800 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://avatars.githubusercontent.com/u/121810686?v=4" className="h-8" alt="Timmchi avatar" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Timmchi</span>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={open}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                <ul className="font-bold text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-teal-800 md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0 md:ml-96 md:pl-96">
                    <NavLink to="/" title="Home" activePage={activePage} handleActive={() => setActivePage('Home')} />
                    <NavLink to="/about" title="About" activePage={activePage} handleActive={() => setActivePage('About')} />
                    <NavLink to="/projects" title="Projects" activePage={activePage} handleActive={() => setActivePage('Projects')} />
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar