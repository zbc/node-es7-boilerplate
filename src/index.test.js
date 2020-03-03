import { sum } from './index'

describe('sum', () => {
  it('should pass when 1 add 2 equals 3', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})