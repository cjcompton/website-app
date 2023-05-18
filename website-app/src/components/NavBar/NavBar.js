import React from 'react';

// I need to do a thing where the elements collapse at a width of 600px
// add padding to the navlinks, but its being dificult 
// At that point the navbar-brand should be center of the screen
// Once done, throw in the light blue section with a good photo of yourself

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Charlie Compton</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/reach-out">Reach Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;