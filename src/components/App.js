import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <main>
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
