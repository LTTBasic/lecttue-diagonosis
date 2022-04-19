import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <section id="home">
                <i className="home-logo fa-solid fa-jet-fighter-up"></i>
                <span className="home__title">Welcome to LTT</span>
                <h2 className="home__description">Start diagnosing disease<br/>in facility crops!</h2>
                <button className="home__button">Start Diagnostics</button>
            </section>
        );
    }
}

export default Main;