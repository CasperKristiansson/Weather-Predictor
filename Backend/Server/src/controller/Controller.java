package controller;

import integration.*;
import model.Day;
import java.util.*;

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
            System.out.println("Controller ERROR: " + e.getMessage());
        }
        return day;
    }

    public List<Day> get7DaysAhead(){
        List<Day> days = new ArrayList<>();
        try{
            days = this.databaseDAO.get7DaysAhead();
        }catch(Exception e){
            System.out.println("Controller ERROR: " + e.getMessage());
        }
        return days;
    }
}
