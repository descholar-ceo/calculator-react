import PropTypes from 'prop-types';

const Button = ({ btnName, clickHandler }) => (
  <button type="button" onClick={() => clickHandler(btnName)}>{ btnName }</button>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
