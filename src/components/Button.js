import PropTypes from 'prop-types';

const Button = ({ btnName }) => (<h1>{ btnName }</h1>);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
