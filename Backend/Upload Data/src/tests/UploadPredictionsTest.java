package tests;

import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.ArrayList;

import static org.junit.Assert.assertTrue;
import org.junit.Test;
import org.junit.Before;

import integration.UploadPredictions;
import model.Day;

public class UploadPredictionsTest {
    private UploadPredictions uploadPredictions;

    @Before 
    public void init() {
        this.uploadPredictions = new UploadPredictions();
    }

    @Test
    public void testLoadCSV()  {
        try {
            ArrayList<Day> pastWeather = this.uploadPredictions.loadCSV("../Data/Processed Data/smhi_data.csv");
            assertTrue(pastWeather.size() > 0);
        } catch (IOException | SQLException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testUploadPredictions() {
        try {
            ArrayList<Day> dataObjects = this.uploadPredictions.loadCSV("../Data/Upload Data/predictions.csv");
        } catch (IOException | SQLException e) {
            e.printStackTrace();
        }
    }
}
