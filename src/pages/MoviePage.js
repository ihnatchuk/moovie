import {MoviesList} from "../components/MoviesList/MoviesList";
import {Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {setPage} from "../redux";
import css from './MoviePage.module.css'

const MoviePage = () => {
    const {page, total_pages} = useSelector(state => state.movies);

    const dispatch = useDispatch()
    const handleChange = (event, value) => dispatch(setPage(value));

    return (
        <div>
            {/*<Typography>Page: {page}/{total_pages}</Typography>*/}
            <div className={css.pagAlign}>
                <Pagination count={+total_pages} color="primary" page={+page} onChange={handleChange}/>
            </div>
            <MoviesList/>

        </div>
    );
};

export {MoviePage};