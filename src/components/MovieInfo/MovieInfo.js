import React from 'react';
import {useSelector} from "react-redux";

const MovieInfo = () => {

    const {movieInfo}=useSelector(state=>state.movies)

    const {id, title, overview, release_date, vote_count, vote_average, genre_ids}=movieInfo

    console.log(movieInfo);

    return (
        <div>
            <h2>{title}</h2>
            <div>Overview: {overview}</div>
            <div>id:{id}</div>
            <div>release_date:{release_date}</div>
            <div>vote_average:{vote_average}</div>
            <div>vote_count:{vote_count}</div>
        </div>
    );
};

export {MovieInfo};