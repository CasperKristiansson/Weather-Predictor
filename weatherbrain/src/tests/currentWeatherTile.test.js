import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


import CurrentWeatherTile from "../components/CurrentWeatherTile.js";

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
        render(<CurrentWeatherTile />, container);
    });
    
});

it("renders the component, correctly", () => {
  const fakeData = [
    {
      airPressure: 1013.0,
      date: "2022-05-19 19:03:34.953",
      humidity: 68,
      temperature: 4.22,
    }
  ]
  act(() => {
      render(<CurrentWeatherTile promise={true}  data={fakeData} error={null}  />, container);
  });
  expect(
    container.querySelector(".tilediv-current").textContent
    ).toContain("Humidity");
  expect(
    container.querySelector(".tilediv-current").textContent
    ).toContain("Air Pressure");
  
});

it("sends error back", () => {
  const fakeData = [
    {
      airPressure: 1013.0,
      date: "2022-05-19 19:03:34.953",
      humidity: 68,
      temperature: 4.22,
    }
  ]
  act(() => {
      render(<CurrentWeatherTile promise={true}  data={fakeData} error={!null}  />, container);
  });
  expect(
    container.querySelector(".tilediv-current").textContent
    ).toContain("ERROR");
});

it("sends no data", () => {
  const fakeData = [
    {
      airPressure: 1013.0,
      date: "2022-05-19 19:03:34.953",
      humidity: 68,
      temperature: 4.22,
    }
  ]
  act(() => {
      render(<CurrentWeatherTile  data={fakeData}   />, container);
  });
  expect(
    container.querySelector(".tilediv-current").textContent
    ).toContain("no datano datano datano data");
});




it("test date", () => {
  const fakeData = {"date":"2022-05-19 19:03:34.953","airPressure":1013.49,"temperature":18.05,"humidity":50}
  act(() => {
      render(<CurrentWeatherTile promise={true}  data={fakeData} error={null}  />, container);
  });
  expect(
    container.querySelector(".date-current").textContent
    ).toContain("2022-05-19 19:03:34.953");
  
});

it("test temperature", () => {
  const fakeData = {"date":"2022-05-19 19:03:34.953","airPressure":1013.49,"temperature":18.05,"humidity":50}
  act(() => {
      render(<CurrentWeatherTile promise={true}  data={fakeData} error={null}  />, container);
  });
  expect(
    container.querySelector(".temperature-holder-current").textContent
    ).toContain("18°");
  
});

it("test humidity and airpressure", () => {
  const fakeData = {"date":"2022-05-19 19:03:34.953","airPressure":1013.49,"temperature":18.05,"humidity":50}
  act(() => {
      render(<CurrentWeatherTile promise={true}  data={fakeData} error={null}  />, container);
  });
  expect(
    container.querySelector(".content-holder-current").textContent
    ).toContain("50%");
  expect(
    container.querySelector(".content-holder-current").textContent
    ).toContain("1013hPa");

  
});