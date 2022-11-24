import React from 'react';
import axios from "axios";
import Base from '../../components/Styles/Base';
import { useNavigate } from 'react-router';

const LandingPage = () => {
  const navigate = useNavigate()

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
    <Base>
      <h1>시작 페이지</h1>

      <button onClick={handleLogout}>
        logout
      </button>
    </Base>
  );
};

export default LandingPage;