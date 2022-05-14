/* Philip Hägg */
import {Startpage} from  '../view/startpage.js';
import {Aboutpage} from  '../view/aboutpage.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Events from "../pages/events";
import ContactForm from "../view/contactUs";


import React from 'react';
import Navbar from "../components/navbar.js";
import {render, cleanup, screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import {createMemoryHistory} from 'history'
import userEvent from '@testing-library/user-event'



afterEach(cleanup);
it ("renders withouth crashing", () => {
    const div = document.createElement('div');
    render(        
        <Router>
            <Navbar />
                <Routes>
                    <Route path='/*' element={<Startpage/>}/>
                    <Route path='/about' element={<Aboutpage />} />
                    <Route path='/events' element={<Events/>} />
                    <Route path='/contactus' element={<ContactForm/>} />
                </Routes>
        </Router>, div)
    
})

test('navigation', async () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} history={history}>
            <Navbar />
                <Routes>
                    <Route path='/*' element={<Startpage/>}/>
                    <Route path='/about' element={<Aboutpage />} />
                    <Route path='/events' element={<Events/>} />
                    <Route path='/contactus' element={<ContactForm/>} />
                </Routes>
        </Router>
    )
    const user = userEvent.setup();
    expect(screen.getByText('Predicting weather with state of the art Macheine Learning')).toBeInTheDocument();

    await user.click(screen.getByText('About us'));

    expect(screen.getByText('About Us')).toBeInTheDocument();

})

/*SNAPSHOT TEST - DONT USE ME
it("matches snapshot", () => {
    const tree = renderer.create(
        <Router>
            <Navbar />
                <Routes>
                    <Route path='/*' element={<Startpage/>}/>
                    <Route path='/about' element={<Aboutpage />} />
                    <Route path='/events' element={<Events/>} />
                    <Route path='/contactus' element={<ContactForm/>} />
                </Routes>
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

*/