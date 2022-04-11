import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ManualUpload {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        String hostName = "weatherbrain.database.windows.net";
        String dbName = "weatherbrain";
        String user = "weatherbrain";
        String password = "@weatherbrain1";
        String url = String.format("jdbc:sqlserver://%s.database.windows.net:1433;database=%s;user=%s;password=%s;encrypt=true;hostNameInCertificate=*.database.windows.net;loginTimeout=30;", hostName, dbName, user, password);
        Connection conn = DriverManager.getConnection(url, user, password);
        conn.close();
    }
}
