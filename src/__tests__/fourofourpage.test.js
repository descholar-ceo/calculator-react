import React from 'react';
import renderer from 'react-test-renderer';
import Fourofourpage from '../pages/fourofourpage';

describe('Test Fourofourpage with snapshot', () => {
  it('Renders fourofourpage correctly', done => {
    const fourOFourPage = renderer.create(<Fourofourpage />).toJSON();

    expect(fourOFourPage).toMatchSnapshot();
    done();
  });
});
