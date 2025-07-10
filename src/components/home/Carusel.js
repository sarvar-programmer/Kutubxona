import left from '../../image/Vector.png'
import right from '../../image/Vector (1).png'
import '../../css/home/carusel.css'

export default function Carusel(){

        return (
            <>
                <section className="hero">
                    <h1 className="text-white sub_title">Tuproqqal’a tumani axborot kutubxona markazi</h1>
                    <div className="d-flex align-items-start layout">
                        <img src={left} className="btn left"/>
                        <p className="text-white motto">
                            Kitob – bizning kuchimiz, kelajagimiz poydevori!</p>
                        <img src={right} className="btn right" />
                    </div>
                </section>
            </>
        )
    }
