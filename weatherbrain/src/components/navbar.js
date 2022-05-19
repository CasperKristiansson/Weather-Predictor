import React from 'react';
import "../styling/components/Navbar.css"
import {  Link } from 'react-router-dom';
import statistics from '../img/statistics.png'
import phone from '../img/phone.png'
import users from '../img/users.png'
import home from '../img/home.png'

const Navbar = () =>{
    return (
                <li>
                    <Link to="/">
                        <img src={home} alt="home" />
                        StartPage
                    </Link>
                </li>
                    <li>
                        <Link to="/about" >
                            <img src={users} alt="users" />
                            About us
                         </Link>
                    </li>
                    <li>
                        <Link to="/statistics">
                            <img src={statistics} alt="statistics" />
                            Statistics
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactus">
                            <img src={phone} alt="phone" />
                            Contact us
                        </Link>
                    </li>
        </div>

    );
}
export default Navbar;