import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css'
import {useDispatch, useSelector} from "react-redux";
import {movieAction} from "../redux";

const MainLayout = () => {
    const { langId } = useSelector(state => state.movies);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieAction.getGenres(langId))
    }, [dispatch, langId])

    return (
        <div className={css.Main}>
            <Outlet/>
        </div>
    );
};

export {MainLayout};