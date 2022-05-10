import './App.css';
import Navbar from './components/navbar';
import {Startpage} from  './view/startpage.js';
import {Aboutpage} from  './view/aboutpage.js';
import {DetailedView} from './view/detailedView.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Events from "./pages/events";
import React from "react";

function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/*' element={<Startpage/>}/>
                <Route path='/about' element={<Aboutpage />} />
                <Route path='/events' element={<Events/>} />
                <Route path='/details' element={<DetailedView />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
