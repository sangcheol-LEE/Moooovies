import React,{useState, useEffect,useRef,useMemo,useCallback} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styled from 'styled-components';
import Nav from '../../components/NavComponent/Nav';
import { getPopularMovie,getLoadMore} from '../../action/movie/movie_action';
import MainImage from '../../components/MainComponent/MainImage';
import MoviePosters from '../../components/MainComponent/MoviePosters';


const LandingPage = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(2);
  const [count, setCount] = useState(0)
  const countRef = useRef(0);

  useEffect(() => {
    setInterval(() => {
      if(countRef.current === 21) return setCount((countRef.current = 0))
        setCount((countRef.current += 1))
      }, 3000);
    return () => {
      setCount(countRef.current = 0)
    }
  },[])

  useEffect(() => {
    dispatch(getPopularMovie())
  },[dispatch])


  const setLoadMore = useCallback(() => {
      dispatch(getLoadMore(id))
      setId(id + 1)
  },[dispatch,id])

  const popularMovies = useSelector((state) => state.movieReducer.popular)
  const mainMovie = useMemo(() => {
    const ex = {};
    if(popularMovies) {
      const first = popularMovies[count];
      ex.backdrop_path = first?.backdrop_path;
      ex.title = first?.title;
      ex.overview = first?.overview;
    }
    return ex ? ex : {}
  },[popularMovies,count])

  // relative와 absolute는 부모자식 간에 해상도에 맞게 고정되어 움직임.. 참고하도록

  // 메인 이미지 구간 캐러셀 기능 구현해보기

  return (
    <>
      <Nav/>
      <MovieContainer>
        <MainImage mainMovie={mainMovie}/>

        <MoviePosters popularMovies={popularMovies}/>

        <LoadMoreContainer>
          <LoadMore onClick={setLoadMore}>Load More</LoadMore>
        </LoadMoreContainer>

      </MovieContainer>
    </>
  );
};

export default LandingPage;

const MovieContainer = styled("div")`
`;

const LoadMoreContainer = styled("div")`
  display:flex;
  justify-content:center;
  width:100%;

`;
const LoadMore = styled("button")`
  width: 100%;
  border: none;
  padding : 20px 50px;
  color: #000;
  background: transparent;
  font-size: 50px;
  cursor: pointer;
`;