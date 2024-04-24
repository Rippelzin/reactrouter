import React, {useState} from "react";

import { Link, NavLink } from "react-router-dom";
import style from "../styles/Navbar.module.css"

const Navbar= () => {

const [menuOpen, setMenuOpen] = useState(false)

    return(
        <nav>
            <Link to={"/"} className={style.title}>
                Up to 0.95
            </Link>
            <div className={style.menu} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? style.open : ""} >
                <li>
                    <NavLink to={'/contact'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/world'}>World</NavLink>
                </li>
                <li>
                <NavLink to={'/login'}>Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar