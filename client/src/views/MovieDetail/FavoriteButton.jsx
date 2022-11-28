import React,{useState,useEffect,useCallback, useMemo} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux"
import {getUserFavoriteCount, getFavorited,isFavorited,favoriteCountDown,favoriteCountUp} from "../../action/movie/movie_action"
import axios from 'axios';

const FavoriteButton = ({movieId,movieDetail}) => {
  const dispatch = useDispatch()
  const userId = window.localStorage.getItem("userId")
  const {title, backdrop_path:moviePost, runtime} = movieDetail;
  const variables = useMemo(() => {
    return {
      userId,
      movieId,
      title,
      moviePost,
      runtime
    }
  },[movieId,userId,title,moviePost,runtime]);

  const favorites = useSelector(state => state.movieReducer);
  const {favoriteCount, favorited} = favorites;

  console.log("redux",favorites)
  const getFavoriteNumber  = useCallback(() => {
    axios.post("/api/favorite/favoriteNumber" , variables)
    .then(response => {
      if(response.data.success) {
        dispatch(getUserFavoriteCount(response.data.favoriteNumber))
      }else {
        alert("숫자 정보를 가져오는데 실패했습니다.")
      }
    })
  },[dispatch,variables])

  const getUserFavorited = useCallback(() => {
    axios.post("/api/favorite/favorited" , variables)
    .then(response => {
      if(response.data.success) {
        dispatch(getFavorited(response.data.favorited))
      }else {
        alert("정보를 가져오는데 실패했습니다.")
      }
    })
  },[dispatch,variables])


  const toggleFavoriteButton = useCallback(() => {
    if(favorited) {
      axios.post("/api/favorite/removeFromFavorite" , variables)
      .then(response => {
        if(response.data.success) {
          dispatch(favoriteCountDown())
          dispatch(isFavorited())

        }else {
          alert("Favorite 리스트에서 지우는 걸 실패했습니다.")
        }
      })
    } else {
      axios.post("/api/favorite/addToFavorite" , variables)
      .then(response => {
        if(response.data.success) {
          dispatch(favoriteCountUp())
          dispatch(isFavorited())
        }else {
          alert("Favorite 리스트에서 추가하기를 실패 했습니다.")
        }
      })
    }
  },[favorited,variables,dispatch])


  useEffect(() => {
    getFavoriteNumber(variables)
    getUserFavorited(variables)
  },[getFavoriteNumber,getUserFavorited,variables])


  return (
    <GetUserFavorite>
      <button onClick={toggleFavoriteButton} >{favorited ? "좋아요 취소" : "좋아요"} {favoriteCount} </button>
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

