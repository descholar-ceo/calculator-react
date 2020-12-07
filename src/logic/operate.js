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
      if (secondArg !== 0) {
        res = firstArg.div(secondArg);
      } else {
        res = 'Math Error';
      }
      break;
    case 'x':
      res = firstArg.times(secondArg);
      break;
    case '+':
      res = firstArg.plus(secondArg);
      break;
    case '%':
      res = firstArg.div(100);
      break;
    default:
      throw Error(`The operation ${operation} is not known!`);
  }
  const resultToReturn = res.toString();

  return resultToReturn;
};

export default operate;
