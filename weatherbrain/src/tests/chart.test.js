import { draw } from '../components/chart.js'
import { strict as assert } from 'node:assert';

test("Testing calculations", () => {
    let data1 =
    {
        temperature: 10,
        date: "2022-05-17 12:00:19.293"
    }


    let data2 =
    {
        temperature: 10,
        date: "2022-05-18 12:00:19.293"
    }

    let data = [data1, data2]

    let ret = ["10.0", "10.0", 0, 0, 0, 0, 0]

    const temp = draw(data, 2);
    expect(temp).toEqual(ret);
});