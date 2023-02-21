import React from 'react';
import {useSelector} from "react-redux";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import {genreNameById} from "../../services";
import css from './MovieCard.module.css'
import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {poster_path, title, genre_ids, release_date} = movie

    const {genres} = useSelector(state => state.movies)

    const year = release_date?release_date.split('-')[0]:'no data'

    return (
        <div className={css.MovieCard}>
            <Link to={'/movie-details'}>
                <PosterPreview path={poster_path}/>
                <div className={css.info}>{title}</div>

                {!!genre_ids.length &&
                    <div className={css.genre}>
                        {genreNameById(genre_ids[0], genres)}
                    </div>
                }
                <div className={css.year}>
                    {year}
                </div>
            </Link>



        </div>
    );
};

export {MoviesListCard};