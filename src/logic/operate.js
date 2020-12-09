import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let res;
  const firstArg = new Big(numberOne);
  const secondArg = new Big(numberTwo);

  switch (operation) {
    case '-':
      res = firstArg.minus(secondArg);
      break;
    case '÷':
      if (numberTwo !== '0') {
        res = firstArg.div(secondArg);
      } else {
        res = 'Error: You can\'t divide a number by zero';
      }
      break;
    case 'x':
      res = firstArg.times(secondArg);
      break;
    case '+':
      res = firstArg.plus(secondArg);
      break;
    case '%':
      res = firstArg.mod(secondArg);
      break;
    default:
      throw Error(`The operation ${operation} is not known!`);
  }
  const resultToReturn = res.toString();

  return resultToReturn;
};

export default operate;
