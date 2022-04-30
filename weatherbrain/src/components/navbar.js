import React from 'react';
import "../styling/components/Navbar.css"
import {  Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <header class="header">
            <div class="left">
                <li>
                    <Link to="/">StartPage</Link>
                </li>
            </div>
            <div class="mid">
                <ul class="navbar">
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/events">events</Link>
                    </li>
                </ul>

            </div>


        </header>
    );
}
export default Navbar;