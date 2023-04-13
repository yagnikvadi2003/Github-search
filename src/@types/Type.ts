/*
*
* define Custom Attributes Component type properties.
* add any other custom props you want to use.
*
*/
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // add any other custom props you want to use
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    type: string;
    value?: string;
    placeholder: string;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    id: string;
}

export interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    id?: string;
    className?: string;
}

export interface CardProps extends React.ImgHTMLAttributes<HTMLImageElement | HTMLButtonElement> {
    text: string;
    avatarUrl: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}