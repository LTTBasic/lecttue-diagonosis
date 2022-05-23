import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <section id="navbar">
                <div className="navbar__logo">
                    <i className="navbar-logo fa-solid fa-fan"></i>
                    <Link to='/'>LTT</Link>
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__menu__item">Home</li>
                    <li className="navbar__menu__item">About</li>
                    <li className="navbar__menu__item">Contact</li>
                </ul>
            </section>
        );
    }
}

export default Navbar;