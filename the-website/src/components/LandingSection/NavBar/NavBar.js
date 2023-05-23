import React from 'react';
import Logo from '../../../assets/logo.png';
import classes from "./NavBar.module.css";

const NavBar = () => {

    return (
        <div className={classes.nav__bar}>
            <div className={classes.image}>
                <img src={Logo} alt="No logo found" />
            </div>
            <div className={classes.navigation}>
                <ul>
                    <li>Home</li>
                    <li>Programs</li>
                    <li>Why us</li>
                    <li>Plans</li>
                    <li>Testimonials</li>
                    <li> <a href="/buy-me-a-sandwich">Buy me a sandwich</a></li>
                </ul>
            </div>
            
        </div>
    );
}

export default NavBar;