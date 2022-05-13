/*Philip Hägg */

import React from 'react';
import ReactDom from 'react-dom';
import App from '../App.js';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App/>, div);
});