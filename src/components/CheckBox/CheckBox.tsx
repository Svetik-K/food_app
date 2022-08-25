import React from 'react';
import styles from './CheckBox.module.scss';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
    onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({onChange, ...props}) => {
    return (
        <input type="checkbox" className={styles.checkbox} onChange={(event) => onChange(event.target.checked)} {...props}></input>
    )
};