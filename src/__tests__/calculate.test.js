import calculate from '../logic/calculate';

describe('Calculate function tests', () => {
  it('When passed a %, it returns a percentaged number', done => {
    const result = calculate({ total: 23, next: null, operation: null }, '%');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual(0.23);
    done();
  });
});
