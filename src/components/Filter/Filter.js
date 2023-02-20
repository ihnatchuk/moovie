import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieAction, setFilterByGenre} from "../../redux";
import css from './Filter.module.css'


const Filter = () => {
    const {genres, langId} = useSelector(state => state.movies);
    const dispatch = useDispatch()

    const click=(genreId)=>{
        dispatch(setFilterByGenre(genreId))
    }

    useEffect(() => {
        dispatch(movieAction.getGenres(langId))
    }, [dispatch,langId])

    return (
        <div className={css.Filter}>
            <ul className={css.genres}>
                {
                    genres.map(genre =><button onClick={()=>click(genre.id)}><li key={genre.id}>  {genre.name}</li></button> )
                }
            </ul>
            {/*<div className={css.fakeBox}></div>*/}
        </div>
    );
};

export {Filter};