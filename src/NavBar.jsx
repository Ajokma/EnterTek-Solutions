import React from 'react';

function NavBar({scrollNav}) {
    
    return (
        <div className={scrollNav?("navbar-container background-scroll "):("navbar-container ")}>
            <div className="flex justify-content-around ">
                <a href="#intro"><img height="25px" src="/resouces/enterte.png"alt="entertek-logo" /></a>
                <ul className="flex navbar poppins-font">
                    <li> <a className="navbar-options color-white text-decoration-none" href="#about-us">About us</a> </li>
                    <li><a className="navbar-options color-white text-decoration-none" href="#services-desktop">Services</a></li>
                    <li> <a className="navbar-options color-white text-decoration-none" href="#contact-us">Contact</a></li>
                    <select className="navbar-options poppins-font color-white select  " >
                        <option value="">English</option>
                        <option value="">Español</option>
                    </select>
                </ul>
            </div>


        </div>
    )
}

export default NavBar
