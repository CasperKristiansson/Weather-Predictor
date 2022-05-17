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
        }).then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        });
    },
};