import React from 'react';
import { InputProps } from '../../@types/Type';

const Input: React.FC<InputProps> = ({
  InputId,
  type,
  placeholder,
  className,
  value,
  onChange
}): JSX.Element => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
      autoComplete='off'
      id={InputId}
      required
    />
  );
};

/**
 * Usage <Input type='something' placeholder='something' className='something' value={somethingValue} onChange={something OnChange Event} />
 **/
export default React.memo(Input);