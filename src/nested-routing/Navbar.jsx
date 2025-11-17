import React, { useState } from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <nav>
            {/* logo */}

            <NavLink to='/' className="logo">

                Mywebsite
           </NavLink>

            {/* hamburger menu icon */}


            <div className='menu-icon' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>

            </div>

            {/* nav links */}

            <ul className={menuOpen ? "show" : ""}>
                {/* Home */}


                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                </li>

                {/* about */}
                <li>
                    <NavLink
                        to='/about' className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </NavLink>


                </li>

                {/* services */}
                
                    <NavLink
                        to='/services' className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >
                       services
                    </NavLink>

            </ul>

        </nav>
    )
}

export default Navbar