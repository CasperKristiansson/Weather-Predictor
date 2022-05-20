package tests;

import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.ArrayList;

import static org.junit.Assert.assertTrue;
import org.junit.Test;
import org.junit.Before;

import integration.DownloadCurrentWeather;
import model.Day;

public class DownloadCurrentWeatherTest {
    private DownloadCurrentWeather downloadCurrentWeather;
    @Before 
    public void init() {
        this.downloadCurrentWeather = new DownloadCurrentWeather();
    }
    
    @Test
    public void testLoadCSV()  {
        try {
            ArrayList<Day> pastWeather = this.downloadCurrentWeather.loadCSV("../Data/Processed Data/smhi_data.csv");
            assertTrue(pastWeather.size() > 0);
        } catch (IOException | SQLException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testGetLatestWeather() {
        try {
            this.downloadCurrentWeather.connectToDB();
            ArrayList<Day> latestWeather = this.downloadCurrentWeather.getLatestWeather();
            assertTrue(latestWeather.size() > 0);
        } catch (IOException | SQLException | ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testCompareWeather() {
        try {
            this.downloadCurrentWeather.connectToDB();
            ArrayList<Day> latestWeather = this.downloadCurrentWeather.getLatestWeather();
            ArrayList<Day> pastWeather = this.downloadCurrentWeather.loadCSV("../Data/Processed Data/smhi_data.csv");
            ArrayList<Day> weatherDifference = this.downloadCurrentWeather.compareWeather(latestWeather, pastWeather);
            assertTrue(weatherDifference.size() > 0);
        } catch (IOException | SQLException | ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testSaveCSV() throws IOException, SQLException {
        try {
            ArrayList<Day> pastWeather = this.downloadCurrentWeather.loadCSV("../Data/Processed Data/smhi_data.csv");

            this.downloadCurrentWeather.connectToDB();
            ArrayList<Day> latestWeather = this.downloadCurrentWeather.getLatestWeather();
            ArrayList<Day> weatherDifference = this.downloadCurrentWeather.compareWeather(latestWeather, pastWeather);

            this.downloadCurrentWeather.saveCSV(weatherDifference);
            this.downloadCurrentWeather.saveCSV(pastWeather);
            
        } catch (IOException | SQLException | ParseException e) {
            e.printStackTrace();
        }
    }
}
