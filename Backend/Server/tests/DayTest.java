import static org.junit.Assert.assertEquals;
import org.junit.*;
import model.Day;

public class DayTest{
    private Day day = null;

    @Before
    public void start() {
        System.out.println("=======Starting junit 4 model.Day test========");
    }
 
    @Before
    public void setup() {
        System.out.println("Setting up model.Day");
        day = new Day("2020-01-01", 1, 2, 3);
    }

    @Test
    public void testDay(){
        assertEquals("2020-01-01", day.getDate());
        assertEquals(1, day.getTemperature());
        assertEquals(2, day.getAirPressure());
        assertEquals(3, day.getHumidity());
    }
}