import PropTypes from 'prop-types';

const Display = ({ result }) => <h1>{result}</h1>;
Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
