package integration;

import java.io.*;
import java.sql.*;
import java.util.*;

import java.io.File;
import java.util.Scanner;

public class DatabaseDAO {
    private Connection connection;

    private static final String WEATHER_DATA_TABLE_NAME = "smhiData";
    private static final String WEATHER_DATA_DATE_COLUMN_NAME = "date";
    private static final String WEATHER_DATA_TEMPERATURE_COLUMN_NAME = "temperature";
    private static final String WEATHER_DATA_AIR_PRESSURE_COLUMN_NAME = "airPressure";

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

    public void insertWeatherData() {
        File file = new File("src/data/smhi_data.txt");
        try {
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                PreparedStatement query = connection.prepareStatement(scanner.nextLine());
                query.executeUpdate();
                connection.commit();
            }
            System.out.println("DONE");
            scanner.close();
        } catch (FileNotFoundException | SQLException e) {
            System.out.println("Error:  " + e.getMessage());
        }
    }

    private void prepareStatements() throws SQLException {
        PreparedStatement getAll = connection.prepareStatement("SELECT * FROM ?");
    }
}