import React from 'react';
import Typewriter from 'typewriter-effect';
import MediaQuery from 'react-responsive';
import back from "./resouces/esfera3svg.svg";
import backPhone from "./resouces/esfera-phone3.png";
import {ScrollContainer} from "react-scroll-motion"

function Header() {
    return (
        <div>
            <div className=" header-container"> 
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
                        <div className="poppins-font txt-slogan">  Driven by 
                            <span className="span-slogan">
                                <Typewriter
                                options={{
                                    strings: [' innovation'],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor:2000
                                }}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollContainer >
                            <div className='flex p-container-data-circle flex-center'>
                            
                                <div className='circle-data-purplue flex flex-column p-2-data-circle'>
                                <h2 className='title-circle-data'>3</h2>
                                    <p className='subtitle-circle-data'>Offices around <br/>the world</p>
                                </div>
                                <div className='circle-data-blue flex flex-column'>
                                <h2 className='title-circle-data'>+20</h2>
                                    <p className='subtitle-circle-data'>Years in the market</p>
                                </div>
                                <div className='circle-data-purplue p-3-data-circle flex flex-column'>
                                <h2 className='title-circle-data'>+16</h2>
                                    <p className='subtitle-circle-data'>Awards</p>
                                </div>
                            
                            </div>
            </ScrollContainer>
        </div>
    )
}

export default Header

