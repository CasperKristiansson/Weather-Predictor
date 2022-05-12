import CurrentWeatherTileHolder from "../components/currentWeatherTile";

import React from 'react';
import ReactDom from 'react-dom';

import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from 'react-test-renderer';

afterEach(cleanup);

it ("renders withouth crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<CurrentWeatherTileHolder />, div)
    ReactDom.unmountComponentAtNode(div);
})