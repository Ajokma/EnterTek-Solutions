import React from 'react'
import phone from "./resouces/icons/phone.png"

function ContactEurope() {
    return (
        <div className="address-container">
            <div className="flex align-items-center margin-top-15 ">
                <img className="icon-address" src={phone} alt="" />
                <p className="poppins-font address-text">Tomas Marty: +49 160 9574 7061 </p>
            </div>
            
        </div>
    )
}

export default ContactEurope
