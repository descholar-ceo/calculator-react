import renderer from 'react-test-renderer';
import home from '../pages/home';

it('Render homepage correctly', () => {
  const homePage = renderer.create(<home />).toJSON();

  expect(homePage).toMatchSnapshot();
});
