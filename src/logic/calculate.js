import operate from './operate';

const calculate = (calculatorData, btnName) => {
  let { total, next, operation } = calculatorData;

  switch (btnName) {
    case '%':
      if (total && !next) {
        total /= 100;
        total.toString();
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total *= -1;
      total.toString();
      if (next) {
        const res = next * -1;
        next = res.toString();
      }
      break;
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      if (!operation) {
        if (!total) {
          total = btnName;
        } else {
          total += btnName;
        }
      } else if (operation) {
        if (!next) {
          next = btnName;
        } else {
          next += next;
        }
      }
      break;
    case '.':
      if (next) {
        if (!next.includes('.')) {
          next += '.';
        }
      } else if (operation) {
        next = '0.';
      } else if (!total.includes('.')) {
        total += '.';
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (total) {
        operation = btnName;
      }
      break;
    default: // when the btnName is equal to '='
      if (next && total) {
        total = operate(total, next, operation);
        operation = null;
        next = null;
      }
  }
  const result = { total, next, operation };

  return result;
};

export default calculate;
