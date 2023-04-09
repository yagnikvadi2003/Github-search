export interface User {
    avatar: string;
    url: string;
    username: string;
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
    dataExample?: string;
    onClick?: (value: any) => void;
    // add any other custom props you want to use
}

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    value?: string;
    placeholder: string;
    className?: string;
    onChange?: (value: any) => void;
} 

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    id: string;
}

export interface UserProfileProps extends React.HTMLProps<HTMLImageElement | HTMLButtonElement> {
    src: string;
    alt: string;
    id?: string;
    url?: string;
    dataExample?: string;
}