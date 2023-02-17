const baseFilmURL='https://api.themoviedb.org/3';

const baseImgURL='https://image.tmdb.org/t/p'



const urls={
    movie:{
        movies:(page=1)=>`/discover/movie?page=${page}`,
        genres:'/genre/movie/list',
        search:(searchString, page=1)=>`/search/movie?query=${searchString}&page=${page}`,
    },
    image:{
        poster:(size=300, path)=>`/${size}/${path}`
    }
}

export {
    baseFilmURL,
    baseImgURL,
    urls
}