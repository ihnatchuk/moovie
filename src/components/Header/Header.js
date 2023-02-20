 import React, {useRef} from 'react';
 import {useDispatch, useSelector} from "react-redux";
 import {FormControl, MenuItem, Select} from "@mui/material";

import css from './Header.module.css'
 import {setLangId, setPage, setSearchString} from "../../redux";

const Header = () => {
    const search = useRef();
    const {langId,searchString, isSearching, page}=useSelector(state => state.movies)
    const dispatch=useDispatch()

    const handleChange = (event, value) => {
        dispatch(setLangId(value.props.value))
    };
    const click=()=>{
        if (!!search.current.value){
            dispatch(setSearchString(search.current.value))
            dispatch(setPage(1))
        }else{
            dispatch(setSearchString(''))
            dispatch(setPage(1))
        }
    }

    console.log('search.current.value',search);
    console.log('searchString',searchString);
    console.log('isSearching',isSearching);
    console.log('page',page);
    return (
        <>
            <div className={css.Header}>
                <div>M4U</div>
                <div>
                    <input className={css.input} type="text" placeholder={'search'} ref={search}/>
                    <button type={'submit'} onClick={()=>click()}>Search</button>
                </div>
                <div>
                    <FormControl sx={{ m: 0, minWidth: 40}} size="small">
                        <Select
                            value={langId}
                            onChange={handleChange}
                        >
                            <MenuItem value={0} >En</MenuItem>
                            <MenuItem value={1} >Uk</MenuItem>
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