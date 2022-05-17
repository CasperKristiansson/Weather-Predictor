import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


import CurrentWeatherTileHolder from "../components/CurrentWeatherTileHolder.js";

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


  it("renders the component", () => {
    act(() => {
        render(<CurrentWeatherTileHolder />, container);
    });
  });

  it("Renders weather data", () => {
    const fakeData = {
      
    }

  });