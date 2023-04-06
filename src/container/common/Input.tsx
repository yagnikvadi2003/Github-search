import React from 'react';

import { SearchProps } from '../../@types/Type';

const Input: React.FC<SearchProps> = ({ type, placeholder, className, value, onChange }): JSX.Element => {
  return (
    <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        autoComplete="off"
        id='input'
    />
  );
};

export default Input;