import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

describe('Test Button component with snapshot', () => {
  it('Renders button component correctly', done => {
    const buttonComponent = renderer.create(<Button btnName="+" clickHandler={() => 'anything'} color="orange" />).toJSON();

    expect(buttonComponent).toMatchSnapshot();
    done();
  });
});
