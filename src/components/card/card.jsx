import React from 'react';
import styles from './card.module.css';
import start from '../../images/star.svg';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import StarRating from '../starRating/starRating';

const Card = ({id,img, title, subtitle, genre, date, country, rating}) => {
    const API = "https://shift-backend.onrender.com";

    const year = date.slice(-4);

    return (
      
            <div className={styles.card} key={id}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={API + img} alt={title} />
                    <div className={styles.block}><span className='medium'>{genre}</span> {country}, {year}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subtitle}>{subtitle}</div>
                </div>
                <div className={styles.rating}>
                    <StarRating rating={rating/2}/>
                    <div className={styles.text}>Kinopoisk - {rating}</div>
                </div>
                <Button link={`/film/${id}`} text="Подробнее" />
            </div>
            
            
     
    );
};

export default Card;