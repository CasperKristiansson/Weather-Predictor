import { WeatherTile } from "../components/weathertile";
import Navbar from '../components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from '../pages/about';
import Events from '../pages/events';
import React from "react";

export const Startpage = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/*' element={<WeatherTile/>}/>
                    <Route path='/about' element={<About/>} />
                    <Route path='/events' element={<Events/>} />
                </Routes>
            </Router>
        </>
    )
}
