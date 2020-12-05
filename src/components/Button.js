import PropTypes from 'prop-types';

const Button = props => {
  const { btnMark } = props;
  return (
    <h1>{ btnMark }</h1>
  );
};

Button.propTypes = {
  btnMark: PropTypes.string.isRequired,
};

export default Button;
