import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../../components/NavBar';

describe('Test navbar with snapshot', () => {
  it('Renders NavBar correctly', done => {
    const navBarComponent = renderer.create(<NavBar />).toJSON();

    expect(navBarComponent).toMatchSnapshot();
    done();
  });
});
