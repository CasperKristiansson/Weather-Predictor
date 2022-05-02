package controller;

import integration.*;
import model.Day;

public class Controller {
    private DatabaseDAO databaseDAO;

    public Controller(){
        this.databaseDAO = new DatabaseDAO();
    }

    public void getCurrentWeather(){

    }

    public Day getTodayWeather(){
        return null;
    }
}
