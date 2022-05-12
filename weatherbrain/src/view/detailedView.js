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
let year = startDate.getYear() + 1900;

export const DetailedView = () => {
    return (
        <>
            <div className="statHeader">
                <h1>Statistics</h1>
            </div>
            <div className="detailContainer">

                <div className="row1">
                    <div className="box1">
                        <h2>This week (week number {weekNumber})</h2>
                        <div className="statistics">
                            Average temperature: <br></br>
                            Lowest temperature: <br></br>
                            Highest temperature: <br></br><br></br>

                            Average humidity: <br></br>
                            Lowest humidity: <br></br>
                            Highest humidity:
                        </div>

                        {/* <br></br><br></br> */}
                    </div>

                    <div className="box2">
                        <h2>Previous week (week number {weekNumber - 1})</h2>
                        <div className="statistics">

                            Average temperature: <br></br>
                            Lowest temperature: <br></br>
                            Highest temperature: <br></br><br></br>

                            Average humidity: <br></br>
                            Lowest humidity: <br></br>
                            Highest humidity:
                        </div>
                        {/* <br></br><br></br> */}
                    </div>
                </div>
                <div className="row2">

                    <div className="box3">

                        <h2>{nameOfMonth} {year}</h2>
                        <div className="statistics">

                            Average temperature: <br></br>
                            Lowest temperature: <br></br>
                            Highest temperature: <br></br><br></br>

                            Average humidity: <br></br>
                            Lowest humidity: <br></br>
                            Highest humidity:
                            {/* <br></br><br></br> */}
                        </div>
                        </div>

                        <div className="box4">

                            <h2>Prediction for the next seven days</h2>
                            <div className="statistics">

                                Average temperature: <br></br>
                                Lowest temperature: <br></br>
                                Highest temperature: <br></br><br></br>

                                Average humidity: <br></br>
                                Lowest humidity: <br></br>
                                Highest humidity:
                            </div>
                        

                    </div>
                </div>
            </div>
        </>
    );

}

