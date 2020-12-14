import calculate from '../logic/calculate';

describe('Calculate function tests', () => {
  it('When passed a %, it returns a percentaged number', done => {
    const result = calculate({ total: 23, next: null, operation: null }, '%');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual(0.23);
    done();
  });

  it('When passed a AC, it returns a nulled result', done => {
    const result = calculate({ total: 23, next: 45, operation: '+' }, 'AC');
    expect(result).toHaveProperty('total');
    expect(result).toHaveProperty('next');
    expect(result).toHaveProperty('operation');
    expect(result.total).toEqual(null);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual(null);
    done();
  });

  it('When passed a AC, it returns a nulled result', done => {
    const result = calculate({ total: 23, next: 45, operation: '+' }, 'AC');
    expect(result).toHaveProperty('total');
    expect(result).toHaveProperty('next');
    expect(result).toHaveProperty('operation');
    expect(result.total).toEqual(null);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual(null);
    done();
  });
});
