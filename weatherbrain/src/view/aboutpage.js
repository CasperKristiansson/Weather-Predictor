import '../styling/pages/aboutpage.css';
import architect from '../img/architect.png';
import developer from '../img/developer.png';
import leadership from '../img/leadership.png';
import sustainable from '../img/sustainable.png';
import team from '../img/team.png';
import testing from '../img/testing.png';

function Aboutpage  ()  {
    return (
        <>
            <h1>About Us</h1>

            <div className="infoContainer">
                <h2>About the application</h2>
                <p>
                    WeatherBrain is a web application that allows you to check the weather in Stockholm with the help of a local weatherstation and historic data from the location. 
                    The application uses machine learing to predict the weather in the future. The goal of the application is to see how close to the actual temperature the machine learning model is.
                </p>
                <p>
                    The application is developed by a group of students at the Royal Institute of Technology in Stockholm for the course II1302, Projects and Project Methods. 
                    A lot of the focus devoloping this application is on going about the project method the right way. Each person has a different role in the project with tasks to make sure the the project goes smooth and the application is developed in the best way possible.
                </p>
            </div>
            <h2>Team</h2>
            <div className="teamContainer">
                <div className='leader'>
                    <img alt="leader" src={leadership}/>
                    <p>
                        <b>Team leader:</b><br/> Casper Kristiansson
                    </p>
                </div>
                <div className='stakholder'>
                    <img alt="Stakeholder" src={team}/>
                    <p>
                        <b>Stakeholder rep:</b><br/> Ville Vik
                    </p>
                </div>
                <div className='developer'>
                    <img alt="Developement" src={developer}/>
                    <p>
                        <b>Developement:</b><br/> Fredrik Lundström
                    </p>
                </div>
                <div className='tester'>
                    <img alt="Testing" src={testing}/>
                    <p>
                        <b>Testing:</b><br/> Philip Hägg
                    </p>
                </div>
                <div className='architect'>
                    <img alt="Architect" src={architect}/>
                    <p>
                        <b>Architect:</b><br/> Fredrik Janetzky
                    </p>
                </div>
                <div className='sustainability'>
                    <img alt="Sustainable" src={sustainable}/>
                    <p>
                        <b>Sustainability:</b><br/> Daniel Chouster
                    </p>
                </div>
            </div>
        </>
    );
}
export default Aboutpage;