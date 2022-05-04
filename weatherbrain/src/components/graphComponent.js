import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, LabelList } from 'recharts';
import '../styling/components/plotGraph.css'



const data = [
  {
    name: 'Mon',
    temperature: 22,
  },
  {
    name: 'Tue',
    temperature: 22,
  },
  {
    name: 'Wed',
    temperature: 14,
  },
  {
    name: 'Thur',
    temperature: 22,
  },
  {
    name: 'Fri',
    temperature: 22,
  },
  {
    name: 'Sat',
    temperature: 14,
  },
  {
    name: 'Sun',
    temperature: 18,
  },
];

export const PlotGraph = () => {
  return (
    <div className="theGraph">

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
        <YAxis label={{ value: '°C', fill: 'rgb(129, 106, 235)', angle: 0, position: 'insideLeft' }} />

        <Bar dataKey="temperature">
          <LabelList dataKey="name" position="insideTopLeft" />
        </Bar>

        {/* <YAxis label={{ value: "Temperature (°C)", dy: 10, angle: -90,  }} /> */}

        {/* <XAxis dataKey="name" label={{ value: "Day of week", position: "insideBottomLeft", dy: 10}} /> */}

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
        />
        <YAxis name="Temperature (°C)" />
        <Tooltip />
        <Legend />

        <Line type="monotone"
          dataKey="temperature"
          stroke="#8884d8" activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}