import React from 'react';
import {MenuItem, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {setLangId} from "../../redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LangSelect = () => {
    const {langId, darkTheme}=useSelector(state => state.movies)
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        dispatch(setLangId(value.props.value))
    };

    return (
        <div>
            <Select
                value={langId}
                onChange={handleChange}
                variant={'standard'}
                sx={{
                    color:darkTheme?'#000':'blue',
                    height:'30px',
                    // backgroundColor:darkTheme?'#880000':'blue',
                    backgroundColor:'#fff',
                    paddingLeft:'5px'
                }}
            >
                <MenuItem value={0}>En</MenuItem>
                <MenuItem value={1}>Uk</MenuItem>
            </Select>
        </div>
    );
};

export {
    LangSelect
};