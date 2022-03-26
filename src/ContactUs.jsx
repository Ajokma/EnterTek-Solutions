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
                            <button onClick={showNorthA} className="btn-countries color-white poppins-font">North America</button>
                            {show?(<ContactNorthAmerica/>):(<div></div>)}
                        </div>
                        <div className="margin-bottom-15" >
                            <button onClick={showEurope} className=" btn-countries color-white poppins-font ">Europe</button>
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

    function submitContact(e) {
        const formData = new FormData(e.target)
        const user = {}     
        e.preventDefault();
        for (let entry of formData.entries()) {
            user[entry[0]] = entry[1]
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user }),
    };

    console.log(formData);
    console.log(user);

    //return false

    fetch('https://www.enterteksolutions.com/site/public/index.php/sendmail', requestOptions)
        .then(response => response.json())
        .then(json => {
           
            console.log(json);
          
            if ('json.success',json.success) {
               alert('Email was sent! Thanks.' );
               e.target.reset();
            }
            else {
                alert('Email sent error! Please try again or another way.')
            }

        })    
        .catch(err => console.log('Request Failed', err));    
    }

    return (
        <section id="contact">
           
            <div className="contact-us-container flex justify-content-center align-items-center ">
                <form onSubmit={submitContact}>
                    <div className="flex justify-content-center ">
                        <MediaQuery maxWidth={1250}>{ CountriesMobile() }</MediaQuery>
                        <MediaQuery minWidth={1252}>{ CountriesDesktop() }</MediaQuery>
                    <div className="flex input-container  align-items-end ">
                    <div className="flex ">
                        <input className="input-mail poppins-font input-a-size" type="text" name="from_name" placeholder="Name" required />
                        <input className="input-mail poppins-font input-a-size" type="email" name="from_email" placeholder="Email" required />
                    </div>
                    <div className="flex ">
                        <input className="input-mail poppins-font input-a-size" type="text"  name="from_phone" placeholder="Phone"/>
                        <input className="input-mail poppins-font input-a-size" type="text" name="from_address" placeholder="Address"/>
                    </div>
                    <select className="input-mail poppins-font input-b-size" name="zone" required>
                        <option selected value="">Please select zone</option>
                        <option value="North America">North America</option>
                        <option value="Europe">Europe</option>
                    </select>
                    <input className="input-mail poppins-font input-b-size " type="text" name="subject" placeholder="Subject" required/>
                    <textarea  className="input-message poppins-font" type="text" name="message" placeholder="Type your message here..." required/>
                    <button type='submit' className="button poppins-font">Submit</button>
                    </div>
                    </div>
                </form>
            </div>

            <div className= "social-media-container flex justify-content-center align-items-center poppins-font">
                <p> Copyright © 2022 EnterTEK Solutions, Inc. All rights reserved.</p>            
            </div>
        </section>
    )
};

export default ContactUs 
