import React from "react"

import logo from "../logo.svg"
import NavbarStyle from "./navbar.module.css"
import { Link } from "react-router-dom"

const NavBar: React.FC = () => {
    return <div className={NavbarStyle.navbar}>
        <Link className={NavbarStyle.stories} to="/stories">Stories</Link>
        <Link className={NavbarStyle.stories} to="/interviews">Interviews</Link>
        <img className={NavbarStyle.logo} src={logo} alt="4dm2023-logo"/>
        <Link className={NavbarStyle.stories} to="/opinions">Opinions</Link>
        <a className={NavbarStyle.stories} href="https://4digitmwc.github.io/skillban-articles/">Skillbans</a>
    </div>
}

export default NavBar
