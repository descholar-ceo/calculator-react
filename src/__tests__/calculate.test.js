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

  it('When passed a +/-, it returns a negative result or a positive result depending on the passed value', done => {
    const result = calculate({ total: 23, next: null, operation: '+' }, '+/-');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual(-23);
    done();
  });

  it('When a btn of 0 is clicked, and total is null, operation is null and next is null, it returns a total = "0"', done => {
    const result = calculate({ total: null, next: null, operation: null }, '0');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual('0');
    done();
  });

  it('When a btn of 0 is clicked, and total is not null, operation is null and next is null, it returns a total = "0"', done => {
    const result = calculate({ total: 1, next: null, operation: null }, '0');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual('10');
    done();
  });

  it('When a btn of 1 is clicked, and total is not null, operation is not null and next is null, it returns a next = "0"', done => {
    const result = calculate({ total: 1, next: null, operation: '+' }, '1');
    expect(result).toHaveProperty('next');
    expect(result.next).toEqual('1');
    done();
  });

  it('When a btn of 2 is clicked, and total is not null, operation is not null and next is null, it returns a next = "0"', done => {
    const result = calculate({ total: 1, next: 1, operation: '+' }, '2');
    expect(result).toHaveProperty('next');
    expect(result.next).toEqual('12');
    done();
  });

  it('When a btn of . is clicked, and total is null, operation is null and next is null, it returns a total = "0."', done => {
    const result = calculate({ total: null, next: null, operation: null }, '.');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual('0.');
    done();
  });

  it('When a btn of . is clicked, and total is not null (is 12), operation is null and next is null, it returns a total = "12."', done => {
    const result = calculate({ total: '12', next: null, operation: null }, '.');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual('12.');
    done();
  });

  it('When a btn of . is clicked, and total is not null, operation is not null and next is null, it returns a next = "0."', done => {
    const result = calculate({ total: '12', next: null, operation: '+' }, '.');
    expect(result).toHaveProperty('next');
    expect(result.next).toEqual('0.');
    done();
  });

  it('When a btn of . is clicked, and total is not null (is 12), operation is null and next is not null is (20), it returns a total = "20."', done => {
    const result = calculate({ total: '12', next: '20', operation: '+' }, '.');
    expect(result).toHaveProperty('next');
    expect(result.next).toEqual('20.');
    done();
  });

  it('When a btn of x is clicked, and total is not null, it returns an operation = "x"', done => {
    const result = calculate({ total: '12', next: null, operation: null }, 'x');
    expect(result).toHaveProperty('operation');
    expect(result.operation).toEqual('x');
    done();
  });
});
