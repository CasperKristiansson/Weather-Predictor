package main;

import java.net.*;
import main.runnable.ClientHandler;

public class RunServer {
    public static void main(String[] args) {
        try(ServerSocket serverSocket = new ServerSocket(80);){
            System.out.println("Server started");
            while(true){
                try{
                    Socket clientSocket = serverSocket.accept();
                    System.out.println("Client connected");
                    ClientHandler clientHandler = new ClientHandler(clientSocket);
                    clientHandler.run();
                }catch(SocketException e){
                    System.out.println("Server stopped");
                    break;
                }
            }
        }catch(Exception e){
            System.out.println("ERROR:  " + e.getMessage());
            System.out.println("Server is already running");
        }
    }
}
