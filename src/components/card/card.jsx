import React from 'react';
import styles from './card.module.css';
import start from '../../images/star.svg';
const Card = ({img, title, subtitle, genre, year, rating}) => {
    const API = "https://shift-backend.onrender.com";

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={API + img} alt={title} />
                    <span>{genre} {year} США</span>
                </div>
                <div className={styles.info}>
                    <div>{title}</div>
                    <div>{subtitle}</div>
                </div>
                <div className={styles.rating}>
                    <div><img src={start}/></div>
                    <div>Kinopoisk - {rating}</div>
                </div>
            </div>
            
        </div>
    );
};

export default Card;