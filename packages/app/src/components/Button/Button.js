import { ButtonStyle, Text } from './ButtonStyle';

import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  onClick,
  border,
  borderRadius,
  margin,
  width,
  text,
  padding,
  size,
  disabled,
}) => (
  <ButtonStyle
    onClick={() => onClick()}
    border={border}
    borderRadius={borderRadius}
    margin={margin}
    width={width}
    padding={padding}
    size={size}
    disabled={disabled}
  >
    <Text>{text}</Text>
  </ButtonStyle>
);

Button.propTypes = {
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string,
  padding: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  margin: '0 auto',
  borderRadius: '10px',
  border: '1px solid #3FBFBF',
  width: '200px',
  text:  <a href='http://localhost:8888'> Login to Spotify </a>,
  padding: '16px',
  size: '16px',
  disabled: false,
};

export default Button;