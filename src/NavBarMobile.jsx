import React,{ useState } from 'react'
import logo from "./resouces/enterte.png"
import menuHamb from "./resouces/icons/menu.png"
import closeMenuHamb from "./resouces/icons/close-menu.png"

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
                    <li onClick={showMenuOption}> <a className="navbar-options color-white text-decoration-none" href="#about-us">About us</a></li>
                    <li onClick={showMenuOption} ><a className="navbar-options color-white text-decoration-none" href="#services-mobile">Services</a></li>
                    <li onClick={showMenuOption} ><a className="navbar-options color-white text-decoration-none" href="#contact">Contact</a></li>
                </ul>
            </div>
        )
    };

    return (
        <div className={scrollNav?("navbar-container flex background-scroll "):("navbar-container flex ")}>
            <a href="#intro"> <img height="14px" src={logo}alt="entertek-logo" /> </a>
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



