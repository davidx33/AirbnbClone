import React from "react"
import img4 from '../images/star.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src = {`../images/${props.img}`} />
            <div className="card--inner">
                <img src = {img4} className="star"/>
                <span >{props.rating}</span>
                <span className="grey">{props.number}</span>
                <span className="grey">{props.country}</span>
            </div>
            <p className="bottom">{props.title}</p>
            <p className="bottom"> <span className="bold">From ${props.price}</span>/person</p>
        </div>
    )
}