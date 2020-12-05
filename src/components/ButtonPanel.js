import {
  groupOne,
  groupTwo,
  groupThree,
  groupFour,
  groupFive,
  mapMarksToPanel,
} from '../helpers/mark-helpers';

const ButtonPanel = () => {
  const rowOne = mapMarksToPanel(groupOne());
  const rowTwo = mapMarksToPanel(groupTwo());
  const rowThree = mapMarksToPanel(groupThree());
  const rowFour = mapMarksToPanel(groupFour());
  const rowFive = mapMarksToPanel(groupFive());

  return (
    <div className="calc">
      <div className="btn-show">
        {rowOne}
      </div>

      <div className="btn-show">
        {rowTwo}
      </div>

      <div className="btn-show">
        {rowThree}
      </div>

      <div className="btn-show">
        {rowFour}
      </div>

      <div className="btn-show">
        {rowFive}
      </div>
    </div>
  );
};

export default ButtonPanel;
