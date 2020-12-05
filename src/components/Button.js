import PropTypes from 'prop-types';

const Button = props => {
  const { btnMark } = props;
  return (
    <h3>{ btnMark }</h3>
  );
};

Button.propTypes = {
  btnMark: PropTypes.string.isRequired,
};

export default Button;
