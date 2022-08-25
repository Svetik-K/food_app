import React from 'react';
const classNames = require('classnames');
import styles from './Button.module.scss';
import {Loader, LoaderSize } from '../Loader/Loader';


export enum ButtonColor {
    primary = 'primary',
    secondary = 'secondary'
}
 
export type ButtonProps = React.PropsWithChildren<{
    loading?: boolean;
    color?: ButtonColor;
    children: React.ReactNode;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({children, color = ButtonColor.primary, loading = false,  ...props}) => {
    let buttonClasses: string = props.className ? `${props.className}` : classNames(styles.button, `${styles.button_color}-${color}`);

    if(props.disabled || loading) {
        buttonClasses = classNames(`${buttonClasses}`, styles.button_disabled);
    }

    return (
        <button disabled={loading} {...props} className={buttonClasses} >
            {children}
            {loading && <Loader />}
        </button>
    )
}

