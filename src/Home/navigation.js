import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default () => {

	return(
		<>
		<div className="navigationBar">
			<a className="logoText">
				WeatherBrain
			</a>
			<p className="weatherPosition">
				<FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp; Weather in <bold className="textBold">Stockholm, Sweden</bold> region
			</p>
		</div>
		</>
	);
};