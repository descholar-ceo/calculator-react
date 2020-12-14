import {
  groupOne,
  groupTwo,
  groupThree,
  groupFour,
  groupFive,
} from '../../helpers/btnHelpers';

describe('Test groupOne', () => {
  it('Returns an array of the first row btnNames', done => {
    const row1 = groupOne();

    expect(row1).toEqual(['AC', '+/-', '%', '÷']);
    done();
  });
});

describe('Test groupTwo', () => {
  it('Returns an array of the scond row btnNames', done => {
    const row1 = groupTwo();

    expect(row1).toEqual(['7', '8', '9', 'x']);
    done();
  });
});

describe('Test groupThree', () => {
  it('Returns an array of the third row btnNames', done => {
    const row1 = groupThree();

    expect(row1).toEqual(['4', '5', '6', '-']);
    done();
  });
});

describe('Test groupFour', () => {
  it('Returns an array of the fourth row btnNames', done => {
    const row1 = groupFour();

    expect(row1).toEqual(['1', '2', '3', '+']);
    done();
  });
});

describe('Test groupThree', () => {
  it('Returns an array of the fith row btnNames', done => {
    const row1 = groupFive();

    expect(row1).toEqual(['0', '.', '=']);
    done();
  });
});
