package tests;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import main.RunServer;

public class RunServerTest {
    @Test
    @DisplayName("Test run server")
    public void testRunServer() {
        String[] args = null;
        RunServer.main(args);
    }
}
