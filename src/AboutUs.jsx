import React from 'react'
import c2 from "./resouces/circle-us.png";
import c3 from "./resouces/circle-us-phone1.png";
import MediaQuery from 'react-responsive';

function AboutUs() {
    return (
            <div className="about-us-container flex ">
                <div className=" flex  about-us-text-containter ">
                    <div className="flex">
                        <MediaQuery maxWidth={1250}>
                            <div className="circle-about flex ">
                                <img src={c3} alt="background" width="100%" />
                            </div> 
                        </MediaQuery>
                        <MediaQuery minWidth={1251}>
                            <div className="circle-about flex ">
                                <img src={c2} alt="background" width="100%" />
                            </div>
                        </MediaQuery>
                        <h1 className="  about-us-container-title color-white poppins-font">About us</h1>
                    </div>
                    <div className="about-us-paragraph-container flex flex-column">
                    <p className="about-us-paragraph poppins-font color-white">Our story began in 2004 after being founded by Luis A. Vazquez in South Florida.<br/>

                    <br/>Luis is a Senior Programmer who worked at American Express and later as a consultant for the following five years. He has been recognized as an asset for the team by developing innovative technologies for American Express around the world. Shortly after, he was inspired to create EnterTEK Solutions, Inc. whose purpose is to create advanced technologies using the latest methodologies and applying them to meet our clients’ needs. <br/>

                    <br/>  We are a software development company that offers unique solutions for prosperous outcomes fulfilling our customers’ needs right on budget. We support  companies on their growth with our experience and leveraging our IT software resources as well as design professionals. EnterTEK assists your company to drive innovation and success. 
                    </p>
                    </div>
            </div>
            <div className= "social-media-container flex justify-content-center align-items-center poppins-font">
                    <p> Copyright © 2021 EnterTEK Solutions, Inc. All rights reserved.</p>
                    
            </div>
            </div>
        
    )
}

export default AboutUs
