import React,{ useState } from 'react'
import logo from "./resouces/enterte.png"
import menuHamb from "./resouces/icons/menu.png"
import closeMenuHamb from "./resouces/icons/close-menu.png"
import {NavLink} from 'react-router-dom'

function NavBarMobile({scrollNav}) {
    const [menu, setMenu] = useState(false);
    const menuShow =()=>{
        setMenu(!menu)
    };
    const showMenuOption =()=>{
        setMenu(!menu)
    }
    function OptionsMenu() {
        return (
            <div className="option-menu-container">
                <ul className="flex flex-column navbar poppins-font">
                    <li onClick={showMenuOption}>
                        <NavLink className="navbar-options color-white text-decoration-none" to="/EnterTek-Solutions/about">About us</NavLink>
                    </li>
                    <li onClick={showMenuOption} >
                        <NavLink className="navbar-options color-white text-decoration-none" to="/EnterTek-Solutions/:services-desktop">Services</NavLink>

                    </li>
                    <li onClick={showMenuOption} >
                    <NavLink className="navbar-options color-white text-decoration-none" to="/EnterTek-Solutions/:services-desktop">Contact</NavLink>
                    </li>
                </ul>
            </div>
        )
    };

    return (
        <div className={scrollNav?("navbar-container flex background-scroll "):("navbar-container flex ")}>
            <NavLink to="/EnterTek-Solutions"><img height="14px" src={logo}alt="entertek-logo" /></NavLink>
            <select className="navbar-options poppins-font color-white select " >
                <option value="">English</option>
                <option value="">Español</option>
            </select> 
            <button className="btn-menu" onClick={menuShow}>{menu?(<img className="icon-menu" height="20px" src={closeMenuHamb}alt="" />):(<img className="icon-menu" height="26px" src={menuHamb}alt="" />)} </button>
            {menu?(OptionsMenu()):(<></>)}
        </div>
    )
    
}

export default NavBarMobile



