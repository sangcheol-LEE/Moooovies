import axios from "axios";
import { GET_POPULAR_MOVIE,
         GET_LOAD_MORE,
         GET_MOVIE_DETAIL,
         GET_MOVIE_CREW,
         POST_FAVORITE_COUNT,
         POST_FAVORITED,
         CHANGE_FAVORITE_COUNT_UP,
         CHANGE_FAVORITE_COUNT_DOWN,
         IS_FAVORITED
        } from "./movie_type";
import { API_KEY,API_URL } from "../../Config";

export const isFavorited = () => {
  return {
    type: IS_FAVORITED
  }
}

export const favoriteCountUp = () => {
  return {
    type : CHANGE_FAVORITE_COUNT_UP,
  }
}

export const favoriteCountDown = () => {
  return {
    type : CHANGE_FAVORITE_COUNT_DOWN,
  }
}

export const getUserFavoriteCount = (favoriteNumber) => {
  return {
    type: POST_FAVORITE_COUNT,
    payload : favoriteNumber
  }
}

export const getFavorited = (favorited) => {
  return {
    type : POST_FAVORITED,
    payload : favorited
  }
}



export const getMovieCrew = (movieId) => {
  try{
    const endPointCrew = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    const response = axios.get(endPointCrew)
    .then((res) => res.data)
    .then(res => res)

    return {
      type: GET_MOVIE_CREW,
      payload : response
    }
  }catch(e) {
    console.log("getMovieCrew", e)
  }

}

export const getMovieDetail = (movieId) => {
  try {
    const endPoint = `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
    const response = axios.get(endPoint)
    .then((res) => res.data)
    .then(res => {
      return res
    })

    return {
      type: GET_MOVIE_DETAIL,
      payload : response,
    }

  }catch(e) {
    console.log("getMovieDetail",e)
  }
}

export const getPopularMovie = () => {
  try {
    const endPoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const response = axios.get(endPoint)
    .then((response) => response.data)
    .then(response => response)
    return {
      type : GET_POPULAR_MOVIE,
      payload :response
    }
  }catch(e) {
    console.log("getPopularMovie",e)
  }
}

export const getLoadMore = (id) => {
  try {
    const endPoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${id}`
    console.log("action",id)
    const response = axios.get(endPoint)
    .then((response) => response.data)
    .then(response => response)
    return {
      type : GET_LOAD_MORE,
      payload :response
    }
  }catch(e) {
    console.log("getPopularMovie",e)
  }
}
