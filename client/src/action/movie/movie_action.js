import axios from "axios";
import { GET_POPULAR_MOVIE } from "./movie_type";
import { API_KEY,API_URL } from "../../Config";

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
    console.log(e)
  }
}
