import Button from '../components/Button';

export const groupOne = () => (['AC', '+/-', '%', '÷']);
export const groupTwo = () => (['7', '8', '9', 'x']);
export const groupThree = () => (['4', '5', '6', '-']);
export const groupFour = () => (['1', '2', '3', '+']);
export const groupFive = () => (['0', '.', '=']);
export const mapBtnsToPanel = (arr, clickHandler) => {
  const res = arr.map(
    curr => {
      let color;
      const signs = ['÷', 'x', '-', '=', '+'];
      if (signs.includes(curr)) {
        color = 'orange';
      } else {
        color = 'grey';
      }
      return (<Button color={color} key={curr} btnName={curr} clickHandler={clickHandler} />);
    },
  );
  return res;
};
export const displayAllBtns = rowsArr => rowsArr.map((row, index) => (
  <div key={`${row}-${index + 1}`} className={`row-number-${index}`}>{ row }</div>
));
