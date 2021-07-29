import React from 'react'
import cruz from "./resouces/cruz.png"
import rueda from "./resouces/rueda.png"

function Header() {
    return (
        <div>
            <div id="intro"className="p-absolute header-container gradient-header  ">
                <div className="black"></div> 
                <img className="svg1-header" src={cruz} alt="rueda" />
                <img className="svg4-header" src={rueda} alt="cruz" />
                <img className="svg2-header" src={cruz} alt="rueda" />
                <img className="svg3-header" src={rueda} alt="" />
            </div>
            <div className="header-container flex flex-column">
                <h1 className="poppins-font txt-slogan">Innovation is always present at EnterTEK </h1>
                <button className="button poppins-font " ><a className="text-decoration-none" href="#contact">Contact us</a></button> 
            </div>
            <svg className="p-absolute z-index-10 " viewBox="0 0 1300 300">
                <path className="anm" d="
                    M0,192
                    C220,100,440,100,560,192
                    C780,290,1100,290,1320,192
                    L1120 100
                    L0 100
                    " fill="white"
                />
                <path className="anm-1  " opacity="0.1" d="
                    M0,192
                    C220,100,440,100,660,192
                    C880,290,1100,290,1320,192
                    L1320 100
                    L0 100
                    " fill="white"
                />
                <path className="anm-2" opacity="0.1" d="
                    M0,192
                    C220,100,440,100,660,192
                    C880,290,1100,290,1320,192
                    L1320 100
                    L0 100
                    " fill="white"/>
                <path className="anm-3" opacity="0.1" d="
                    M0,192
                    C220,100,440,100,660,192
                    C880,290,1100,290,1320,192
                    L1320 100
                    L0 100
                    " fill="#fff"
                />
            </svg>



         
        </div>
    )
}

export default Header
