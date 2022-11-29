import React,{useState,useEffect} from 'react';
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
            return (
              <div key={idx} style={{display: "flex", position:"relative", marginBottom:"15px"}}>
                <img src={`${IMAGE_BASE_URL}w300${item.moviePost}`} alt="poster" />
                <div style={{position:"absolute", bottom:"5px" , left: "5px", color : "#fff"}}>{`개봉일 : ${item.createdAt}`}</div>
                <button onClick={() => handleDelete(item.movieId, window.localStorage.getItem("userId"))}style={{border:"1px solid rgba(0,0,0,0.3)", backgroundColor:'transparent'}}>Remove</button>
              </div>
            )
          })
        }
      </div>

    </Base>
  );
};

export default FavoritePage;

const Base = styled("div")`

`;