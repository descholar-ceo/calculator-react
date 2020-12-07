import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App {
  render() {
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
