package integration;
import java.io.*;
import java.sql.*;
import java.util.*;

public class DatabaseDAO {
    private Connection connection;

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

    private void prepareStatements() throws SQLException{
        
    }

    public void insertWeatherData(){

    }
}