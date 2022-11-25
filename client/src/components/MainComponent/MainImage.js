import React,{useMemo} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {IMAGE_BASE_URL} from "../../Config"


const MainImage = () => {
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

  const {backdrop_path,title,overview} = mainMovie
  // relative와 absolute는 부모자식 간에 해상도에 맞게 고정되어 움직임.. 참고하도록
  return (
    {backdrop_path} && (
      <>
        <ImageContinaer>
          <Image src={`${IMAGE_BASE_URL}w1280${backdrop_path}`}/>

          <TextContainer>
            <h2>{title}</h2>
            <p>{overview}</p>
        </TextContainer>
        </ImageContinaer>
      </>
    )
  );
};

export default MainImage;

const ImageContinaer = styled("div")`
  position:relative;
  width:100%;
  margin: 0;

`;
const Image = styled("img")`
  width:100%;
`;


const TextContainer = styled("div")`
  max-width: 500px;
  position: absolute;
  color : #fff;
  bottom: 2rem;
  left:2rem;
  p{
    font-size: 1rem;
  }
`;