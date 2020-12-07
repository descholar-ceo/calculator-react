import { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

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
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, btnName));
  };

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display result={total || next || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
