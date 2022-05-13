import React from 'react';
import "../styling/components/Navbar.css"
import {  Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <div className="navbar">
                <li>
                    <Link to="/">StartPage</Link>
                </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                    <Link to="/statistics">Statistics</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact us</Link>
                    </li>
                <li>
                    <Link to="/">Home again</Link>
                </li>
        </div>

    );
}
export default Navbar;