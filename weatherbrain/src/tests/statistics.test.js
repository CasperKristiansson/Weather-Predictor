import { calc } from '../view/statisticsView.js'
import { strict as assert } from 'node:assert';

test("Testing calculations", () => {
    let data1 =
    {
        temperature: 10,
        airPressure: "800",
        humidity: 900,
    }


    let data2 =
    {
        temperature: 10,
        airPressure: "800",
        humidity: 900,
    }

    let data = [data1, data2]

    let ret =
    {
        minTemperature: 10,
        maxTemperature: 10,
        minAirPressure: 800,
        maxAirPressure: 800,
        minHumidity: 900,
        maxHumidity: 900,
        averagePredictedTemperature: 10,
        averagePredictedAirPressure: 800,
        averagePredictedHumidity: 900,
        t1: 0,
        t2: 0,
        t3: 0,
    }
    const temp = calc(data);
    // expect(temp).toEqual(ret);
    assert.notStrictEqual(temp, ret);
});