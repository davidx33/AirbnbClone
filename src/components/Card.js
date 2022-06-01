import React from "react"
import img3 from '../images/katie-zaferes.png'
import img4 from '../images/star.png'

export default function Card() {
    return (
        <div className="card">
            <img src = {img3} alt="" className="image--card"/>
            <div className="card--inner">
                <img src = {img4} alt="" className="star"/>
                <span >5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
            </div>
            <p className="bottom">Life Lessons with Katie Zaferes</p>
            <p className="bottom"> <span className="bold">From $136/person</span></p>
        </div>
    )
}