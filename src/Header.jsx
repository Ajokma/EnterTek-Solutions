import React from 'react';
import video from "./resouces/vide.mp4"

function Header() {
    return (
        <div>
            <div id="intro"className="p-absolute header-container gradient-header  ">
                <div className="black"></div>
                <div className="video-contenedor">
                <video autoplay loop muted className="video"  >
                        <source src="" type="video/mp4"  />
                        tu video no es compatible
                </video>
                </div>
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
                    " 
                />
                <path className="anm-1  " opacity="0.1" d="
                    M0,192
                    C220,100,440,100,660,192
                    C880,290,1100,290,1320,192
                    L1320 100
                    L0 100
                    " 
                />
                <path className="anm-2" opacity="0.1" d="
                    M0,192
                    C220,100,440,100,660,192
                    C880,290,1100,290,1320,192
                    L1320 100
                    L0 100
                    " /* fill="white" *//>
                <path className="anm-3" opacity="0.1" d="
                    M0,192
                    C220,100,440,100,660,192
                    C880,290,1100,290,1320,192
                    L1320 100
                    L0 100
                    " 
                />
            </svg>



         
        </div>
    )
}

export default Header
