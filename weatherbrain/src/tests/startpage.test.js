import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CurrentWeatherTileHolder from "../components/currentWeatherTileHolder";
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


  test("renders the Heading", () => {
    act(() => {
        render(
            <div>
            <div className="animation">
                <h1>Weather Brain</h1>
            </div>

            <h2>Predicting weather with state of the art Machine Learning </h2>

        </div> 
            , container);
        });
    });
    test("renders the Current weather tile", () => {
        act(() => {
            render(<CurrentWeatherTileHolder/>, container);
        });
    });
    test("renders the  weather tile holder", () => {
        act(() => {
            render(<Weathertileholder/>, container);
        });
    });
