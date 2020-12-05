import Button from '../components/Button';

export const groupOne = () => (['AC', '+/-', '%', '÷']);
export const groupTwo = () => (['7', '8', '9', 'X']);
export const groupThree = () => (['4', '5', '6', '-']);
export const groupFour = () => (['1', '2', '3', '+']);
export const groupFive = () => (['0', '.', '=']);
export const mapMarksToPanel = arr => arr.map(curr => (<Button key={curr} btnMark={curr} />));
export const btnPanel = rows => rows.map(curr => (<div key={curr}>{ curr }</div>));
