import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {urls} from "../../configs";
import css from './MovieInfo.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {Badge} from "../Badge";
import {movieAction} from "../../redux";
import {dividerClasses, Rating} from "@mui/material";

const MovieInfo = () => {

    const {movieInfo, movieDetails, langId} = useSelector(state => state.movies)

    const {
        id, title, overview, release_date, vote_count,
        vote_average, genre_ids, backdrop_path, poster_path
    } = movieInfo

    let runtime = movieDetails?.runtime || ''
    let budget = movieDetails?.budget || ''
    let revenue = movieDetails?.revenue || ''
    let tagline = movieDetails?.tagline || ''

    let original_title = movieDetails?.original_title || ''
    const genres = movieDetails?.genres || []
    const production_companies = movieDetails?.production_companies || []
    const production_countries = movieDetails?.production_countries || []


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovieDetails({id, langId}))
    }, [dispatch, id, langId])

    console.log('movieDetails', movieDetails);


    return (
        <div className={css.MovieInfo}>

                <div className={css.backdrop}>
                    {
                        !!backdrop_path&& <img src={urls.image.poster(1280, backdrop_path)} alt=""/>
                    }
                </div>


            <div className={css.backGradient}>
                <div className={css.details}>
                    <div>
                        <PosterPreview path={poster_path}/>
                    </div>
                    <div className={css.TextInfo}>
                        <h2 className={css.movieTitle}>{title}</h2>
                        <div className={css.originalTitle}>{original_title}</div>

                        <div className={css.badges}>
                            {!!genres &&
                                genres.map(genre =>
                                    <Badge key={genre.id} text={genre.name}/>)
                            }
                        </div>
                        {
                            !!tagline&&<div>tagline: {tagline}</div>
                        }

                        <div>id:{id}</div>

                        <div>
                            {release_date.split('-')[0]}, Imdb {vote_average}/{vote_count}, {runtime} minutes
                        </div>

                        <Rating name="half-rating-read" defaultValue={+vote_average/2} precision={0.1} readOnly />

                        <div>budget: ${budget}</div>
                        <div>
                            Production companies:
                            <div className={css.Companies}>
                                {
                                    production_companies.map(company =>
                                        <div key={company.id}>{company.name}, {company.origin_country};</div>)
                                }
                            </div>

                        </div>


                        <div>Overview:
                            <div className={css.Overview}>{overview}</div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export {MovieInfo};