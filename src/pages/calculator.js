import { useState } from 'react';
import ButtonPanel from '../components/ButtonPanel';
import Display from '../components/Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = state;
  const handleClick = btnName => {
    setState(calculate({ total, next, operation }, btnName));
  };
  return (
    <div className="width-700">
      <Display result={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
