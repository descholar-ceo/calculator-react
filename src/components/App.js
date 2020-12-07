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
    const result = calculate({ total, next, operation }, btnName);
    this.setState({ total: result.total, next: result.next, operation: result.operation });
  };

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display result={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
