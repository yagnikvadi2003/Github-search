import React from 'react';
import { ButtonProps } from '../../@types/Type';

import Icon from './Icon';

const Button: React.FC<ButtonProps> = ({
  ButtonId,
  buttonText,
  className,
  IconId,
  type,
  onClick,
  ...attributes
}): JSX.Element => {
  return (
    <button
      type={type || 'button'}
      id={ButtonId}
      onClick={onClick}
      {...attributes}
    >
      {/* If icon prop is provided then render ICON component */}
      <Icon className={className} IconId={IconId} />
      {/* Other button Text */}
      {buttonText}
    </button>
  );
};

/**
 * Usage <Button text='something' className='something' onclick={ClickEvent} />
 **/

export default React.memo(Button);