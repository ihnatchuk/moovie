import {MoviesList} from "../components/MoviesList/MoviesList";
import { Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import React from "react";

import {setPage} from "../redux";
import css from './MoviePage.module.css'
import {Header} from "../components/Header/Header";
import classNames from "classnames/bind";

const MoviePage = () => {
    const {page, total_pages, darkTheme} = useSelector(state => state.movies);



    const dispatch = useDispatch()
    const handleChange = (event, value) => dispatch(setPage(value));

    let cx = classNames.bind(css);
    const moviePageClass = cx(
        {
            'moviePage': true,
            'moviePageLight': !darkTheme,
            'moviePageDark': darkTheme
        })
    const paginationClass = cx(
        {
            'pagAlign': true,
            'pagAlignLight': !darkTheme,
            'pagAlignDark': darkTheme
        })
    const paginColor=darkTheme?'secondary':'primary'

    return (
            <div className={moviePageClass}>
                <Header/>
                <div className={paginationClass}>
                    <Pagination count={+total_pages} outlined='' color={paginColor} page={+page} onChange={handleChange}/>
                </div>
                <MoviesList/>
            </div>
    );
};

export {MoviePage};