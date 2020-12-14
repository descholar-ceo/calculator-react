import renderer from 'react-test-renderer';
import Home from '../pages/home';

it('Render homepage correctly', () => {
  const homePage = renderer.create(<Home />).toJSON();

  expect(homePage).toMatchSnapshot();
});
