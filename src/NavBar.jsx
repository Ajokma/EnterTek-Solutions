import React from 'react';
import logo from "./resouces/enterte.png"
import {NavLink} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

function NavBar({scrollNav}) {
    return (
        <div className={scrollNav?("navbar-container background-scroll "):("navbar-container ")}>
            <div className="flex justify-content-around ">
                <NavLink to="/"><img height="25px" src={logo}alt="entertek-logo" /></NavLink>
                <ul className="flex navbar poppins-font">
                    <li> 
                        <NavLink className="navbar-options color-white text-decoration-none" to="/about">About us</NavLink>  
                    </li>
                    <li> 
                        <Link className="navbar-options color-white text-decoration-none" to="/#services-desktop">Services</Link>
                        {/* <NavLink className="navbar-options color-white text-decoration-none" to="/#services-desktop">Services</NavLink> */}
                        {/* <a className="navbar-options color-white text-decoration-none" href="./#services-desktop">Services</a> */}
                        </li>
                   
                    <li> <a className="navbar-options color-white text-decoration-none" href="/#contact">Contact</a></li>
                    {/* <select className="navbar-options poppins-font color-white select " >
                        <option value="">English</option>
                        <option value="">Español</option>
                    </select> */}
                </ul>
            </div>
        </div>
    )
}

export default NavBar
