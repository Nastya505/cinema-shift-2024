import React from 'react';
import { Link } from 'react-router-dom';
import styles from './button.module.css';
const Button = ({link, text}) => {
    return (
        <Link className={styles.button} to={link}>{text}</Link>
    );
};

export default Button;