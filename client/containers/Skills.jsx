import React from 'react'
import BarGraph from '../Components/Skillgraph.jsx'

export default function Skills() {
    return (
        <div className="skillsContainer">
            <h1 className="siteHeading">Top Skills</h1>
            <div className="underline"></div>
            <div className="skillsSection">
                <div className="skillsCopy">
                    <h2 className="skillsHeader">Tools of the Trade</h2>
                    <p className="skillsQuote">"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.""
                        <br></br><span className="quoteAtt">-Martin Fowler</span></p>
                </div>
                <BarGraph />
            </div>
        </div>
    )
}