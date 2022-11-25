import React,{useState, useEffect, useMemo} from 'react';
import axios from "axios";
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Nav from '../../components/NavComponent/Nav';
import { getPopularMovie } from '../../action/movie/movie_action';
import MainImage from '../../components/MainComponent/MainImage';
import MoviePosters from '../../components/MainComponent/MoviePosters';


const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovie())
  },[])


  const handleLogout = () => {
    axios.get("/api/users/logout")
    .then(response => {
        if(response.data.success) {
          navigate('/login')
        }else {
          alert("로그아웃 실패")
        }
    } )
  }

  const popularMovies = useSelector((state) => state.movieReducer.popular)
  const mainMovie = useMemo(() => {
    const ex = {};
    if(popularMovies) {
      const first = popularMovies[0];
      ex.backdrop_path = first?.backdrop_path;
      ex.title = first?.title;
      ex.overview = first?.overview;
    }
    return ex ? ex : {}
  },[popularMovies])

  // relative와 absolute는 부모자식 간에 해상도에 맞게 고정되어 움직임.. 참고하도록

  // 메인 이미지 구간 캐러셀 기능 구현해보기

  return (
    <>
      <Nav handleLogout={handleLogout}/>
      <MovieContainer>
        <MainImage mainMovie={mainMovie}/>

        <MoviePosters popularMovies={popularMovies}/>
      </MovieContainer>
    </>
  );
};

export default LandingPage;

const MovieContainer = styled("div")``;

