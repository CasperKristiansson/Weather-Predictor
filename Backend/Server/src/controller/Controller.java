package controller;

import integration.*;
import model.Day;

public class Controller {
    private DatabaseDAO databaseDAO;

    public Controller(){
        this.databaseDAO = new DatabaseDAO();
    }

    public Day getCurrentWeather(){
        Day day = null;
        try{
            day = this.databaseDAO.getCurrentWeather();
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        return day;
    }

    public Day getTodayWeather(){
        
        return null;
    }
}
