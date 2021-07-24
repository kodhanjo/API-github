import { TimePasedCountPipe } from './time-pased-count.pipe';

describe('TimePasedCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TimePasedCountPipe();
    expect(pipe).toBeTruthy();
  });
});
