import React from 'react';
import Wave from "react-wavify";
import ReactPlayer from 'react-player';
import MediaQuery from 'react-responsive'
import video from "./resouces/vide-122.mp4";
import videoMobile from "./resouces/vide-122-mobile.mp4"
import videoIpad from "./resouces/vide-122-ipad.mp4"

function Header() {
    return (
        <div>
            <div id="intro"className="p-absolute header-container gradient-header z-index-10 ">
                <div className="black"></div> 
                <MediaQuery maxWidth={650}>
                    <div className="video-contenedor">
                    <ReactPlayer  className="video-mobile"
                        url={videoMobile}
                        width="100%"
                        height="100"
                        playing
                        muted
                        loop
                    />
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={1050}>
                    <div className="video-contenedor">
                        <ReactPlayer
                                url={videoIpad}
                                width="100%"
                                height="100"
                                playing
                                muted
                                loop
                                rewind
                            />
                    </div>
                </MediaQuery> 
               <MediaQuery minWidth={1051}>
                    <div className="video-contenedor">
                        <ReactPlayer
                                url={video}
                                width="100%"
                                height="100"
                                playing
                                muted
                                loop
                                rewind
                            />
                    </div>
                </MediaQuery> 
            </div>
            <div className="header-container flex flex-column">
                <h1 className="poppins-font txt-slogan">EnterTEK is <span className="span-slogan">innovation</span></h1>
                <button className="button poppins-font " ><a className="text-decoration-none" href="#contact">Contact us</a></button> 
            </div>
           <div>
           <MediaQuery maxWidth={1050}>
                <Wave 
                    className="wave"
                    fill="#221E3F"
                    paused={false}
                    options={{
                        height:59,
                        amplitude: 40,
                        speed: 0.18,
                        points:2
                    }}
                />
           </MediaQuery>
                <MediaQuery minWidth={1052}>
                    <Wave 
                            className="wave-2 "
                            fill="#221E3F"
                            paused={false}
                            options={{
                                height:59,
                                amplitude: 120,
                                speed: 0.21,
                                points:3
                            }}
                        />
                    <Wave 
                        className="wave "
                        fill="#221E3F"
                        paused={false}
                        options={{
                            height:39,
                            amplitude: 80,
                            speed: 0.29,
                            points:2
                        }}
                    />
                </MediaQuery>
                
            </div>
            
          
           
            
        </div>
    )
}

export default Header

