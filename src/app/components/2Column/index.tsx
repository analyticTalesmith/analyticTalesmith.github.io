import React from 'react';
import styles from './FlexColumn.module.css';

const FlexColumn = ({ children, className = '' }) => {
    return <div className={`${styles.flexColumn} ${className}`}>{children}</div>;
};

export default FlexColumn;