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

export type HTMLIdAttribute = string | undefined;
export type HTMLInputTypeAttribute = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {});
export type HTMLClassNameAttribute = string | undefined;
export type HTMLOnChangeAttribute = (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
export type HTMLOnClickAttribute = (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
export type HTMLOnSubmitAttribute = (event: React.FormEvent<HTMLFormElement>) => void | undefined;

export type HTMLButtonTypeElement = 'button' | 'submit' | 'reset';

export type Method = | 'get' | 'GET' | 'delete' | 'DELETE' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';

export type ToastPosition = 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';