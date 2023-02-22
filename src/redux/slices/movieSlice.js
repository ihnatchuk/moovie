import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

let initialState = {
    movies: [],
    genres: [],
    movieInfo:null,
    movieDetails:null,
    filterByGenre:'',
    searchString:'',
    isSearching:false,
    langId:1,
    page:1,
    total_pages:null,
    errors: null
};


const discoverMovies = createAsyncThunk(
    'movieSlice/discoverMovies',
    async ({page,langId,filterByGenre}, thunkAPI) => {
        try {
            const {data} = await movieService.discoverMovie(page,langId,filterByGenre)
            return data
        }catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const searchMovies = createAsyncThunk(
    'movieSlice/searchMovies',
    async ({searchString, page, langId}, thunkAPI) => {
        try {
            const {data} = await movieService.searchMovie(searchString, page, langId)
            return data
        }catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (langId, thunkAPI) => {
        try {
            const {data} = await movieService.genres(langId)
            return data
        }catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getMovieDetails = createAsyncThunk(
    'movieSlice/getMovieDetails',
    async ({id, langId}, thunkAPI) => {
        try {
            const {data} = await movieService.movieDetailsByID(id, langId)
            return data
        }catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setPage:(state, action)=>{
            state.page=action.payload
        },

        setLangId:(state, action)=>{
            state.langId=action.payload
        },

        setSearchString:(state, action)=>{
            console.log(action.payload, !!(action.payload) )
            if (action.payload){
                console.log('true');
                state.isSearching=true
                state.searchString=action.payload
            }else{
                console.log('false');
                state.isSearching=false
                state.searchString=''
            }
            console.log('state',state.searchString);
        },

        setFilterByGenre:(state,action)=>{
            state.filterByGenre=action.payload
            },

        setMovieInfo:(state, action)=>{
            state.movieInfo=action.payload
        }

    },
    extraReducers: builder =>
        builder
            .addCase(discoverMovies.fulfilled,(state, action) => {
                const {page,total_pages, results }=action.payload;
                state.page=page;
                state.total_pages=(+total_pages>500)?500:total_pages;
                state.movies=results
            })
            .addCase(searchMovies.fulfilled,(state, action) => {
                const {page,total_pages, results }=action.payload;
                state.page=page;
                state.total_pages=(+total_pages>500)?500:total_pages;
                state.movies=results
            })
            .addCase(getGenres.fulfilled,(state, action) => {
                const { genres }=action.payload;
                state.genres=genres;
            })
            .addCase(getMovieDetails.fulfilled,(state, action) => {
                state.movieDetails=action.payload;
            })



});

const {reducer: movieReducer,
        actions:{setPage, setLangId, setSearchString, setFilterByGenre, setMovieInfo}} = movieSlice

const movieAction = {
    discoverMovies,
    searchMovies,
    getGenres,
    getMovieDetails
}

export {
    movieReducer,
    movieAction,
    setPage,
    setLangId,
    setSearchString,
    setFilterByGenre,
    setMovieInfo
}
