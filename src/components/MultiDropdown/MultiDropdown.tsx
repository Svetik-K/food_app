import React, { useState } from "react";

import styles from "./MultiDropdown.module.scss";

const classNames = require("classnames");

export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);

  let buttonClasses = classNames((styles.button, styles.button_dropdown));
  if (props.disabled) {
    buttonClasses = classNames(`${buttonClasses}`, styles.button_disabled);
  }


  return (
    <div className={styles.dropdown}>
      <button className={buttonClasses} onClick={() => setOpen(!isOpen)}>
        {value}
      </button>
      {isOpen && !props.disabled && (
        <ul
          className={
            isOpen
              ? `${styles.dropdown__list} ${styles.active}`
              : styles.dropdown__list
          }
        >
          {options.map((option: Option) => {
            return (
              <li
                className={styles.list__item}
                value={option.value}
                key={option.key}
                onClick={() => onChange(option.value)}
              >
                {option.value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
