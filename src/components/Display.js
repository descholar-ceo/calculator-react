import PropTypes from 'prop-types';

const Display = ({ result }) => <h1 className="result-display">{ result }</h1>;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
