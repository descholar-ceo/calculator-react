import PropTypes from 'prop-types';
import {
  groupOne,
  groupTwo,
  groupThree,
  groupFour,
  groupFive,
  mapBtnsToPanel,
  displayAllBtns,
} from '../helpers/btnHelpers';

const ButtonPanel = ({ clickHandler }) => {
  const rowsArr = [
    mapBtnsToPanel(groupOne(), clickHandler),
    mapBtnsToPanel(groupTwo(), clickHandler),
    mapBtnsToPanel(groupThree(), clickHandler),
    mapBtnsToPanel(groupFour(), clickHandler),
    mapBtnsToPanel(groupFive(), clickHandler),
  ];

  return (
    <div className="button-panel-container">
      {displayAllBtns(rowsArr)}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
