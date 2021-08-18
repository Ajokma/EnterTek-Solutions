import React from 'react'
import world from "./resouces/world-1.png";
import{ Parallax} from "react-parallax";
import fb from "./resouces/icons/facebook.png";
import Linkedin from "./resouces/icons/linkedin.png";
import tw from "./resouces/icons/twitter.png";
import MediaQuery from 'react-responsive';
import worldMobile from "./resouces/world-mobile.png";

function AboutUs() {
    return (
        <>
            <div className="about-us-container flex ">
            <MediaQuery maxWidth={1250}>
                <div className=" flex flex-column">
                    <img src={worldMobile} className="img-about-mobile" alt="" />
                    <h1 className="  about-us-container-title color-white poppins-font">About us</h1>
                    <button className="button poppins-font btn-video " ><a className="text-decoration-none" href="#contact">Watch video</a></button> 
                </div>
            </MediaQuery >
            <MediaQuery minWidth={1252}>
                <Parallax className="parallax-container"  bgImage={world} strength={500}>
                    <div className=" flex flex-column">
                        <h1 className="  about-us-container-title color-white poppins-font">About us</h1>
                        <button className="button poppins-font btn-video " ><a className="text-decoration-none" href="#contact">Watch video</a></button> 
                    </div>
                </Parallax>
            </MediaQuery>
                <p className="about-us-paragraph poppins-font color-white">Our story began in 2004 after being founded by Luis A. Vazquez in South Florida.<br/>

                <br/>Luis is a Senior Programmer who worked at American Express and later as a consultant for the following five years. He has been recognized as an asset for the team by developing innovative technologies for American Express around the world. Shortly after, he was inspired to create EnterTEK Solutions, Inc. whose purpose is to create advanced technologies using the latest methodologies and applying them to meet our clients’ needs. <br/>

                <br/>  We are a software development company that offers unique solutions for prosperous outcomes fulfilling our customers’ needs right on budget. We support  companies on their growth with our experience and leveraging our IT software resources as well as design professionals. EnterTEK assists your company to drive innovation and success. 
                </p>
            </div>
            <div className= "social-media-container flex justify-content-btw align-items-center poppins-font">
                    <p> Entertek solutions.</p>
                    <div >
                        <img className="margin-right-24px" width="25px" src={fb} alt="facebook" />
                        <img className="margin-right-24px" width="25px"  src={tw}alt="twitter" />
                        <img width="25px"  src={Linkedin} alt="linkedin" />
                    </div> 
                </div>
        </>
    )
}

export default AboutUs
