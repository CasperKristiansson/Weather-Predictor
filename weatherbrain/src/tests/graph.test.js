/* Daniel */
import { Graph } from "../components/plotGraph.js";
import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react";
import ReactDOM from 'react-dom/client';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";



afterEach(cleanup)

it ("renders withouth crashing", () => {
    const div = document.createElement('div');
    render(<Graph />, div)
   
})