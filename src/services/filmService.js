import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const filmService={
    discoverMovie:(page)=>axiosService.get(urls.movie.movies(page)),
    searchMovie:(searchString, page)=>axiosService.get(urls.movie.search(searchString, page)),
    genres:()=>axiosService.get(urls.movie.genres)
}

export {
    filmService
}