import React from 'react';
import Wave from "react-wavify";
import video from "./resouces/vide.mp4"

function Header() {
    return (
        <div>
            <div id="intro"className="p-absolute header-container gradient-header  ">
                <div className="clip-path gradient-header"></div>
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
            <Wave className="wave3"
            fill="black"
            paused={false}
            options={{
                height: 25,
                amplitude: 60,
                speed: 0.20,
                points: 7
              }}
            />
              <Wave className="wave2"
            fill="white"
            paused={false}
            options={{
                height: 55,
                amplitude: 60,
                speed: 0.20,
                points: 3
              }}
            />
            <Wave className="wave"
            fill="white"
            paused={false}
            options={{
                height: 35,
                amplitude: 50,
                speed: 0.25,
                points: 5
              }}
            />
          
           
            
        </div>
    )
}

export default Header

