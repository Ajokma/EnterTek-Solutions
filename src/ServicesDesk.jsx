import React from 'react';
import ai from "./resouces/icons/ai.png";
import productDesign from "./resouces/icons/product-design.png"
import customSoftware from "./resouces/icons/custom-software.png"
import financial from "./resouces/icons/financial.png"
import ux from "./resouces/icons/ux-ui.png"
import data from "./resouces/icons/data.png"
import fintech from "./resouces/icons/fintech.png"
import cloud from "./resouces/icons/cloud.png"
import infra from "./resouces/icons/infrastructure.png"
import crypto from "./resouces/icons/cryptocurrency.png"

function ServicesDesk() {
    return (
        <section className="z-index-300">
            <div className="circle-services-blur"></div>
            <div className="services-desktop-container">
                <h1 className=" color-white title-section poppins-font flex flex-column margin-bottom-55">Services</h1>
                <div className="flex service-container ">
                    <div className=" flex margin-right-24px flex-column">
                        <div className="card-services-container flex flex-column">
                            <img className="icon-card"  src={productDesign} alt="product design" />
                            <h1 className="poppins-font title-card">Product Design</h1>
                            <p className="poppins-font paragraph-card">EnterTEK recognizes the clients’ needs and originates solutions by making 
                                unique designs. First, we acknowledge the client’s need by a decision-making process that allows us to define the 
                                task in hand and understand the necessary steps that must be implemented before starting to work. Our highly experienced 
                                team focuses on such steps and with their creativity they design the perfect product outcome. Our unique designs are 
                                implemented at an effective rate and at a competitive price.
                            </p>
                        </div>
                        <div className="card-services-container flex flex-column">
                            <img className="icon-card"  src={ux} alt="product design" />
                            <h1 className="poppins-font title-card">UI / UX</h1>
                            <p className="poppins-font paragraph-card">EnterTEK offers UI/UX unique and modern designs. By creating efficient products, 
                                we can meet the user’s specific needs and develop solutions that relate to the objectives of the business. The UX design 
                                is related to the User Centered design schema that is created by our experienced team. These designs can be optimized across 
                                different platforms such as tablets, web, and mobile devices. With User interface we use many visual elements (screens and pages) 
                                that allow the interaction with the product or service to run as intended. 
                            </p>
                        </div>
                        <div className="card-services-container flex flex-column">
                            <img className="icon-card"  src={fintech} alt="Fintech" />
                            <h1 className="poppins-font title-card">Fintech</h1>
                            <p className="poppins-font paragraph-card">We provide custom software solutions and related services to financial and fintech organizations, 
                            including banks, credit unions, and all types of enterprises that look to establish effective, digitally-enabled financial processes.
                            </p>
                        </div>
                    </div>

                    <div className=" flex margin-right-24px flex-column">
                        <div className="card-services-container flex flex-column">
                            <img className="icon-card"  src={customSoftware} alt="Custom Software Development" />
                            <h1 className="poppins-font title-card">Custom Software Development</h1>
                            <p className="poppins-font paragraph-card">EnterTEK is composed by a team of experienced project managers, full stack developers, backend developers, 
                                SQL developers, UI/UX designers, and more. Depending on the client’s request, 
                                we can initiate the project and transform those deliverables into long lasting and 
                                effective results. 
                            </p>
                        </div>
                        <div className="card-services-container flex flex-column">
                            <img className="icon-card"  src={ai} alt="Artificial Intelligence" />
                            <h1 className="poppins-font title-card">Artificial Intelligence</h1>
                            <p className="poppins-font paragraph-card">EnterTEK utilizes AI in a unique approach to further 
                                develop solutions to our customers. We program and develop systems that think and act rationally 
                                like visual perceptions, voice recognition, language translations and problem solving applications. 
                                This is done based on the analysis of real time data and programmed algorithms. The decision making 
                                process is achieved by state of the art technology without human intervention. 
                            </p>
                        </div>
                        <div className="card-services-container flex flex-column">
                            <img className="icon-card"  src={cloud} alt="cloud" />
                            <h1 className="poppins-font title-card">Cloud</h1>
                            <p className="poppins-font paragraph-card">We work with Amazon Web Services (AWS), Microsoft Azure, 
                            IBM Cloud, Oracle Cloud Infrastructure (OCI) and more. 
                            </p>
                        </div>
                    </div>

                    <div className=" flex  flex-column">
                        <div className="card-services-container flex flex-column">
                            <img className="icon-card"  src={financial} alt="Company Control Financial Dashboards" />
                            <h1 className="poppins-font title-card">Company Control Financial Dashboards</h1>
                            <p className="poppins-font paragraph-card">Helping Chief Financial Officer analyze data and make accurate decisions. 
                            </p>
                        </div>
                        <div className="card-services-container flex flex-column">
                            <img className="icon-card"  src={data} alt="Data & Analytics" />
                            <h1 className="poppins-font title-card">Data & Analytics</h1>
                            <p className="poppins-font paragraph-card">Data Analytics is an important discipline in technology that involves the inspection 
                                of data and transforming it into useful information for decision-making. Our team has vast experience in projects that involve data 
                                processing and formatting. We can predict a specific trend through analytics and implement business processes to improve overall results.  
                            </p>
                        </div>
                        <div className="card-services-container flex flex-column">
                            <img className="icon-card"  src={infra} alt="Infrastructure" />
                            <h1 className="poppins-font title-card">Infrastructure</h1>
                            <p className="poppins-font paragraph-card">We operate different technologies and define the specific infrastructure that is useful for each client. 
                            </p>
                        </div>
                        <div className="card-services-container flex flex-column">
                            <img className="icon-card"  src={crypto} alt="Blockchain & Cryptocurrency" />
                            <h1 className="poppins-font title-card">Blockchain & Cryptocurrency</h1>
                            <p className="poppins-font paragraph-card">We develop, maintain and evaluate blockchain and cryptocurrency related products and web services and 
                                provide long-term assistance and advice on related technological and operational matters for our customers worldwide.
                            </p>
                        </div>
                    </div>
                        
                    
                </div>
            </div>
        </section>
    )
}

export default ServicesDesk
