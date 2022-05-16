export const weatherSource = {
    getCurrentWeather(){
        return fetch("http://40.113.6.64/current_weather",{
            method: "GET",
        }).then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
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