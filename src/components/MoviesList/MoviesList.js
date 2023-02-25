import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard";
import {movieAction, setFilterByGenre, setLangId, setPage, setSearchString} from "../../redux";
import css from './MoviesList.module.css'
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const moviesState = useSelector(state => state.movies);
    const {page, movies, langId, filterByGenre, searchString, isSearching}=moviesState

    const [query, setQuery]=useSearchParams();

    const dispatch = useDispatch();


    // reading params from url and setting them to initialState
    useEffect(() => {
        dispatch( setLangId(query.get('lang')||langId) )
        dispatch( setFilterByGenre(query.get('genres')||filterByGenre) )

        document.getElementsByTagName('input')[0].value=query.get('search')
        dispatch( setSearchString(query.get('search')||searchString) )

        dispatch( setPage(query.get('page')||page) )

    }, [dispatch])

    useEffect(() => {
        if (isSearching) {
            dispatch(movieAction.searchMovies(
                {searchString, page,langId}
            ))
        }
    }, [dispatch, searchString, page, langId])


    useEffect( () => {
        if (!isSearching&&!searchString) {
            dispatch(movieAction.discoverMovies(
                {page:query.get('page'), langId:query.get('lang'), filterByGenre:query.get('genres')}
            ))

        }
    }, [dispatch, query])



    useEffect(() => {

        setQuery({lang:langId,genres:filterByGenre,search:searchString,page})

    }, [setQuery, page, langId, filterByGenre,searchString])


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