import CurrentWeatherTileHolder from "../components/currentWeatherTile";

import React from 'react';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";



afterEach(cleanup);

it ("renders withouth crashing", () => {
    const div = document.createElement('div');
    render(<CurrentWeatherTileHolder />, div)
   
})

