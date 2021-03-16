import * as React from 'react';
import { NavLink } from "react-router-dom";

const Navbar: React.FC<NavbarProps> = () => {
    return(
        <nav className = "nav p-2 justify-content-end align-items-center">
            <Navlink className="py-2 mx-2 text-dark" activeClassName="py-2 mx-2 border-bottom border-dark" exact to="/">Chirps!</Navlink>
            <Navlink className="py-2 mx-2 text-dark" activeClassName="py-2 mx-2 border-bottom border-dark" exact to="/compose">Compose</Navlink>
        </nav>
    )
}
