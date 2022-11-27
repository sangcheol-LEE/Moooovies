import React,{useState,useEffect,useCallback} from 'react';
import styled from "styled-components";
import { useDispatch ,useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetail,getMovieCrew } from '../../action/movie/movie_action';
import Nav from '../../components/NavComponent/Nav';
import axios from 'axios';
import { useNavigate } from 'react-router';
import MainImage from '../../components/MainComponent/MainImage';
import MovieDetailCrew from './MovieDetailCrew';
import FavoriteButton from './FavoriteButton';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [toggleMovieCrew, setToggleMovieCrew] = useState(false)
  useEffect(() => {
    dispatch(getMovieDetail(params.id))
    dispatch(getMovieCrew(params.id))
  },[dispatch,params])

  const detail = useSelector(state => state.movieReducer);
  const handleLogout = useCallback(() => {
    axios.get("/api/users/logout")
    .then(response => {
        if(response.data.success) {
          navigate('/login')
        }else {
          alert("로그아웃 실패")
        }
    })
  },[navigate])

  return (
    <>
      <Nav handleLogout={handleLogout}/>
      <Base>
        <MainImage mainMovie={detail.movieDetail}/>

        {
          detail?.movieDetail &&
            <FavoriteButton movieId={params.id} movieDetail={detail?.movieDetail}/>
        }
        <TitleBox>
          <h2 style={{color:"green"}}> 장르 </h2>
        </TitleBox>

        <div style={{marginLeft: "15px"}}>
        {
          detail?.movieDetail && detail?.movieDetail?.genres?.map((item,idx) => {
          return (<span style={{marginRight : "10px",fontWeight:"bold"}} key={idx}>{item.name}</span>)
          })
        }
        </div>
        <TitleBox>
          <h2 style={{color:"green"}}> 출연진 <Button onClick={() =>setToggleMovieCrew(!toggleMovieCrew) }>더보기</Button></h2>
        </TitleBox>
        {
          toggleMovieCrew &&
          <div style={{marginTop: "10px", display:"grid",gridTemplateColumns: "repeat(4,1fr)"}}>
            {
              detail?.movieCrew && detail?.movieCrew?.cast?.map((item, idx) => {
                return <MovieDetailCrew movieCrew={item} key={idx}/>
              })
            }
          </div>
        }
      </Base>
    </>
  );
};

export default MovieDetail;

const Base = styled("div")``;

const TitleBox = styled("div")`
h2{
  padding : 0 10px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  padding-bottom : 5px;
}
`;

const Button = styled("button")`
  border :none;
  background-color:transparent;
  cursor: pointer;
`;

