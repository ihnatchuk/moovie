import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import {genreNameById} from "../../services";
import {setMovieInfo} from "../../redux";
import {Badge} from "../Badge";
import {StarsRating} from "../StarsRating";
import css from './MovieCard.module.css'

const MoviesListCard = ({movie}) => {

    const {id, poster_path, title, genre_ids, release_date, vote_average} = movie
    const year = release_date ? release_date.split('-')[0] : 'no data'

    const {genres} = useSelector(state => state.movies)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const click = (id) => {
        dispatch(setMovieInfo(movie))
        navigate(`/details/${id}`, {state: id})
    }


    return (
        <div className={css.MovieCard} onClick={() => click(id)}>
            <PosterPreview path={poster_path}/>
            <div className={css.info}>{title}</div>

            {!!genre_ids.length &&
                <div className={css.genre}>
                    <Badge text={genreNameById(genre_ids[0], genres)}/>
                </div>
            }

            <div className={css.year}>
                <Badge text={year}/>
            </div>

            <div className={css.StarsRating}>
                <StarsRating rating={vote_average / 2}/>
            </div>
        </div>
    );
};

export {MoviesListCard};