import {
  groupOne,
  groupTwo,
  groupThree,
  groupFour,
  groupFive,
  mapBtnsToPanel,
  displayAllBtns,
} from '../helpers/btnHelpers';

const ButtonPanel = () => {
  const rowsArr = [
    mapBtnsToPanel(groupOne()),
    mapBtnsToPanel(groupTwo()),
    mapBtnsToPanel(groupThree()),
    mapBtnsToPanel(groupFour()),
    mapBtnsToPanel(groupFive()),
  ];

  return (
    <div className="button-panel-container">
      {displayAllBtns(rowsArr)}
    </div>
  );
};

export default ButtonPanel;
