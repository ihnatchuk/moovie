import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux";
import css from './Filter.module.css'


const Filter = () => {
    const {genres, langId} = useSelector(state => state.movies);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieAction.getGenres(langId))
    }, [dispatch,langId])

    return (
        <>
            <ul className={css.genres}>
                {
                    genres.map(genre => <li key={genre.id}>  {genre.name}</li>)
                }
            </ul>
            <div className={css.fakeBox}></div>
        </>
    );
};

export {Filter};