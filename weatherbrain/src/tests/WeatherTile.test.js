import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {BsFillSunFill, BsFillCloudDrizzleFill} from 'react-icons/bs';


import WeatherTile from "../components/WeatherTile.js";

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
      const day = {
        date: "2020-01-01",
        day: 1,
      }
        render(<WeatherTile key={day.date} day = {day} />, container);
    });
    expect(container.textContent).toContain("2020-01-01");
});

  it("renders temperature", () => {
    act(() => {
      const day = {
        date: "2020-01-01",
        day: 1,
        humidity: "68",
        temperature: "4.22",
      }
      
        render(<WeatherTile key={day.date} day = {day} />, container);
    });
    expect(
      container.querySelector(".temperature-holder").textContent
      ).toEqual("4°");
  });


  it("renders humidity", () => {
    act(() => {
      const day = {
        date: "2020-01-01",
        day: 1,
        humidity: "68",
        temperature: "4.22",
      }
      
        render(<WeatherTile key={day.date} day = {day} />, container);
    });
    expect(
      container.querySelector(".symbol-holder").textContent
      ).toContain("")
    
  });
  it("renders date" , () => {
    act(() => {
      const day = {
        date: "2020-01-01",
        day: 1,
        humidity: "68",
        temperature: "4.22",
      }
      
        render(<WeatherTile key={day.date} day = {day} />, container);
    });
    expect(
      container.querySelector(".date").textContent
      ).toContain("2020-01-01")
  });
  it("renders symbol" , () => {
    act(() => {
      const day = {
        date: "2020-01-01",
        day: 1,
        humidity: "68",
        temperature: "4.22",
      }
      
        render(<WeatherTile key={day.date} day = {day} />, container);
    });
    expect(
      container.querySelector(".content-holder").textContent
      ).toContain("2020-01-014°")
  });