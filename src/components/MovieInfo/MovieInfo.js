import React from 'react';

const MovieInfo = ({movie}) => {
    const {id, title, vote_average, vote_count,overview,release_date}=movie
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