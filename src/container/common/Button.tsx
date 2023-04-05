import React from 'react';
import { ButtonProps } from '../../@types/Type';

const Button: React.FC<ButtonProps> = ({ text, className, onClick }): JSX.Element => {  
    return (
        <button className={className} onClick={onClick}>{text}</button>
    );
};

export default Button;