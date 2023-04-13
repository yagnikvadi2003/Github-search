import React from 'react';
import { FormProps } from '../../@types/Type';

import Input from './Input';
import Button from './Button';

const Form: React.FC<FormProps> = ({ onSubmit, onChange, value, id, className }): JSX.Element => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        id={id}
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <Button text="search" type="submit" className={className} />
    </form>
  );
};

/**
 * Usage <Form value='SomeThingValue' onChange={ChageEvents} onSubmit={SubmitEvent} />
**/

export default Form;