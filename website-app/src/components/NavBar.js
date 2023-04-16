import React from 'react';
import './NavBar.css'

// I need to do a thing where the elements collapse at a width of 600px
// At that point the navbar-brand should be center of the screen
// Once done, throw in the light blue section with a good photo of yourself

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-sm">
            <div className="container">
                <a className="navbar-brand" href="#">Charlie Compton</a>
            </div>
            <div className="container mr-auto">
                <div className="expand navbar-expand" id="navbarText">
                    <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;