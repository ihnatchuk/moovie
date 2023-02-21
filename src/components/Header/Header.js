import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FormControl, MenuItem, Select} from "@mui/material";

import css from './Header.module.css'
import {setFilterByGenre, setLangId, setPage, setSearchString} from "../../redux";

const Header = () => {
    const search = useRef();
    const {langId} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    const handleChange = (event, value) => {
        dispatch(setLangId(value.props.value))
    };
    const click = () => {

        if (!!search.current.value) {
            dispatch(setSearchString(search.current.value))
        } else {
            dispatch(setSearchString(''))
        }

        dispatch (setFilterByGenre(''))
        dispatch(setPage(1))
    }

    return (
            <div className={css.HeaderLayout}>
                <div className={css.Header}>
                    <h1>M4U</h1>

                    <div className={css.searchForm}>
                        <input className={css.input} type="text" placeholder={'search'} ref={search}/>
                        <button type={'submit'} onClick={() => click()}>Search</button>
                    </div>

                    <div className={css.userIconAndLang}>
                        <FormControl sx={{m: 1, minWidth: 40}} size="small">
                            <Select
                                value={langId}
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>En</MenuItem>
                                <MenuItem value={1}>Uk</MenuItem>
                            </Select>
                        </FormControl>

                        <div>User</div>
                    </div>
                </div>
            </div>

    );
};

export {Header};