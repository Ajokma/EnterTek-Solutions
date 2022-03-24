import React from 'react';
import logo from "./resouces/enterte.png"
import {NavLink} from 'react-router-dom'

function NavBar({scrollNav}) {
    
    return (
        <div className={scrollNav?("navbar-container background-scroll "):("navbar-container ")}>
            <div className="flex justify-content-around ">
                <NavLink to="/EnterTek-Solutions"><img height="25px" src={logo}alt="entertek-logo" /></NavLink>
                <ul className="flex navbar poppins-font">
                    <li> 
                        <NavLink className="navbar-options color-white text-decoration-none" to="/about">About us</NavLink> 
                    </li>
                    <li>
                        <NavLink className="navbar-options color-white text-decoration-none" to="/EnterTek-Solutions/:services-desktop">Services</NavLink></li>
                    <li> <a className="navbar-options color-white text-decoration-none" href="#contact">Industries</a></li>
                    <li>
                        <NavLink className="navbar-options color-white text-decoration-none" to="/EnterTek-Solutions/:services-desktop">Blog</NavLink></li>
                    <li> <a className="navbar-options color-white text-decoration-none" href="#contact">Contact</a></li>
                    <select className="navbar-options poppins-font color-white select " >
                        <option value="">English</option>
                        <option value="">Español</option>
                    </select>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
