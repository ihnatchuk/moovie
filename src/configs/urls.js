const baseURL='https://api.themoviedb.org/3';

const baseImgURL='https://image.tmdb.org/t/p'

const lang=['en','uk'];



const urls={
    movie:{
        movies:'/discover/movie',
        search:'/search/movie',
        genres:'/genre/movie/list',
    },
    image:{
        poster:(size=300, path)=>`${baseImgURL}/w${size}/${path}`
    }
}

export {
    baseURL,
    urls,
    lang
}