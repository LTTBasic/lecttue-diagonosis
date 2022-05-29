import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import example from '../images/default_profile.png';

const AboutPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <section id="about">
                <h1>About Us</h1>
                <h2>See what they say about us</h2>
                <div className="introduction__box">
                    <div className="introduction">
                        <img
                            src={example}
                            alt="Example"
                            className="introduction__avatar"
                        />
                        <div className="introduction__speech-bubble">
                            <p>
                                성명: 철수 <br/>
                                역할: Front-End <br/>
                                oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                            </p>
                            <p className="name"><a href="https://github.com/LTTBasic/lecttue-diagonosis" target="blank">철수</a> / LTT</p>
                        </div>
                    </div>
                <div className="introduction">
                        <img
                            src={example}
                            alt="Example"
                            className="introduction__avatar"
                        />
                        <div className="introduction__speech-bubble">
                            <p>
                                성명: 영희 <br/>
                                역할: Back-End <br/>
                                oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                            </p>
                            <p className="name"><a href="https://github.com/LTTBasic/lecttue-diagonosis" target="blank">영희</a> / LTT</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage