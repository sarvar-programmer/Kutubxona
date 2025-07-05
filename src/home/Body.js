import React from "react";
import left from '../image/Vector.png'
import right from '../image/Vector (1).png'
import '../css/body.css'

export default class Body extends React.Component {
    render() {
        return (
            <>
                <section className="hero">
                    <h1 className="text-white sub_title">Tuproqqal’a tumani axborot kutubxona markazi</h1>
                    <div className="d-flex align-items-start layout">
                        <img src={left} className="btn left" />
                        <p className="text-white title">
                            Kitob – bizning kuchimiz, kelajagimiz poydevori!</p>
                        <img src={right} className="btn right" />
                    </div>
                </section>
            </>
        )
    }
}