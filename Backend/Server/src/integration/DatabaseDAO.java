package integration;
import java.io.*;
import java.sql.*;
import java.util.*;

public class DatabaseDAO {
    private Connection connection;

    private static final String WEATHER_DATA_TABLE_NAME = "smhiData";
    


    public DatabaseDAO(){
        try{
            connectToDB();
            prepareStatements();
        }catch(SQLException | IOException e){
            System.out.println("Error:  " + e.getMessage());
        }
    } 

    private void connectToDB() throws SQLException, IOException{
        InputStream input = new FileInputStream("src/credentials/databaseCredentials.properties");
        Properties prop = new Properties();
        prop.load(input);

        String connectionString = prop.getProperty("connectionString");
        this.connection = DriverManager.getConnection(connectionString);
        System.out.println("Connected to database");
        this.connection.close();
    }

    private void insertWeatherData(String[] date, String[] time, int[] tempereture, int[] airPressure){

    }

    private void prepareStatements() throws SQLException{
        PreparedStatement getAll = connection.prepareStatement("SELECT * FROM ?");
    }

    public void insertWeatherData(){

    }
}