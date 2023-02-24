import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FormControl, MenuItem, Select} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import css from './Header.module.css'
import {setFilterByGenre, setLangId, setPage, setSearchString} from "../../redux";
import {Link, useNavigate} from "react-router-dom";
import {Filter} from "../Filter";

const Header = () => {
    const search = useRef();
    const {langId} = useSelector(state => state.movies)

    const dispatch = useDispatch()
    const navigate=useNavigate();

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
        navigate('/movies')
    }

    return (
            <div className={css.HeaderLayout}>
                <div className={css.Header}>
                    <div className={css.leftHeader}>
                        <div className={css.logo}>
                            <Link to={'/'}><img src={require("../../img/m4u.png")} alt=""/></Link>
                        </div>

                        <Filter/>
                    </div>

                    <div className={css.searchForm}>
                        <input className={css.input} type="text" placeholder={'search'} ref={search}/>
                        <button type={'submit'} onClick={() => click()}>Search</button>
                    </div>

                    <div className={css.userIconAndLang}>
                        <FormControl sx={{m: 1, minWidth: 40, backgroundColor:"yellow"}} size="small">
                            <Select
                                value={langId}
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>En</MenuItem>
                                <MenuItem value={1}>Uk</MenuItem>
                            </Select>
                        </FormControl>

                        <div><AccountCircleIcon sx={{ fontSize: 50 }}/>
                        </div>
                    </div>
                </div>
                <div className={css.yellowStrip} ></div>
            </div>

    );
};

export {Header};