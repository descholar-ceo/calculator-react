import '../App.css';
import { Fragment } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => (
  <>
    <div className="App">
      <header className="App-header">
        <Display />
        <ButtonPanel />
      </header>
    </div>
  </>
);

export default App;
