import React from 'react';
import styles from './card.module.css';
import start from '../../images/star.svg';
import { Link } from 'react-router-dom';
import Button from '../button/button';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i}>&#9733;</span>); // Full star unicode
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Empty star unicode
      }
    }
  
    return <div>{stars}</div>;
  };

  
const Card = ({id,img, title, subtitle, genre, year, rating}) => {
    const API = "https://shift-backend.onrender.com";

    return (
      
            <div className={styles.card} key={id}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={API + img} alt={title} />
                    <div className={styles.block}><span className='medium'>{genre[0]}</span> {year}</div>
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