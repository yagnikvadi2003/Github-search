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

/**
 * Usage <Input type='something' placeholder='something' className='something' value={somethingValue} onChange={something OnChange Event} />
**/
export default Input;