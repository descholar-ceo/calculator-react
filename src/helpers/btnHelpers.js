import Button from '../components/Button';

export const groupOne = () => (['AC', '+/-', '%', '÷']);
export const groupTwo = () => (['7', '8', '9', 'X']);
export const groupThree = () => (['4', '5', '6', '-']);
export const groupFour = () => (['1', '2', '3', '+']);
export const groupFive = () => (['0', '.', '=']);
export const mapBtnsToPanel = arr => arr.map(curr => (<Button key={curr} btnName={curr} />));
export const displayAllBtns = rowsArr => rowsArr.map((row, index) => (
  <div key={`${row}-${index + 1}`} className={`row-number-${index}`}>{ row }</div>
));