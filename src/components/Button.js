import PropTypes from 'prop-types';

const Button = ({ btnName, clickHandler, color }) => (
  <button
    className={color === 'orange' ? 'orange-bg' : 'grey-bg'}
    type="button"
    onClick={() => clickHandler(btnName)}
  >
    { btnName }
  </button>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
