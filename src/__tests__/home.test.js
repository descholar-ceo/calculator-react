import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/home';

describe('Homepage test with snapshot', () => {
  it('Render homepage correctly', done => {
    const homePage = renderer.create(<Home />).toJSON();

    expect(homePage).toMatchSnapshot();
    done();
  });
});
