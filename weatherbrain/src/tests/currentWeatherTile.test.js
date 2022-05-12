import React from 'react';
import ReactDom from 'react-dom';
import WeatherTile from "../components/weathertile.js";


it ("renders withouth crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<WeatherTile />, div)
    ReactDom.unmountComponentAtNode(div);
})