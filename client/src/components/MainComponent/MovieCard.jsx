import React from 'react';
import styled from 'styled-components';
import { IMAGE_BASE_URL } from '../../Config';
import {useNavigate} from "react-router-dom"

const ImageContainer = styled("div")`
  margin: 10px auto;
`;
const Image = styled("img")`
  object-fit: cover;
`;

const MovieCard = ({poster}) => {
  const navigate = useNavigate()
  return (
    <ImageContainer onClick={() => navigate(`/movie/${poster?.id}`)}>
      <Image src={`${IMAGE_BASE_URL}w300${poster?.poster_path}`}/>
    </ImageContainer>
  )
}

export default MovieCard

