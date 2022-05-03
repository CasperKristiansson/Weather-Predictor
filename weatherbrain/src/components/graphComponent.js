import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styling/components/plotGraph.css'



const data = [
  {
    name: 'Mon',
    // uv: 4000,
    temperature: 22,
    amt: 2400,
  },
  {
    name: 'Tue',
    // uv: 3000,
    temperature: 22,
    amt: 2210,
  },
  {
    name: 'Wed',
    // uv: 2000,
    temperature: 14,
    amt: 2290,
  },
  {
    name: 'Thur',
    // uv: 2780,
    temperature: 22,
    amt: 2000,
  },
  {
    name: 'Fri',
    // uv: 1890,
    temperature: 22,
    amt: 2181,
  },
  {
    name: 'Sat',
    // uv: 2390,
    temperature: 14,
    amt: 2500,
  },
  {
    name: 'Sun',
    // uv: 3490,
    temperature: 18,
    amt: 2100,
  },
];

// export default class Example extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  // render() {
    export const PlotGraph = () =>
    {
    return (
      <div className = "theGraph" 
      >

         {/* <ResponsiveContainer  */}
        {/* //  width="500" height="300" */}
         {/* >  */}
        <LineChart
        width={1000}
        height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
            <YAxis label="°C" />

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
          dataKey="name" 
          />
          <YAxis name = "Temperature (°C)" />
          <Tooltip />
          <Legend />
          <Line type="monotone" 
          dataKey="temperature" 
          stroke="#8884d8" activeDot={{ r: 8 }} 
        //   name = "Day of week" 
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
        {/* </ResponsiveContainer> */}
      </div>
    );
  }