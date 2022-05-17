package tests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.*;
import model.Day;

public class DayTest{
    private Day day = null;

    @BeforeAll
    public static void start() {
        System.out.println("=======Starting junit 5 tests========");
    }
 
    @BeforeEach
    public void setup() {
        System.out.println("Setting up model.Day");
        day = new Day("2020-01-01", 1, 2, 3);
    }

    @Test
    @DisplayName("Test day class model")
    public void testDay(){
        assertEquals("2020-01-01", day.getDate());
        assertEquals(1, day.getTemperature());
        assertEquals(2, day.getAirPressure());
        assertEquals(3, day.getHumidity());
    }
}