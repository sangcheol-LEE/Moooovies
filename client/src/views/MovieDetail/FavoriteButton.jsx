import React,{useEffect,useCallback} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux"
import {getUserFavoriteCount, getFavorited} from "../../action/movie/movie_action"
import axios from 'axios';

const FavoriteButton = ({movieId,movieDetail}) => {
  const dispatch = useDispatch()
  const userId = window.localStorage.getItem("userId")

  // const {title, backdrop_path:moviePost, runtime} = movieDetail;

  const getFavoriteNumber  = useCallback((variables) => {
    axios.post("/api/favorite/favoriteNumber" , variables)
    .then(response => {
      if(response.data.success) {
        dispatch(getUserFavoriteCount(response.data.favoriteNumber))
      }else {
        alert("숫자 정보를 가져오는데 실패했습니다.")
      }
    })
  },[dispatch])

  const getUserFavorited = useCallback((variables) => {
    axios.post("/api/favorite/favorited" , variables)
    .then(response => {
      if(response.data.success) {
        dispatch(getFavorited(response.data.favorited))
      }else {
        alert("정보를 가져오는데 실패했습니다.")
      }
    })
  },[dispatch])

  useEffect(() => {
    let variables = {
      userId,
      movieId
    }
    getFavoriteNumber(variables)
    getUserFavorited(variables)
  },[getFavoriteNumber,getUserFavorited,movieId,userId])


  const favorites = useSelector(state => state.movieReducer)
  const {favoriteCount, favorited} = favorites;

  return (
    <GetUserFavorite>
      <button>{favorited ? "좋아요 취소" : "좋아요"} {favoriteCount} </button>
    </GetUserFavorite>
  );
};

export default FavoriteButton;


const GetUserFavorite = styled("div")`
  display : flex;
  justify-content: flex-end;
  button {
    border: 1 px solid green;
    background-color:transparent;
    padding : 5px;
  }
`;

