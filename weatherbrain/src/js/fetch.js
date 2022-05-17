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
    // 59°31′N 17°55′E UPPLANDS VÄSBY VILLES KOORDINATER 59.513157351007344, 17.96607758060666
    getSMHIPrediction (){
        return fetch("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/17.96/lat/59.51/data.json",{
            method: "GET",
        }).then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        });
    }

};