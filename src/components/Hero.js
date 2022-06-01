import React from "react"
import img2 from '../images/photo-grid.png'

export default function Hero() {
    return (
        <section className="hero">
            <img src = {img2} alt="" className="gallery"/>
            <h1 className="head">
                Online Experience
            </h1>
            <p1 className="smaller">
                Join unique interactive activities led by one-of-a-kind hosts -- all without leaving home.
            </p1>
        </section>
    )
}
