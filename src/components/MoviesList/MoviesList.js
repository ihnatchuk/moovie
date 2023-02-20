import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieAction, setFilterByGenre, setLangId, setPage, setSearchString} from "../../redux";
import css from './MoviesList.module.css'
import {lang} from "../../configs";
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const moviesState = useSelector(state => state.movies);
    const {page, movies, langId, filterByGenre, searchString, isSearching}=moviesState

    const dispatch = useDispatch();

    const [query, setQuery]=useSearchParams();
    console.log('searchString',searchString,'isSearching',isSearching, query.get('search'))


    useEffect(() => {
        if (!!isSearching) {
            dispatch(movieAction.searchMovies({searchString, page, langId}))
        }
    }, [dispatch, page, langId, searchString])


    useEffect( () => {
        if (!isSearching) {
            dispatch(movieAction.discoverMovies(
                {page:query.get('page'), langId:query.get('lang'), filterByGenre:query.get('genres')}))

        }
    }, [dispatch, query])


    // reading params from url and setting them to initialState
    useEffect(() => {
        dispatch( setLangId(query.get('lang')||langId) )
        dispatch( setFilterByGenre(query.get('genres')||filterByGenre) )
        dispatch( setSearchString(query.get('search')||searchString) )
        dispatch( setPage(query.get('page')||page) )

    }, [dispatch])


    useEffect(() => {

        setQuery({lang:langId,genres:filterByGenre,search:searchString,page})

    }, [dispatch, page, langId, filterByGenre,searchString])


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