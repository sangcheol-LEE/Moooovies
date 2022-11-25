import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import movieReducer from "./movie_reducer";

const rootReducer = combineReducers({
  userReducer,
  movieReducer
})

export default rootReducer