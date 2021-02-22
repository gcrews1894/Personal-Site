import React from 'react';
import image from '../Assets/Gavinprofile.jpg'

export default function Headline() {
    return (
        <div className="headline">
            <div className="titleField">
                <h1 id="artHead">Software Engineer</h1>
                <img className="profile" src={image}/>
            </div>
            <h4 id="introQuote">“Engineering is a lifelong pursuit. It represents a commitment to learning, innovation, and critical thinking in order to identify and solve problems to improve people’s lives.”</h4>
            <br></br>
        </div>
    )
}