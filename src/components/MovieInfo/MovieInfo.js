import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import classNames from "classnames/bind";

import {urls} from "../../configs";
import css from './MovieInfo.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {Badge} from "../Badge";
import {movieAction} from "../../redux";
import {StarsRating} from "../StarsRating";
import {wordsLang} from '../../configs/textLang'

const MovieInfo = () => {

    const {movieId} = useParams();

    const {movieDetails, langId, darkTheme} = useSelector(state => state.movies)

    // const {
    //     id, title, overview, release_date, vote_count,
    //     vote_average, genre_ids, backdrop_path, poster_path
    // } = movieInfo

    const id = movieDetails?.id || null
    const title = movieDetails?.title || ''
    const overview = movieDetails?.overview || ''
    const release_date = movieDetails?.release_date || ''
    const runtime = movieDetails?.runtime || ''
    const vote_count = movieDetails?.vote_count || null
    const vote_average = movieDetails?.vote_average || null
    const backdrop_path = movieDetails?.backdrop_path || ''
    const poster_path = movieDetails?.poster_path || ''
    const budget = movieDetails?.budget || null
    const revenue = movieDetails?.revenue || null
    const tagline = movieDetails?.tagline || ''
    const original_title = movieDetails?.original_title || ''
    const genres = movieDetails?.genres || []
    const production_companies = movieDetails?.production_companies || []


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovieDetails({movieId, langId}))
    }, [dispatch, movieId, langId])

    let cx = classNames.bind(css);
    const TextInfoClass = cx(
        {
            'TextInfo': true,
            'TextInfoLight': !darkTheme,
            'TextInfoDark': darkTheme
        })
    const backGradientClass = cx(
        {
            'backGradient': true,
            'backGradientLight': !darkTheme,
            'backGradientDark': darkTheme
        })

    return (
        <div className={css.MovieInfo}>

            <div className={css.backdrop}>
                {
                    +movieId===id && <img src={urls.image.poster(1280, backdrop_path)} alt=""/>
                }
            </div>
            <div className={backGradientClass}>
                { +movieId===id &&
                    <>

                        <div className={css.details}>
                            <div>
                                <PosterPreview size={450} path={poster_path}/>
                            </div>
                            <div className={TextInfoClass}>
                                <h2 className={css.movieTitle}>{title}</h2>
                                <div className={css.originalTitle}>{original_title}</div>

                                <div className={css.badges}>
                                    {!!genres &&
                                        genres.map(genre =>
                                            <Badge key={genre.id} text={genre.name} darkTheme={darkTheme}/>)
                                    }
                                </div>
                                {
                                    !!tagline && <div>{wordsLang.Tagline[langId]}: {tagline}</div>
                                }

                                <div>
                                    {release_date.split('-')[0]}, Imdb {vote_average}/{vote_count}, {runtime} minutes
                                </div>

                                <StarsRating rating={+vote_average / 2}/>

                                <div>{wordsLang.budget[langId]}: ${Math.floor(+budget/10000)/100}M, {wordsLang.revenue[langId]}: ${Math.floor(+revenue/10000)/100}M </div>

                                <div>
                                    {wordsLang.ProductionCompanies[langId]}:
                                    <div className={css.Companies}>
                                        {
                                            production_companies.map(company =>
                                                <div key={company.id}>{company.name}, {company.origin_country};</div>)
                                        }
                                    </div>
                                </div>

                                <div>{wordsLang.Overview[langId]}:
                                    <div className={css.Overview}>{overview}</div>
                                </div>

                            </div>
                        </div>
                    </>
                }
            </div>


        </div>
    );
};

export {MovieInfo};