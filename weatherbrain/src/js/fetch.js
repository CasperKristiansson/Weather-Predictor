export const weatherSource = {
    getCurrentWeather(){
        return fetch("http://40.113.6.64/current_weather")
        .then(response => { response.json()
        });
    },
    getSevenDayPrediction (){
        return fetch("http://40.113.6.64/forecast")
        .then(response => { response.json()
        });
    },
    getGraphData(){
        return fetch("" + params.query)
        .then(response => { response.json()
        });
    }
};