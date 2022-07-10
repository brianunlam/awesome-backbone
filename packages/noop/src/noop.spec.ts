import { noop } from '.';

describe('doSomething', () => {
  it('should return true', () => {
    expect(noop()).toBe(undefined);
  });
});
