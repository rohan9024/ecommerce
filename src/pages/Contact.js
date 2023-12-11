import React from 'react'
import './Contact.css'

function Contact() {
    return (<>
        <div className='contact-container'>
            <h1 className='contact-heading'>
                CONTACT US</h1>
        <div className='contact-info-container'>
            <p className='contact-info-item'><b>ABC</b></p>
            <p className='contact-info-item'>Customer Service Manager</p>
            <p className='contact-info-item'>Blackberrys</p>
            <br /><br />
            <p className='contact-info-item'><b>Mobile: +91 1234567890</b></p>
            <p className='contact-info-item'><b>E-mail: abc@gmail.com</b></p>
        </div>
        </div>
    </>
    )
}

export default Contact