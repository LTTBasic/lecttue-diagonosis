import React, { Component } from 'react';
import Navbar from '../components/navbar';
import {Link} from 'react-router-dom'

class MainPage extends Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <section id="home">
                    <i className="home-logo fa-solid fa-jet-fighter-up"></i>
                    <span className="home__title">Welcome to LTT</span>
                    <h2 className="home__description">Start diagnosing disease<br/>in facility crops!</h2>
                    <button className="home__button">
                        <Link to='/upload'>Start Diagnostics</Link>
                    </button>
                </section>
            </>
        );
    }
}

export default MainPage;