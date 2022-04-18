import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <section id="home">
                <i class="home-logo fa-solid fa-jet-fighter-up"></i>
                <span class="home__title">Welcome to LTT</span>
                <h2 class="home__description">Start diagnosing disease<br/>in facility crops!</h2>
                <button class="home__contact">Start Diagnostics</button>
            </section>
        );
    }
}

export default Main;