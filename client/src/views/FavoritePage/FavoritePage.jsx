import React,{useState,useEffect,useMemo} from 'react';
import styled from 'styled-components';
import Nav from '../../components/NavComponent/Nav';
import axios from 'axios';
import {IMAGE_BASE_URL} from "../../Config"


const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorMovie()
  }, [])

  const fetchFavorMovie = ()=> {
    axios.post('api/favorite/getFavoritedMovie', {userId : localStorage.getItem("userId")})
    .then(response => {
      if(response.data.success) {
        setFavorites(response.data.favorites)
      } else {
        alert ("영화정보를 가져오는데 실패했습니다.")
      }
    })
  }

  const handleDelete = (movieId , userId) => {
    let variable = {
      movieId,
      userId
    }

    axios.post("/api/favorite/removeFromFavorite", variable)
    .then(response => {
      if(response.data.success) {
        fetchFavorMovie()
      }else {
        alert("리스트에서 지우는데 실파했습니다아아아아아아아!!")
      }
    })
  }

  console.log("favorites",favorites)
  return (
    <Base>
      <Nav/>

      <h2>Favorite Movie</h2>
      <hr/>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
        {
          favorites && favorites.map((item, idx) => {
            const createDay = new Date(item.createdAt)
            const getDate = {
              year : createDay.getFullYear(),
              month : createDay.getMonth() + 1,
              date: createDay.getDate()
            }
            const {year, month, date} = getDate
            return (
              <div key={idx} style={style}>
                <img src={`${IMAGE_BASE_URL}w300${item.moviePost}`} alt="poster"/>
                <div style={{position:"absolute", bottom:"40px" , left: "5px", color : "#fff"}}>{`개봉일 : ${year}년 ${month}월 ${date}일`}</div>
                <button onClick={() => handleDelete(item.movieId, window.localStorage.getItem("userId"))}style={{border:"none", backgroundColor:'transparent', padding: "10px"}}>Remove</button>
              </div>
            )
          })
        }
      </div>

    </Base>
  );
};

export default FavoritePage;

const style = {
  border: "1px solid black",
  display: "flex",
  flexDirection : "column",
  marginRight: "15px",
  position:"relative",
  marginBottom:"15px",
}

const Base = styled("div")`

`;