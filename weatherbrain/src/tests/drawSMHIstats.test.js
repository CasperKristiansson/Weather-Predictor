import { Stats } from "../components/drawSMHIstats.js";
import { act } from "@testing-library/react";
import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, unmountComponentAtNode } from "react-dom";


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

test("renders the Current weather tile", () => {
    act(() => {
        render(<Stats />, container);
    });
});
;
