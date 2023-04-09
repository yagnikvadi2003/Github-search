import React from 'react';

import { ButtonProps } from '../../@types/Type';

const Button: React.FC<ButtonProps> = ({ text, className, dataExample, onClick }): JSX.Element => {  
    return (
        <button className={className} data-example={dataExample} onClick={onClick}>{text}</button>
    );
};

/**
 * Usage <Button text='something' className='something' onclick={ClickEvent} />
**/

export default Button;