import React from 'react';
import Typewriter from 'typewriter-effect';
import MediaQuery from 'react-responsive';
import back from "./resouces/esfera3.png";
import backPhone from "./resouces/esfera-phone3.png";

function Header() {
    return (
        <div>
            <div className=" header-container  z-index-10 "> 
            <div className="medida-full flex flex-column">
            <MediaQuery maxWidth={1050}>
                <div className="circle-container flex ">
                    <img src={backPhone} alt="background" width="100%" />
                </div> 
            </MediaQuery>
            <MediaQuery minWidth={1051}>
                <div className="circle-container flex ">
                    <img src={back} alt="background" width="100%" />
                </div>
            </MediaQuery>
            
            <div className="circle-animated-containter" >
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="circle-4"></div>
                <div className="circle-5"></div>
            </div>
            <div className="text-slogan-container flex ">
                <p className="poppins-font txt-slogan">  We are 
                    <span className="span-slogan">
                        <Typewriter
                        options={{
                            strings: ['creative', ' innovative','EnterTEK Solutions'],
                            autoStart: true,
                            loop: true,
                            pauseFor:2000
                        }}
                        />
                    </span>
                </p>
                
                <button className="button poppins-font " ><a className="text-decoration-none" href="#contact">Contact us</a></button> 
            </div>
            </div>
            </div>
        </div>
    )
}

export default Header

