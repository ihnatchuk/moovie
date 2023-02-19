import React from 'react';

import {urls} from "../../configs";
import css from './Poster.module.css'

const PosterPreview = ({path}) => {
    const posterPath=`${urls.image.poster(300,path)}`

    return (
        <div className={css.Poster}>
            <img src={posterPath} alt=""/>
        </div>
    );
};

export {PosterPreview};