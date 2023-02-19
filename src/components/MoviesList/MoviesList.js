import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieAction} from "../../redux";
import css from './MoviesList.module.css'



const MoviesList = () => {

    const {page, movies, langId} = useSelector(state => state.movies);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(movieAction.discoverMovies({page, langId}))
    }, [dispatch,page,langId])

    return (
        <div>
            <div className={css.MoviesList}>
                {
                    movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>

        </div>
    );
};

export {MoviesList};