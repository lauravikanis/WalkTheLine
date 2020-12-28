import React from "react";
import PropTypes from "prop-types";

const Radio = (value) => {
  return <input type="radio" name="react-tips" value={value} />;
};
Radio.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
};

export default Radio;
