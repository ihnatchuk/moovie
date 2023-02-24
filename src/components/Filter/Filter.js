import React from 'react';
import { useSelector } from "react-redux";

import css from './Filter.module.css'
import {LongMenu} from '../Menu/LongMenu';


const Filter = () => {
    const {genres, filterByGenre} = useSelector(state => state.movies);

    return (
            <div className={css.Filter}>
                <LongMenu genres={genres} genreId={filterByGenre}/>
            </div>
    );
};

export {Filter};