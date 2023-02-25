import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";

import css from './Header.module.css'
import {setFilterByGenre, setPage, setSearchString} from "../../redux";
import {Filter} from "../Filter";
import {SwitchTheme} from "../SwitchTheme";
import classNames from "classnames/bind";
import {wordsLang as textLang} from "../../configs/textLang";
import {LangSelect} from "../LangSelect";

const Header = () => {
    const search = useRef();
    const {langId, darkTheme} = useSelector(state => state.movies)

    const dispatch = useDispatch()

    const click = () => {

        if (!!search.current.value) {
            dispatch(setSearchString(search.current.value))
        } else {
            dispatch(setSearchString(''))
        }

        dispatch(setFilterByGenre(''))
        dispatch(setPage(1))
    }

    let cx = classNames.bind(css);
    const HeaderLayoutClass = cx(
        {
            'HeaderLayout': true,
            'HeaderLayoutLight': !darkTheme,
            'HeaderLayoutDark': darkTheme
        })

    const searchButtonClass = cx(
        {
            'searchButton': true,
            'searchButtonLight': !darkTheme,
            'searchButtonDark': darkTheme
        })
    const inputClass = cx(
        {
            'input': true,
            'inputLight': !darkTheme,
            'inputDark': darkTheme
        })

    return (
        <div className={HeaderLayoutClass}>
            <div className={css.Header}>

                <div className={css.leftHeader}>
                    <div className={css.logo}>
                        <Link to={'/'}><img src={require("../../img/m4u.png")} alt=""/></Link>
                    </div>

                    <div className={css.FilterSize}>
                        <Filter/>
                    </div>
                </div>

                <div className={css.searchForm}>
                    <input className={inputClass} type="text" placeholder={textLang.Search[langId]} ref={search}/>
                    <button
                        className={searchButtonClass}
                        type={'submit'}
                        onClick={() => click()}>
                        {textLang.Search[langId]}
                    </button>
                </div>


                <div className={css.userIconAndLang}>
                    <SwitchTheme/>
                    <LangSelect/>
                    <AccountCircleIcon sx={{fontSize: 40, color: 'white'}}/>
                </div>

            </div>
        </div>

    );
};

export {Header};