import React from "react"
import { Link } from "react-router-dom"

const NavList = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="aboutus">Aboutus</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavList
