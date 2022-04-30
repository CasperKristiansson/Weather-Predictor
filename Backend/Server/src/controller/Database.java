package controller;

import integration.*;

public class Database {

    public Database(){
        DatabaseDAO dao = new DatabaseDAO();
        dao.insertWeatherData();
    }
}
