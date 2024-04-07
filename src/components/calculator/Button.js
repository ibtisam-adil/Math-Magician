import PropTypes from 'prop-types';

const Button = ({ btnName, clickEvent }) => (
  <button className="btns" type="submit" onClick={() => clickEvent(btnName)}>{btnName}</button>
);

Button.propTypes = {
  btnName: PropTypes.string,
  clickEvent: PropTypes.func.isRequired,
};

Button.defaultProps = {
  btnName: 'Submit',
};

export default Button;
