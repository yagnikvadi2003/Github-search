import { ButtonHTMLAttributes } from 'react';

export interface User {
    avatar: string;
    url: string;
    username: string;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
    // onClick: () => void;
    // add any other custom props you want to use
  }
  