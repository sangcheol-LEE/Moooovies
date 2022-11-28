import { GET_POPULAR_MOVIE,
         GET_LOAD_MORE,
         GET_MOVIE_DETAIL,
         GET_MOVIE_CREW,
         POST_FAVORITE_COUNT,
         POST_FAVORITED,
         CHANGE_FAVORITE_COUNT_UP,
         CHANGE_FAVORITE_COUNT_DOWN,
         IS_FAVORITED
        } from "../action/movie/movie_type"

const initialState = {
  popular: [],
  movieDetail : []
}

const movieReducer = (state = initialState, action) => {
  switch(action.type) {

    case IS_FAVORITED :
      return {
        ...state,
        favorited: !state.favorited
      }

    case CHANGE_FAVORITE_COUNT_UP :
      return {
        ...state,
        favoriteCount  : state.favoriteCount + 1
      }

    case CHANGE_FAVORITE_COUNT_DOWN :
      return {
        ...state,
        favoriteCount  : state.favoriteCount - 1
      }


    case POST_FAVORITED :
      return {
        ...state,
        favorited : action.payload
      }

    case POST_FAVORITE_COUNT :
      return {
        ...state,
        favoriteCount : action.payload
      }

    case GET_MOVIE_CREW :
      return {
        ...state,
        movieCrew : action.payload
      }

    case GET_MOVIE_DETAIL :
      return {
        ...state,
        movieDetail : action.payload,
      }


    case GET_POPULAR_MOVIE :
      return {
        ...state,
        popular: action.payload.results
      }

    case GET_LOAD_MORE :
      return {
        ...state,
        popular : state.popular.concat(action.payload.results)
      }

    default :
      return state
  }
}



export default movieReducer