import React from 'react';
import Wave from "react-wavify";
import ReactPlayer from 'react-player';
import video from "./resouces/vid-13.mp4"

function Header() {
    return (
        <div>
            <div id="intro"className="p-absolute header-container z-index-10 ">
                <div className="black"></div>
                <div className="video-contenedor ">
                <ReactPlayer
                    url={video}
                    width="100%"
                    height="100"
                    playing
                    muted
                    loop
                />
                </div>
                <div className="black"></div>
            </div>
            
            <div className="header-container flex flex-column">
                <h1 className="poppins-font txt-slogan">Innovation is always present at EnterTEK </h1>
                <button className="button poppins-font " ><a className="text-decoration-none" href="#contact">Contact us</a></button> 
            </div>
           <div>
                <Wave className="wave"
                fill="white"
                paused={false}
                options={{
                    height:49,
                    amplitude: 80,
                    speed: 0.18,
                    points:2
                }}
                />
            </div>
            
          
           
            
        </div>
    )
}

export default Header

