import React, { ReactNode } from 'react';
import styles from './FlexColumn.module.css';


interface Props {
    children?: ReactNode,
    className?: String,
}

const FlexColumn = ({ children, className = '' }: Props) => {
    return <div className={`${styles.flexColumn} ${className}`}>{children}</div>;
};

export default FlexColumn;