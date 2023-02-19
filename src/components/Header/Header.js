 import React, {useRef} from 'react';
 import {useDispatch, useSelector} from "react-redux";
 import {FormControl, MenuItem, Select} from "@mui/material";

import css from './Header.module.css'
 import {movieAction, setLangId} from "../../redux";
 import {lang} from "../../configs";

const Header = () => {
    const search = useRef();
    const {langId}=useSelector(state => state.movies)
    const dispatch=useDispatch()

    const handleChange = (event, value) => {
        dispatch(setLangId(value.props.value))
    };

    return (
        <>
            <div className={css.Header}>
                <div>M4U</div>
                <div>
                    <input className={css.input} type="text" placeholder={'search'} ref={search}/>
                    <button onClick={()=>dispatch(movieAction.searchMovies({searchString:search.current.value, page:1, language:lang[langId]}))}>Search</button>
                </div>
                <div>
                    <FormControl sx={{ m: 0, minWidth: 40 }} size="small">
                        <Select
                            value={langId}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>En</MenuItem>
                            <MenuItem value={1}>Uk</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                    User
            </div>
            <div className={css.fakeBox}></div>
        </>

    );
};

export {Header};