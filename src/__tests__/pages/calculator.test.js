import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../../pages/calculator';

describe('Test calculator page with snapshot', () => {
  it('Render calculator app correctly', done => {
    const calculatorPage = renderer.create(<Calculator />).toJSON();

    expect(calculatorPage).toMatchSnapshot();
    done();
  });
});
