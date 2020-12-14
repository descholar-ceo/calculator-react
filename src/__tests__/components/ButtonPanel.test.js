import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

describe('Test ButtonPanel with snapshots', () => {
  it('Renders ButtonPanel correctly', done => {
    const buttonPanelComponent = renderer.create(<ButtonPanel clickHandler={() => 'anything'} />).toJSON();

    expect(buttonPanelComponent).toMatchSnapshot();
    done();
  });
});
