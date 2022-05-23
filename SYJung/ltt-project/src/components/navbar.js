import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <section id="navbar">
                <div className="navbar__logo">
                    <Link to='/'><i className="navbar-logo fa-solid fa-fan"></i></Link>
                    <Link to='/'>LTT</Link>
                </div>
                <ul className="navbar__menu">
                    <Link to='/'><li className="navbar__menu__item">Home</li></Link>
                    <Link to='/upload'><li className="navbar__menu__item">Start</li></Link>
                    <Link to='/about'><li className="navbar__menu__item">About</li></Link>
                </ul>
            </section>
        );
    }
}

export default Navbar;