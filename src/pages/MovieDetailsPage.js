import React from 'react';

import {MovieInfo} from "../components";
import css from './MovieDetailsPage.module.css'
import {Header} from "../components";
import classNames from "classnames/bind";
import {useSelector} from "react-redux";

const MovieDetailsPage = () => {

    const {darkTheme}=useSelector(state => state.movies)

    let cx = classNames.bind(css);
    const MovieDetailsPageClass = cx(
        {
            'MovieDetailsPage': true,
            'MovieDetailsPageLight': !darkTheme,
            'MovieDetailsPageDark': darkTheme
        })

    return (
        <>
            <Header/>
            <div className={MovieDetailsPageClass}>
                <MovieInfo/>
            </div>

        </>
    );
};

export {MovieDetailsPage};