package integration;

import java.io.*;
import java.sql.*;
import java.util.*;

import model.Day;

public class DatabaseDAO {
    private Connection connection;
    private String SMHI_TABLE_NAME = "smhi_data";

    private PreparedStatement get7DaysAhead;
    private PreparedStatement getCurrent;

    public DatabaseDAO() {
        try {
            connectToDB();
            prepareStatements();
        } catch (SQLException | IOException e) {
            System.out.println("Error:  " + e.getMessage());
        }
    }

    private void connectToDB() throws SQLException, IOException {
        InputStream input = new FileInputStream("src/credentials/databaseCredentials.properties");
        Properties prop = new Properties();
        prop.load(input);

        String connectionString = prop.getProperty("connectionString");
        this.connection = DriverManager.getConnection(connectionString);
        System.out.println("Connected to database");
    }

    public void closeConnection() throws SQLException {
        this.connection.close();
        System.out.println("Disconnected from database");
    }

    /**
     * Return weather 7 days ahead from the current date
     * @return
     * @throws SQLException
     */
    public List<Day> get7DaysAhead() throws SQLException {
        List<Day> days = new ArrayList<>();
        get7DaysAhead.setString(1, SMHI_TABLE_NAME);
        get7DaysAhead.setString(2, new Timestamp(System.currentTimeMillis()).toString());
        ResultSet resultSet = get7DaysAhead.executeQuery();
        while(resultSet.next()){
            days.add(new Day(
                resultSet.getString("date"),
                resultSet.getFloat("temperature"),
                resultSet.getFloat("air_pressure"),
                resultSet.getFloat("humidity")
            ));
        }
        return days;
    }

    /**
     * @return the current weather
     * @return
     * @throws SQLException
     */
    public Day getCurrentWeather() throws SQLException{
        Day day = null;
        ResultSet resultSet = getCurrent.executeQuery();
        if(resultSet.next()){
            day = new Day(
                resultSet.getString("date"),
                resultSet.getFloat("temperature"),
                resultSet.getFloat("air_pressure"),
                resultSet.getFloat("humidity")
                );
        }
        return day;
    }

    private void prepareStatements() throws SQLException {
        get7DaysAhead = connection.prepareStatement("SELECT * FROM [dbo].[prediction_data]");
        getCurrent = connection.prepareStatement("SELECT * from [dbo].[smhi_data] WHERE date=(SELECT MAX(date) from [dbo].[smhi_data])");
    }




    public Day getWeather(){
        return null;
    }
}