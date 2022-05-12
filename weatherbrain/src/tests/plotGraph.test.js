/*Philip Hägg */

import { PlotGraph } from '../components/graphComponent';
import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from 'react-test-renderer';

afterEach(cleanup)

it ("renders withouth crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<PlotGraph />, div)
    ReactDom.unmountComponentAtNode(div);
})


/*SNAP SHOT TEST */
it("matches snapshot", () => {
    const tree = renderer.create(<PlotGraph/>).toJSON();
    expect(tree).toMatchSnapshot();
})

