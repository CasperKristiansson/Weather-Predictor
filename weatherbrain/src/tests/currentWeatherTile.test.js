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
  const fakeData = {"date":"2022-05-19 19:03:34.953","airPressure":1013.49,"temperature":18.05,"humidity":50}
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
  const fakeData = {"date":"2022-05-19 19:03:34.953","airPressure":1013.49,"temperature":18.05,"humidity":50}
  act(() => {
      render(<CurrentWeatherTile promise={true}  data={fakeData} error={!null}  />, container);
  });
  expect(
    container.querySelector(".tilediv-current").textContent
    ).toContain("ERROR");
});

it("sends no data", () => {
  const fakeData = {"date":"2022-05-19 19:03:34.953","airPressure":1013.49,"temperature":18.05,"humidity":50}
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

it("renders rain symbol", () => {
  const fakeData = {"date":"2022-05-19 19:03:34.953","airPressure":1013.49,"temperature":18.05,"humidity":80}
  act(() => {
    render(<CurrentWeatherTile promise={true}  data={fakeData} error={null}  />, container);
    
  });
  const symbol = document.querySelector(".temperature-holder-current")
  expect(
    
    symbol.innerHTML
    ).toContain(
      "M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
    );

  });

  it("renders sun symbol", () => {
    const fakeData = {"date":"2022-05-19 19:03:34.953","airPressure":1013.49,"temperature":18.05,"humidity":60}
    act(() => {
      render(<CurrentWeatherTile promise={true}  data={fakeData} error={null}  />, container);
      
    });
    const symbol = document.querySelector(".temperature-holder-current")
    expect(
      
      symbol.innerHTML
      ).toContain(
        "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
      );
  
    });