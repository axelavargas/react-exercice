import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default function Input({
  value,
  onChange,
  onFocus,
  onBlur,
  className,
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={className}
    />
  );
}

Input.propTypes = propTypes;
