import React, { Component } from 'react';
import Navbar from '../components/navbar';
import example from '../imgs/default_profile.png';

class AboutPage extends Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
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
                                </p>
                                <p className="name"><a href="https://github.com/LTTBasic/lecttue-diagonosis" target="blank">철수</a> / LTT</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default AboutPage;