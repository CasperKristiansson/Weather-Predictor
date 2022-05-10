package model;

public class Day {
    private String date;
    private String time;
    private float temperature;
    private float airPressure;

    public Day(String date, String time, float temperature, float airPressure){
        this.date = date;
        this.time = time;
        this.temperature = temperature;
        this.airPressure = airPressure;
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
     * @return the time
     */
    public String getTime() {
        return time;
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

    /*SETTERS*/
    /**
     * @param date the date to set
     */
    public void setDate(String date) {
        this.date = date;
    }

    /**
     * 
     * @param time the time to set
     */
    public void setTime(String time) {
        this.time = time;
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
}
