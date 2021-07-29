import React,{ useState } from 'react'
import ContacEurope from './ContacEurope';
import ContactNorthAmerica from './ContactNorthAmerica';
import MediaQuery from 'react-responsive'

function ConctactUs() {
    const [show, setShow] = useState(false);
    const [showE, setShowE] =useState(false)
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
                <div className="input-container flex  ">
                            <h1 className="title-section color-white poppins-font margin-bottom-55">Contact us</h1>
                            <div className="btn-countries-container">
                                <div className="margin-bottom-15">
                                    <button onClick={showNorthA} className="btn-countries color-white poppins-font " >North America</button>
                                    {show?(<ContactNorthAmerica/>):(<div></div>)}
                                </div>
                                <div className="margin-bottom-15" >
                                    <button onClick={showEurope} className=" btn-countries color-white poppins-font  " >Europe</button>
                                    {showE?(<ContacEurope/>):(<div></div>)}
                                </div>
                                <div>
                                    <button className="btn-countries color-white poppins-font ">South America</button>
                                </div>
                            </div>
                            {/* <div className="margin-top-15 margin-left-15 ">
                                <img className="margin-right-24px" width="40px" src="/resouces/icons/facebook.png" alt="facebook" />
                                <img className="margin-right-24px" width="40px"  src="/resouces/icons/twitter.png" alt="twitter" />
                                <img width="40px"  src="/resouces/icons/linkedin.png" alt="linkedin" />
                            </div> */}
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
                                    <button className="btn-countries color-white poppins-font " >South America</button>
                                </div>
                                <div className="flex justify-content-center align-items-center">
                                    {show?(<ContactNorthAmerica/>):(<div></div>)}
                                    {showE?(<ContactNorthAmerica/>):(<div></div>)}
                                </div>
                            </div>
                        </div>
            </div>
        )
    };
    return (
        <section id="contact-us">
            <div className="clipPath-wave background-contact-us{" ></div>
            <div className="contact-us-container flex justify-content-center align-items-center background-contact-us">
                <div className="flex justify-content-center ">
                <MediaQuery maxWidth={1050}>{ CountriesMobile() }</MediaQuery>
                <MediaQuery minWidth={1050}>{ CountriesDesktop() }</MediaQuery>
                    <div className="flex input-container  align-items-end ">
                        <div className="flex ">
                            <input className="input-mail poppins-font input-a-size" type="text" placeholder=" Name"/>
                            <input className="input-mail poppins-font input-a-size" type="text" placeholder=" Email" />
                        </div>
                        <div className="flex ">
                            <input className="input-mail poppins-font input-a-size" type="text"  placeholder="Phone"/>
                            <input className="input-mail poppins-font input-a-size" type="text" placeholder="Address"/>
                        </div>
                        <input className="input-mail poppins-font input-b-size " type="text" placeholder="Subject" />
                        <textarea  className="input-message poppins-font" type="text" placeholder="Type your message here..." />
                        <button className="button poppins-font ">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConctactUs





