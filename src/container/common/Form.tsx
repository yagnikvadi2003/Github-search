import React from 'react';
import { FormProps } from '../../@types/Type';

import Input from './Input';
import Button from './Button';

const Form: React.FC<FormProps> = ({ onSubmit, onChange, value, InputId, className, IconId, ButtonId }): JSX.Element => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        InputId={InputId}
        type="search"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <Button children="search" type="submit" className={className} IconId={IconId} ButtonId={ButtonId} />
    </form>
  );
};

/**
 * Usage <Form value='SomeThingValue' onChange={ChangeEvents} onSubmit={SubmitEvent} IconId={IconId} ButtonId={ButtonId} />
**/

export default Form;