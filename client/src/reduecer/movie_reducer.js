import { GET_POPULAR_MOVIE } from "../action/movie/movie_type"

const initialState = {
  popular: []
}

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_POPULAR_MOVIE :
      return {
        ...state,
        popular: action.payload.results
      }

    default :
      return state
  }
}

export default movieReducer