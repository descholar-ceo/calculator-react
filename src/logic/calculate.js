import operate from './operate';

const calculate = (calculatorData, btnName) => {
  let { total, next, operation } = calculatorData;

  switch (btnName) {
    case '%':
      if (total && !next) {
        total /= 100;
        total.toString();
      } else if (total && next) {
        operation = btnName;
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
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operation === null) {
        if (total === null) {
          total = btnName;
        } else {
          total += btnName;
        }
      } else if (operation !== null) {
        if (next === null) {
          next = btnName;
        } else {
          next += btnName;
        }
      }
      break;
    case '.':
      if (operation === null) {
        if (total === null) {
          total = `0${btnName}`;
        } else if (!total.includes(btnName)) {
          total += btnName;
        }
      } else if (operation !== null) {
        if (next === null) {
          next = `0${btnName}`;
        } else if (!next.includes(btnName)) {
          next += btnName;
        }
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (total !== null) {
        operation = btnName;
      }
      break;
    default:
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
