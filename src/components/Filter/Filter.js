import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieAction, setFilterByGenre, setPage, setSearchString} from "../../redux";
import css from './Filter.module.css'


const Filter = () => {
    const {genres, langId} = useSelector(state => state.movies);
    const dispatch = useDispatch()

    const click=(genreId)=>{
        dispatch(setFilterByGenre(genreId))
        dispatch(setPage(1))
        document.getElementsByTagName('input')[0].value=''
        dispatch(setSearchString(''))
    }

    useEffect(() => {
        dispatch(movieAction.getGenres(langId))
    }, [dispatch,langId])

    return (
        <>
            <div className={css.Filter}>
            <ul className={css.genres}>
                {
                    genres.map(genre =><button key={genre.id} onClick={()=>click(genre.id)}><li>  {genre.name}</li></button> )
                }
            </ul>
        </div>
            <div className={css.fakeBox}></div>
        </>

    );
};

export {Filter};