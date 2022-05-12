const weatherSource = {
    getCurrentWeather(params){
        return fetch(CURRENT_WEATHER + params.query)
        .then(response => { response.json()
        });
    },
    getSevenDayPrediction (params){
        return fetch(SEVEN_DAY_PREDICTION + params.query)
        .then(response => { response.json()
        });
    }
    
    
};