import React from 'react';
import "../styling/components/Navbar.css"
import {  Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <div class="navbar">
                <li>
                    <Link to="/">StartPage</Link>
                </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                <li>
                    <Link to="/">Home again</Link>
                </li>
        </div>

    );
}
export default Navbar;