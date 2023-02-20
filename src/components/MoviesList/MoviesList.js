import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieAction} from "../../redux";
import css from './MoviesList.module.css'
import {lang} from "../../configs";


const MoviesList = () => {

    const {page, movies, langId, filterByGenre, searchString, isSearching} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSearching) {
            dispatch(movieAction.searchMovies({searchString, page, langId}))
        }
    }, [dispatch, page, langId, searchString])

    useEffect(() => {
        if (!isSearching) {
            dispatch(movieAction.discoverMovies({page, langId, filterByGenre}))
        }
    }, [dispatch, page, langId, filterByGenre,searchString])

//
    return (
        <div>
            <div className={css.MoviesList}>
                {
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>

        </div>
    );
};

export {MoviesList};