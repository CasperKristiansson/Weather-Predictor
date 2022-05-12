package tests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import model.Day;

public class DayTest{
    private Day day = null;

    @Test
    public void testDay(){
        day = new Day("2020-01-01", 1, 2, 3);
        assertEquals("2020-01-01", day.getDate());
        assertEquals(1, day.getTemperature());
        assertEquals(2, day.getAirPressure());
        assertEquals(3, day.getHumidity());
    }
}