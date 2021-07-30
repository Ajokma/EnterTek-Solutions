import React from 'react';
import video from "./resouces/vide.mp4"
import w1 from "./resouces/w1.png"
import w2 from "./resouces/w2.png"
import w3 from "./resouces/w3.png"

function Header() {
    return (
        <div>
            <div id="intro"className="p-absolute header-container gradient-header  ">
                <div className="black"></div>
                <div className="video-contenedor">
                <video autoplay loop muted className="video"  >
                        <source autoplay src="" type="video/mp4"  />
                        tu video no es compatible
                </video>
                </div>
            </div>
            <div className="header-container flex flex-column">
                <h1 className="poppins-font txt-slogan">Innovation is always present at EnterTEK </h1>
                <button className="button poppins-font " ><a className="text-decoration-none" href="#contact">Contact us</a></button> 
            </div>
            <div >
            
                <div className="line-3">
                    <img className="waves wave3" src={w3} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Header
