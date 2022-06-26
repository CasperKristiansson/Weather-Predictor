import './upcomingWeatherDisplay.css';
import cloudy from './weather-icons/cloudy.png'
import cloudyRain from './weather-icons/cloudy (1).png'
import cloudyDouble from './weather-icons/cloudy (2).png'
import sun from './weather-icons/sun.png'

const data = [
	{min: '6', max: '17', icon: cloudyRain, humidity: "70-76", air: '1022-1055', day: 'Wednesday'},
	{min: '3', max: '14', icon: cloudyRain, humidity: "65-83", air: '1033-1053', day: 'Thursday'},
	{min: '2', max: '13', icon: sun, humidity: "40-57", air: '1042-1065', day: 'Friday'},
	{min: '7', max: '21', icon: sun, humidity: "30-35", air: '1011-1032', day: 'Saturday'},
	{min: '4', max: '18', icon: cloudy, humidity: "30-36", air: '1015-1036', day: 'Sunday'},
	{min: '6', max: '17', icon: cloudyDouble, humidity: "25-32", air: '1032-1056', day: 'Monday'},
	{min: '6', max: '16', icon: cloudyDouble, humidity: "24-36", air: '1013-1036', day: 'Tuesday'},
]

export default () => {
	return(
		<>
		<hr style={{color: '#c3c3c3', border: '1px solid'}}/>
		<div className="upcomingWeatherDisplay">
			{Array.from({ length: 7 }, (v, k) => k).map(day => (
				<div>
					<h3>{data[day].day}</h3>
					<p style={{lineHeight: 0, marginTop: '-10px', color: '#6F6A69'}}>{18 + day} May</p>
					<p style={{paddingTop: '10px'}}>Min: <bold className="textBold">+{data[day].min}°</bold></p>
					<p style={{marginTop: '-15px'}}>Max: <bold className="textBold">+{data[day].max}°</bold></p>
					<p style={{marginTop: '-15px'}}>Air Humidity: <bold className="textBold">{data[day].humidity}%</bold></p>
					<p style={{marginTop: '-15px'}}>Pressure: <bold className="textBold">{data[day].air}mm</bold></p>

					<img src={data[day].icon} alt="cloudy" />
				</div>
				))}
		</div>
		</>
	);
};