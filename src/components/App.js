import { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = btnName => {

  };

  render() {
    const { total, next, operation } = this.state;
    console.log(total, next, operation);
    return (
      <>
        <Display />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
