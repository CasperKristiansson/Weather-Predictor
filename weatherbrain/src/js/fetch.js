export const weatherSource = {
    getCurrentWeather(){
        return fetch("http://40.113.6.64/current_weather",{
            method: "GET",
            origin: "http://localhost:3000"
        });
    },
    getSevenDayPrediction (){
        return fetch("http://40.113.6.64/forecast",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "no-cors",
        });
    },
    getGraphData(){
        // return fetch("" + params.query)
        // .then(response => { response.json()
        // });
    }
};