import {
  groupOne,
  groupTwo,
  groupThree,
  groupFour,
  groupFive,
  mapMarksToPanel,
  btnPanel,
} from '../helpers/mark-helpers';

const ButtonPanel = () => {
  const rowOne = mapMarksToPanel(groupOne());
  const rowTwo = mapMarksToPanel(groupTwo());
  const rowThree = mapMarksToPanel(groupThree());
  const rowFour = mapMarksToPanel(groupFour());
  const rowFive = mapMarksToPanel(groupFive());
  const rowsArr = [rowOne, rowTwo, rowThree, rowFour, rowFive];

  return (
    <div className="button-panel-container">
      {btnPanel(rowsArr)}
    </div>
  );
};

export default ButtonPanel;
