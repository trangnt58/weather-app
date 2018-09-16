import { FahrenheitCelsiusPipe } from './fahrenheit-celsius.pipe';

describe('FahrenheitCelsiusPipe', () => {
  it('create an instance', () => {
    const pipe = new FahrenheitCelsiusPipe();
    expect(pipe).toBeTruthy();
  });
});
