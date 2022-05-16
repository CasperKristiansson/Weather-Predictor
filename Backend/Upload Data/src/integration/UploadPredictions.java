package integration;

import java.io.*;
import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.sql.Timestamp;

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
        br.readLine();
        while ((line = br.readLine()) != null) {
            String[] data = line.split(csvSplitBy);
            Day dataObject = new model.Day(data[0], Float.parseFloat(data[1]), Float.parseFloat(data[2]), Float.parseFloat(data[3]));
            dataObjects.add(dataObject);
        }

        br.close();

        return dataObjects;
    }

    public void uploadPredictions(ArrayList<Day> dataObjects) throws SQLException, IOException, ParseException {
        String sqlDelete = "DELETE FROM prediction_data";
        PreparedStatement statement = connection.prepareStatement(sqlDelete);
        statement.executeUpdate();

        for (Day dataObject : dataObjects) {
            String sql = "INSERT INTO prediction_data (date, temperature, air_pressure, humidity) VALUES (?, ?, ?, ?)";

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSSSSS");
            java.util.Date date = sdf.parse(dataObject.getDate());
            java.sql.Timestamp dateSql = new java.sql.Timestamp(date.getTime());

            PreparedStatement preparedStatement = this.connection.prepareStatement(sql);
            preparedStatement.setTimestamp(1, dateSql);
            preparedStatement.setFloat(2, dataObject.getTemperature());
            preparedStatement.setFloat(3, dataObject.getAirPressure());
            preparedStatement.setFloat(4, dataObject.getHumidity());
            preparedStatement.executeUpdate();
        }
    }

    public static void main(String[] args) throws SQLException, IOException, ParseException {
        UploadPredictions upload = new UploadPredictions();
        ArrayList<Day> dataObjects = UploadPredictions.loadCSV("..\\Data\\Upload Data\\predictions.csv");
        for (Day dataObject : dataObjects) {
            System.out.println(dataObject);
        }
        upload.uploadPredictions(dataObjects);
    }
}
