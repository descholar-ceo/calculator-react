import { Route, Switch } from 'react-router-dom';
import Calculator from '../pages/calculator';
import Home from '../pages/home';
import Quotes from '../pages/quotes';
import Fourofourpage from '../pages/fourofourpage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/calculator" component={Calculator} />
    <Route exact path="/quotes" component={Quotes} />
    <Route component={Fourofourpage} />
  </Switch>
);

export default Routes;
