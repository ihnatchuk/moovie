import React from 'react';
import {useSelector} from "react-redux";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import {genreNameById} from "../../services";
import css from './MovieCard.module.css'

const MoviesListCard = ({movie}) => {
    const {poster_path, title, genre_ids, release_date} = movie

    const {genres} = useSelector(state => state.movies)

    const year = release_date.split('-')[0]

    return (
        <div className={css.MovieCard}>
            <PosterPreview path={poster_path}/>
            <div className={css.info}>{title}</div>

            {genre_ids.length &&
                <div className={css.genre}>
                    {genreNameById(genre_ids[0], genres)}
                </div>
            }
            <div className={css.year}>
                {year}
            </div>


        </div>
    );
};

export {MoviesListCard};