import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

let initialState = {
    movies: [],
    genres: [],
    filterByGenre:null,
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
            if (!!action.payload){
                state.searchString=action.payload
                state.isSearching=true
            }else{
                state.searchString=action.payload
                state.isSearching=false
            }
        },

        setFilterByGenre:(state,action)=>{
            state.filterByGenre=action.payload
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


});

const {reducer: movieReducer, actions:{setPage,setLangId,setSearchString,setFilterByGenre}} = movieSlice

const movieAction = {
    discoverMovies,
    searchMovies,
    getGenres
}

export {
    movieReducer,
    movieAction,
    setPage,
    setLangId,
    setSearchString,
    setFilterByGenre
}
