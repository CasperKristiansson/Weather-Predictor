import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Aboutpage from "../view/aboutpage";
import Graph from "../components/plotGraph";
import Weathertileholder from "../components/weathertile-holder";

import Startpage from '../view/startpage';

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



    test("renders the  aboutus pager", () => {
        act(() => {
            render(<Aboutpage/>, container);
        });
    });
