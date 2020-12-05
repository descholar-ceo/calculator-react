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
      <div>
        {rowOne}
      </div>

      <div>
        {rowTwo}
      </div>

      <div>
        {rowThree}
      </div>

      <div>
        {rowFour}
      </div>

      <div>
        {rowFive}
      </div>
    </div>
  );
};

export default ButtonPanel;
