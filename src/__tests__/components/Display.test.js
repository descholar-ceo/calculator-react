import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../../components/Display';

describe('Test Display component with snapshot', () => {
  it('Renders Display component correctly', done => {
    const displayComponent = renderer.create(<Display />).toJSON();

    expect(displayComponent).toMatchSnapshot();
    done();
  });
});
