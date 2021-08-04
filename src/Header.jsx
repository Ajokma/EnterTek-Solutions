import React from 'react';
import Wave from "react-wavify";
import ReactPlayer from 'react-player';
import MediaQuery from 'react-responsive'
import video from "./resouces/vide-122.mp4";
import videoMobile from "./resouces/vide-122-mobile.mp4"
import videoIpad from "./resouces/vide-122-ipad.mp4";
import videoImg from "./resouces/video-img.png";
import videoImgMobile from "./resouces/video-img-mobile.png"
import Typewriter from 'typewriter-effect';



function Header() {
    return (
        <div>
            <div id="intro"className="p-absolute header-container gradient-header z-index-10 ">
                <div className="black"></div> 
                <MediaQuery maxWidth={650}>
                    <div className="video-contenedor">
                    <ReactPlayer  className="video-mobile"
                        url={videoMobile}
                        width="120%"
                        height="120%"
                        playing
                        muted
                        loop
                        onBuffer={videoImgMobile}
                    />
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={651} maxWidth={1050}>
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
                                onBuffer={videoImg}
                            />
                    </div>
                </MediaQuery> 
            </div>
            <div className="header-container flex flex-column">
                <div className="flex">
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
                </div>
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

