import { weatherSource } from "../js/fetch";

it('should return a promise, getCurrentWeather', () => {
  expect(weatherSource.getCurrentWeather()).toBeInstanceOf(Promise);
});

it('should return a promise, getSevenDayPrediction', () => {
    expect(weatherSource.getSevenDayPrediction()).toBeInstanceOf(Promise);
  });

  it('should return a promise, getSMHIPrediction', () => {
    expect(weatherSource.getSMHIPrediction()).toBeInstanceOf(Promise);
  });
