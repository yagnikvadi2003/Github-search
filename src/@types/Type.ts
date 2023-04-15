/*
*
* define Custom Attributes Component type properties.
* add any other custom props you want to use.
*
*/
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    ButtonId?: string | undefined;
    children?: React.ReactNode | React.ReactNode[];
    className?: string | undefined;
    IconId?: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
    // add any other custom props you want to use
}

export type HTMLInputTypeAttribute = | 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {});

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    InputId?: string | undefined;
    type?: HTMLInputTypeAttribute | undefined;
    value?: string | undefined;
    placeholder: string | undefined;
    className?: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
} 

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string | undefined;
    alt: string | undefined;
    width?: number | string | undefined;
    height?: number | string | undefined;
    className?: string | undefined;
    ImageId?: string | undefined;
}

export interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    value: string | undefined;
    FormId?: string | undefined;
    className?: string | undefined;
    ButtonId?: string | undefined;
    InputId?: string | undefined;
    IconId?: string | undefined;
}

export interface CardProps extends React.ImgHTMLAttributes<HTMLImageElement | HTMLButtonElement> {
    children: React.ReactNode | React.ReactNode[];
    avatarUrl: string | undefined;
    className?: string | undefined;
    ImageId?: string | undefined;
    IconId?: string | undefined;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
}

export interface IconProps {
    className?: string | undefined;
    IconId?: string | undefined;
}