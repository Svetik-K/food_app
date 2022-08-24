import classNames from 'classnames';
import React from 'react';
import './Input.scss'

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  value: string;
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({value, onChange, ...props}) => {
  if(props.disabled) {
    props.className = classNames(`${props.className}`, 'input_disabled');
  }

  return (
    <div className="input-wrapper">
        <input type="text" className='search' value={value} onChange={(event) => onChange(event.target.value)} {...props}/>
        <button className='button button_search'></button>
    </div>

  )  
};

