import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Before;
import org.junit.Test;
import model.Day;

import java.io.*;
import java.sql.*;


import integration.DatabaseDAO;

public class DatabaseDAOTest {
    private DatabaseDAO dao;
    private List<Day> days;
    private Day current;

    @Before
    public void start() {
        System.out.println("=======Starting junit 4 integration.DatabaseDAO test========");
    }

    @Before
    public void setup() {
        System.out.println("Setting up integration.DatabaseDAO test");
        this.dao = new DatabaseDAO();
        try{
            this.days = dao.get7DaysAhead();
            this.current = dao.getCurrentWeather();
        }catch(Exception e){
            System.out.println("Error:  " + e.getMessage());
        }
    }

    @Test
    public void testGet7DaysAhead(){
        System.out.println("Testing integration.DatabaseDAO.get7DaysAhead");
        List<Day> expected = new ArrayList<>();
        try{
            InputStream input = new FileInputStream("src/credentials/databaseCredentials.properties");
            Properties prop = new Properties();
            prop.load(input);
            String connectionString = prop.getProperty("connectionString");
            Connection connection = DriverManager.getConnection(connectionString);
            PreparedStatement getCurrent = connection.prepareStatement("SELECT * FROM [dbo].[prediction_data]");
            ResultSet resultSet = getCurrent.executeQuery();
            while(resultSet.next()){
                expected.add(new Day(
                    resultSet.getString("date"),
                    resultSet.getFloat("temperature"),
                    resultSet.getFloat("air_pressure"),
                    resultSet.getFloat("humidity")
                ));
            }
        }catch(Exception e){
            System.out.println("Error:  " + e.getMessage());
        }
        for(int i = 0; i < expected.size(); i++){
            assertEquals(expected.get(i).getDate(), days.get(i).getDate());
            assertEquals(expected.get(i).getTemperature(), days.get(i).getTemperature());
            assertEquals(expected.get(i).getAirPressure(), days.get(i).getAirPressure());
            assertEquals(expected.get(i).getHumidity(), days.get(i).getHumidity());
        }
    }

    @Test
    public void testGetCurrentWeather(){
        System.out.println("Testing integration.DatabaseDAO.getCurrentWeather");
        Day expected = null;
        try{
            InputStream input = new FileInputStream("src/credentials/databaseCredentials.properties");
            Properties prop = new Properties();
            prop.load(input);
            String connectionString = prop.getProperty("connectionString");
            Connection connection = DriverManager.getConnection(connectionString);
            PreparedStatement getCurrent = connection.prepareStatement("SELECT * from [dbo].[smhi_data] WHERE date=(SELECT MAX(date) from [dbo].[smhi_data])");
            ResultSet resultSet = getCurrent.executeQuery();
            if(resultSet.next()){
                expected = new Day(
                    resultSet.getString("date"),
                    resultSet.getFloat("temperature"),
                    resultSet.getFloat("air_pressure"),
                    resultSet.getFloat("humidity")
                    );
            }
        }catch(Exception e){
            System.out.println("Error:  " + e.getMessage());
        }
        assertEquals(expected.getDate(), current.getDate());
        assertEquals(expected.getTemperature(), current.getTemperature());
        assertEquals(expected.getAirPressure(), current.getAirPressure());
        assertEquals(expected.getHumidity(), current.getHumidity());
    }
}
