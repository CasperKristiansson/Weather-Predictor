/*Philip Hägg */

import React from 'react';
import App from '../App.js';
import { unmountComponentAtNode, render } from "react-dom";
import { act } from 'react-dom/test-utils';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });


it('renders without crashing', () => {
    act(() => {   
        render(<App />, container);
    });
});