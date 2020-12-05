import PropTypes from 'prop-types';

const Display = (props = 'O') => {
  const { result } = props;
  return (
    <h1>{result}</h1>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
