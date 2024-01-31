import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/card/card';
const FilmPage = () => {
    const {id} = useParams();
    const API = "https://shift-backend.onrender.com/cinema/film/";

    const [film, setFilm] = React.useState([]);
    const getFilm = async () => {
        const response = await axios.get(API + id);
        setFilm(response.data);
    }
    React.useEffect(() => {
        getFilm();
    },[]);
    return (
        <div>
            <h1>FilmPage {id}</h1>
            <div>
                <Card id={film.id} img={film.img} title={film.name} subtitle={film.description} genre={film.genres} year={film.releaseDate}  />
            </div>
            
        </div>
    );
};

export default FilmPage;