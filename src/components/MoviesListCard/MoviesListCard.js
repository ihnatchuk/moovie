import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import {genreNameById} from "../../services";
import css from './MovieCard.module.css'
import { setMovieInfo } from "../../redux";
import {Badge} from "../Badge";

const MoviesListCard = ({movie}) => {

    const {id, poster_path, title, genre_ids, release_date} = movie
    const year = release_date?release_date.split('-')[0]:'no data'

    const {genres} = useSelector(state => state.movies)

    const dispatch=useDispatch()
    const click=(id)=>{
        dispatch(setMovieInfo(movie))
    }


    return (
        <div className={css.MovieCard} onClick={()=>click(id)}>
            <Link to={'/details'} >
                <PosterPreview path={poster_path}/>
                <div className={css.info}>{title}</div>

                {!!genre_ids.length &&
                    <div className={css.genre}>
                        <Badge text={genreNameById(genre_ids[0], genres)}/>
                    </div>
                }
                <div className={css.year}>
                    <Badge text={year}/>
                </div>
            </Link>



        </div>
    );
};

export {MoviesListCard};