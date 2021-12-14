import { Sum } from './utils';

describe('function Sum', () => {
  it('should return 4 with args 2 and 2', () => {
    const result = Sum(2,2);
    expect(result).toBe(4);
  })
  it('should return 123 with args 33 and 90', () => {
    const result = Sum(33, 90);
    expect(result).toBe(123);
  })
})