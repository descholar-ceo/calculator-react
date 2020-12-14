import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../components/App';

describe('Test App with snapshot', () => {
  it('Renders App correctly', done => {
    const appComponent = renderer.create(<App />).toJSON();

    expect(appComponent).toMatchSnapshot();
    done();
  });
});
