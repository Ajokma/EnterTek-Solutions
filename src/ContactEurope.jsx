import React from 'react'
import phone from "./resouces/icons/phone.png"

function ContactEurope() {
    return (
        <div className="address-container">
            <div className="flex align-items-center margin-top-15 ">
                <img className="icon-address" src={phone} alt="" />
                <p className="poppins-font address-text">Tomas Marty - Berlin : +49 160 9574 7061 </p>
            </div>
            <div className="flex align-items-center margin-top-15 ">
                <img className="icon-address" src={phone} alt="" />
                <p className="poppins-font address-text">Sandra de la Rosa Sánchez - Madrid : +34 623 179 996
 </p>
            </div>
            
            
        </div>
    )
}

export default ContactEurope
