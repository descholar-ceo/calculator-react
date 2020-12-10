import { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = state;
  const handleClick = btnName => {
    setState(calculate({ total, next, operation }, btnName));
  };
  return (
    <>
      <Display result={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
