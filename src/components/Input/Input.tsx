import classNames from 'classnames';
import React from 'react';
import styles from './Input.module.scss'

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  value: string;
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({value, onChange, ...props}) => {
  if(props.disabled) {
    props.className = classNames(`${props.className}`, styles.input_disabled);
  }

  return (
    <div className={styles.wrapper}>
        <input type="text" className={styles.search} value={value} onChange={(event) => onChange(event.target.value)} {...props}/>
        <button className={styles.button_search}></button>
    </div>

  )  
};

