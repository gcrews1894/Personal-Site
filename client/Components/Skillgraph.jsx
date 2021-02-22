import React from 'react'

function Bars () {
    let skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Photoshop', 'UI Design', 'RESTful Architecture']
    let percents = ['95%', '95%', '90%', '80%', '80%', '75%', '95%', '80%', '90%']

    let bars = []
    for (let i = 0; i < skills.length; i++) {
        bars[i] = (
            <div className="barWidth" key={i}>
                <div className="techName">{skills[i]}</div>
                <div className="proficiency" id={'bar' + i}></div>
                <div className={"percentage bar" + i}>{percents[i]}</div>
            </div>
        )
    }

    return (
        <div className="barGraph">
            {bars}
        </div>
    )
}

export default function BarGraph () {
    return (
        <Bars></Bars>
    )
}