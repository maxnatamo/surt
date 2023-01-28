'use client'

import styles from './InputGroup.module.scss';

export default function InputGroup({ children }) {
    return (
        <div className={styles.inputGroup}>
            {children}
        </div>
    );
}