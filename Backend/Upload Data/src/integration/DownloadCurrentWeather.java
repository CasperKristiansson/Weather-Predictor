package integration;

import java.io.*;
import java.sql.*;
import java.text.ParseException;
import java.util.*;

import model.Day;


public class DownloadCurrentWeather {
    private Connection connection;

    public DownloadCurrentWeather() {
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
    public ArrayList<Day> loadCSV(String fileName) throws IOException, SQLException {
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


    /**
     * Get the past two days of weather data from the database
     * 
     * @throws SQLException
     * @throws IOException
     * @throws ParseException
     */
    public ArrayList<Day> getLatestWeather() throws SQLException, IOException, ParseException {
        ArrayList<Day> dataObjects = new ArrayList<>();
        
        String query = "SELECT TOP(48) * FROM [dbo].[smhi_data] ORDER BY date DESC";
        Statement stmt = connection.createStatement();
        ResultSet rs = stmt.executeQuery(query);

        while (rs.next()) {
            Day dataObject = new Day(
                rs.getString("date"),
                rs.getFloat("temperature"),
                rs.getFloat("air_pressure"),
                rs.getFloat("humidity")
            );
            dataObjects.add(dataObject);
        }

        return dataObjects;
    }

    public ArrayList<Day> compareWeather(ArrayList<Day> pastWeather, ArrayList<Day> databaseWeather) {
        Day pastWeatherLast = pastWeather.get(pastWeather.size() - 1);
        
        for (Day weather : databaseWeather) {
            if (weather.getDate().compareTo(pastWeatherLast.getDate()) > 0) {
                pastWeather.add(weather);
            }
        }

        return pastWeather;
    }

    public void saveCSV(ArrayList<Day> dataObjects) throws IOException {
        FileWriter writer = new FileWriter("..\\Data\\Processed Data\\smhi_data.csv");
        writer.append("Date,Temperature,Air Pressure,Humidity");
        writer.append("\n");

        for (Day dataObject : dataObjects) {
            writer.append(dataObject.getDate());
            writer.append(",");
            writer.append(String.valueOf(dataObject.getTemperature()));
            writer.append(",");
            writer.append(String.valueOf(dataObject.getAirPressure()));
            writer.append(",");
            writer.append(String.valueOf(dataObject.getHumidity()));
            writer.append("\n");
        }

        writer.flush();
        writer.close();
    }

    public static void main(String[] args) throws SQLException, IOException, ParseException {
        DownloadCurrentWeather upload = new DownloadCurrentWeather();
        ArrayList<Day> pastWeather = upload.loadCSV("..\\Data\\Processed Data\\smhi_data.csv");
        
        ArrayList<Day> databaseWeather = upload.getLatestWeather();
        ArrayList<Day> updatedPastWeather = upload.compareWeather(pastWeather, databaseWeather);

        upload.saveCSV(updatedPastWeather);
    }
}
