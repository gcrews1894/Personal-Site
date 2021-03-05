import React from 'react'
import ContactForm from '../Components/ContactForm.jsx'
import image from '../Assets/Gavinprofile.jpg'


export default function Contact () {

    return (
        <div className="contactSection">
            <a name="3">
                <div className="centerContainer">
                    <h1 className="siteHeading contact">Contact Me</h1>
                    <div className="underline"></div>
                    <ContactForm />
                </div>
            </a>
        </div>
    )
}