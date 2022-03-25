import React,{ useState } from 'react';
import Azure from "./resouces/icons/azure.png"
import World from "./resouces/world.png"
import Aws from "./resouces/icons/aws.png"
import Cyber from "./resouces/icons/cyber.png"
import Alexa from "./resouces/icons/alexa.png"
import Promisess from "./resouces/icons/promise.png"
import Vid from "./resouces/icons/vdi.png"
import Block from "./resouces/block.png"
import Ft from "./resouces/fintech.png"
import Curren from "./resouces/Curren.png"



function WhyUs() {

  const [showDesc, setShowDesc] =useState(true);
  const showDescF =()=>{
    setShowDesc(!showDesc);
    setShowDesc1(true);
};

const [showDesc1, setShowDesc1] =useState(true);
  const showDescF1 =()=>{
    setShowDesc1(!showDesc1);
    setShowDesc(true);
};

  return <div className='whyus-container flex flex-column'>
      <div className='color-why'></div>
      <div lassName='flex flex-column'>
        <div className='why-text-container'>
          <h1 className='title-section  poppins-font'>Why us?</h1>
          <p className=' p-text-container poppins-font margin-top-15'> Entertek is your trusted partner to deliver custom build IT Solutions. Our developers and consultants are ready to scope the work requested and present a fair and competitive offer that fit the customers needs. Regardless 
          of how complex a project may be, our team  will find the right way to deliver quality on time. 
          </p>
          </div>
          <div  className='pro-containers flex justify-content-center '>
          <div onClick={showDescF1} className=' flex flex-column '>
            <div className='pro-circle flex flex-column '>
              <h2 className='poppins-font pro-title-circle'>Experience</h2>
            </div>
            <div className={showDesc1?("capa-2"):( "capa flex flex-column" )}>
                <p className='poppins-font color-white font-text-chico' >{showDesc1?(""):( "Web Developers with over xxx years of experience, with significant international exposure." )}</p>
            </div>
            </div>
            <div onClick={showDescF} className=' flex flex-column '>
              <div className='pro-circle flex flex-column '>
              <h2  className='poppins-font pro-title-circle'>Confidentiality</h2>
              </div>
              <div className={showDesc?("capa-2"):( "capa flex flex-column" )}>
                <p className='poppins-font color-white font-text-chico' >{showDesc?(""):( "We keep our clients' information and ideas confidential." )}</p>
              </div>
            </div>

            <div className='pro-circle flex flex-column'>
              <h2 className='poppins-font pro-title-circle'>Skills</h2>
            </div>
            <div className='pro-circle flex flex-column '>
              <h2 className='poppins-font pro-title-circle'>Expertise</h2>
            </div>
            <div className='pro-circle flex flex-column'>
              <h2 className='poppins-font pro-title-circle'>Problem Solvers</h2>
            </div>
            <div className='pro-circle flex flex-column '>
              <h2 className='poppins-font pro-title-circle'>Flexibility</h2>
            </div>
          </div>
          
      
      </div>
      <div className=' img-container flex flex-column'>
      <h1 className='subtitle-section  poppins-font'>Infrastructure Services</h1>
            <div className=' c-infraestructure-container'>
              <div className='infraestructure-container flex flex-column' >
                <img width={200} src={Azure} alt="" />
                <h4 className='poppins-font color-white'>Azure - Microsoft Cloud</h4>
              </div>
              <div className='infraestructure-container-2 flex flex-column' >
              <img width={200} src={Alexa} alt="" />
                <h4 className='poppins-font color-white'>Voice Recognition</h4>
              </div>
              <div className='infraestructure-container flex flex-column' >
              <img width={190} src={Promisess} alt="" />
                <h4 className='poppins-font color-white'>On Premises</h4>
              </div>
              <div className='infraestructure-container-2 flex flex-column' >
              <img width={200} src={Cyber} alt="" />
                <h4 className='poppins-font color-white'>Cyber Security</h4>
              </div>
              <div className='infraestructure-container flex flex-column' >
              <img width={200} src={Vid} alt="" />
                <h4 className='poppins-font color-white'>VDI - Virtual Desktop Interface</h4>
              </div>
              <div className='infraestructure-container-2 flex flex-column' >
              <img width={200} src={Aws} alt="" />
                <h4 className='poppins-font color-white'>AWS - Amazon Cloud</h4>
              </div>
            </div>
            </div>

            <div className='why-text-container'>
              <h1 className='title-section margin-top-75 margin-bottom-55 poppins-font'>Industries</h1>
              <div className='flex industries-containers'>
                <div  className='industrie-containter-item-1 flex flex-column'>
                  <div className='flex flex-center flex-center-2'>
                    <img height="122px" src={Block} alt="" />
                    <h1 className='poppins-font color-white' > Blockchain </h1>
                  </div>
                  <p className='poppins-font color-white p-industrie'>Metamask Integrations, UI / UX Services, Nodes, Dashboards and Reporting ( Realized / Unrealized Gains / APY ), Defi Pulse Index, Metaverse Index, Data economy i ETH2X Flexible Leverage Index</p>
                </div> 
                <div  className='industrie-containter-item-2 flex flex flex-column'>
                  <div className='flex flex-center flex-center-2'>
                    <img src={Ft} alt="" />
                    <h1 className='poppins-font color-white' > Fintech & Digital Banking </h1>
                  </div>
                  <p className='poppins-font color-white p-industrie'>We provide Financial Technology Consultancy, as well as Bank Integrations, SEPA DD Mandates, Financial Reporting, Tableau / Power BI Reporting & Analytics, KYC and AML solutions</p>
                </div>
                <div  className='industrie-containter-item-1 flex flex-column'>
                <div className='flex flex-center flex-center-2'>
                  <img height="122px" src={Curren} alt="" />
                  <h1 className='poppins-font color-white' > Hedge Funds </h1>
                </div>
                <p className='poppins-font color-white p-industrie'>Portfolio Analysis, Risk Reporting, Collections, Dashboards, customized Apps for Management tracking </p>
                </div>
              </div>
            </div>
            

      <div className='offices-container flex flex-column  '>
        <h2 className='title-section poppins-font color-white margin-bottom-55 '> our offices</h2>
              <img className='medidas-img' src={World} alt="" />
            </div>
            
  </div>
}

export default WhyUs;
