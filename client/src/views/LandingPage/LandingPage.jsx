import React,{useEffect} from 'react';
import axios from "axios";
import Base from '../../components/Styles/Base';

const LandingPage = () => {

  useEffect(() => {
    axios.get("/api/hello")
    .then(response => console.log(response))

  },[])

  return (
    <Base>
      <h1>시작 페이지</h1>
    </Base>
  );
};

export default LandingPage;