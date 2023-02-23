import React from 'react';

import {MovieInfo} from "../components/MovieInfo/MovieInfo";
import css from './MovieDetailsPage.module.css'
import {Header} from "../components/Header/Header";

const MovieDetailsPage = () => {
    return (
        <>
            <Header/>
            <div className={css.MovieDetailsPage}>
                <MovieInfo/>
            </div>
        </>
    );
};

export {MovieDetailsPage};