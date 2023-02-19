import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components/Header/Header";
import css from './MainLayout.module.css'
import {Filter} from "../components";

const MainLayout = () => {
    return (
        <div className={css.Main}>
            <Header/>
            <Filter/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};