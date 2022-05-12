/*Philip Hägg */

import React from 'react';
import ReactDom from 'react-dom';
import WeatherTile from "../components/weathertile.js";
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from 'react-test-renderer';


afterEach(cleanup);
it ("renders withouth crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<WeatherTile />, div)
    ReactDom.unmountComponentAtNode(div);
})

it("renders weather tile correctly with pros, date", () => {
    const { getByText } = render(<WeatherTile date="2020-01-01" icon="sunny" temperature="22°C" />);
    const date = getByText("2020-01-01");
    expect(date).toBeInTheDocument("2020-01-01");
})

it("renders weather tile correctly with pros, date", () => {
    const { getByText } = render(<WeatherTile date="2020-02-01" icon="sunny" temperature="22°C" />);
    const date = getByText("2020-02-01");
    expect(date).toBeInTheDocument("2020-02-01");
})

/*
it("matches snapshot", () => {
    const tree = renderer.create(<WeatherTile date="2020-01-01" icon="sunny" temperature="22°C" />).toJSON();
    expect(tree).toMatchSnapshot();
})
*/