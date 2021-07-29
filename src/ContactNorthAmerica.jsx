import React from 'react';
import gps from "./resouces/icons/gps.png"
import phone from "./resouces/icons/phone.png"


function ContactNorthAmerica() {
    return (
        <div className="address-container  ">
            <div className="flex align-items-center margin-top-15">
                <img className="icon-address"  src={gps} alt="" />
                <p className="poppins-font address-text">20533 Biscayne Blvd, Miami, FL 33180, USA</p>
            </div>
            <div className="flex align-items-center margin-top-15 ">
                <img className="icon-address" src={phone} alt="" />
                <p className="poppins-font address-text">+1 (305) 432 2970</p>
            </div>
            
        </div>
    )
}

export default ContactNorthAmerica
