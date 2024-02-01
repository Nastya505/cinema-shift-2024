import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoChevronBack } from "react-icons/io5";
import StarRating from '../../components/starRating/starRating';
import FilmSchedule from '../../components/schedule/schesule';
import styles from './filmPage.module.css';
import { Chip, Group } from '@mantine/core';
import { SegmentedControl } from '@mantine/core';

const FilmPage = () => {
    const {id} = useParams();
    const API = "https://shift-backend.onrender.com";
    
    const [film, setFilm] = React.useState({});
    const [schedule, setSchedule] = React.useState([]);
    const [value, setValue] = React.useState('');
    
    const getFilm = async () => {
        const response = await axios.get(`${API}/cinema/film/${id}`);
        setFilm(response.data.film);
        console.log(response.data.film);
    }

    const getSchedule = async () => {
        const response = await axios.get(`${API}/cinema/film/${id}/schedule`);
        setSchedule(response.data.schedules);
    }

    React.useEffect(() => {
        getFilm();
        getSchedule();
    },[]);

    let array = [];


    return (
      
        
            
        <div className={styles.wrapper}>
            <Link className={styles.back} to="#" onClick={() => window.history.back()}>
                <IoChevronBack size={16} /> Назад
            </Link>
            {film.name && 
                
                   
                    <div className={styles.content}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} src={API + film.img} alt={film.name} />
                            <div className={styles.block}><span className='medium'>{film.generes}</span> {film.country.name}, {film.releaseDate.slice(-4)}</div>
                        </div>
                        <div className={styles.info}>
                          
                            <div className={styles.title}>{film.name}</div>
                            <div className={styles.rating}>
                                <StarRating rating={film.userRatings.kinopoisk/2}/>
                                <div className={styles.text}>Kinopoisk - {film.userRatings.kinopoisk}</div>
                            </div>
                            <div className={styles.subtitle}>{film.description}</div>
                        
                        </div>
                    </div>
               
            }

           <FilmSchedule schedule={schedule} />
          
        </div>
    );
};

export default FilmPage;