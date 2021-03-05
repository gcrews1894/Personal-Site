import React from 'react';
import image from '../Assets/Gavinprofile.jpg'

export default function About() {
    return (
        <div className="about">
            <a name="0">
                <h1 className="siteHeading">About Me</h1>
                <div className="underline"></div>
            </a>
            <div className="aboutContainer">
                <div className="photoContainer">
                    <img className="profilePhoto" src={image}></img>
                </div>
                <div className="aboutParagraphContainer">
                    <p className="aboutParagraph">Hi! My name is Gavin. I live in San Diego, California. When COVID-19 hit and shut everything down, I took the opportunity to close up my professional photography business and transition into something I had been interested in for years: Software Engineering. I love being able to use my creativity and intellect to create awesome products that change people's lives.</p>
                </div>
            </div>
        </div>
    )
}