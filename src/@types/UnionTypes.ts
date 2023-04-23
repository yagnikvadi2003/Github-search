/*
* 
*   Simplify the union type: If possible, try to simplify the union type by reducing the number 
*   of possible types or using more specific types.
*
*   Use an intersection type: If the complex union type is created from multiple object types,
*   you can use an intersection type instead. This can help to reduce the complexity of the 
*   union type.
*
*/

import { ButtonProps, CardProps, FormProps, ImgProps, InputProps } from "./Type";

export type HTMLIdAttribute = number | string;
export type HTMLInputTypeAttribute = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {});
export type HTMLClassNameAttribute = string | undefined;

export type HTMLButtonTypeElement = 'button' | 'submit' | 'reset';

export type ToastPosition = 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';

export type FormTypes = FormProps & InputProps & ButtonProps;
export type CardTypes = CardProps & ImgProps & ButtonProps;