import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useDispatch, useSelector} from "react-redux";
import {setFilterByGenre, setPage, setSearchString} from "../../redux";

import {wordsLang as textLang} from "../../configs/textLang";

const ITEM_HEIGHT = 48;

export function LongMenu({genres, genreId}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const {darkTheme, langId}=useSelector(state => state.movies)
    const dispatch=useDispatch()

    const click=(id)=>{
        dispatch(setFilterByGenre(id||genreId))
        dispatch(setPage(1))
        document.getElementsByTagName('input')[0].value = ''
        dispatch(setSearchString(''))

        setAnchorEl(null);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                color={darkTheme?'secondary':'primary'}
            >
                {textLang.Genres[langId]}
            </Button>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {
                    genres.map((genre) => (
                    <MenuItem key={genre.id} selected={genre.id === +genreId} onClick={()=>click(genre.id)}>
                        {genre.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}