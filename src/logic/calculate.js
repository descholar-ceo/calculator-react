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

  return { total, next, operation };
};

export default calculate;
