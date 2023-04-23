import { ToastContainerProps } from "react-toastify";
import { ToastProps } from "react-toastify/dist/types";
import { HTMLButtonTypeElement, HTMLClassNameAttribute, HTMLIdAttribute, HTMLInputTypeAttribute, ToastPosition } from "./UnionTypes";

/*
*
* define Custom Elements Component type properties.
* add any other custom props you want to use.
*
*/
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    ButtonId?: HTMLIdAttribute | undefined;
    children?: React.ReactNode | React.ReactNode[];
    className?: HTMLClassNameAttribute;
    IconId?: HTMLIdAttribute | undefined;
    type?: HTMLButtonTypeElement | 'button';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
}

export interface IconProps {
    className?: HTMLClassNameAttribute;
    IconId?: HTMLIdAttribute | undefined;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    InputId?: HTMLIdAttribute | undefined;
    type?: HTMLInputTypeAttribute | 'text';
    value?: string | undefined;
    placeholder: string | undefined;
    className?: HTMLClassNameAttribute;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
} 

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string | undefined;
    alt: string | undefined;
    width?: number | string | undefined;
    height?: number | string | undefined;
    className?: HTMLClassNameAttribute;
    ImageId?: HTMLIdAttribute | undefined;
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement>{
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void | undefined;
    FormId?: HTMLIdAttribute | undefined;
    className?: HTMLClassNameAttribute;
}

/*
*
* define Custom specific Card Component type properties.
* add any other custom props you want to use.
*
*/
export interface CardProps {
    key?: HTMLIdAttribute | null | undefined;
    avatar?: string | undefined;
}

/*
*
* define Custom Toastify Component type properties.
* add any other custom props you want to use.
*
*/
export interface ToastifyProps extends ToastContainerProps {
    /**
     * Set the default position to use.
     * `One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
     * `Default: 'top-right'`
    **/
    position?: ToastPosition;
    /**
     * Set the delay in ms to close the toast automatically.
     * Use `false` to prevent the toast from closing.
     * `Default: 5000`
    **/
    autoClose?: number | false;
    /**
     * Hide or show the progress bar.
     * `Default: false`
    **/
    hideProgressBar?: boolean;
    /**
     * Whether or not to display the newest toast on top.
     * `Default: false`
    **/
    newestOnTop?: boolean;
    /**
     * Remove the toast when clicked.
     * `Default: true`
    **/
    closeOnClick?: boolean;
    /**
     * Support right to left display.
     * `Default: false`
    **/
    rtl?: boolean;
    /**
     * Pause the toast when the window loses focus.
     * `Default: true`
    **/
    pauseOnFocusLoss?: boolean;
    /**
     * Allow toast to be draggable
     * `Default: true`
    **/
    draggable?: boolean;
    /**
     * Pause the timer when the mouse hover the toast.
     * `Default: true`
    **/
    pauseOnHover?: boolean;
    /**
     * @INTERNAL
    **/
    props?: ToastProps;
}