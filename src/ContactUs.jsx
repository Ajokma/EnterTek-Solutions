import React,{ useState } from 'react'
import ContactEurope from './ContactEurope';
import ContactNorthAmerica from './ContactNorthAmerica';
import MediaQuery from 'react-responsive';

function ContactUs () {
    const [show, setShow] = useState(false);
    const [showE, setShowE] =useState(false);
    const showNorthA =()=>{
        setShow(!show)
        setShowE(false)
    };
    const showEurope =()=>{
        setShow(false)
        setShowE(!showE)
    };
    function CountriesDesktop() {
        return (
            <div>
                <div className="input-container flex ">
                            <h1 className="title-section color-white poppins-font margin-bottom-55">Contact us</h1>
                            <div className="btn-countries-container">
                                <div className="margin-bottom-15">
                                    <button onClick={showNorthA} className="btn-countries color-white poppins-font " >North America</button>
                                    {show?(<ContactNorthAmerica/>):(<div></div>)}
                                </div>
                                <div className="margin-bottom-15" >
                                    <button onClick={showEurope} className=" btn-countries color-white poppins-font  " >Europe</button>
                                    {showE?(<ContactEurope/>):(<div></div>)}
                                </div>
                                
                            </div>
                        </div>
                
            </div>
        )
    };
    function CountriesMobile() {
        return (
            <div>
                <div className="input-container flex  ">
                            <h1 className="title-section color-white poppins-font margin-bottom-55">Contact us</h1>
                            <div className="btn-countries-container ">
                                <div className="margin-bottom-15">
                                    <button onClick={showNorthA} className="btn-countries color-white poppins-font " >North America</button>
                                    <button onClick={showEurope} className="btn-countries color-white poppins-font " >Europe</button>
                            
                                </div>
                                <div className="flex justify-content-center align-items-center">
                                    {show?(<ContactNorthAmerica/>):(<div></div>)}
                                    {showE?(<ContactEurope/>):(<div></div>)}
                                </div>
                            </div>
                        </div>
            </div>
        )
    };
    return (
        <section id="contact">
           
            <div className="contact-us-container flex justify-content-center align-items-center ">

                    <div className="flex justify-content-center ">
                        <MediaQuery maxWidth={1251}>{ CountriesMobile() }</MediaQuery>
                        <MediaQuery minWidth={1252}>{ CountriesDesktop() }</MediaQuery>
                    <div className="flex input-container  align-items-end ">
                    <div className="flex ">
                        <input className="input-mail poppins-font input-a-size" type="text" placeholder=" Name"/>
                        <input className="input-mail poppins-font input-a-size" type="text" placeholder=" Email" />
                    </div>
                    <div className="flex ">
                        <input className="input-mail poppins-font input-a-size" type="text"  placeholder="Phone"/>
                        <input className="input-mail poppins-font input-a-size" type="text" placeholder="Address"/>
                    </div>
                    <select className="input-mail poppins-font input-b-size " >
                        <option selected value="">Please select zone</option>
                        <option value="North America">North America</option>
                        <option value="Europe">Europe</option>
                        
                    </select>
                    <input className="input-mail poppins-font input-b-size " type="text" placeholder="Subject" />
                    <textarea  className="input-message poppins-font" type="text" placeholder="Type your message here..." />
                    <button className="button poppins-font ">Submit</button>
                    </div>
                    </div>
                </div>
                <div className= "social-media-container flex justify-content-center align-items-center poppins-font">
                        <p> Copyright © 2021 EnterTEK Solutions, Inc. All rights reserved.</p>
                        
            </div>
        </section>
    )
};

export default ContactUs 
