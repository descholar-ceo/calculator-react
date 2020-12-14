import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../../pages/quotes';

describe('Test quotes page with snapshot', () => {
  it('Render quotes page correctly', done => {
    const quotesPage = renderer.create(<Quotes />).toJSON();

    expect(quotesPage).toMatchSnapshot();
    done();
  });
});
