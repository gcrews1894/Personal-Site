import React from 'react'
import ContactForm from '../Components/ContactForm.jsx'

export default function Contact () {

    return (
        <div className="contactSection">
            <div className="centerContainer">
                <h1 className="siteHeading contact">Contact Me</h1>
                <div className="underline"></div>
                <ContactForm />
            </div>
        </div>
    )
}