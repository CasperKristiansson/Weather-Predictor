import './upcomingWeatherDisplay.css';
import cloudy from './weather-icons/cloudy.png'

const data = [
	{min: '6', max: '17', icon: cloudy, humidity: "70-76", air: '1022-1055'},
	{min: '3', max: '14', icon: cloudy, humidity: "65-83", air: '1033-1053'},
	{min: '2', max: '13', icon: cloudy, humidity: "40-57", air: '1042-1065'},
	{min: '7', max: '21', icon: cloudy, humidity: "30-35", air: '1011-1032'},
	{min: '4', max: '18', icon: cloudy, humidity: "30-36", air: '1015-1036'},
	{min: '6', max: '17', icon: cloudy, humidity: "25-32", air: '1032-1056'},
	{min: '6', max: '16', icon: cloudy, humidity: "24-36", air: '1013-1036'},
]

export default () => {
	return(
		<>
		<hr style={{color: '#c3c3c3', border: '1px solid'}}/>
		<div className="upcomingWeatherDisplay">
			{Array.from({ length: 7 }, (v, k) => k).map(day => (
				<div>
					<h3>FRIDAY</h3>
					<p style={{lineHeight: 0, marginTop: '-10px', color: '#6F6A69'}}>{18 + day} May</p>
					<p style={{paddingTop: '10px'}}>Min: <bold className="textBold">+{data[day].min}°</bold></p>
					<p style={{marginTop: '-15px'}}>Max: <bold className="textBold">+{data[day].max}°</bold></p>
					<p style={{marginTop: '-15px'}}>Air Humidity: <bold className="textBold">{data[day].humidity}%</bold></p>
					<p style={{marginTop: '-15px'}}>Pressure: <bold className="textBold">{data[day].air}mm</bold></p>

					<img src={cloudy} alt="cloudy" />
				</div>
				))}
		</div>
		</>
	);
};