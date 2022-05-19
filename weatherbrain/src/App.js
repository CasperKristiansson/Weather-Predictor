import Navbar from './components/navbar';
import Startpage from  './view/startpage.js';
import Aboutpage from  './view/aboutpage.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import ContactForm from "./view/contactUs";
import {StatisticsView} from './view/statisticsView.js';

function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
