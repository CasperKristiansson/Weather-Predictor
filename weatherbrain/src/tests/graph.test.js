/* Daniel */
import { Graph } from "../components/plotGraph.js";
import { unmountComponentAtNode } from "react-dom";
import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

it ("renders withouth crashing", () => {

    render(<Graph />, container)
   
})