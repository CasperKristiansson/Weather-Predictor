package integration;

import java.io.*;
import java.sql.*;
import java.util.*;

import model.Day;

public class UploadPredictions {
    private Connection connection;

    public UploadPredictions() {
        try {
            connectToDB();
        } catch (SQLException | IOException e) {
            System.out.println("Error:  " + e.getMessage());
        }
    }

    /**
     * Connects to the database
     * 
     * @throws SQLException
     * @throws IOException
     */
    private void connectToDB() throws SQLException, IOException {
        InputStream input = new FileInputStream("src\\credentials\\databaseCredentials.properties");
        Properties prop = new Properties();
        prop.load(input);

        String connectionString = prop.getProperty("connectionString");
        this.connection = DriverManager.getConnection(connectionString);
        System.out.println("Connected to database");
    }

    /**
     * Uploads the predictions to the database
     * 
     * @param fileName
     * @throws SQLException
     * @throws IOException
     * 
    */
    public static ArrayList<Day> loadCSV(String fileName) throws IOException, SQLException {
        ArrayList<Day> dataObjects = new ArrayList<>();
        String line = "";
        String csvSplitBy = ",";

        BufferedReader br = new BufferedReader(new FileReader(fileName));
        while ((line = br.readLine()) != null) {
            String[] data = line.split(csvSplitBy);
            Day dataObject = new model.Day(data[0], data[1], Float.parseFloat(data[2]), Float.parseFloat(data[3]), Float.parseFloat(data[4]));
            dataObjects.add(dataObject);
        }

        br.close();

        return dataObjects;
    }

    public void uploadPredictions(ArrayList<Day> dataObjects) throws SQLException, IOException {
        for (Day dataObject : dataObjects) {
            String sql = "INSERT INTO predictions (date, time, temperature, airPressure, humidity) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = this.connection.prepareStatement(sql);
            preparedStatement.setString(1, dataObject.getDate());
            preparedStatement.setString(2, dataObject.getTime());
            preparedStatement.setFloat(3, dataObject.getTemperature());
            preparedStatement.setFloat(4, dataObject.getAirPressure());
            preparedStatement.setFloat(5, dataObject.getHumidity());
            preparedStatement.executeUpdate();

            System.out.println("Inserted " + dataObject.getDate() + " " + dataObject.getTime());
        }
    }

    public static void main(String[] args) throws SQLException, IOException {
        UploadPredictions upload = new UploadPredictions();
        ArrayList<Day> dataObjects = UploadPredictions.loadCSV("..\\Data\\Upload Data\\predictions.csv");
        for (Day dataObject : dataObjects) {
            System.out.println(dataObject);
        }
        // upload.uploadPredictions(dataObjects);
    }
}
