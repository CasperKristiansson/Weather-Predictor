package main.runnable;

import java.net.*;
import java.io.*;

public class ClientHandler {
    private Socket clientSocket = null;

    public ClientHandler(Socket clientSocket) {
        this.clientSocket = clientSocket;
    }

    public void run() {
        try {
            // Create input and output streams
            InputStream inputStream = clientSocket.getInputStream();
            OutputStream outputStream = clientSocket.getOutputStream();

            // Create data input and output streams
            DataInputStream dataInputStream = new DataInputStream(inputStream);
            DataOutputStream dataOutputStream = new DataOutputStream(outputStream);

            // Read data from client
            String clientData = dataInputStream.readUTF();
            System.out.println("Client data: " + clientData);

            
            
            // Write data to client
            dataOutputStream.writeUTF("Hello client");
        } catch (Exception e) {
            System.out.println("ERROR: " + e.getMessage());
        } finally {
            try {
                clientSocket.close();
            } catch (Exception e) {
                System.out.println("ERROR: " + e.getMessage());
            }
        }
    }
    
}
