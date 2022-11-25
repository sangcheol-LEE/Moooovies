import React,{useState, useEffect, useMemo} from 'react';
import axios from "axios";
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Nav from '../../components/NavComponent/Nav';
import { getPopularMovie } from '../../action/movie/movie_action';
import MainImage from '../../components/MainComponent/MainImage';

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

  return (
    <>
      <Nav/>
      <div>
        <MainImage />
      </div>
    </>
  );
};

export default LandingPage;