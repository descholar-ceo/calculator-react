import PropTypes from 'prop-types';

const Display = ({ result, next }) => <h1 className="result-display">{ result || next }</h1>;

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  next: null,
};

export default Display;
