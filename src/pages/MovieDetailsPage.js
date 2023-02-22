import React from 'react';

import {MovieInfo} from "../components/MovieInfo/MovieInfo";
import css from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
    return (
        <div className={css.MovieDetailsPage}>
            <MovieInfo/>
        </div>
    );
};

export {MovieDetailsPage};