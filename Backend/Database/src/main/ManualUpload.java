package main;
import main.Database;

public class ManualUpload {
    public static void main(String[] args) throws Exception {
        Database db = new Database();
        db.connect();
        db.disconnect();
    }
}
