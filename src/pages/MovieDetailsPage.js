import React from 'react';

import {MovieInfo} from "../components/MovieInfo/MovieInfo";
import css from './MovieDetailsPage.module.css'
import {Header} from "../components/Header/Header";
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
                <div>
                    <iframe title='Trailer' id="ytplayer" width="1280" height="720"
                            src="http://www.youtube.com/embed/6JnN1DmbqoU?autoplay=1" frameborder="0"
                    />
                </div>
            </div>

        </>
    );
};

export {MovieDetailsPage};