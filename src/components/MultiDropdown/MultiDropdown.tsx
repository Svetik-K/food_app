import React from 'react';
import classNames from 'classnames';
import styles from './MultiDropdown.module.scss';

export type Option = {
    key: string;
    value: string;
};

export type MultiDropdownProps = {
    options: Option[];
    value: Option[]; 
    onChange: (value: Option[]) => void;
    disabled?: boolean;
    pluralizeOptions: (value: Option[]) => string;
    children?: React.ReactNode;
}

export const MultiDropdown: React.FC<MultiDropdownProps> = ({options, value, pluralizeOptions, onChange, ...props}) => {
    const [isOpen, setOpen] = React.useState(false);

    let buttonClasses = classNames((styles.button, styles.button_dropdown));
    if(props.disabled) {
        buttonClasses =  classNames(`${buttonClasses}`, styles.button_disabled);
    }

    function checkValue(item: any) {
        let newValue = []
        if(value.some((element) => element.key === item.key)) {
           value = value.filter((element) => element.key !== item.key);
           for(let element of value) {
            newValue.push(element);
           }
        } else {
            newValue.push(item);
        }
        return newValue;
    }

    return (
        <div className={styles.dropdown}>
            <button className={buttonClasses} onClick={()=> setOpen(!isOpen)} >
                {pluralizeOptions(value)}
                Pick categories
            </button>
            {isOpen && !props.disabled &&
            <ul className={isOpen ? `${styles.dropdown__list} ${styles.active}`: styles.dropdown__list} >
                {options.map((option: any) => {
                    return <li className={styles.list__item} 
                    value={option} 
                    key={option.key} 
                    onClick={() => onChange(checkValue(option))}>
                        {option.value} 
                    </li>
                })}      
            </ul>}    
        </div>   
    )
};

