import React from 'react'
import About from "./resouces/about.png"
import p1 from "./resouces/p1.png"
import p2 from "./resouces/p2.png"
import p3 from "./resouces/p3.png"

function AboutUs() {
    return (
            <div className="about-us-container flex ">
                <div className=" flex about-us-text-containter ">
                    <div className="flex flex-column">
                        <h1 className=" title-section color-white poppins-font">About us</h1>
                        <img src={About} alt="" />
                    </div>
                    <div className="about-us-paragraph-container flex flex-column">
                    <p className="about-us-paragraph poppins-font color-white"> 
                    Entertek began in 2004 as a software development company that offers unique solutions for prosperous outcomes fulfilling our customers’ needs right on budget. We support companies on their growth with our experience and leveraging our IT software resources as well as design professionals. EnterTEK assists your company to drive innovation and success.<br/>

                    <br/>MISSION :Our mission is to help companies accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation.  Enterteks’ core belief is innovation, creativity,flexibility and a team development skilled to reach the goal which entails us globally.<br/>

                    <br/> <span className='bold-text'>VISION:</span> Our vision is to become the most competitive and trusted  software development company.
                    </p>
                    </div>
            </div>
            <h1 className=" title-section margin-bottom-55 color-white poppins-font">Our team</h1>
            <div className='flex'>
                        <div className='personas-img '>
                            <img width={415} src={p3} alt="" />
                            <div className=' flex flex-column poppins-font color-white'>
                                <h1>Luis Vazquez</h1>
                                <p>CEO USA</p>
                            </div>
                        </div>
                        <div className='personas-img '>
                            <img width={415} src={p1} alt="" />
                            <div className=' flex flex-column poppins-font color-white'>
                                <h1>Tomas Marty</h1>
                                <p>CEO EUROPE</p>
                            </div>
                        </div>
                        <div className='personas-img '>
                            <img width={415} src={p2} alt="" />
                            <div className=' flex flex-column poppins-font color-white'>
                                <h1>Sandra de la Rosa </h1>
                                <p>COUNTRY MANAGER IBERIA</p>
                            </div>
                        </div>
                    </div>
                    <h1 className=" title-section color-white poppins-font margin-top-150 margin-bottom-100" >+50 Coworkers</h1>
            
            <div className= "social-media-container flex justify-content-center align-items-center poppins-font">
                    <p> Copyright © 2021 EnterTEK Solutions, Inc. All rights reserved.</p>
                    
            </div>
            </div>
    )
}

export default AboutUs
