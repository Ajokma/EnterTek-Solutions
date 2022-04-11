import React from 'react'
import About from "./resouces/about.png"
import p1 from "./resouces/p1-1.png"
import p2 from "./resouces/p2-1.png"

function AboutUs() {
    return (
            <div className="about-us-container flex ">
                <div className=" flex about-us-text-containter ">
                    <div className="flex flex-column">
                        <h1 className=" title-section color-white poppins-font">About us</h1>
                        <img className='img-about' src={About} alt="" />
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
            <div className='flex container-img-team'>

                <div className="team-personas">
                    <div className=' flex flex-column'>
                        <h1 className='color-white poppins-font margin-top-75'>Luis Vazquez</h1>
                        <h2 className="color-white poppins-font sub-title-personas-teams">CEO USA</h2>
                        <p className="color-white poppins-font par-personas-teams margin-top-75">Luis is a Senior Programmer who worked at American Express and later as a consultant for the following five years. He has been recognized as an asset for the team by developing innovative technologies for American Express around the world. Shortly after, he was inspired to create EnterTEK Solutions, Inc. whose purpose is to create advanced technologies using the latest methodologies and applying them to meet our clients’ needs. </p>
                    </div>
                </div>
                <div className="team-personas ">
                    
                    <div className=' flex flex-column p-text-team'>
                        <h1 className='color-white poppins-font margin-top-75'>Tomas Marty</h1>
                        <h2 className="color-white poppins-font sub-title-personas-teams">CEO EUROPE</h2>
                        <p className="color-white poppins-font par-personas-teams margin-top-75">As a digital geek, I have been on the road to mastering FinTech and Blockchain since its early days. The innovative solutions and initiatives my teams develop are a direct result of combining our creative minds with my obsession with integrating the most advanced technologies, exposure to various cultures, and 9+ years' experience in sales and business management.</p>
                    </div>
                    <img className='img-team-persona' src={p1} alt="" />
                   
                </div>
                <div className="team-personas">
                <div className=' flex flex-column p-text-team'>
                    <h1 className='color-white poppins-font margin-top-75'>Sandra De La Rosa</h1>
                    <h2 className="color-white poppins-font sub-title-personas-teams">COUNTRY MANAGER IBERIA</h2>
                    <p className="color-white poppins-font par-personas-teams margin-top-75" > Fintech native with more than 10 years working in digital environments, Sandra has gained international experience in Startups, Business Development, Partnerships and Market Launch. Expert in Communication, her career goes through learning in the relationship with the client (B2B and B2C), user experience and operational excellence in a fast-paced environment. Sandra is particularly attracted to innovation, business synergies, new challenges and growth towards sustainable business models.</p>
                    </div>
                    <img className='img-team-persona' src={p2} alt="" />
                </div>
                    
            </div>
                    <h1 className=" coworkers color-white poppins-font margin-top-150 margin-bottom-100" >+50 Coworkers</h1>
            
            <div className= "social-media-container flex justify-content-center align-items-center poppins-font">
                    <p> Copyright © 2021 EnterTEK Solutions, Inc. All rights reserved.</p>
                    
            </div>
            </div>
    )
}

export default AboutUs
