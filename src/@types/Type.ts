import { ButtonHTMLAttributes } from 'react';

export interface User {
    avatar: string;
    url: string;
    username: string;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
    onClick?: (value: any) => void;
    // add any other custom props you want to use
}

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    value?: any;
    placeholder: string;
    className?: string;
    onChange?: (value: any) => void;
} 