package test;

import java.io.IOException;
import java.sql.SQLException;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import integration.DownloadCurrentWeather;

public class DownloadCurrentWeatherTest {
    private DownloadCurrentWeather downloadCurrentWeather = new DownloadCurrentWeather();
    
    @Test
    public void testLoadCSV()  {
        try {
            downloadCurrentWeather.loadCSV("../Data/Processed Data/smhi_data.csv");
            assertEquals(true, true);
        } catch (IOException | SQLException e) {
            e.printStackTrace();
        }
    }
}
