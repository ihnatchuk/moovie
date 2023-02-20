import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieAction} from "../../redux";
import css from './MoviesList.module.css'
import {lang} from "../../configs";
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const moviesState = useSelector(state => state.movies);
    const {page, movies, langId, filterByGenre, searchString, isSearching}=moviesState

    const dispatch = useDispatch();

    const [query, setQuery]=useSearchParams(
        {lang:langId,genres:filterByGenre,search:searchString,page })

    useEffect(() => {
        if (!!isSearching) {
            dispatch(movieAction.searchMovies(
                {searchString:query.get('search'), page:query.get('page'), langId:query.get('lang')}))
        }
    }, [dispatch, query])

    useEffect(() => {
        if (!isSearching) {

            dispatch(movieAction.discoverMovies(
                {page:query.get('page'), langId:query.get('lang'), filterByGenre:query.get('genres')}))

        }
    }, [dispatch, query])

    useEffect(() => {
            setQuery(
                {
                    lang:langId,
                    genres:filterByGenre,
                    search:searchString,
                    page}
            )
    }, [dispatch, page, langId, filterByGenre, searchString])


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