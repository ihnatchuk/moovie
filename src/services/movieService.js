import {apiService} from "./apiService";
import {accessToken, lang, urls} from "../configs";



const movieService={
    discoverMovie:(page=1,langId,filterByGenre )=>
        apiService.get(urls.movie.movies,
            {params:{page:page,language:lang[langId],with_genres:filterByGenre}}),

    searchMovie:(searchString='', page,langId)=>
        apiService.get(urls.movie.search,{params:{query:searchString, page:page,language:lang[langId] }}),

    genres:(langId)=>apiService.get(urls.movie.genres, {params:{language:lang[langId] }})
}

apiService.interceptors.request.use((config) => {

        config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

export {
    movieService
}