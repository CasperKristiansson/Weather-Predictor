package main.runnable;

import java.net.*;
import java.nio.charset.StandardCharsets;
import java.io.*;
import controller.*;
import model.*;
import org.json.*;


public class ClientHandler extends Thread {
    private Socket clientSocket = null;
    private int BUFFERSIZE = 1024;

    public ClientHandler(Socket clientSocket) {
        this.clientSocket = clientSocket;
    }

    @Override
    public void run() {

        try {
            byte buffer[] = new byte[BUFFERSIZE];
            // Create input and output streams
            InputStream inputStream = clientSocket.getInputStream();
            OutputStreamWriter outputStreamWriter = new OutputStreamWriter(clientSocket.getOutputStream(), StandardCharsets.UTF_8);

            // Create data input and output streams
            try {
                inputStream.read(buffer);
                String clientData = new String(buffer, StandardCharsets.UTF_8);
                //System.out.println("Client data: " + clientData);

                String[] lines = clientData.split("\r\n");
                String GETLine = lines[0];
                String[] GETLineArray = GETLine.split(" ");

                if (!GETLineArray[0].equals("GET") || !GETLineArray[2].equals("HTTP/1.1")) {
                    throw new Exception("HTTP/1.1 400 Bad Request");
                }

                String url = GETLineArray[1];
                String[] urlArray = url.split("\\?");

                if (!urlArray[0].equals("/current_weather") || urlArray.length == 0) {
                    throw new Exception("HTTP/1.1 404 Not Found");
                }
                //if (urlArray.length < 2) {
                //    throw new Exception("HTTP/1.1 400 Bad Request");
                //}
                
                Controller controller = new Controller();
                Day day = controller.getCurrentWeather();

                JSONObject jsonObject = new JSONObject();
                jsonObject.put("date", day.getDate());
                jsonObject.put("temperature", day.getTemperature());
                jsonObject.put("airPressure", day.getAirPressure());
                jsonObject.put("humidity", day.getHumidity());
                // Write data to client
                System.out.println(jsonObject.toString());
                outputStreamWriter.write("HTTP/1.1 200 OK \r\n\r\n");
                outputStreamWriter.write(jsonObject.toString());
                outputStreamWriter.flush();
            } catch (Exception e) {
                outputStreamWriter.write(e.getMessage());
                outputStreamWriter.flush();
            }
        } catch (Exception e) {
            System.out.println("ClientHandler ERROR: " + e.getMessage());

        } finally {
            try {
                clientSocket.close();
                System.out.println("Client disconnected");
            } catch (Exception e) {
                System.out.println("ClientHnalder ERROR: " + e.getMessage());
            }
        }
    }

}
