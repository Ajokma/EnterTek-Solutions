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
                                <div>
                                    <button className="btn-countries color-white poppins-font ">South America</button>
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
                                    <button className="btn-countries color-white poppins-font " >South America</button>
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

    function sendEmail(e) {
        const formData = new FormData(e.target)
        const user = {}     
        e.preventDefault();
        for (let entry of formData.entries()) {
            user[entry[0]] = entry[1]
        }

        console.log(user);

        displayLoading();
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user }),
    };
    fetch('http://www.enterteksolutions.com/site/public/index.php/api/sendmail', requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            hideLoading();

            if (json.success) {
                alert('Email was sent! Thanks.' + json.message);
            }
            else {
                alert('Email sent error! Please try again or another way.')
            }
            e.target.reset();

        })    
        .catch(err => console.log('Request Failed', err));    
    }

    // selecting loading div
    const loader = document.querySelector("#loading");

    // showing loading
    function displayLoading() {
        loader.classList.add("display");
        // to stop loading after some time
        setTimeout(() => {
            loader.classList.remove("display");
        }, 5000);
    }

    // hiding loading 
    function hideLoading() {
        loader.classList.remove("display");
    }

    return (
        <section id="contact">
           
            <div className="contact-us-container flex justify-content-center align-items-center ">

                    <div className="flex justify-content-center ">
                        <MediaQuery maxWidth={1250}>{ CountriesMobile() }</MediaQuery>
                        <MediaQuery minWidth={1252}>{ CountriesDesktop() }</MediaQuery>
                    <div className="flex input-container  align-items-end ">

                    <form className="contact-form" onSubmit={sendEmail}>
                            <div className="flex ">
                                <input className="input-mail poppins-font input-a-size"  name="from_name" type="text" placeholder=" Name" />
                                <input className="input-mail poppins-font input-a-size"  name="from_email" type="text" placeholder=" Email" />
                            </div>
                            <div className="flex ">
                                <input className="input-mail poppins-font input-a-size" type="text" name="from_phone" placeholder="Phone" />
                                <input className="input-mail poppins-font input-a-size" type="text" name="from_address" placeholder="Address" />
                            </div>
                            <select className="input-mail poppins-font input-b-size" name="zone">
                                <option selected value="">Please select zone</option>
                                <option value="North America">North America</option>
                                <option value="Europe">Europe</option>
                                <option value="South America">South America</option>
                            </select>
                            <input className="input-mail poppins-font input-b-size " type="text" name="subject" placeholder="Subject" />
                            <textarea className="input-message poppins-font" type="text"  name="message" placeholder="Type your message here..." />
                         
                            <div id="loading"></div>
                         
                            <button type="submit" className="button poppins-font ">Submit</button>
                        </form>
                    {/*                         
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
                        <option value="South America">South America</option>
                    </select>
                    <input className="input-mail poppins-font input-b-size " type="text" placeholder="Subject" />
                    <textarea  className="input-message poppins-font" type="text" placeholder="Type your message here..." />
                    <button className="button poppins-font">Submit</button> 
                    */}

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




