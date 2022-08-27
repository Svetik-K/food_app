const classNames = require("classnames");
import React from "react"
import styles from "./Loader.module.scss";

export enum LoaderSize {
    s = 's',
    m = 'm',
    l = 'l'
}

export type LoaderProps = {
    loading?: boolean;
    size?: LoaderSize;
    className?: string;
};

export const Loader: React.FC<LoaderProps> = ({loading = true, size = LoaderSize.m, className}) => {
    let loaderClasses = classNames(styles.loader, styles[`loader_size-${size}`], `${className}`);
    if(!loading) {
        return null;
    }
    return (
        <div className={loaderClasses}></div>
    )
};

