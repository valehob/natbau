import * as React from "react" 
import { Link } from "gatsby"

const Navbar = (props) => {
  return(
    <nav className="bg-white border-gray-200 z-10">
      <div className="w-screen flex flex-wrap items-center justify-between mx-auto px-4 absolute top-0 left-0 bg-white">
        <a href="/#" className="flex items-center">
        {props.logo}
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Natbau</span>
        </a>
        <div className="w-auto block" id="navbar-default">
          <ul className="font-medium flex p-4 rounded-lg">
            <li>
              <Link to="/" activeClassName="text-black border-b-2"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">
                Home
              </Link>
            </li>
            <li>
            <Link to="/about-us" activeClassName="text-black border-b-2"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">
                Über uns
              </Link>
            </li>
            <li>
            <Link to="/leistungen" activeClassName="text-black border-b-2"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">
                Leistungen
              </Link>
            </li>
            <li>
            <Link to="/projekte" activeClassName="text-black border-b-2"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">
                Projekte
              </Link>
            </li>
            <li>
            <Link to="/kontakt" activeClassName="text-black border-b-2"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar