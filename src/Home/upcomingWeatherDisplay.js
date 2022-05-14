import './upcomingWeatherDisplay.css';
import cloudy from './weather-icons/cloudy.png'

export default () => {
	return(
		<>
		<hr style={{color: '#c3c3c3', borderTop: '1px solid'}}/>
		<div className="upcomingWeatherDisplay">
			{Array.from({ length: 7 }, (v, k) => k).map(day => (
				<div>
					<h3>FRIDAY</h3>
					<p>24 July</p>
					<p>Min: +17°</p>
					<p>Max: +27°</p>
					<p>Air Humidity: <bold className="textBold">42-76%</bold></p>
					<p>Pressure: <bold className="textBold">750-800mm</bold></p>

					<img src={cloudy} alt="cloudy" />
				</div>
				))}
			
		</div>
		</>
	);
};