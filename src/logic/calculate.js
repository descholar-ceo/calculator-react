import operate from './operate';

const calculate = (calculatorData, btnName) => {
  let { total, next, operation } = calculatorData;
  const symbolsArr = ['+', '-', 'x', '÷', '%'];
  const allNumbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  if (btnName === '%' && total) {
    const res = total / 100;
    total = res.toString();
    operation = null;
  } else if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (btnName === '+/-') {
    const res = total * -1;
    total = res.toString();
    if (next) {
      const res = next * -1;
      next = res.toString();
    }
  }

  if (allNumbersArr.includes(btnName) && !operation) {
    if (!total) {
      total = btnName;
    } else {
      total += btnName;
    }
  } else if (allNumbersArr.includes(btnName) && operation) {
    if (!next) {
      next = btnName;
    } else {
      next += btnName;
    }
  } else if (symbolsArr.includes(btnName) && total) {
    operation = btnName;
  } else if (btnName === '=' && total && next) {
    if (symbolsArr.includes(operation)) {
      total = operate(total, next, operation);
    }
    operation = null;
    next = null;
  }

  const result = { total, next, operation };

  return result;
};

export default calculate;
