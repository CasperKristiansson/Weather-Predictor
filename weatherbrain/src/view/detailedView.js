import '../styling/pages/detailedView.css';
//import { Graph } from "../components/plotGraph";

//Average
//Humidity
//statistics
//Highest
//History, last week?


const month = 
["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = new Date();
var startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
let nameOfMonth = month[currentDate.getMonth()];
var weekNumber = Math.ceil((currentDate.getDay() + 1 + days) / 7);
let year = startDate.getYear();

export const DetailedView = () => {
    return (
        <div className="detailContainer">
            <h2>Statistics for current week</h2> 
            <div className="statistics">
                Average temperature: <br></br>
                Lowest temperature: <br></br>
                Highest temperature: 
                <br></br><br></br>
            </div>
            <h2>Statistics for last week (week number {weekNumber - 1})</h2>
            <div className="statistics">

                Average temperature: <br></br>
                Lowest temperature: <br></br>
                Highest temperature: 
                <br></br><br></br>
            </div>
            <h2>Statistics for {nameOfMonth} {1900 + year}</h2>
            <div className="statistics">

                Average temperature: <br></br>
                Lowest temperature: <br></br>
                Highest temperature: 
                <br></br><br></br>
            </div>
        </div>


        // <div>
        //     <Graph />
        // </div>
    );

}

