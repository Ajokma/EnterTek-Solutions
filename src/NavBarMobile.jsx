import React,{ useState } from 'react'

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
                    <li onClick={showMenuOption} > <a className="navbar-options color-white text-decoration-none" href="#services-mobile">Services</a></li>
                    <li onClick={showMenuOption} > <a className="navbar-options color-white text-decoration-none" href="#contact-us">Contact</a></li>
                </ul>
            </div>
        )
    };

    return (
        <div className={scrollNav?("navbar-container flex background-scroll "):("navbar-container flex ")}>
            <a href="#intro"> <img height="14px" src="/resouces/enterte.png"alt="entertek-logo" /> </a>
            <select className="navbar-options poppins-font color-white select " >
                <option value="">English</option>
                <option value="">Español</option>
            </select> 
            <button className="btn-menu" onClick={menuShow}>{menu?(<img className="icon-menu" height="20px" src="/resouces/icons/close-menu.png"alt="" />):(<img className="icon-menu" height="26px" src="/resouces/icons/menu.png"alt="" />)} </button>
            {menu?(OptionsMenu()):(<></>)}
        </div>
    )
    
}

export default NavBarMobile



