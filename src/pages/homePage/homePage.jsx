import React from 'react';
import styles from './homePage.module.css';
import Card from '../../components/card/card';
import  axios  from 'axios';
const HomePage = () => {
    const API = "https://shift-backend.onrender.com";
    const API_TODAY = "https://shift-backend.onrender.com/cinema/today";

    const [movies, setMovies] = React.useState([]);

    const getMovies = async () => {
        const response = await axios.get(API_TODAY);
        setMovies(response.data.films);
    }
    React.useEffect(() => {
        getMovies();
    },[]);

    return (
        <div>
            <h1 className={`${styles.title} ml-4`}>Афиша</h1>
            <div className={styles.wrapper}>
                {movies.map((movie) => (
                    <Card id={movie.id} img={movie.img} title={movie.name} subtitle={movie.description} genre={movie.genres} year={movie.releaseDate} rating={movie.userRatings.kinopoisk}                               />
                ))}
            </div>
        </div>
    );
};

export default HomePage;