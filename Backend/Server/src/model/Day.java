package model;

public class Day {
    private String date;
    private float temperature;
    private float air_pressure;
    private int humidity;

    public Day(String date, float temperature, float air_pressure, int humidity) {
        this.date = date;
        this.temperature = temperature;
        this.air_pressure = air_pressure;
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
        return air_pressure;
    }

    /**
     * 
     * @return the humidity
     */
    public int getHumidity() {
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
    public void setAirPressure(float air_pressure) {
        this.air_pressure = air_pressure;
    }

    /**
     * 
     * @param humidity the humidity to set
     */
    public void setHumidity(int humidity) {
        this.humidity = humidity;
    }


    @Override
    public String toString() {
        return "Day [date=" + date + ", temperature=" + temperature + ", airPressure=" + air_pressure + ", humidity=" + humidity + "]";
    }
}
