import {
  groupOne,
  groupTwo,
  groupThree,
  groupFour,
  groupFive,
  mapMarksToPanel,
  btnPanel,
} from '../helpers/btnHelpers';

const ButtonPanel = () => {
  const rowsArr = [
    mapMarksToPanel(groupOne()),
    mapMarksToPanel(groupTwo()),
    mapMarksToPanel(groupThree()),
    mapMarksToPanel(groupFour()),
    mapMarksToPanel(groupFive()),
  ];

  return (
    <div className="button-panel-container">
      {btnPanel(rowsArr)}
    </div>
  );
};

export default ButtonPanel;
