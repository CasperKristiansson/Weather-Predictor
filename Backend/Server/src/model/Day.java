package model;

public class Day {
    private String date;
    private float temperature;
    private float airPressure;
    private float humidity;

    public Day(String date, float temperature, float airPressure, float humidity){
        this.date = date;
        this.temperature = temperature;
        this.airPressure = airPressure;
        this.humidity = humidity;
    }

    /*GETTERS*/
    /**
     * @return the date
     */
    public String getDate() {
        return date;
    }

    /**
     * 
     * @return the temperature
     */
    public float getTemperature() {
        return temperature;
    }

    /**
     * 
     * @return the airPressure
     */
    public float getAirPressure() {
        return airPressure;
    }

    /**
     * 
     * @return the humidity
    */  
    public float getHumidity() {
        return humidity;
    }

    /*SETTERS*/
    /**
     * @param date the date to set
     */
    public void setDate(String date) {
        this.date = date;
    }
    
    /**
     * 
     * @param temperature the temperature to set
     */
    public void setTemperature(float temperature) {
        this.temperature = temperature;
    }

    /**
     * 
     * @param airPressure the airPressure to set
     */
    public void setAirPressure(float airPressure) {
        this.airPressure = airPressure;
    }

    /**
     * 
     * @param humidity the humidity to set
    */
    public void setHumidity(float humidity) {
        this.humidity = humidity;
    }

    @Override
    public String toString() {
        return "Day [date=" + date + ", temperature=" + temperature + ", airPressure=" + airPressure + ", humidity=" + humidity + "]";
    }
}
